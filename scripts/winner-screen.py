# Écran « vainqueur » de l'app (révélation de 21h30, components/reveal/FightNight.tsx → WinnerWave) pour le site :
# capture réelle EN (store-assets/shots-2026-11-17/en/fn-34.png), recadrée au format des captures de public/screens/story
# (522 × 1017, sans barres Android). Version FR : mêmes pixels, seuls les textes sont remplacés par ceux de l'app en
# français (« VAINQUEUR », « Victoire aux PV », « PV », « 17 NOVEMBRE », « Partager », « Continuer »), en Manrope comme l'app.
from PIL import Image, ImageDraw, ImageFont
import sys
SRC = "C:/Users/guill/budyfit/store-assets/shots-2026-11-17/en/fn-34.png"
FONTS = "C:/Users/guill/budyfit/node_modules/@expo-google-fonts/manrope/"
OUT = "C:/Users/guill/attax-web/public/screens/story/"
BLUE = (4, 67, 253)
im = Image.open(SRC).convert("RGB")

def bbox(img, box, thr=60, ref=BLUE):
    x0, y0, x1, y1 = box; xs = []; ys = []
    px = img.load()
    for y in range(y0, y1):
        for x in range(x0, x1):
            r, g, b = px[x, y]
            if abs(r - ref[0]) + abs(g - ref[1]) + abs(b - ref[2]) > thr: xs.append(x); ys.append(y)
    return (min(xs), min(ys), max(xs) + 1, max(ys) + 1)

def font(w, px): return ImageFont.truetype(FONTS + {7: "700Bold/Manrope_700Bold.ttf", 8: "800ExtraBold/Manrope_800ExtraBold.ttf"}[w], px)

def draw_text(img, text, f, color, anchor_xy, anchor, spacing=0):
    """Texte avec interlettrage (letterSpacing de l'app), ancré « mm » (centre) ou « rm » (bord droit)."""
    d = ImageDraw.Draw(img, "RGBA")
    widths = [d.textlength(ch, font=f) for ch in text]
    total = sum(widths) + spacing * (len(text) - 1)
    x, y = anchor_xy
    x = x - total / 2 if anchor == "mm" else x - total
    for ch, w in zip(text, widths):
        d.text((x, y), ch, font=f, fill=color, anchor="lm"); x += w + spacing

def cap_px(b): return b[3] - b[1]

def fit(en, b, sp_ratio, w=7):
    """Taille de police telle que le texte anglais d'origine (avec son interlettrage) a la largeur mesurée."""
    d = ImageDraw.Draw(Image.new("RGB", (10, 10)))
    for px in range(10, 120):
        f = font(w, px); tot = sum(d.textlength(c, font=f) for c in en) + px * sp_ratio * (len(en) - 1)
        if tot >= (b[2] - b[0]): return px
    return 40

fr = im.copy()
d = ImageDraw.Draw(fr)
# 1. « WINNER » → « VAINQUEUR » (wKick : 700, 12 dp, interlettrage 4 dp, blanc 75 %)
b = bbox(im, (380, 190, 700, 260)); d.rectangle((b[0]-4, b[1]-4, b[2]+4, b[3]+4), fill=BLUE)
k = fit("WINNER", b, 4/12)
draw_text(fr, "VAINQUEUR", font(7, round(k)), (255, 255, 255, 191), ((b[0]+b[2])/2, (b[1]+b[3])/2), "mm", spacing=k*4/12)
# 2. « Win on HP » → « Victoire aux PV » (wSub : 700, 14 dp, blanc 90 %)
b = bbox(im, (400, 470, 690, 545)); d.rectangle((b[0]-4, b[1]-4, b[2]+4, b[3]+4), fill=BLUE)
k = fit("Win on HP", b, 0.2/14)
draw_text(fr, "Victoire aux PV", font(7, round(k)), (255, 255, 255, 230), ((b[0]+b[2])/2, (b[1]+b[3])/2), "mm", spacing=k*0.2/14)
# 3. « 4 HP » / « 3 HP » → « 4 PV » / « 3 PV » (wPv : 700, 10 dp)
for (x0, x1, txt, en) in [(220, 345, "4 PV", "4 HP"), (740, 860, "3 PV", "3 HP")]:
    b = bbox(im, (x0, 920, x1, 985)); d.rectangle((b[0]-3, b[1]-3, b[2]+3, b[3]+3), fill=BLUE)
    k = fit(en, b, 0.4/10); col = im.getpixel((b[0] + 2, (b[1]+b[3])//2)); col = max((im.getpixel((x, y)) for x in range(b[0], b[2]) for y in range(b[1], b[3])), key=sum)
    draw_text(fr, txt, font(7, round(k)), col, ((b[0]+b[2])/2, (b[1]+b[3])/2), "mm", spacing=k*0.4/10)
# 4. « NOVEMBER 17 » → « 17 NOVEMBRE » (wMatchNo : 700, 11 dp, interlettrage 1,6 dp), même bord droit ; le fond de
#    chaque ligne (les traînées du sol) est recopié depuis la droite du texte.
b = bbox(im, (735, 1935, 1040, 1985), thr=150)
px = fr.load(); src = im.load()
for y in range(b[1]-3, b[3]+3):
    c = src[min(1075, b[2]+8), y]
    for x in range(b[0]-3, b[2]+3): px[x, y] = c
k = fit("NOVEMBER 17", b, 1.6/11); col = max((src[x, y] for x in range(b[0], b[2]) for y in range(b[1], b[3])), key=sum)
draw_text(fr, "17 NOVEMBRE", font(7, round(k)), col, (b[2], (b[1]+b[3])/2), "rm", spacing=k*1.6/11)
# 5. Boutons « Share » / « Continue » → « Partager » / « Continuer » (btnTxt), icône de partage gardée
bs = bbox(im, (325, 2070, 470, 2140)); ic = bbox(im, (250, 2065, 315, 2145))
icon = im.crop(ic)
d.rectangle((ic[0]-3, min(ic[1], bs[1])-3, bs[2]+4, max(ic[3], bs[3])+3), fill=BLUE)
k = fit("Share", bs, 0); f = font(7, round(k))
gap = bs[0] - ic[2]; tw = ImageDraw.Draw(fr).textlength("Partager", font=f)
grp = (ic[2]-ic[0]) + gap + tw; cx = (ic[0] + bs[2]) / 2; x0 = round(cx - grp / 2)
fr.paste(icon, (x0, ic[1]))
draw_text(fr, "Partager", f, (255, 255, 255, 255), (x0 + (ic[2]-ic[0]) + gap + tw/2, (bs[1]+bs[3])/2), "mm")
bc = bbox(im, (600, 2070, 880, 2140), ref=(255, 255, 255)); d.rectangle((bc[0]-4, bc[1]-4, bc[2]+4, bc[3]+4), fill=(255, 255, 255))
k = fit("Continue", bc, 0)
draw_text(fr, "Continuer", font(7, round(k)), (9, 9, 11, 255), ((bc[0]+bc[2])/2, (bc[1]+bc[3])/2), "mm")

for lang, img in [("en", im), ("fr", fr)]:
    c = img.crop((0, 106, 1080, 106 + 2104)).resize((522, 1017), Image.LANCZOS)
    c.save(OUT + f"{lang}/winner.webp", quality=90)
    if len(sys.argv) > 1: img.crop((0, 120, 1080, 2210)).save(sys.argv[1] + f"/winner-{lang}.png")
print("ok")
