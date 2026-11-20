# « Tous les sports comptent » : athlètes détourés (traitement C retenu le 20/11), encre sur transparent.
# Masque = détourage général (u2net : garde vélo, barre, raquette, ballon, bâtons, fauteuil ; exclut les ombres au sol)
# ∩ (personne (u2net_human_seg) ∪ pixels foncés) : les zones claires ENTOURÉES (roues, tamis de la raquette, creux entre
# les bras) restent transparentes ; rien n'est comblé.
#   python -I scripts/scan-athletes/sports-cutouts.py   → public/sports/<sport>.webp (640 × 960)
import os
import numpy as np
from PIL import Image, ImageFilter
from rembg import remove, new_session

SRC = r"C:/Users/guill/Desktop/Attax/socials/Archives Claude Carousel/img midjourney/"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "public", "sports")
M = {"running": "126-A", "cycling": "041-A", "lifting": "148-A", "tennis": "141-A", "wheelchair": "105-A",
     "sprint": "010-B", "nordic-walking": "134-A", "basketball": "106-A", "walking": "037-A"}
W, H = 640, 960
gen, hum = new_session("u2net"), new_session("u2net_human_seg")
for name, src in M.items():
    im = Image.open(SRC + src + ".png").convert("RGB").resize((W, H), Image.LANCZOS)
    l = np.asarray(im.convert("L")).astype(np.float32) / 255
    g = np.asarray(remove(im, session=gen, only_mask=True)).astype(np.float32) / 255
    h = np.asarray(remove(im, session=hum, only_mask=True)).astype(np.float32) / 255
    dark = 1 - np.clip((l - 0.28) / 0.16, 0, 1)
    m = g * np.maximum(h * (1 - np.clip((l - 0.80) / 0.1, 0, 1)), dark)
    m = np.asarray(Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6))).astype(np.float32) / 255
    c = 10 + np.clip((l - 0.05) / 0.85, 0, 1) ** 1.2 * 150
    rgba = np.dstack([c, c, c * 1.05 + 4, m * 255]).clip(0, 255).astype(np.uint8)
    Image.fromarray(rgba, "RGBA").save(os.path.join(OUT, name + ".webp"), quality=88)
    print("ok", name)
