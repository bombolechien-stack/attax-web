"""Captures de l'app pour le site (public/screens/app/{en,fr}/N.webp, 560 × 1107, fond transparent autour du téléphone),
découpées dans les captures stores à jour (budyfit/store-assets/app-store/{en,fr}/screen-N.png, 1206 × 2622).

Usage : python scripts/store-screens.py 6 8      (numéros des captures à refaire ; sans argument : 2 à 8)
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
STORE = Path("C:/Users/guill/budyfit/store-assets/app-store")
PHONE_BOX = (95, 579, 1111, 2591)   # le téléphone dans la capture store (identique sur les 8)

nums = [int(a) for a in sys.argv[1:]] or list(range(2, 9))
for lang in ("en", "fr"):
    for n in nums:
        im = Image.open(STORE / lang / f"screen-{n}.png").convert("RGB").crop(PHONE_BOX)
        rgba = im.convert("RGBA")
        # fond de la capture autour du téléphone (coins arrondis) → transparent, par remplissage depuis les 4 coins
        w, h = rgba.size
        for xy in ((0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)):
            ImageDraw.floodfill(rgba, xy, (0, 0, 0, 0), thresh=24)
        out = ROOT / "public" / "screens" / "app" / lang / f"{n}.webp"
        rgba.resize((560, 1107), Image.LANCZOS).save(out, quality=90, method=6)
        print(out)
