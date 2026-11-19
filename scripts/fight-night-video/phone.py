"""Téléphone du « Soir de combat » : le cadre de téléphone de la version en ligne (master : public/screens/screenmatch.png),
écran vidé (on ne garde que la barre d'état et l'île), au fond de l'app ; le combat (match-live.mp4, refait au rendu actuel
dans Desktop/Attax/MotionDesign/04_Site) est posé dessus par le site, aux coordonnées imprimées ici.

Sortie : public/screens/phone-fight.png (cadre) ; l écran est fait par screen.py
Usage : python scripts/fight-night-video/phone.py
"""
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC_VIDEO = Path("C:/Users/guill/Desktop/Attax/MotionDesign/04_Site/match-live.mp4")
frame = subprocess.run(["git", "show", "master:public/screens/screenmatch.png"], cwd=ROOT, capture_output=True, check=True).stdout
tmp = ROOT / "scripts" / "fight-night-video" / "_screenmatch.png"
tmp.write_bytes(frame)
im = np.asarray(Image.open(tmp).convert("RGBA")).copy()
tmp.unlink()
H, W = im.shape[:2]

# fond de l'écran de la vidéo (coin haut gauche d'une image de match-live)
raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-ss", "1", "-i", str(SRC_VIDEO), "-frames:v", "1",
                      "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], capture_output=True, check=True).stdout
vf = np.frombuffer(raw, np.uint8).reshape(1110, 810, 3)
BG = vf[1060:1100, 10:60].reshape(-1, 3).mean(0).round().astype(int)

# l'écran = pixels proches du fond d'origine (#F7FBFF) + tout ce qui est entre les bords noirs, ligne par ligne
SCREEN_BG = np.array([247, 251, 255])
rgb = im[..., :3].astype(int)
dark = (rgb.sum(-1) < 60) & (im[..., 3] > 200)
cx = W // 2
rows = []
for y in range(H):
    xs = np.where(dark[y, : cx])[0]
    xe = np.where(dark[y, cx:])[0]
    if len(xs) == 0 or len(xe) == 0:
        continue
    l, r = xs.max() + 1, cx + xe.min() - 1
    if r - l > W * 0.6:
        rows.append((y, l, r))
# rectangle de l'écran (lignes les plus larges) puis masque à coins arrondis : plus robuste que ligne à ligne
maxw = max(r - l for _, l, r in rows)
inner = [(y, l, r) for y, l, r in rows if r - l > maxw * 0.97]
top, bottom = inner[0][0], inner[-1][0]
L = min(l for _, l, _ in inner); R = max(r for _, _, r in inner)
RAD = int((R - L) * 0.13)
yy, xx = np.mgrid[0:H, 0:W]
def inside(y0, y1):
    m = (xx >= L) & (xx <= R) & (yy >= y0) & (yy <= y1)
    for cy_, cx_ in ((y0 + RAD, L + RAD), (y0 + RAD, R - RAD), (y1 - RAD, L + RAD), (y1 - RAD, R - RAD)):
        corner = ((yy < y0 + RAD) if cy_ == y0 + RAD else (yy > y1 - RAD)) & ((xx < L + RAD) if cx_ == L + RAD else (xx > R - RAD))
        m &= ~corner | ((yy - cy_) ** 2 + (xx - cx_) ** 2 <= RAD ** 2)
    return m
STATUS_END = int(H * 0.17)   # sous la barre d'état et l'île
screen = inside(top - RAD // 3, bottom + RAD // 3)
near = np.abs(rgb - SCREEN_BG).sum(-1) < 40
im[screen & (yy >= STATUS_END), :3] = BG
im[near & (im[..., 3] > 0), :3] = BG   # tout le fond d'origine (bandes du haut et du bas comprises)
# bas de l'écran (ombre de l'ancienne barre d'onglets) : on remplit jusqu'au bord noir, ligne par ligne
for y in range(bottom, min(H, bottom + 220)):
    row = im[y, :, :3].astype(int).sum(-1)
    l = cx
    while l > 0 and row[l] > 150: l -= 1
    r = cx
    while r < W - 1 and row[r] > 150: r += 1
    if r - l > W * 0.5:
        im[y, l + 1 : r, :3] = BG
inner = [(y, L, R) for y in (top, bottom)]
left = min(l for _, l, _ in inner); right = max(r for _, _, r in inner)
out = ROOT / "public" / "screens" / "phone-fight.png"
Image.fromarray(im).save(out, optimize=True)

# zone du combat : toute la largeur de l'écran (petite marge), centrée sous la barre d'état
sw = right - left
vw = sw * 0.96
vh = vw * 1110 / 810
vx = left + (sw - vw) / 2
vy = STATUS_END + ((bottom - STATUS_END) - vh) / 2
print("BG", BG, "screen", left, top, right, bottom)
print(f"left: {vx / W * 100:.3f}%  top: {vy / H * 100:.3f}%  width: {vw / W * 100:.3f}%  height: {vh / H * 100:.3f}%")

