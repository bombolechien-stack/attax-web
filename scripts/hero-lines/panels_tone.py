# Panneaux « Every sport counts » (public/scan/panels/*.webp) en scanlines « au ton », depuis les PHOTOS d'origine
# (Desktop/Attax/socials/_kit/build/img), même cadrage que scan-athletes/final.json (zoom, fx, fy, under) et même
# rendu que la vidéo du hero (heroscan_tone.py) : lignes arrondies, effilées, épaisseur = noirceur.
#   python panels_tone.py <final.json> <dossier img> <dossier sortie>
import json, os, sys
import numpy as np
from PIL import Image
from scipy import ndimage as ni

W, H, STEP, MAXF, GAMMA, MINT = 520, 780, 8, 0.58, 1.5, 0.8
INK = np.array([11, 17, 22], np.float32)          # encre de l'app
BGC = np.array([238, 241, 247], np.float32)       # fond des captures de l'app (#EEF1F7)


def frame(src, it):
    im = Image.open(src).convert("RGBA")
    under = Image.new("RGBA", im.size, it.get("under", "#ffffff"))
    im = Image.alpha_composite(under, im).convert("L")
    zoom = it.get("zoom", 1); s = max(W / im.width, H / im.height) * zoom
    dw, dh = round(im.width * s), round(im.height * s)
    im = im.resize((dw, dh), Image.LANCZOS)
    canvas = Image.new("L", (W, H), 255)
    canvas.paste(im, (round((W - dw) * it.get("fx", 0.5)), round((H - dh) * it.get("fy", 0.5))))
    return np.asarray(canvas).astype(np.float32)


def lines(g):
    l0 = g + 0.6 * (g - ni.gaussian_filter(g, 4))
    l = ni.gaussian_filter(l0, sigma=(STEP * 0.35, 1.2))
    bg = np.percentile(l, 96); dk = np.percentile(l, 1)
    d = np.clip((bg - 10 - l) / max(1, bg - 10 - dk), 0, 1) ** GAMMA
    tmax = STEP * MAXF
    cov = np.zeros((H, W), np.float32)
    ys = np.arange(H, dtype=np.float32)[:, None] + 0.5
    for yc in np.arange(STEP / 2, H, STEP):
        t = d[int(yc)] * tmax
        y0, y1 = int(max(0, yc - tmax)), int(min(H, yc + tmax + 1))
        c = np.clip(t[None, :] / 2 - np.abs(ys[y0:y1] - yc) + 0.5, 0, 1)
        c[:, t < MINT] = 0
        cov[y0:y1] = np.maximum(cov[y0:y1], c)
    c = cov[..., None]
    return (BGC * (1 - c) + INK * c).clip(0, 255).astype(np.uint8)


if __name__ == "__main__":
    lst, imgdir, out = sys.argv[1:4]
    for it in json.load(open(lst, encoding="utf8")):
        src = os.path.join(imgdir, it["src"] + ".png")
        if not os.path.exists(src):
            print("absent", src); continue
        Image.fromarray(lines(frame(src, it))).save(os.path.join(out, it["name"] + ".webp"), quality=92)
        print("ok", it["name"])
