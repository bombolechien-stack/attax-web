# Hero du site en scanlines « au ton » (18/11) : lignes horizontales régulières, bouts arrondis et effilés, couleur unie
# bleu Attax sur fond blanc ; l'ÉPAISSEUR de chaque ligne suit la noirceur de l'image (vêtements sombres = lignes
# pleines, peau = moyennes, traînées = fines). Remplace le rendu « silhouette pleine » qui fondait les 3 sportifs en
# une seule tache dès qu'ils se chevauchaient.
#   python heroscan_tone.py <source.mp4> hero_lines.mkv
#   ffmpeg -i hero_lines.mkv -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -movflags +faststart -an hero-lines.mp4
#   ffmpeg -i hero_lines.mkv -c:v libvpx-vp9 -b:v 0 -crf 33 -row-mt 1 -pix_fmt yuv420p -an hero-lines.webm
#   ffmpeg -ss 2 -i hero-lines.mp4 -frames:v 1 -q:v 3 hero-lines-poster.jpg
import os, sys, subprocess
import numpy as np
from scipy import ndimage as ni

E = lambda k, d: float(os.environ.get(k, d))
W, H = 1920, 1080
STEP = E("STEP", 9)          # pas des lignes (px à 1080p)
MAXF = E("MAXF", 0.58)       # épaisseur max = 58 % du pas (lignes séparées, comme l'app)
GAMMA = E("GAMMA", 1.7)      # courbe du ton (plus haut = tons moyens plus fins)
BG, DARK, BGOFF = E("BG", 247), E("DARK", 18), E("BGOFF", 13)
MINT = E("MINT", 1.0)        # en dessous de cette épaisseur (px), pas de trait (pas de poussière)
XOFF = int(E("XOFF", 330))   # sujets décalés à droite (le texte du hero est à gauche)
BLUE = np.array([4, 67, 253], np.float32)


def frame_lines(g):
    l0 = g.astype(np.float32)
    l0 = l0 + 0.8 * (l0 - ni.gaussian_filter(l0, 6))                 # un peu de netteté : les corps se séparent
    l = ni.gaussian_filter(l0, sigma=(STEP * 0.35, 1.6))
    d = np.clip((BG - BGOFF - l) / (BG - BGOFF - DARK), 0, 1) ** GAMMA
    tmax = STEP * MAXF
    cov = np.zeros((H, W), np.float32)
    ys = np.arange(H, dtype=np.float32)[:, None] + 0.5
    for yc in np.arange(STEP / 2, H, STEP):
        t = d[int(yc)] * tmax
        y0, y1 = int(max(0, yc - tmax)), int(min(H, yc + tmax + 1))
        c = np.clip(t[None, :] / 2 - np.abs(ys[y0:y1] - yc) + 0.5, 0, 1)
        c[:, t < MINT] = 0
        cov[y0:y1] = np.maximum(cov[y0:y1], c)
    out = np.zeros_like(cov)
    if XOFF >= 0: out[:, XOFF:] = cov[:, :W - XOFF]
    else: out[:, :XOFF] = cov[:, -XOFF:]
    c = out[..., None]
    return (255 * (1 - c) + BLUE * c).clip(0, 255).astype(np.uint8)


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    if src.endswith(".png"):
        from PIL import Image
        Image.fromarray(frame_lines(np.asarray(Image.open(src).convert("L")))).save(dst); sys.exit()
    rd = subprocess.Popen(["ffmpeg", "-v", "error", "-i", src, "-f", "rawvideo", "-pix_fmt", "gray", "-"], stdout=subprocess.PIPE)
    wr = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", "24", "-i", "-",
                           "-c:v", "ffv1", dst], stdin=subprocess.PIPE)
    k = 0
    while True:
        buf = rd.stdout.read(W * H)
        if len(buf) < W * H: break
        wr.stdin.write(frame_lines(np.frombuffer(buf, np.uint8).reshape(H, W)).tobytes()); k += 1
        if k % 48 == 0: print("frame", k, flush=True)
    wr.stdin.close(); wr.wait(); print("done", k)
