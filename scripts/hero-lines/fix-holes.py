# Hero de l'accueil (public/videos/hero-scan.mp4, version en ligne) : retire les « creux comblés » du détourage d'origine
# (le vide entre les bras levés du basketteur / de l'haltérophile, le tamis de la raquette rempli en disque, le visage de
# la joueuse de tennis quand la raquette passe devant). La vidéo en scanlines est exactement la source
# Downloads/Attax_Hero_1080p_final_5.mp4 (fond blanc) inversée, même minutage, décalée de 300 px vers la droite : partout
# où la source montre le FOND BLANC, la vidéo doit montrer le fond noir. On remplace ces pixels par une plaque de fond
# propre (médiane des images où le pixel est du fond), avec un bord adouci ; les images des transitions (glitch), qui ne
# correspondent pas à la source, ne sont pas touchées.
#   python -I scripts/hero-lines/fix-holes.py <hero-scan.mp4> <source.mp4> <sortie.mkv> [--report dossier]
import subprocess, sys, os
import numpy as np
import cv2

SCAN, SRC, OUT = sys.argv[1:4]
REPORT = sys.argv[sys.argv.index("--report") + 1] if "--report" in sys.argv else None
W, H, DX = 1920, 1080, 300
BG_T = 236          # source plus claire que ça (sur 255) = fond
MIN_FILL = 30       # écart de luminance scan / plaque au-dessus duquel un pixel « fond » est considéré comme rempli


def frames(path):
    c = cv2.VideoCapture(path)
    while True:
        ok, f = c.read()
        if not ok:
            return
        yield f


def shift(src):
    # source → repère de la vidéo en scanlines (décalage horizontal de +300 px, fond blanc à gauche)
    out = np.full_like(src, 255)
    out[:, DX:] = src[:, :W - DX]
    return out


scan = list(frames(SCAN)); src = [shift(f) for f in frames(SRC)]
n = min(len(scan), len(src))
print("frames", len(scan), len(src))

# 1. Les images qui correspondent à la source (hors transitions glitch)
def ncc(a, b):
    a = a - a.mean(); b = b - b.mean()
    return float((a * b).sum() / (np.sqrt((a * a).sum() * (b * b).sum()) + 1e-6))

good, bgm = [], []
for i in range(n):
    s = cv2.cvtColor(scan[i], cv2.COLOR_BGR2GRAY)
    g = cv2.cvtColor(src[i], cv2.COLOR_BGR2GRAY)
    a = cv2.resize(cv2.GaussianBlur(s, (0, 0), 4), (480, 270)).astype(np.float32)
    b = 255 - cv2.resize(cv2.GaussianBlur(g, (0, 0), 4), (480, 270)).astype(np.float32)
    good.append(ncc(a, b) > 0.96)
    bgm.append(cv2.GaussianBlur(g, (0, 0), 1.2) > BG_T)
print("frames alignées", sum(good), "/", n)

# 2. Plaque de fond propre : médiane, pour chaque pixel, des images où la source y montre du fond
stack = np.stack([scan[i] for i in range(0, n, 3) if good[i]]).astype(np.float32)
mstack = np.stack([bgm[i] for i in range(0, n, 3) if good[i]])
plate = np.zeros((H, W, 3), np.float32)
for y0 in range(0, H, 120):
    st = stack[:, y0:y0 + 120]; ms = mstack[:, y0:y0 + 120]
    v = np.where(ms[..., None], st, np.nan)
    med = np.nanmedian(v, axis=0)
    fallback = np.median(st, axis=0)
    plate[y0:y0 + 120] = np.where(np.isnan(med), fallback, med)
plate = cv2.GaussianBlur(plate, (0, 0), 1.0)

# 3. Remplacement : pixels « fond » de la source qui sont remplis dans la vidéo
enc = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "bgr24", "-s", f"{W}x{H}", "-r", "24",
                        "-i", "-", "-c:v", "ffv1", OUT], stdin=subprocess.PIPE)
stats = []
# images proches d'une transition glitch : jamais touchées (le glitch fait partie du dessin)
near = [any(not good[j] for j in range(max(0, i - 6), min(n, i + 7))) for i in range(n)]
for i in range(n):
    f = scan[i].astype(np.float32)
    if good[i] and not near[i]:
        bg = bgm[i].astype(np.uint8)
        # les CREUX seulement : zones de fond entièrement entourées par le sujet (pas reliées au bord de l'image)
        k, lab, st, _ = cv2.connectedComponentsWithStats(bg, connectivity=4)
        touch = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]])))
        holes = np.zeros_like(bg)
        for c in range(1, k):
            if c not in touch and st[c, cv2.CC_STAT_AREA] >= 40:
                holes[lab == c] = 1
        holes = cv2.erode(holes, np.ones((3, 3), np.uint8))                  # ne pas mordre le contour
        filled = holes.astype(bool) & (np.abs(f.mean(2) - plate.mean(2)) > MIN_FILL)
        if filled.sum() > 0:
            a = cv2.GaussianBlur(holes.astype(np.float32), (0, 0), 1.5)[..., None]
            f = f * (1 - a) + plate * a
        stats.append((i, int(filled.sum())))
    enc.stdin.write(f.clip(0, 255).astype(np.uint8).tobytes())
enc.stdin.close(); enc.wait()
stats.sort(key=lambda x: -x[1])
print("images les plus corrigées (n°, pixels remplis retirés) :", stats[:25])
if REPORT:
    os.makedirs(REPORT, exist_ok=True)
    with open(os.path.join(REPORT, "stats.txt"), "w") as fh:
        fh.write("\n".join(f"{i} {p}" for i, p in sorted(stats)))
