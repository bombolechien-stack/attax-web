// « 7 jours. 7 rounds. » : les deux boxeurs de l'app, figés à l'instant où le gagnant du round touche (un direct),
// en très gros plan, fond transparent. Une image par vainqueur (bleu touche / rouge touche) et par cadrage (large, haut).
// Moteur et dessin = ceux de l'app (MotionDesign/_KIT_EPISODE : engine.mjs = bundle de budyfit/lib/fighterAnimations +
// fighterMorph + fighterDistort ; fightscreen.mjs = les lignes en scanlines).
//   node scripts/fight-night-video/punch-stills.mjs
// Sorties : public/match/punch-{blue,red}-{wide,tall}.webp
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const KIT = "C:/Users/guill/Desktop/Attax/MotionDesign/_KIT_EPISODE/";
const { fighterSvg, toPng, BLUE, RED } = await import(pathToFileURL(KIT + "fightscreen.mjs").href);
const { REACTIONS } = await import(pathToFileURL(KIT + "engine.mjs").href);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = path.join(ROOT, "public", "match");
fs.mkdirSync(OUT, { recursive: true });

const MOVE = "cross";
const HIT = REACTIONS[MOVE].delayMs;          // instant du contact dans l'animation du coup
const REACT_AT = 90;                           // la réaction de l'autre, juste après le contact
const FORMATS = {
  wide: { W: 1440, H: 720, S: 1350, gap: 0.40, top: 0.11 },
  tall: { W: 720, H: 1000, S: 1350, gap: 0.34, top: 0.11 },
};

for (const [fname, f] of Object.entries(FORMATS)) {
  for (const winner of ["blue", "red"]) {
    const { W, H, S, gap, top } = f, oy = 18 - top * S, d = (gap * S) / 2;
    const b = winner === "blue" ? { key: MOVE, t: HIT + 40 } : { key: REACTIONS[MOVE].reaction, t: REACT_AT };
    const r = winner === "red" ? { key: MOVE, t: HIT + 40 } : { key: REACTIONS[MOVE].reaction, t: REACT_AT };
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
${fighterSvg({ ...r, tSec: 1, cx: W / 2 + d, oy, S, facing: "left", seed: 91 }, RED)}${fighterSvg({ ...b, tSec: 1, cx: W / 2 - d, oy, S, facing: "right", seed: 37 }, BLUE)}</svg>`;
    const png = path.join(os.tmpdir(), `punch-${winner}-${fname}.png`);
    fs.writeFileSync(png, toPng(svg, W));
    const out = path.join(OUT, `punch-${winner}-${fname}.webp`);
    spawnSync("ffmpeg", ["-y", "-loglevel", "error", "-i", png, "-c:v", "libwebp", "-lossless", "0", "-quality", "82", "-pix_fmt", "yuva420p", out], { stdio: "inherit" });
    console.log("ok", out);
  }
}
