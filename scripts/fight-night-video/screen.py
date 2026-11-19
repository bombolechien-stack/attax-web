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
white = (tabsrc.min(-1) >= 252)
ys, xs = np.where(white)
rows = np.where(white.sum(1) > white.shape[1] * 0.5)[0]
py0, py1 = rows.min(), rows.max()
cols = np.where(white[py0:py1].sum(0) > (py1 - py0) * 0.5)[0]
px0, px1 = cols.min(), cols.max()
from PIL import ImageDraw, ImageFilter
pill = Image.new("L", (SW, tabsrc.shape[0]), 0)
ImageDraw.Draw(pill).rounded_rectangle((px0, py0, px1, py1), radius=(py1 - py0) // 2, fill=255)
shadow = pill.filter(ImageFilter.GaussianBlur(18))
TAB_PILL = np.asarray(pill, np.float32)[..., None] / 255
TAB_SHADOW = np.asarray(shadow, np.float32)[..., None] / 255 * 0.10
TAB = tabsrc.astype(np.float32)
TAB_Y = SH - tabsrc.shape[0] - 10

def draw_tab(img):
    zone = img[TAB_Y:TAB_Y + TAB.shape[0]].astype(np.float32)
    zone = zone * (1 - TAB_SHADOW)                       # ombre
    zone = zone * (1 - TAB_PILL) + TAB * TAB_PILL        # pilule
    img[TAB_Y:TAB_Y + TAB.shape[0]] = np.clip(zone, 0, 255).astype(np.uint8)

LIVE_CROP = 1000                                    # match-live 810 × 1110 : on garde le haut (jusqu'au statut du round)
lw, lh = SW, round(LIVE_CROP * SW / 810)
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
    img[LIVE_Y:LIVE_Y + h] = live[:h]
    draw_tab(img)
    out = Image.fromarray(img).resize((OUT_W, OUT_H), Image.LANCZOS)
    if first is None:
        first = out
    enc.stdin.write(out.tobytes())
enc.stdin.close(); enc.wait()
first.save(ROOT / "public" / "videos" / "match-screen-poster.jpg", quality=88)
print("live", LIVE_Y, LIVE_Y + lh, "tab", TAB_Y, "screen", SW, SH)
