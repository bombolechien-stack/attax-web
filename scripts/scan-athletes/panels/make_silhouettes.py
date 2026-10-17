# Prépare les silhouettes de la section « Every sport counts » : détourage (rembg), silhouette pleine,
# même taille de personne (T × facteur), même ligne de sol, retournement pour alterner les sens.
# Ensuite : node panel.mjs list.json out/  (scanlines identiques pour toutes).
import numpy as np
from PIL import Image
from scipy import ndimage
from rembg import remove, new_session
SRC = "../../../../Desktop/Attax/socials/_kit/img/"   # dossier des images des carrousels (à adapter)
W, H, GROUND, T = 520, 780, 712, 560
S = [("126-A", "running", 1.0, False), ("041-A_flat", "cycling", 0.7, True), ("148-A", "lifting", 1.0, False),
     ("010-B", "sprint", 0.92, False), ("141-A", "tennis", 0.80, False), ("105-A", "wheelchair", 0.78, True),
     ("134-A", "nordic-walking", 0.97, True), ("106-A", "basketball", 1.08, True), ("092-A", "spin", 0.98, False),
     ("016-A", "walking", 1.0, True)]
session = new_session("isnet-general-use")
for src, name, f, flip in S:
    a = np.array(remove(Image.open(SRC + src + ".png").convert("RGB"), session=session).getchannel("A")) > 110
    lab, n = ndimage.label(a); sizes = ndimage.sum(a, lab, range(1, n + 1))
    keep = np.isin(lab, [k + 1 for k, s in enumerate(sizes) if s > 0.03 * sizes.max()])
    ys, xs = np.nonzero(keep); crop = keep[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
    h, w = crop.shape; sc = T * f / h
    if w * sc > W * 0.94: sc = W * 0.94 / w
    im = Image.fromarray((crop * 255).astype("uint8")).resize((int(w * sc), int(h * sc)), Image.LANCZOS)
    if flip: im = im.transpose(Image.FLIP_LEFT_RIGHT)
    canvas = Image.new("L", (W, H), 255)
    canvas.paste(Image.new("L", im.size, 0), ((W - im.size[0]) // 2, GROUND - im.size[1]), im)
    canvas.convert("RGB").save(f"comp/{name}.png")
