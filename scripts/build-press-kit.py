"""Construit public/press/attax-press-kit.zip (kit presse téléchargeable).

    python scripts/build-press-kit.py

Prérequis déjà générés dans public/press : logos (attax-*-black/white .svg/.png)
et attax-match-video.mp4 (budyfit/tools/attax-export/render-site-match.mjs --full).
Les textes viennent de src/app/press/content.ts (source unique, lue via node).
"""
import json, shutil, subprocess, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / "public"
PRESS = PUB / "press"
SCREENS = {"screenactivity.png": "attax-activity.png", "screenmatch.png": "attax-match.png", "screencards.png": "attax-cards.png"}

# Captures téléchargeables une à une depuis la page
(PRESS / "screens").mkdir(parents=True, exist_ok=True)
for src, dst in SCREENS.items():
    shutil.copyfile(PUB / "screens" / src, PRESS / "screens" / dst)

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
    for dst in SCREENS.values():
        z.write(PRESS / "screens" / dst, f"attax-press-kit/screenshots/{dst}")
    z.write(PRESS / "attax-match-video.mp4", "attax-press-kit/video/attax-match-video.mp4")
    for lang in ("fr", "en"):
        z.writestr(f"attax-press-kit/{'Attax_presentation_FR' if lang == 'fr' else 'Attax_press_EN'}.md", markdown(content[lang], lang))
print(f"{kit} — {kit.stat().st_size / 1e6:.1f} MB")
