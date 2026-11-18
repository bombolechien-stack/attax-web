"""Vidéo « Soir de combat » du site, montée à partir de VRAIES captures de l'app (17/11/2026).

Source : budyfit/store-assets/shots-2026-11-17/fn-*.png (FR) et en/fn-*.png (EN), images
successives de la révélation de 21h30 sur un téléphone Android (1080 × 2340).
On retire la barre d'état et la barre de navigation Android, puis on enchaîne les images en
fondu, au rythme de la révélation (rounds rapides, cartes, round final, vainqueur).

Sorties : public/videos/fight-night-{fr,en}.mp4 + poster .jpg (540 × 1064, site)
          public/press/attax-fight-night-{en,fr}.mp4 (1080 × 2128, kit presse).
Usage : python scripts/fight-night-video/build.py
"""
import subprocess
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC = Path(r"C:\Users\guill\budyfit\store-assets\shots-2026-11-17")
OUT = ROOT / "public" / "videos"
FPS = 30
W, H = 540, 1064          # moitié de 1080 × 2128
TOP, BOTTOM = 84, 2212    # sans barre d'état ni barre de navigation
FADE = 0.22               # durée d'un fondu (s)

# (image, durée d'affichage en s) — l'ordre suit la révélation
SEQ = {
    "en": [
        ("fn-01", 1.1), ("fn-02", 0.55), ("fn-03", 0.55), ("fn-04", 0.55), ("fn-05", 0.55),
        ("fn-06", 0.55), ("fn-07", 0.8),
        ("fn-09", 1.1), ("fn-10", 0.7), ("fn-11", 0.6), ("fn-12", 0.9),
        ("fn-15", 0.6), ("fn-17", 0.6), ("fn-19", 0.9),
        ("fn-21", 1.1), ("fn-22", 0.8),
        ("fn-23", 0.45), ("fn-24", 0.45), ("fn-25", 0.45), ("fn-26", 0.45),
        ("fn-27", 0.45), ("fn-28", 0.45), ("fn-29", 0.8),
        ("fn-30", 0.35), ("fn-31", 0.5), ("fn-33", 2.2),
    ],
    "fr": [
        ("fn-02", 1.1), ("fn-04", 1.0), ("fn-07", 0.8),
        ("fn-08", 0.55), ("fn-09", 0.55), ("fn-10", 0.55), ("fn-11", 0.55), ("fn-12", 0.55),
        ("fn-13", 0.55), ("fn-14", 0.8),
        ("fn-15", 1.1), ("fn-17", 0.7), ("fn-18", 0.6), ("fn-19", 0.9),
        ("fn-22", 0.6), ("fn-23", 0.9),
        ("fn-27", 1.1), ("fn-28", 0.8), ("fn-29", 0.6), ("fn-30", 0.8),
        ("fn-31", 0.35), ("fn-32", 0.5), ("fn-34", 2.2),
    ],
}


def load(lang: str, name: str, w: int = W, h: int = H) -> Image.Image:
    p = (SRC / "en" / f"{name}.png") if lang == "en" else (SRC / f"{name}.png")
    im = Image.open(p).convert("RGB").crop((0, TOP, 1080, BOTTOM))
    return im if (w, h) == im.size else im.resize((w, h), Image.LANCZOS)


def frames(lang: str, w: int, h: int):
    seq = [(load(lang, n, w, h), d) for n, d in SEQ[lang]]
    nf = int(FADE * FPS)
    for i, (im, d) in enumerate(seq):
        hold = max(1, int(d * FPS))
        for _ in range(hold):
            yield im
        nxt = seq[(i + 1) % len(seq)][0]   # le dernier fond vers le premier : boucle propre
        for k in range(1, nf + 1):
            yield Image.blend(im, nxt, k / (nf + 1))


def encode(lang: str, out: Path, w: int, h: int, crf: int):
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
           "-s", f"{w}x{h}", "-r", str(FPS), "-i", "-",
           "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", str(crf), "-preset", "slow",
           "-movflags", "+faststart", "-an", str(out)]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    for f in frames(lang, w, h):
        proc.stdin.write(f.tobytes())
    proc.stdin.close()
    proc.wait()
    print(out.name, out.stat().st_size // 1024, "Ko")


if __name__ == "__main__":
    PRESS = ROOT / "public" / "press"
    for lang in ("en", "fr"):
        encode(lang, OUT / f"fight-night-{lang}.mp4", W, H, 24)
        poster = {"en": "fn-29", "fr": "fn-30"}[lang]   # les deux boxeurs au round final
        load(lang, poster).save(OUT / f"fight-night-{lang}-poster.jpg", quality=86)
        encode(lang, PRESS / f"attax-fight-night-{lang}.mp4", 1080, BOTTOM - TOP, 22)
