"""Écran PLEIN du téléphone « Soir de combat » : comme une capture vidéo de l'écran Match pendant le round final.

- en haut : barre d'état + île du cadre (public/screens/phone-fight.png, voir phone.py) ;
- puis l'en-tête réel du Match (« Match • LIVE », « ROUND FINAL », avatars, rangs, cartes) tiré de la capture
  budyfit/store-assets/shots-2026-11-17/en/fn-24.png (Android, 17/11) ;
- puis la zone de combat animée (MotionDesign/04_Site/match-live.mp4, rendu actuel), à la largeur de l'écran ;
- en bas : la barre d'onglets de l'app (celle de la capture de la version en ligne, master:public/screens/screenmatch.png).

Sortie : public/videos/match-screen.mp4 (550 × 1236) ; le site la pose sur l'écran du cadre (FightNight.tsx).
Usage : python scripts/fight-night-video/screen.py
"""
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
LIVE = Path("C:/Users/guill/Desktop/Attax/MotionDesign/04_Site/match-live.mp4")
CAP = Path("C:/Users/guill/budyfit/store-assets/shots-2026-11-17/en/fn-24.png")
SX0, SY0, SX1, SY1 = 170, 295, 1270, 2765        # l'écran dans le cadre 1440 × 2960
SW, SH = SX1 - SX0, SY1 - SY0                     # 1100 × 2470
OUT_W, OUT_H = 550, 1236
BG = np.array([237, 240, 247], np.uint8)

frame = np.asarray(Image.open(ROOT / "public" / "screens" / "phone-fight.png").convert("RGB"))
base = frame[SY0:SY1, SX0:SX1].copy()

# en-tête réel (sous la barre d'état Android, jusqu'au-dessus des barres de PV)
cap = Image.open(CAP).convert("RGB")
head = cap.crop((0, 84, 1080, 880))
head = np.asarray(head.resize((SW, round(head.height * SW / 1080)), Image.LANCZOS))
HEAD_Y = 190
base[HEAD_Y:HEAD_Y + head.shape[0]] = head
LIVE_Y = HEAD_Y + head.shape[0]

# barre d'onglets de l'app (version en ligne) : on ne garde que la pilule blanche (masque arrondi) + une ombre douce
master = subprocess.run(["git", "show", "master:public/screens/screenmatch.png"], cwd=ROOT, capture_output=True, check=True).stdout
tmp = ROOT / "scripts" / "fight-night-video" / "_m.png"; tmp.write_bytes(master)
tabsrc = np.asarray(Image.open(tmp).convert("RGB"))[2440:2720, SX0:SX1].copy(); tmp.unlink()
py0, py1, px0, px1 = 40, 214, 114, 988                # la pilule dans la capture de la version en ligne (relevé à l'œil)
from PIL import ImageDraw, ImageFilter
# pilule seule, remise à l'échelle comme dans les captures stores : ~82 % de la largeur, marges égales,
# posée au-dessus du bas arrondi de l'écran, ombre douce
pill_img = Image.fromarray(tabsrc[py0:py1 + 1, px0:px1 + 1])
# coins de la capture d'origine hors de la pilule : remplacés par du blanc (le masque arrondi les recoupe)
PW = round(SW * 0.78); PH = round(pill_img.height * PW / pill_img.width)
pill_img = pill_img.resize((PW, PH), Image.LANCZOS)
PAD = 40
TW, TH = PW + 2 * PAD, PH + 2 * PAD
mask = Image.new("L", (TW, TH), 0)
ImageDraw.Draw(mask).rounded_rectangle((PAD, PAD, PAD + PW - 1, PAD + PH - 1), radius=PH // 2, fill=255)
shadow = Image.new("L", (TW, TH), 0)
ImageDraw.Draw(shadow).rounded_rectangle((PAD + 8, PAD + 6, PAD + PW - 9, PAD + PH + 5), radius=PH // 2, fill=255)
shadow = shadow.filter(ImageFilter.GaussianBlur(14))
TAB = np.zeros((TH, TW, 3), np.float32); TAB[PAD:PAD + PH, PAD:PAD + PW] = np.asarray(pill_img, np.float32)
TAB_PILL = np.asarray(mask, np.float32)[..., None] / 255
TAB_SHADOW = np.asarray(shadow, np.float32)[..., None] / 255 * 0.07
TAB_X = (SW - TW) // 2
TAB_Y = SH - 52 - PAD - PH                             # bas de la pilule à 52 px du bas de l'écran
FADE_TOP, FADE_BOT = TAB_Y + PAD - 40, TAB_Y + PAD + PH // 2    # fond uni sous la pilule (le combat s'arrête au-dessus)

def draw_tab(img):
    f = img.astype(np.float32)
    # fondu du contenu vers le fond de l'écran sous la pilule
    ramp = np.clip((np.arange(SH) - FADE_TOP) / max(1, FADE_BOT - FADE_TOP), 0, 1)[:, None, None]
    f = f * (1 - ramp) + BG.astype(np.float32) * ramp
    zone = f[TAB_Y:TAB_Y + TH, TAB_X:TAB_X + TW]
    zone = zone * (1 - TAB_SHADOW)
    zone = zone * (1 - TAB_PILL) + TAB * TAB_PILL
    f[TAB_Y:TAB_Y + TH, TAB_X:TAB_X + TW] = zone
    img[:] = np.clip(f, 0, 255).astype(np.uint8)

LIVE_CROP = 1000   # 20/11 : jusqu'à « AT STAKE / ROUND STATUS », comme l'écran réel (pas de barre d'onglets pendant la révélation)
_OLD_CROP = 878                                     # match-live 810 × 1110 : jusqu'à la ligne de commentaire (« JOHNNY unleashes a flurry. »)
# 20/11 : une vraie marge en bas (le bas arrondi de l'écran ne mord plus « At stake / Round status » ni les « + ») :
# le combat est mis à l'échelle pour finir BOTTOM_GAP px au-dessus du bas de l'écran, centré.
BOTTOM_GAP = 230
lh = SH - BOTTOM_GAP - LIVE_Y; lw = round(lh * 810 / LIVE_CROP)
LIVE_X = (SW - lw) // 2
dec = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-i", str(LIVE), "-vf", f"crop=810:{LIVE_CROP}:0:0,scale={lw}:{lh}",
                        "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
enc = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{OUT_W}x{OUT_H}",
                        "-r", "30", "-i", "-", "-c:v", "libx264", "-crf", "21", "-preset", "slow", "-pix_fmt", "yuv420p",
                        "-movflags", "+faststart", "-an", str(ROOT / "public" / "videos" / "match-screen.mp4")], stdin=subprocess.PIPE)
n = lw * lh * 3
first = None
while True:
    buf = dec.stdout.read(n)
    if len(buf) < n:
        break
    img = base.copy()
    live = np.frombuffer(buf, np.uint8).reshape(lh, lw, 3)
    h = min(lh, SH - LIVE_Y)
    img[LIVE_Y:LIVE_Y + h, LIVE_X:LIVE_X + lw] = live[:h]
    # 20/11 (gui : « le bas est encore cata ») : plus de barre d'onglets, l'écran du Soir de combat est plein écran dans l'app
    out = Image.fromarray(img).resize((OUT_W, OUT_H), Image.LANCZOS)
    if first is None:
        first = out
    enc.stdin.write(out.tobytes())
enc.stdin.close(); enc.wait()
first.save(ROOT / "public" / "videos" / "match-screen-poster.jpg", quality=88)
print("live", LIVE_Y, LIVE_Y + lh, "pill", TAB_Y + PAD, TAB_Y + PAD + PH, "screen", SW, SH)
