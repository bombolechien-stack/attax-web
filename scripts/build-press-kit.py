"""Construit public/press/attax-press-kit.zip (kit presse téléchargeable).

    python scripts/build-press-kit.py

Prérequis : logos (public/press/attax-*-black/white .svg/.png) et la vidéo du Soir de combat
(public/press/attax-fight-night-{en,fr}.mp4, faite de vraies captures de l'app :
python scripts/fight-night-video/build.py).
Captures : recadrées ici sur le téléphone des captures stores (budyfit/store-assets/app-store/{en,fr}/screen-2..8.png).
Les textes viennent de src/app/press/content.ts (source unique, lue via node).
"""
import json, shutil, subprocess, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / "public"
PRESS = PUB / "press"
from PIL import Image, ImageDraw

STORE = Path("C:/Users/guill/budyfit/store-assets/app-store")
# Captures stores (1206 × 2622) → le téléphone seul (1016 × 2012), en JPG.
PHONE_BOX = (95, 579, 1111, 2591)
SCREENS = {2: "fight-night", 3: "cards", 4: "activity", 5: "league", 6: "season", 7: "duo", 8: "profile"}
# Les captures stores du 19/11 (saison « Beta Season 2027 », sans nombre de joueurs) sont propres : plus rien à effacer.
ERASE: dict = {}

def build_screens():
    out_files = []
    for lang in ("en", "fr"):
        dst_dir = PRESS / "screens" / lang
        dst_dir.mkdir(parents=True, exist_ok=True)
        for n, name in SCREENS.items():
            im = Image.open(STORE / lang / f"screen-{n}.png").convert("RGB")
            for box in ERASE.get((lang, n), []):
                bg = im.getpixel((box[0] - 6, box[3] + 12))
                ImageDraw.Draw(im).rectangle(box, fill=bg)
            dst = dst_dir / f"attax-{n - 1:02d}-{name}.jpg"
            im.crop(PHONE_BOX).save(dst, quality=90)
            out_files.append((dst, f"{lang}/{dst.name}"))
    return out_files

screens = build_screens()

# Textes FR/EN depuis content.ts (node retire les types TypeScript nativement)
js = "import { PRESS_CONTENT } from './src/app/press/content.ts'; console.log(JSON.stringify(PRESS_CONTENT));"
content = json.loads(subprocess.check_output(["node", "--input-type=module", "-e", js], cwd=ROOT, text=True))

def markdown(c, lang):
    fr = lang == "fr"
    out = [f"# Attax — {'Kit presse' if fr else 'Press kit'}", ""]
    for t in c["texts"]:
        out += [f"## {t['label']}", "", t["body"], ""]
    out += [f"## {c['facts_title']}", ""] + [f"- **{f['label']}** : {f['value']}" if fr else f"- **{f['label']}**: {f['value']}" for f in c["facts"]] + [""]
    out += [f"## {c['how_title']}", ""] + [f"- **{h['title']}** — {h['body']}" for h in c["how"]] + [""]
    out += [f"## {c['rules_title']}", "", f"**{c['rules_do_title']}**", ""] + [f"- {r}" for r in c["rules_do"]]
    out += ["", f"**{c['rules_dont_title']}**", ""] + [f"- {r}" for r in c["rules_dont"]] + [""]
    out += [f"## {c['contact_title']}", "", c["contact_body"], "", c["contact_email"], "", "attax.app · " + " · ".join(c["tags"]), ""]
    return "\n".join(out)

kit = PRESS / "attax-press-kit.zip"
with zipfile.ZipFile(kit, "w", zipfile.ZIP_DEFLATED) as z:
    for f in sorted(PRESS.glob("attax-*-*.svg")) + sorted(PRESS.glob("attax-*-*.png")):
        z.write(f, f"attax-press-kit/logos/{f.name}")
    z.write(PUB / "images" / "apple-touch-icon.png", "attax-press-kit/logos/attax-app-icon.png")
    for f, arc in screens:
        z.write(f, f"attax-press-kit/screenshots/{arc}")
    for lang in ("en", "fr"):
        z.write(PRESS / f"attax-fight-night-{lang}.mp4", f"attax-press-kit/video/attax-fight-night-{lang}.mp4")
    for lang in ("fr", "en"):
        z.writestr(f"attax-press-kit/{'Attax_presentation_FR' if lang == 'fr' else 'Attax_press_EN'}.md", markdown(content[lang], lang))
print(f"{kit} — {kit.stat().st_size / 1e6:.1f} MB")
