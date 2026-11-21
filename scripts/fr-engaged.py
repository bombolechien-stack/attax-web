# Captures FR du combat (store-assets/shots-2026-11-17/fn-30.png) : l'app y affiche encore « ENGAGED » en anglais sous
# les boxeurs. On repeint « ENGAGÉ » (Manrope ExtraBold, même couleur, même taille, même interlettrage, même centre),
from PIL import Image, ImageDraw, ImageFont
SRC = "C:/Users/guill/budyfit/store-assets/shots-2026-11-17/fn-30.png"
OUT = "C:/Users/guill/attax-web/public/screens/story/fr/"
FONT = "C:/Users/guill/budyfit/node_modules/@expo-google-fonts/manrope/800ExtraBold/Manrope_800ExtraBold.ttf"
im = Image.open(SRC).convert("RGB"); px = im.load(); W, H = im.size

def colored(c):
    r, g, b = c
    return (b > 150 and r < 120) or (r > 170 and g < 90 and b < 110)

# repère la ligne des « ENGAGED » : rangées 1880-2060 avec du bleu ET du rouge saturés, sans les boxeurs (plus haut)
rows = [y for y in range(1880, 2060) if any(colored(px[x, y]) for x in range(60, 1020, 2))]
y0, y1 = min(rows), max(rows)
for half in ((60, W // 2), (W // 2, 1020)):
    xs = [x for x in range(*half) for y in range(y0, y1 + 1) if colored(px[x, y])]
    x0, x1 = min(xs), max(xs)
    col = max(((px[x, y]) for x in range(x0, x1 + 1) for y in range(y0, y1 + 1) if colored(px[x, y])), key=lambda c: abs(c[0] - c[2]))
    bg = px[x0 - 12, y0 - 14]
    capH = y1 - y0 + 1
    f = ImageFont.truetype(FONT, round(capH / 0.72))
    d = ImageDraw.Draw(im)
    adv = sum(d.textlength(ch, font=f) for ch in "ENGAGED")
    sp = ((x1 - x0 + 1) - adv) / 6
    d.rectangle((x0 - 6, y0 - capH * 0.45, x1 + 6, y1 + 4), fill=bg)
    txt = "ENGAGÉ"; tw = sum(d.textlength(ch, font=f) for ch in txt) + sp * (len(txt) - 1)
    x = (x0 + x1) / 2 - tw / 2
    for ch in txt:
        d.text((x, y1 + 1), ch, font=f, fill=col, anchor="ls"); x += d.textlength(ch, font=f) + sp
    print("repeint", half, (x0, y0, x1, y1), col, bg)

im.crop((0, 95, 1080, 95 + 2104)).resize((522, 1017), Image.LANCZOS).save(OUT + "card-final.webp", quality=88)
im.crop((0, 1850, 1080, 2100)).save("C:/Users/guill/AppData/Local/Temp/claude/1e9961a218a90484/96bd3057-ee50-44f0-a82f-0af5ed07830f/scratchpad/engage.png")

# « STATUS DU ROUND » (anglicisme de l'app) → « STATUT DU ROUND » : on remplace seulement la dernière lettre du 1er mot.
px = im.load()
def grey(c): return abs(c[0] - c[2]) < 18 and c[0] < 200
ys = [y for y in range(2040, 2090) if any(grey(px[x, y]) for x in range(690, 1000))]
gy0, gy1 = min(ys), max(ys)
cols = [x for x in range(690, 1000) if any(grey(px[x, y]) for y in range(gy0, gy1 + 1))]
groups = []; 
for x in cols:
    if groups and x - groups[-1][1] <= 2: groups[-1][1] = x
    else: groups.append([x, x])
s_last = groups[5]                         # S T A T U S : 6e lettre
gcol = min((px[x, y] for x in range(*s_last) for y in range(gy0, gy1 + 1)), key=sum)
d = ImageDraw.Draw(im)
fb = ImageFont.truetype(FONT.replace("800ExtraBold/Manrope_800ExtraBold", "700Bold/Manrope_700Bold"), round((gy1 - gy0 + 1) / 0.72))
d.rectangle((s_last[0] - 2, gy0 - 2, s_last[1] + 2, gy1 + 2), fill=px[s_last[0] - 3, gy0 - 4])
d.text(((s_last[0] + s_last[1]) / 2, gy1 + 1), "T", font=fb, fill=gcol, anchor="ms")
print("STATUT", groups[:7], gcol)
im.crop((0, 95, 1080, 95 + 2104)).resize((522, 1017), Image.LANCZOS).save(OUT + "card-final.webp", quality=88)
im.crop((0, 1850, 1080, 2100)).save("C:/Users/guill/AppData/Local/Temp/claude/1e9961a218a90484/96bd3057-ee50-44f0-a82f-0af5ed07830f/scratchpad/engage.png")
