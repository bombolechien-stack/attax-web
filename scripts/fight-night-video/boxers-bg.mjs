// Fond de « 7 jours. 7 rounds. » : les boxeurs bleu et rouge de l'app échangent des coups, en boucle sans raccord.
// Même moteur et même rendu que l'app (MotionDesign/_KIT_EPISODE : engine.mjs = bundle de budyfit/lib/fighterAnimations
// + fighterMorph + fighterDistort ; fightscreen.mjs = dessin des lignes), sur le fond exact de la section (#F4F5F8),
// pour que le site puisse la poser à faible opacité derrière les cartes de round sans bord visible.
//   node scripts/fight-night-video/boxers-bg.mjs
// Sorties : public/videos/match-boxers.mp4 + .webm + match-boxers-poster.jpg (12 s, 30 i/s, muettes).
import { spawn, spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const KIT = "C:/Users/guill/Desktop/Attax/MotionDesign/_KIT_EPISODE/";
const { fighterSvg, toPng, BLUE, RED } = await import(pathToFileURL(KIT + "fightscreen.mjs").href);
const { ANIMATIONS, REACTIONS } = await import(pathToFileURL(KIT + "engine.mjs").href);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = path.join(ROOT, "public", "videos");
const W = 1440, H = 810, FPS = 30, DUR = 12000, BG = "#F4F5F8";
// Un échange par « round » : bleu et rouge frappent tour à tour (coup + réaction de l'autre, comme dans l'app).
// 12 s = 4 cycles de garde (idle 3 s) : la boucle repart exactement sur la même pose.
const SEQ = [[500, "b", "jab"], [1800, "r", "cross"], [3200, "b", "hook"], [5100, "r", "body_shot"], [6600, "b", "cross"], [7900, "r", "highkick"], [9800, "b", "lowkick"]];
const S = 760, OY = H - 18 - 0.93 * S;

function pose(side, T) {
  let cur = null;
  for (const [t0, by, k] of SEQ) {
    const r = REACTIONS[k];
    if (by === side && T >= t0 && T < t0 + ANIMATIONS[k].duration) cur = { key: k, t: T - t0 };
    if (by !== side && T >= t0 + r.delayMs && T < t0 + r.delayMs + ANIMATIONS[r.reaction].duration) cur = { key: r.reaction, t: T - t0 - r.delayMs };
  }
  return cur ?? { key: "idle", t: (T + (side === "r" ? 1300 : 0)) % ANIMATIONS.idle.duration };
}

const frame = (T) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="${BG}"/>
${fighterSvg({ ...pose("r", T), tSec: T / 1000, cx: W / 2 + 122, oy: OY, S, facing: "left", seed: 91 }, RED)}${fighterSvg({ ...pose("b", T), tSec: T / 1000, cx: W / 2 - 122, oy: OY, S, facing: "right", seed: 37 }, BLUE)}</svg>`;

const write = (st, b) => new Promise((r) => (st.write(b) ? r() : st.once("drain", r)));
const master = path.join(OUT, "match-boxers.mp4");
const enc = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-i", "-", "-vf", "scale=1280:-2", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "26", "-preset", "slow", "-tune", "animation", "-an", "-movflags", "+faststart", master], { stdio: ["pipe", "ignore", "inherit"] });
const n = Math.round((DUR / 1000) * FPS);
for (let f = 0; f < n; f++) await write(enc.stdin, toPng(frame((f / FPS) * 1000), W));
enc.stdin.end();
await new Promise((r) => enc.on("close", r));
spawnSync("ffmpeg", ["-y", "-loglevel", "error", "-i", master, "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "40", "-row-mt", "1", "-an", path.join(OUT, "match-boxers.webm")], { stdio: "inherit" });
spawnSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", "0.3", "-i", master, "-frames:v", "1", "-q:v", "4", path.join(OUT, "match-boxers-poster.jpg")], { stdio: "inherit" });
console.log("ok", master);
