# Hero du site en scanlines « comme l'app » (budyfit/scripts/lines_like_app.py + CombatFighter) :
# lignes horizontales régulières, épaisseur = profondeur dans la silhouette (fines aux bords, pleines au centre),
# couleur unie bleu Attax sur fond clair.
# Source : Desktop/Attax/Siteweb/Attax_Hero_1080p_final_1.mp4 (3 scènes × 3 sports, fond blanc).
#   EDGE_T=22 python heroscan.py <source.mp4> hero_lines.mkv
#   ffmpeg -i hero_lines.mkv -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -movflags +faststart -an hero-lines.mp4
#   ffmpeg -i hero_lines.mkv -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 -pix_fmt yuv420p -an hero-lines.webm
#   ffmpeg -ss 2 -i hero-lines.mp4 -frames:v 1 -q:v 3 hero-lines-poster.jpg
# Sur le site, la vidéo (fond blanc) est posée en mix-blend-mode: multiply sur le fond HeroBackdrop.
import os, sys, subprocess
import numpy as np
from scipy import ndimage as ni

E = lambda k, d: float(os.environ.get(k, d))
W, H = 1920, 1080
STEP = int(E("STEP", 10))      # pas des lignes (px)
MAX_T = E("MAX_T", 5.5)        # épaisseur max (px) — 55 % du pas, comme l'app
FLOOR = E("FLOOR", 0.45)       # épaisseur au bord (0,3 dans l'app)
SCALE = E("SCALE", 9.0)        # profondeur (px) de la montée d'épaisseur (14 dans l'app × 0,64)
THR = E("THR", 0.12)           # seuil sujet / fond
TRAIL = E("TRAIL", 0.035)      # seuil des traînées de mouvement (calque pâle)
TRAIL_A = E("TRAIL_A", 0.22)   # opacité du calque pâle
DIL, ERO = int(E("DIL", 3)), int(E("ERO", 2))
EDGE_SIG, EDGE_T, EDGE_W = E("EDGE_SIG", 2.0), E("EDGE_T", 18), int(E("EDGE_W", 1))
TONE = E("TONE", 0.0)          # 0 = silhouette pleine (app) ; >0 = l'épaisseur suit aussi le ton du sujet
PTS_PX = E("PTS_PX", 0)        # 0 = au plus 10 points par ligne (app) ; sinon un point tous les N px
V_CLOSE, SUB, MAX_PTS, MIN_SEG = 3, 3, 10, 4
BG_LEVEL = 248.0
BLUE = np.array([4, 67, 253], float)   # #0443FD
XOFF = int(E("XOFF", 330))
SHADOW_Y = 965


def silhouette(raw, dil, ero):
    closed = ni.distance_transform_edt(~raw) <= dil
    closed = ni.distance_transform_edt(closed) > ero
    holes = ni.binary_fill_holes(closed) & ~closed      # petits creux seulement (pas les roues du vélo)
    hl, hn = ni.label(holes)
    if hn:
        hs = ni.sum(holes, hl, range(1, hn + 1))
        small = np.zeros(hn + 1, bool); small[1:] = hs < 1500
        closed = closed | small[hl]
    lab, n = ni.label(closed)
    if n:
        sizes = ni.sum(closed, lab, range(1, n + 1))
        keep = np.zeros(n + 1, bool); keep[1:] = sizes > 500
        closed = keep[lab]
    return closed


