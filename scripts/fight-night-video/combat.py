"""Le combat de la section « Soir de combat » du site : les deux boxeurs de l'app qui se tapent, rien d'autre.

Source : Desktop/Attax/MotionDesign/01_Combat/*.mov — les animations du moteur de combat ACTUEL de l'app
(ProRes 4444 à fond transparent, 1512 × 1080, 30 i/s ; bleu regarde à droite, rouge regarde à gauche).
On pose le bleu à gauche et le rouge à droite, on enchaîne quelques échanges (coup + réaction décalée,
décalages de la bible : jab +130 ms, hook +170 ms, cross +200 ms, high kick +500 ms), sur le fond
clair de l'app (#EEF1F7) ; le site l'affiche dans un panneau du même fond.
Boucle de 6,8 s = 2 cycles de garde (idle 3,4 s) : raccord sans saut.

Sortie : public/videos/fight-loop.mp4 + fight-loop-poster.jpg
Usage : python scripts/fight-night-video/combat.py
"""
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC = Path("C:/Users/guill/Desktop/Attax/MotionDesign/01_Combat")
OUT = ROOT / "public" / "videos"
FPS = 30
SCALE = 0.75                     # 1512 × 1080 → 1134 × 810 (net en écran 2x)
CW, CH = int(1512 * SCALE), int(1080 * SCALE)
DX = int(190 * SCALE)            # écart de chaque boxeur par rapport au centre
CROP = tuple(int(v * SCALE) for v in (0, 40, 1512, 1080))     # toute la largeur : le high kick ne sort pas du cadre
LOOP = 6.8
BG = np.array([238, 241, 247], np.float32)   # #EEF1F7, le fond de l'app

# (début en s, animation) ; entre deux animations, le boxeur est en garde (idle)
BLUE = [(0.30, "jab"), (1.80, "hit_light"), (2.90, "hook"), (4.70, "hit_heavy")]
RED = [(0.43, "hit_light"), (1.60, "cross"), (3.07, "hit_heavy"), (4.20, "highkick")]

_cache: dict[str, np.ndarray] = {}


def clip(name: str) -> np.ndarray:
    """Images RGBA (n, CH, CW, 4) d'une animation, réduites."""
    if name not in _cache:
        raw = subprocess.run(
            ["ffmpeg", "-loglevel", "error", "-i", str(SRC / f"{name}.mov"), "-vf", f"scale={CW}:{CH}",
             "-f", "rawvideo", "-pix_fmt", "rgba", "-"], capture_output=True, check=True).stdout
        _cache[name] = np.frombuffer(raw, np.uint8).reshape(-1, CH, CW, 4)
    return _cache[name]


def pose(side: str, plan, t: float) -> np.ndarray:
    for start, anim in plan:
        frames = clip(f"{anim}_{side}")
        k = int(round((t - start) * FPS))
        if 0 <= k < len(frames):
            return frames[k]
    idle = clip(f"idle_{side}")
    return idle[int(round(t * FPS)) % len(idle)]


def shift(img: np.ndarray, dx: int) -> np.ndarray:
    out = np.zeros_like(img)
    if dx > 0:
        out[:, dx:] = img[:, :-dx]
    else:
        out[:, :dx] = img[:, -dx:]
    return out


def over(dst: np.ndarray, src: np.ndarray) -> np.ndarray:
    a = src[..., 3:4].astype(np.float32) / 255.0
    return dst * (1 - a) + src[..., :3].astype(np.float32) * a


def frames():
    n = int(round(LOOP * FPS))
    for i in range(n):
        t = i / FPS
        canvas = np.full((CH, CW, 3), BG, np.float32)
        canvas = over(canvas, shift(pose("bleu", BLUE, t), -DX))
        canvas = over(canvas, shift(pose("rouge", RED, t), DX))
        x0, y0, x1, y1 = CROP
        yield np.clip(canvas[y0:y1, x0:x1], 0, 255).astype(np.uint8)


def main():
    out = OUT / "fight-loop.mp4"
    w, h = CROP[2] - CROP[0], CROP[3] - CROP[1]
    p = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
                          "-s", f"{w}x{h}", "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-pix_fmt", "yuv420p",
                          "-crf", "22", "-preset", "slow", "-movflags", "+faststart", "-an", str(out)],
                         stdin=subprocess.PIPE)
    for k, f in enumerate(frames()):
        if k == 0:
            Image.fromarray(f).save(OUT / "fight-loop-poster.jpg", quality=88)
        p.stdin.write(f.tobytes())
    p.stdin.close()
    p.wait()
    print(out, out.stat().st_size // 1024, "Ko")


if __name__ == "__main__":
    main()
