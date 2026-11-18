# Re-trace les silhouettes en scanlines du site (panneaux « Tous les sports comptent » et athlètes des héros)
# avec le dessin des boxeurs de l'app (budyfit/scripts/lines_like_app.py) : lignes régulières, épaisseur selon la
# profondeur dans la silhouette (effilées aux bords, pleines au centre), au plus 10 points d'épaisseur par ligne.
#   python relines.py panel <entrée.webp> <sortie.webp>   → lignes encre sur fond clair (520×780)
#   python relines.py mask  <entrée.webp> <sortie.webp>   → lignes blanches sur transparent (masque CSS)
import sys
import numpy as np
from PIL import Image
from scipy import ndimage as ni

MAX_PTS, SUB, MIN_SEG = 10, 3, 4
INK = np.array([11, 17, 22], float)       # #0B1116, l'encre de l'app
PANEL_BG = np.array([238, 241, 247], float)  # #EEF1F7, le fond des captures de l'app


def silhouette(on, vgap):
    m = ni.binary_closing(on, structure=np.ones((vgap, 1), bool), iterations=1)
    m = ni.binary_closing(m, structure=np.ones((3, 3), bool))
    holes = ni.binary_fill_holes(m) & ~m
    hl, hn = ni.label(holes)
    if hn:
        hs = ni.sum(holes, hl, range(1, hn + 1))
        small = np.zeros(hn + 1, bool); small[1:] = hs < 400
        m |= small[hl]
    return m


def draw(mask, step, max_t, floor, scale, ss=3):
    H, W = mask.shape
    depth = ni.distance_transform_edt(ni.binary_dilation(mask, structure=np.ones((5, 1), bool)))
    cov = np.zeros((H * ss, W), np.float32)
    for y in range(step // 2, H, step):
        lab, n = ni.label(mask[y])
        for j in range(1, n + 1):
            xs = np.where(lab == j)[0]
            if len(xs) < MIN_SEG:
                continue
            a, b = int(xs[0]), int(xs[-1])
            N = max(2, int(np.ceil((b - a) / SUB)) + 1)
            px = np.round(a + np.arange(N) * (b - a) / (N - 1)).astype(int)
            d = depth[y, px]
            th = floor + np.where(d <= 0, 0, 1 - np.exp(-d / scale)) * (max_t - floor)
            U = min(N, MAX_PTS)
            idx = np.round(np.arange(U) * (N - 1) / (U - 1)).astype(int)
            ux = a + np.arange(U) * (b - a) / (U - 1)
            half = np.interp(np.arange(a, b + 1), ux, th[idx]) / 2 * ss
            yc = (y + 0.5) * ss
            for yy in range(int(yc - max_t * ss), int(yc + max_t * ss) + 1):
                if 0 <= yy < H * ss:
                    c = np.clip(half - abs(yy + 0.5 - yc) + 0.5, 0, 1)
                    cov[yy, a:b + 1] = np.maximum(cov[yy, a:b + 1], c)
    return cov.reshape(H, ss, W).mean(1)


if __name__ == "__main__":
    mode, src, dst = sys.argv[1:4]
    im = Image.open(src)
    if mode == "panel":
        a = np.asarray(im.convert("L")).astype(float)
        mask = silhouette(a < 150, 7)
        # 8 px de pas pour une image affichée à 50 % (4 px à l'écran, comme le pas des boxeurs de l'app)
        cov = draw(mask, 8, 4.4, 0.35, 7.0)[..., None]
        out = PANEL_BG * (1 - cov) + INK * cov
        Image.fromarray(out.clip(0, 255).astype(np.uint8)).save(dst, quality=92)
    else:
        al = np.asarray(im.convert("RGBA"))[..., 3]
        mask = silhouette(al > 60, 15)
        cov = draw(mask, 13, 7.0, 0.5, 12.0)
        rgba = np.zeros(mask.shape + (4,), np.uint8)
        rgba[..., :3] = 255
        rgba[..., 3] = (cov * 255).clip(0, 255).astype(np.uint8)
        Image.fromarray(rgba).save(dst, quality=95)
    print("ok", dst)
