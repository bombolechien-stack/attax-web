"""Variante SOMBRE de la vidéo du hero (18/11) : mêmes scanlines que hero-lines.mp4 (non retouchées),
seulement la couleur change — fond noir, lignes bleu clair lumineuses.
Intensité d'une ligne = 1 − min(R, G, B) de l'image d'origine (0 sur le blanc, ~1 sur le bleu).

Sortie : public/videos/hero-lines-dark.mp4 + hero-lines-dark-poster.jpg
Usage : python scripts/hero-lines/dark.py
"""
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
V = ROOT / "public" / "videos"
COL = np.array([0.46, 0.64, 1.0], np.float32) * 1.1   # bleu lumineux
BG = np.array([5, 7, 11], np.float32) / 255             # = fond du hero (#05070B)


def recolor(rgb: np.ndarray) -> np.ndarray:
    a = rgb.astype(np.float32) / 255
    ink = 1 - a.min(axis=2, keepdims=True)
    out = BG * (1 - ink) + ink * COL
    return (np.clip(out, 0, 1) * 255).astype(np.uint8)


def main():
    src = V / "hero-lines.mp4"
    w, h = 1920, 1080
    dec = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-i", str(src), "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
                           stdout=subprocess.PIPE)
    fps = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v", "-show_entries", "stream=r_frame_rate",
                          "-of", "csv=p=0", str(src)], capture_output=True, text=True).stdout.strip()
    enc = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{w}x{h}",
                            "-r", fps, "-i", "-", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "24", "-preset", "slow",
                            "-movflags", "+faststart", "-an", str(V / "hero-lines-dark.mp4")], stdin=subprocess.PIPE)
    n = w * h * 3
    while True:
        buf = dec.stdout.read(n)
        if len(buf) < n:
            break
        enc.stdin.write(recolor(np.frombuffer(buf, np.uint8).reshape(h, w, 3)).tobytes())
    enc.stdin.close()
    enc.wait()
    Image.fromarray(recolor(np.asarray(Image.open(V / "hero-lines-poster.jpg").convert("RGB")))).save(
        V / "hero-lines-dark-poster.jpg", quality=86)
    print((V / "hero-lines-dark.mp4").stat().st_size // 1024, "Ko")


if __name__ == "__main__":
    main()
