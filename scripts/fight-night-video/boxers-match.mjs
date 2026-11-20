// « 7 jours. 7 rounds. » : les boxeurs bleu et rouge de l'app, en très gros plan (tête → hanches), l'un à gauche,
// l'autre à droite, qui se disputent les 7 rounds du match. Chaque round : le perdant tente un coup (esquivé), puis le
// gagnant frappe ; à l'impact, la page fait tomber le PV (même chorégraphie : src/components/home/matchFight.json).
// Moteur et dessin = ceux de l'app (MotionDesign/_KIT_EPISODE : engine.mjs = bundle de budyfit/lib/fighterAnimations +
// fighterMorph + fighterDistort ; fightscreen.mjs = les lignes), sur le fond de l'écran Match de l'app (#EEF1F7).
//   node scripts/fight-night-video/boxers-match.mjs [--still=secondes]
// Sorties : public/videos/match-fight-{wide,tall}.{webm,mp4} + -poster.jpg ; écrit les instants d'impact dans le JSON.
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const KIT = "C:/Users/guill/Desktop/Attax/MotionDesign/_KIT_EPISODE/";
const { fighterSvg, toPng, BLUE, RED } = await import(pathToFileURL(KIT + "fightscreen.mjs").href);
const { ANIMATIONS, REACTIONS } = await import(pathToFileURL(KIT + "engine.mjs").href);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const PLAN_FILE = path.join(ROOT, "src", "components", "home", "matchFight.json");
const OUT = path.join(ROOT, "public", "videos");
const plan = JSON.parse(fs.readFileSync(PLAN_FILE, "utf8"));
const FPS = 30, BG = "#EEF1F7";
const A = Object.fromEntries(process.argv.slice(2).map((s) => { const [k, v = "1"] = s.replace(/^--/, "").split("="); return [k, v]; }));

// Les coups dans le temps (ms) : { t, by: "b"|"r", key, react } ; react = animation de l'autre (null = aucune).
const EV = [];
for (const r of plan.rounds) {
  const W = r.winner === "Y" ? "b" : "r", L = W === "b" ? "r" : "b";
  EV.push({ t: (r.start + 0.2) * 1000, by: L, key: r.feint, react: { key: "dodge_back", delay: 90 } });
  EV.push({ t: r.at * 1000, by: W, key: r.strike, react: { key: REACTIONS[r.strike].reaction, delay: REACTIONS[r.strike].delayMs } });
  r.impact = Math.round((r.at + REACTIONS[r.strike].delayMs / 1000) * 100) / 100;
}
fs.writeFileSync(PLAN_FILE, JSON.stringify(plan, null, 2) + "\n");
const winnerFinal = plan.rounds[plan.rounds.length - 1].winner === "Y" ? "b" : "r";

function pose(side, T) {
  if (side === winnerFinal && T >= plan.verdictAt * 1000) return { key: "victory", t: T - plan.verdictAt * 1000 };
  let cur = null;
  for (const e of EV) {
    if (e.by === side && T >= e.t && T < e.t + ANIMATIONS[e.key].duration) cur = { key: e.key, t: T - e.t };
    if (e.by !== side && e.react) {
      const t0 = e.t + e.react.delay;
      if (T >= t0 && T < t0 + ANIMATIONS[e.react.key].duration) cur = { key: e.react.key, t: T - t0 };
    }
  }
  return cur ?? { key: "idle", t: (T + (side === "r" ? 1300 : 0)) % ANIMATIONS.idle.duration };
}

// Deux cadrages : large (ordinateur) et haut (téléphone). S = taille du boxeur (hauteur du corps), gap = écart des centres.
const FORMATS = {
  wide: { W: 1440, H: 640, S: 1250, gap: 0.40, top: 0.11 },
  tall: { W: 720, H: 900, S: 1300, gap: 0.34, top: 0.11 },
};
function frame(f, T) {
  const { W, H, S, gap, top } = f, oy = 18 - top * S;
  const d = (gap * S) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="${BG}"/>
${fighterSvg({ ...pose("r", T), tSec: T / 1000, cx: W / 2 + d, oy, S, facing: "left", seed: 91 }, RED)}${fighterSvg({ ...pose("b", T), tSec: T / 1000, cx: W / 2 - d, oy, S, facing: "right", seed: 37 }, BLUE)}</svg>`;
}

if (A.still) {
  for (const [name, f] of Object.entries(FORMATS)) fs.writeFileSync(path.join(process.env.TMP || ".", `still-${name}.png`), toPng(frame(f, +A.still * 1000), f.W));
  console.log("stills written to", process.env.TMP); process.exit(0);
}

const write = (st, b) => new Promise((r) => (st.write(b) ? r() : st.once("drain", r)));
for (const [name, f] of Object.entries(FORMATS)) {
  const mp4 = path.join(OUT, `match-fight-${name}.mp4`);
  const scale = name === "wide" ? "scale=1200:-2" : "scale=540:-2";
  const enc = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-i", "-", "-vf", scale, "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "27", "-preset", "slow", "-tune", "animation", "-an", "-movflags", "+faststart", mp4], { stdio: ["pipe", "ignore", "inherit"] });
  const n = Math.round(plan.duration * FPS);
  for (let k = 0; k < n; k++) await write(enc.stdin, toPng(frame(f, (k / FPS) * 1000), f.W));
  enc.stdin.end();
  await new Promise((r) => enc.on("close", r));
  spawnSync("ffmpeg", ["-y", "-loglevel", "error", "-i", mp4, "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "42", "-row-mt", "1", "-an", path.join(OUT, `match-fight-${name}.webm`)], { stdio: "inherit" });
  // Affiche = l'instant du verdict (aussi l'image fixe quand les animations sont réduites).
  spawnSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", String(plan.verdictAt + 1.2), "-i", mp4, "-frames:v", "1", "-q:v", "4", path.join(OUT, `match-fight-${name}-poster.jpg`)], { stdio: "inherit" });
  console.log("ok", mp4);
}