def lines(mask, depth, gain, cov, opacity):
    for y in range(STEP // 2, H, STEP):
        row = mask[y]
        if not row.any():
            continue
        lab1, n1 = ni.label(row)
        for j in range(1, n1 + 1):
            xs = np.where(lab1 == j)[0]
            if len(xs) < MIN_SEG:
                continue
            a, b = int(xs[0]), int(xs[-1])
            N = max(2, int(np.ceil((b - a) / SUB)) + 1)
            px = a + np.arange(N) * (b - a) / (N - 1)
            pi = np.round(px).astype(int)
            d = depth[y, pi]
            th = FLOOR + np.where(d <= 0, 0, 1 - np.exp(-d / SCALE)) * (MAX_T - FLOOR)
            if gain is not None:
                th = FLOOR + (th - FLOOR) * gain[y, pi]
            U = min(N, MAX_PTS) if PTS_PX <= 0 else max(2, min(N, int((b - a) / PTS_PX) + 2))
            idx = np.round(np.arange(U) * (N - 1) / (U - 1)).astype(int)
            ux = a + np.arange(U) * (b - a) / (U - 1)
            xx = np.arange(a, b + 1)
            half = np.interp(xx, ux, th[idx]) / 2
            for dy in range(-4, 5):
                yy = y + dy
                if 0 <= yy < H:
                    c = np.clip(half - abs(dy) + 0.5, 0, 1) * opacity
                    cov[yy, a:b + 1] = np.maximum(cov[yy, a:b + 1], c)


def frame_lines(g):
    g = g.astype(np.float32)
    v = np.clip((BG_LEVEL - g) / BG_LEVEL, 0, 1)
    vs = ni.gaussian_filter(v, 1.0)
    floor_boost = np.ones_like(v); floor_boost[SHADOW_Y:] = 3.0
    body = silhouette(vs > THR * floor_boost, DIL, ERO)
    trail = silhouette(vs > TRAIL * floor_boost, DIL + 1, ERO + 1) & ~ni.binary_dilation(body, iterations=3)
    trail[SHADOW_Y - 25:] = False      # pas d'ombre au sol
    if EDGE_T > 0:
        gs = ni.gaussian_filter(g, EDGE_SIG)
        grad = np.hypot(ni.sobel(gs, 0), ni.sobel(gs, 1)) / 8
        gap = ni.binary_dilation((grad > EDGE_T) & body, iterations=EDGE_W) if EDGE_W > 0 else (grad > EDGE_T) & body
        body_l = body & ~gap
    else:
        body_l = body
    vert = np.ones((2 * V_CLOSE + 1, 1), bool)
    depth = ni.distance_transform_edt(ni.binary_dilation(body_l, structure=vert))
    gain = None
    if TONE > 0:
        tone = ni.gaussian_filter(v, 3)
        gain = (1 - TONE) + TONE * np.clip((tone - 0.05) / 0.55, 0, 1) ** 0.8
    cov = np.zeros((H, W), np.float32)
    if TRAIL_A > 0:
        tdepth = ni.distance_transform_edt(ni.binary_dilation(trail, structure=vert))
        lines(trail, tdepth, None, cov, TRAIL_A)
    lines(body_l, depth, gain, cov, 1.0)
    out_cov = np.zeros_like(cov)
    if XOFF >= 0:
        out_cov[:, XOFF:] = cov[:, :W - XOFF]
    else:
        out_cov[:, :XOFF] = cov[:, -XOFF:]
    c = out_cov[..., None]
    return (255 * (1 - c) + BLUE * c).clip(0, 255).astype(np.uint8)


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    if src.endswith(".png"):
        from PIL import Image
        Image.fromarray(frame_lines(np.asarray(Image.open(src).convert("L")))).save(dst)
    else:
        rd = subprocess.Popen(["ffmpeg", "-v", "error", "-i", src, "-f", "rawvideo", "-pix_fmt", "gray", "-"], stdout=subprocess.PIPE)
        wr = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", "24", "-i", "-",
                               "-c:v", "ffv1", dst], stdin=subprocess.PIPE)
        k = 0
        while True:
            buf = rd.stdout.read(W * H)
            if len(buf) < W * H:
                break
            wr.stdin.write(frame_lines(np.frombuffer(buf, np.uint8).reshape(H, W)).tobytes())
            k += 1
            if k % 48 == 0:
                print("frame", k, flush=True)
        wr.stdin.close(); wr.wait()
        print("done", k)
