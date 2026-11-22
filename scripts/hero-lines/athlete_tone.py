# Athlètes des en-têtes des pages de référence (22/11) : même rendu que la vidéo du hero de l'accueil.
# On exporte ici le TON de l'athlète (blanc, alpha = noirceur de la photo : vêtements sombres = plein, peau = moyen),
# sans lignes ; les lignes fines et régulières (pas de 5 px, 2,4 px de trait, comme hero-scan.mp4 affichée) sont posées
# en CSS par un second masque (src/components/site/Site.tsx → ScanBg), donc nettes quelle que soit la taille.
#   python athlete_tone.py <dossier des images> <dossier de sortie> 092-A:spin 106-A:basketball ...
import sys, os
import numpy as np
from PIL import Image
from scipy import ndimage as ni

src_dir, out_dir = sys.argv[1], sys.argv[2]
os.makedirs(out_dir, exist_ok=True)
W = 900
for pair in sys.argv[3:]:
    src, name, *rest = pair.split(":")
    trim = float(rest[0]) if rest else 0.0  # part du bas retirée (bande de sol)
    im = Image.open(os.path.join(src_dir, src + ".png")).convert("L")
    H = round(W * im.height / im.width)
    g = np.asarray(im.resize((W, H), Image.LANCZOS), np.float32)
    # fond clair estimé sous le sujet (fermeture large puis flou) : les dégradés du studio disparaissent
    # fond du studio : surface lisse (polynôme de degré 2) ajustée sur les pixels clairs, en 3 passes
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    xn, yn = xx / W, yy / H
    A = np.stack([np.ones_like(xn), xn, yn, xn * xn, yn * yn, xn * yn], -1).reshape(-1, 6)
    m = (g > np.percentile(g, 55)).reshape(-1)
    for _ in range(3):
        coef, *_ = np.linalg.lstsq(A[m][::7], g.reshape(-1)[m][::7], rcond=None)
        bg = (A @ coef).reshape(H, W)
        m = (g > bg - 10).reshape(-1)
    d = np.clip((bg - g - 14) / np.maximum(bg - 22, 40), 0, 1)
    d = ni.gaussian_filter(d, 0.8) ** 0.85
    d[d < 0.06] = 0
    # sol et ombres portées : on garde seulement les grandes masses reliées (le corps)
    lab, n = ni.label(d > 0.18)
    if n:
        sizes = ni.sum(np.ones_like(d), lab, range(1, n + 1))
        keep = np.isin(lab, 1 + np.where(sizes > 0.02 * sizes.max())[0])
        keep = ni.binary_dilation(keep, iterations=6)
        d *= keep
    # bas de l'image (sol, ombres portées) : seulement les tons francs (pieds, pneus)
    ys0 = np.where(d.max(1) > 0.3)[0]
    yb = int(ys0.max() - 0.2 * (ys0.max() - ys0.min()))
    low = d[yb:]; low[low < 0.72] = 0
    ys, xs = np.where(d > 0.05)
    y0, y1, x0, x1 = max(0, ys.min() - 4), min(H, ys.max() + 5), max(0, xs.min() - 4), min(W, xs.max() + 5)
    y1 = int(y1 - trim * (y1 - y0))
    a = (d[y0:y1, x0:x1] * 255).astype(np.uint8)
    out = Image.merge("LA", (Image.new("L", (a.shape[1], a.shape[0]), 255), Image.fromarray(a))).convert("RGBA")
    out.save(os.path.join(out_dir, name + ".webp"), quality=88, method=6)
    print(f'  "{name}": {{ w: {a.shape[1]}, h: {a.shape[0]} }},')
