"use client";

import { useEffect, useRef } from "react";
import type React from "react";
import { PortraitCard, type Card } from "./CardsShowcase";

// Chapitre 04 (22/11, demande du coordinateur) : la carte Parasite racontée dans les deux téléphones, pilotée par le
// défilement et réversible. Tout est repris de l'app (budyfit), au pixel près sur les vraies captures :
// · RevealLive = la révélation de la carte à 21h30 (components/reveal/FightNight.tsx → CardFlip, TextRows, FxPanel) :
//   le dos « Attax / SABOTAGE » arrive (420 ms), tremble de plus en plus (1 100 ms), se retourne (460 ms) sur la face
//   portrait, un reflet la traverse (pack de motion 06_Cartes/Carte_06_parasite), puis elle se range de côté (× 0,8,
//   −8°) et son effet s'écrit en face : « PARASITE · JOHNNY », « 20 % », « des points du jour de Sophie ».
// · StealLive = la carte jouée en plein round final (FightNight → onStrike, runSteal) : la carte sort de derrière
//   l'avatar, les boxeurs se figent, un voile les couvre, sa règle s'écrit ; elle repart ; puis des scanlines quittent le
//   torse de Sophie et se posent sur celui de Johnny (runSteal) : −120 pts chez elle, +120 pts chez lui, l'écart bascule
//   (140 pts de retard → 100 pts d'avance), « PARASITE +120 PTS » sous Johnny. Les PV ne bougent pas (4 contre 4).
// Le défilement fait avancer l'HORLOGE de la séquence de l'app (ms) : chaque élément est une fonction de cette horloge.
// Unités : c = 1 px de la capture 522 × 1017 (calc(N * var(--c))) ; 1 pt de l'app = 1,458 c (écran de 358 pt).
// Chiffres : Sophie a 600 pts bruts aujourd'hui (séance + pas) ; 20 % = 120 pts. Au moment de la carte : Johnny 310,
// Sophie 450 (140 de retard) ; après le vol : 430 contre 330 (100 d'avance).

export type Drive = React.MutableRefObject<((q: number) => void) | null>;

const DP = 1.458;                                       // c par pt de l'app
const BLUE = "#0443FD", RED = "#EC0420";
const cl = (v: number) => Math.min(1, Math.max(0, v));
const sg = (t: number, a: number, b: number) => cl((t - a) / (b - a));
const inOut3 = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);    // Easing.inOut(cubic)
const out3 = (t: number) => 1 - Math.pow(1 - t, 3);
const inOut2 = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const outQ = (t: number) => 1 - (1 - t) * (1 - t);
const outExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** Interpolation par paliers (comme Animated.interpolate, bornée). */
function kf(t: number, xs: number[], ys: number[]) {
  if (t <= xs[0]) return ys[0];
  for (let i = 1; i < xs.length; i++) if (t <= xs[i]) return lerp(ys[i - 1], ys[i], (t - xs[i - 1]) / (xs[i] - xs[i - 1]));
  return ys[ys.length - 1];
}
/** Le commentaire du bas : un fondu de 120 ms d'un texte à l'autre (EnergyDuel → LiveCommentary). */
function sayAt(el: HTMLElement | null, t: number, cues: [number, string][]) {
  if (!el) return;
  let i = 0; for (let k = 0; k < cues.length; k++) if (t >= cues[k][0]) i = k;
  const from = cues[i][0], to = cues[i + 1]?.[0] ?? Infinity;
  const o = i === 0 && from <= 0 ? Math.min(1, (to - t) / 120) : Math.min(1, (t - from) / 120, (to - t) / 120);
  if (el.dataset.i !== String(i)) { el.dataset.i = String(i); el.textContent = cues[i][1]; }
  el.style.opacity = cl(o).toFixed(3);
}
function useUnit(box: React.RefObject<HTMLDivElement | null>) {
  const k = useRef(1);
  useEffect(() => {
    const el = box.current; if (!el) return;
    const set = () => { k.current = (el.clientWidth || 522) / 522; };
    set();
    const ro = new ResizeObserver(set); ro.observe(el);
    return () => ro.disconnect();
  }, [box]);
  return k;
}
const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ════════════════════════ 2 · 21h30 : la carte se révèle (page Match, 4 PV contre 4 PV) ════════════════════════ */
const R = {
  CX: 261, CY: 682,                 // centre de la scène des cartes dans la capture
  CW: 146 * DP, CH: 204 * DP,       // CardFlip : cw = round(F5 × 0,62), ch = round(cw × 1,4)
  NH: 291 * DP,                     // hauteur des rangées de noms (scène − 74 pt)
  FS: 84 * DP,                      // TextRows : taille de police
  END: 4700,                        // fin de l'horloge (ms)
  TF: 1660, TE: 3260,               // retournement (t0 + 500 + tremble 1 100 + 60) ; la carte se range (tf + 1 600)
};
const REV_TXT = {
  fr: { fam: "SABOTAGE", kick: "PARASITE · JOHNNY", hero: "20 %", label: "des points du jour de Sophie", detail: "Tu les lui voles en plein combat.", say: ["Ta carte.", "Parasite.", "Parasite : 20 % des points du jour de Sophie."] },
  en: { fam: "SABOTAGE", kick: "PARASITE · JOHNNY", hero: "20%", label: "of Sophie's points today", detail: "You steal them mid-fight.", say: ["Your card.", "Parasite.", "Parasite: 20% of Sophie's points today."] },
};
const COPIES = 8;

export function RevealLive({ lang, card, family, tagline, drive }: { lang: "en" | "fr"; card: Card; family: string; tagline: string; drive: Drive }) {
  const T = REV_TXT[lang];
  const box = useRef<HTMLDivElement>(null);
  const k = useUnit(box);
  const rows = useRef<HTMLDivElement>(null), move = useRef<HTMLDivElement>(null), inner = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLDivElement>(null), face = useRef<HTMLDivElement>(null), shine = useRef<HTMLDivElement>(null);
  const lines = useRef<(HTMLElement | null)[]>([]), say = useRef<HTMLDivElement>(null);
  const st = useRef({ t: -1, raf: 0, ww: 0 });

  // Le tremblement (CardFlip : ±2,2° × 0,25 → 1,25, un aller tous les 70 ms) suit le temps réel tant que l'horloge est
  // dans la fenêtre du tremblement : arrêté sur cette image, la carte continue de trembler, comme dans l'app.
  const tremble = (now: number) => {
    const t = st.current.t;
    const amp = t < 500 || t > R.TF ? 0 : t > R.TF - 60 ? (R.TF - t) / 60 * 1.25 : 0.25 + sg(t, 500, 1600);
    const ph = (now / 70) % 2, tri = ph < 1 ? ph * 2 - 1 : 3 - ph * 2;
    const inn = out3(sg(t, 0, 420));
    if (inner.current) inner.current.style.transform = `translate3d(0, ${((1 - inn) * 26 * DP * k.current).toFixed(2)}px, 0) rotate(${(tri * 2.2 * amp).toFixed(3)}deg)`;
    return amp > 0;
  };
  const loop = (now: number) => { if (tremble(now)) st.current.raf = requestAnimationFrame(loop); else st.current.raf = 0; };

  const draw = (q: number) => {
    const t = q * R.END, u = k.current, S = st.current;
    S.t = t;
    // Les rangées « Johnny » (TextRows, look « italic ») : entrée par les côtés (quintique, 820 ms), dérive, sortie à b.
    const el = rows.current;
    if (el) {
      if (!S.ww) { const f = el.querySelector("span") as HTMLElement | null; if (f) S.ww = f.offsetWidth + R.FS * 0.08 * u; }
      const ww = S.ww || 455 * u, Wp = 522 * u, b = R.TE - 120;
      for (let i = 0; i < 3; i++) {
        const row = el.children[i] as HTMLElement | undefined; if (!row) continue;
        const dir = i % 2 ? 1 : -1, travel = (460 + i * 40) * DP * u;
        const kk = sg(t, i * 70, i * 70 + 820), e = 1 - Math.pow(1 - kk, 5);
        const ko = sg(t, b + i * 30, b + i * 30 + 420);
        const drift = Math.max(0, t) * 0.022 * DP * u;
        const base = -Wp - ((i * 0.5 * ww) % ww);
        const x = base + dir * ((1 - e) * travel + drift + ko * ko * ko * travel);
        row.style.transform = `translate3d(${x.toFixed(1)}px, 0, 0) skewX(-11.31deg)`;
        row.style.opacity = (sg(t, i * 70, i * 70 + 451) * (1 - ko)).toFixed(3);
      }
    }
    // La carte : se range de côté (cardX, 520 ms) ; retournement (460 ms) ; reflet après le retournement.
    const cx = inOut3(sg(t, R.TE, R.TE + 520));
    if (move.current) move.current.style.transform = `translate3d(${(-0.27 * 358 * DP * cx * u).toFixed(2)}px, 0, 0) scale(${lerp(1.15, 0.8, cx).toFixed(4)}) rotate(${(-8 * cx).toFixed(3)}deg)`;
    if (inner.current) inner.current.style.opacity = sg(t, 0, 420).toFixed(3);
    const f = inOut3(sg(t, R.TF, R.TF + 460));
    if (back.current) { back.current.style.transform = `rotateY(${(Math.min(f, 0.5) * 180).toFixed(2)}deg)`; back.current.style.opacity = f < 0.5 ? "1" : "0"; }
    if (face.current) { face.current.style.transform = `rotateY(${(f < 0.5 ? -90 : -90 + (f - 0.5) * 180).toFixed(2)}deg)`; face.current.style.opacity = f < 0.5 ? "0" : "1"; }
    const sh = inOut2(sg(t, 2520, 3020));
    if (shine.current) { shine.current.style.transform = `translate3d(${(-130 + 260 * sh).toFixed(1)}%, 0, 0)`; shine.current.style.opacity = sh > 0 && sh < 1 ? "1" : "0"; }
    // Le panneau de l'effet (FxPanel) : 4 lignes décalées de 0 / 70 / 150 / 230 ms, 480 ms chacune, glissent de 16 pt.
    [0, 70, 150, 230].forEach((d, i) => {
      const l = lines.current[i]; if (!l) return;
      const e = out3(sg(t, R.TE + d, R.TE + d + 480));
      l.style.opacity = e.toFixed(3);
      l.style.transform = `translate3d(${(16 * DP * (1 - e) * u).toFixed(2)}px, 0, 0)`;
    });
    sayAt(say.current, t, [[0, T.say[0]], [R.TF + 520, T.say[1]], [R.TE, T.say[2]]]);
    if (!tremble(performance.now())) { if (S.raf) cancelAnimationFrame(S.raf); S.raf = 0; }
    else if (!S.raf) S.raf = requestAnimationFrame(loop);
  };
  useEffect(() => {
    drive.current = draw;
    draw(reduced() ? 1 : 0);
    const s = st.current;
    return () => { drive.current = null; if (s.raf) cancelAnimationFrame(s.raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
  // La police chargée change la largeur d'un nom : on remesure.
  useEffect(() => { document.fonts?.ready.then(() => { st.current.ww = 0; if (st.current.t >= 0) draw(st.current.t / R.END); }); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, []);

  return (
    <div ref={box} className="pz" aria-hidden="true">
      <div className="pzr-rows" style={{ top: `calc(${R.CY - R.NH / 2} * var(--c))`, height: `calc(${R.NH} * var(--c))` }}>
        <div ref={rows} className="pzr-tilt">
          {[0, 1, 2].map((i) => (
            <div key={i} className="pzr-row" style={{ top: `calc(${(40 + 88.2 + i * 128) - R.FS * 0.8825} * var(--c))` }}>
              {Array.from({ length: COPIES }, (_, n) => <span key={n} className={(n + i) % 2 === 0 ? "is-fill" : "is-line"}>Johnny</span>)}
            </div>
          ))}
        </div>
      </div>
      <div className="pzr-card" style={{ left: `calc(${R.CX - R.CW / 2} * var(--c))`, top: `calc(${R.CY - R.CH / 2} * var(--c))`, width: `calc(${R.CW} * var(--c))`, height: `calc(${R.CH} * var(--c))` }}>
        <div ref={move} className="pzr-move">
          <div ref={inner} className="pzr-inner">
            <div ref={back} className="pzr-back">
              {Array.from({ length: 26 }, (_, i) => <i key={i} style={{ top: `${((i + 0.5) * 100) / 26}%` }} />)}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pzr-mark" src="/images/flag.svg" alt="" />
              <b>Attax</b><em /><small>{T.fam}</small>
            </div>
            <div ref={face} className="pzr-face">
              <PortraitCard card={card} family={family} tagline={tagline} />
              <div className="pzr-shine"><div ref={shine} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pzr-panel" style={{ top: `calc(${R.CY - 147} * var(--c))`, height: "calc(300 * var(--c))" }}>
        <p ref={(e) => { lines.current[0] = e; }} className="pzr-kick">{T.kick}</p>
        <p ref={(e) => { lines.current[1] = e; }} className="pzr-hero">{T.hero}</p>
        <p ref={(e) => { lines.current[2] = e; }} className="pzr-label">{T.label}</p>
        <p ref={(e) => { lines.current[3] = e; }} className="pzr-detail">{T.detail}</p>
      </div>
      <div ref={say} className="pz-say" style={{ top: "calc(938.4 * var(--c))" }} />
    </div>
  );
}


/* ═════════════════ 3 · Le round final : Parasite se joue en plein combat (PV inchangés, 4 contre 4) ═════════════════
 * 22/11 (retour du propriétaire : « exactement comme dans l'app, les lignes rouges quittent le boxeur rouge et
 * s'intègrent parfaitement dans le bleu ») : les boxeurs ne sont plus une vidéo mais les VRAIES scanlines du moteur de
 * l'app (lib/fighterMorph + fighterAnimations + fighterDistort, état « engaged »), précalculées par
 * MotionDesign/_KIT_EPISODE/bake-parasite-fight.mjs dans public/fight/parasite-fight.bin (30 i/s, indices d'origine
 * des lignes, gzip) et dessinées ici dans un <canvas> avec les mêmes calculs que CombatFighter / fightscreen.mjs.
 * Chorégraphie = celle de FighterScene (la boucle d'avant) : bleu jab 300 ms, rouge cross 1 250 ms, bleu high kick
 * 2 300 ms. Le vol = runSteal (FightNight.tsx) : 9 lignes du torse de Sophie (0,3 < y < 0,72, une sur trois), chacune
 * vers la ligne de Johnny la plus proche en hauteur ; départ toutes les 75 ms, 900 ms de vol en arc
 * (lift = sin(πe)·(26 + (k % 3)·9) pt) ; largeur et épaisseur passent de l'une à l'autre ; ses lignes disparaissent
 * au départ (setHidden), celles de Johnny deviennent rouges à l'arrivée (setExtra) et le restent quand le combat reprend. */
const F = {
  S: 1750,                          // la frappe de la carte (onStrike) ; les boxeurs se figent 450 ms après
  FREEZE: 450, RESUME: 5100,        // gelés de S + 450 à S + 5 100 (fin du vol + 250 ms)
  END: 1750 + 5100 + 2100,
  PW: 122 * DP, PH: 122 * 1.4 * DP, // carte de combat : PW = min(W × 0,34, (PZ − 36) / 1,4)
  DUEL: 539, PZ: 213 * DP,          // haut du combat dans la capture ; voile = 66 % de la zone
  SLOT: { x: 84, y: 169.5 },        // l'emplacement de carte derrière l'avatar de Johnny (30 pt, −14°)
  AV: { x: 136.5, y: 206, r: 50.5 },
  STEAL: 3350, STAG: 75, TRAVEL: 900,
};
const STEAL = 120, BEFORE = { me: 310, opp: 450 };
const FIN_TXT = {
  fr: {
    kick: "PARASITE · JOHNNY", big: "Tu voles 20 % de ses points du jour", line: "Ces points changent de camp.", chip: `PARASITE +${STEAL} PTS`,
    gap: (d: number) => (d === 0 ? "Égalité" : d > 0 ? `${d} pts d'avance` : `${-d} pts de retard`),
    say: ["JOHNNY enchaîne un combo.", "Oh. JOHNNY sort une carte de ses gants…", "Parasite : Tu voles 20 % de ses points du jour", `${STEAL} pts changent de camp.`, "SOPHIE a du mal à s'en remettre."],
  },
  en: {
    kick: "PARASITE · JOHNNY", big: "You steal 20% of their points today", line: "These points change sides.", chip: `PARASITE +${STEAL} PTS`,
    gap: (d: number) => (d === 0 ? "Tied" : d > 0 ? `${d} pts ahead` : `${-d} pts behind`),
    say: ["JOHNNY spins a spin kick.", "Oh. JOHNNY pulls a card from their gloves…", "Parasite: You steal 20% of their points today", `${STEAL} pts change sides.`, "SOPHIE is struggling to recover."],
  },
};

/* ── Les boxeurs précalculés ── */
type FLine = { i: number; faded: boolean; x1: number; x2: number; y: number; th: number[] };
type Fight = { fps: number; frames: [FLine[], FLine[]][] };      // [rouge, bleu]
let FIGHT: Promise<Fight | null> | null = null;
function loadFight(): Promise<Fight | null> {
  if (FIGHT) return FIGHT;
  FIGHT = (async () => {
    try {
      const res = await fetch("/fight/parasite-fight.bin");
      if (!res.ok) return null;
      let buf = new Uint8Array(await res.arrayBuffer());
      if (buf[0] === 0x1f && buf[1] === 0x8b) {
        const ds = new Blob([buf]).stream().pipeThrough(new DecompressionStream("gzip"));
        buf = new Uint8Array(await new Response(ds).arrayBuffer());
      }
      const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
      let o = 0;
      const u16 = () => { const v = dv.getUint16(o, true); o += 2; return v; }, u8 = () => dv.getUint8(o++);
      const q = (v: number) => (v - 16384) / 16384;
      const n = u16(), frames: Fight["frames"] = [];
      for (let f = 0; f < n; f++) {
        const pair: FLine[][] = [];
        for (let s = 0; s < 2; s++) {
          const m = u16(), arr: FLine[] = [];
          for (let k = 0; k < m; k++) {
            const i = u16(), fl = u8(), np = u8(), x1 = q(u16()), x2 = q(u16()), y = q(u16()), th: number[] = [];
            for (let j = 0; j < np; j++) th.push(u8() / 4096);
            arr.push({ i, faded: !!(fl & 1), x1, x2, y, th });
          }
          pair.push(arr);
        }
        frames.push(pair as [FLine[], FLine[]]);
      }
      return { fps: 30, frames };
    } catch { return null; }
  })();
  return FIGHT;
}
/** La pose à τ ms : interpolée entre deux images (lignes de même indice), sinon l'image la plus proche. */
function poseAt(fg: Fight, side: 0 | 1, tau: number): FLine[] {
  const x = Math.max(0, Math.min(fg.frames.length - 1, (tau / 1000) * fg.fps));
  const a = Math.floor(x), b = Math.min(fg.frames.length - 1, a + 1), w = x - a;
  const A = fg.frames[a][side];
  if (w < 0.001 || a === b) return A;
  const B = fg.frames[b][side];
  if (A.length !== B.length) return w < 0.5 ? A : B;
  const out: FLine[] = new Array(A.length);
  for (let k = 0; k < A.length; k++) {
    const p = A[k], r = B[k];
    if (p.i !== r.i || p.th.length !== r.th.length) return w < 0.5 ? A : B;
    out[k] = { i: p.i, faded: p.faded, x1: lerp(p.x1, r.x1, w), x2: lerp(p.x2, r.x2, w), y: lerp(p.y, r.y, w), th: p.th.map((v, j) => lerp(v, r.th[j], w)) };
  }
  return out;
}
// Scène de FighterScene (1 080 × 1 080) : boxeur de taille 1 000, haut du cadre à 60 ; rouge centré à 700 (face à
// gauche), bleu à 380 (face à droite). Dans la capture, la scène [0, 1 080] × [160, 1 080] occupe x 90,97 → 488,85 c,
// y 535,97 c → (même cadrage que la boucle vidéo d'avant, mesuré image par image).
const SC = { S: 1000, OY: 60, CX: [700, 380] as const, K: 0.36841, X0: 90.97, Y0: 535.97 - 160 * 0.36841 };
const BOX = { x: 16, y: 540, w: 490, h: 312 };        // la zone des boxeurs dans la capture (ph6-fight)
const COL = { blue: "#0443FDf2", red: "#EC0420f2" }, FADED_A = 0.76475;
const sceneX = (side: 0 | 1, xn: number) => (side === 0 ? SC.CX[0] + (0.5 - xn) * SC.S : SC.CX[1] + (xn - 0.5) * SC.S);

export function StealLive({ lang, card, family, tagline, drive }: { lang: "en" | "fr"; card: Card; family: string; tagline: string; drive: Drive }) {
  const T = FIN_TXT[lang];
  const box = useRef<HTMLDivElement>(null);
  const k = useUnit(box);
  const cv = useRef<HTMLCanvasElement>(null), fight = useRef<Fight | null>(null), lastQ = useRef(0);
  const thumb = useRef<HTMLDivElement>(null), flyc = useRef<HTMLDivElement>(null), veil = useRef<HTMLDivElement>(null), panel = useRef<HTMLDivElement>(null);
  const popV = useRef<HTMLDivElement>(null), popT = useRef<HTMLDivElement>(null);
  const gap = useRef<HTMLDivElement>(null), blue = useRef<HTMLDivElement>(null), chip = useRef<HTMLDivElement>(null), say = useRef<HTMLDivElement>(null);

  /** Les boxeurs à l'instant t (horloge de la séquence), vol compris. */
  const paint = (t: number) => {
    const c = cv.current, fg = fight.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const px = c.width / BOX.w;                                         // pixels du canvas par c
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#EEF1F7"; ctx.fillRect(0, 0, c.width, c.height);
    if (!fg) return;
    const s = t - F.S;
    const tau = s < F.FREEZE ? t : s < F.RESUME ? F.S + F.FREEZE : F.S + F.FREEZE + (s - F.RESUME);
    const m = SC.K * px;                                                // scène → canvas
    ctx.setTransform(m, 0, 0, m, (SC.X0 - BOX.x) * px, (SC.Y0 - BOX.y) * px);
    const red = poseAt(fg, 0, tau), blu = poseAt(fg, 1, tau);
    // Le vol (runSteal) : les lignes choisies sur la pose GELÉE (celle du départ).
    const frozenR = poseAt(fg, 0, F.S + F.FREEZE), frozenB = poseAt(fg, 1, F.S + F.FREEZE);
    const src = frozenR.filter((l) => l.y > 0.3 && l.y < 0.72 && l.i % 3 === 0).slice(0, 9);
    const dst = src.map((l) => frozenB.reduce((b, x) => (Math.abs(x.y - l.y) < Math.abs(b.y - l.y) ? x : b), frozenB[0]));
    const tt = s - F.STEAL, gone = new Set<number>(), landed = new Set<number>();
    src.forEach((l, j) => { const qq = (tt - j * F.STAG) / F.TRAVEL; if (qq > 0) gone.add(l.i); if (qq >= 1) landed.add(dst[j].i); });
    const body = (side: 0 | 1, ls: FLine[], col: string, hide?: Set<number>, extra?: Set<number>) => {
      const full = new Path2D(), faded = new Path2D(), ex = new Path2D();
      for (const l of ls) {
        if (hide?.has(l.i)) continue;
        const n = l.th.length, step = (l.x2 - l.x1) / (n - 1);
        const p = extra?.has(l.i) ? ex : l.faded ? faded : full;
        p.moveTo(sceneX(side, l.x1), SC.OY + (l.y - l.th[0] / 2) * SC.S);
        for (let j = 1; j < n; j++) p.lineTo(sceneX(side, l.x1 + j * step), SC.OY + (l.y - l.th[j] / 2) * SC.S);
        for (let j = n - 1; j >= 0; j--) p.lineTo(sceneX(side, l.x1 + j * step), SC.OY + (l.y + l.th[j] / 2) * SC.S);
        p.closePath();
      }
      ctx.fillStyle = col; ctx.fill(full);
      ctx.globalAlpha = FADED_A; ctx.fill(faded); ctx.globalAlpha = 1;
      if (extra) { ctx.fillStyle = RED; ctx.fill(ex); }
    };
    body(0, red, COL.red, gone);
    body(1, blu, COL.blue, undefined, landed);
    // Les lignes en vol, à la couleur de la victime.
    if (tt > 0) {
      const dp = DP / SC.K;                                               // 1 pt de l'app en pixels de scène
      const geo = (side: 0 | 1, l: FLine) => {
        const a = sceneX(side, l.x1), b = sceneX(side, l.x2), av = l.th.reduce((x, y) => x + y, 0) / l.th.length;
        return { x: Math.min(a, b), w: Math.abs(b - a), y: SC.OY + l.y * SC.S, th: Math.max(1.6 * dp, av * SC.S) };
      };
      ctx.fillStyle = RED;
      src.forEach((l, j) => {
        const qq = (tt - j * F.STAG) / F.TRAVEL;
        if (qq <= 0 || qq >= 1) return;
        const e = inOut2(qq), A = geo(0, l), B = geo(1, dst[j]);
        const lift = Math.sin(Math.PI * e) * (26 + (j % 3) * 9) * dp;
        const w = lerp(A.w, B.w, e), th = lerp(A.th, B.th, e);
        const cx = lerp(A.x + A.w / 2, B.x + B.w / 2, e), cy = lerp(A.y, B.y, e) - lift;
        ctx.beginPath(); ctx.roundRect(cx - w / 2, cy - th / 2, w, th, th / 2); ctx.fill();
      });
    }
  };

  const draw = (q: number) => {
    lastQ.current = q;
    const t = q * F.END, u = k.current, s = t - F.S;
    paint(t);
    // La carte de combat : sort de l'emplacement (30 pt, −14°), vient sur le combat (−7°) ; repart (cardK).
    const ck = s < 600 ? 0 : s < 1250 ? inOut3((s - 600) / 650) : s < 2650 ? 1 : s < 3200 ? 1 - inOut3((s - 2650) / 550) : 0;
    const pause = s >= 0 && s < 3260;
    const x1 = 24 * DP + F.PW / 2, y1 = F.DUEL + F.PZ / 2;
    if (flyc.current) {
      flyc.current.style.opacity = pause ? "1" : "0";
      const sc = lerp(30 * DP / F.PW, 1, ck);
      flyc.current.style.transform = `translate3d(${(lerp(F.SLOT.x - x1, 0, ck) * u).toFixed(2)}px, ${(lerp(F.SLOT.y - y1, 0, ck) * u).toFixed(2)}px, 0) scale(${sc.toFixed(4)}) rotate(${lerp(-14, -7, ck).toFixed(3)}deg)`;
    }
    // Les points (StrikePopup) : −120 chez elle quand la première ligne part, +120 chez lui quand la dernière arrive.
    const tV = F.S + F.STEAL, tT = tV + 8 * F.STAG + F.TRAVEL;
    if (thumb.current) thumb.current.style.opacity = pause ? "0" : t >= tT ? "0.35" : "1";
    if (veil.current) veil.current.style.opacity = kf(ck, [0, 0.77, 1], [0, 0.82, 0.82]).toFixed(3);
    if (panel.current) {
      panel.current.style.opacity = kf(ck, [0, 0.75, 1], [0, 0, 1]).toFixed(3);
      panel.current.style.transform = `translate3d(${(kf(ck, [0, 0.75, 1], [12, 12, 0]) * DP * u).toFixed(2)}px, 0, 0)`;
    }
    const pop = (el: HTMLDivElement | null, at: number) => {
      if (!el) return;
      const a = sg(t, at, at + 1100);
      el.style.opacity = (a <= 0 || a >= 1 ? 0 : kf(a, [0, 0.15, 0.7, 1], [0, 1, 1, 0])).toFixed(3);
      el.style.transform = `translate3d(0, ${(-40 * DP * outQ(a) * u).toFixed(2)}px, 0)`;
    };
    pop(popV.current, tV); pop(popT.current, tT);
    // L'écart change d'un coup (setGap) ; la répartition glisse en 420 ms (SplitLive).
    const MID = { me: BEFORE.me, opp: BEFORE.opp - STEAL }, AFTER = { me: BEFORE.me + STEAL, opp: BEFORE.opp - STEAL };
    const g = t >= tT ? AFTER : t >= tV ? MID : BEFORE, d = g.me - g.opp;
    if (gap.current) {
      const txt = T.gap(d);
      if (gap.current.textContent !== txt) gap.current.textContent = txt;
      gap.current.style.color = d > 0 ? BLUE : d < 0 ? RED : "#09090B";
    }
    if (blue.current) {
      const sh = (x: { me: number; opp: number }) => x.me / (x.me + x.opp);
      const v = t < tV ? sh(BEFORE) : t < tT ? lerp(sh(BEFORE), sh(MID), out3(sg(t, tV, tV + 420))) : lerp(sh(MID), sh(AFTER), out3(sg(t, tT, tT + 420)));
      blue.current.style.width = `${(4 + 92 * v).toFixed(2)}%`;
    }
    // « PARASITE +120 PTS » sous Johnny (Rise 380 ms : fondu 266 ms, 10 pt de montée).
    if (chip.current) {
      const a = t - tT;
      chip.current.style.opacity = a <= 0 ? "0" : cl(a / 266).toFixed(3);
      chip.current.style.transform = `translate3d(0, ${(10 * DP * (1 - outExpo(cl(a / 380))) * u).toFixed(2)}px, 0)`;
    }
    sayAt(say.current, t, [[0, T.say[0]], [F.S, T.say[1]], [F.S + 1400, T.say[2]], [F.S + 3400, T.say[3]], [F.S + 5100, T.say[4]]]);
  };
  useEffect(() => {
    drive.current = draw;
    draw(reduced() ? 1 : lastQ.current);
    return () => { drive.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
  // Le canvas à la résolution de l'écran ; les données des boxeurs chargées une fois.
  useEffect(() => {
    const c = cv.current; if (!c) return;
    const fit = () => { const r = c.getBoundingClientRect(), dpr = Math.min(3, window.devicePixelRatio || 1); c.width = Math.max(1, Math.round(r.width * dpr)); c.height = Math.max(1, Math.round(r.height * dpr)); draw(lastQ.current); };
    fit();
    const ro = new ResizeObserver(fit); ro.observe(c);
    let alive = true;
    loadFight().then((fg) => { if (alive && fg) { fight.current = fg; draw(lastQ.current); } });
    return () => { alive = false; ro.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const x1 = 24 * DP + F.PW / 2, y1 = F.DUEL + F.PZ / 2;
  return (
    <div ref={box} className="pz" aria-hidden="true">
      <canvas ref={cv} className="pzf-fight" style={{ left: `calc(${BOX.x} * var(--c))`, top: `calc(${BOX.y} * var(--c))`, width: `calc(${BOX.w} * var(--c))`, height: `calc(${BOX.h} * var(--c))` }} />
      <div ref={veil} className="pzf-veil" style={{ top: `calc(${F.DUEL} * var(--c))`, height: `calc(${F.PZ} * var(--c))` }} />
      <div ref={panel} className="pzf-panel" style={{ top: `calc(${F.DUEL} * var(--c))`, height: `calc(${F.PZ} * var(--c))`, left: `calc(${24 * DP + F.PW + 18 * DP} * var(--c))` }}>
        <p className="pzf-kick">{T.kick}</p>
        <p className="pzf-big">{T.big}</p>
        <p className="pzf-line">{T.line}</p>
      </div>
      <div ref={popV} className="pzf-pop is-opp" style={{ top: `calc(${F.DUEL + 110 * DP} * var(--c))` }}>−{STEAL} pts</div>
      <div ref={popT} className="pzf-pop is-me" style={{ top: `calc(${F.DUEL + 110 * DP} * var(--c))` }}>+{STEAL} pts</div>
      <div className="pzf-slot" style={{ WebkitMaskImage: `radial-gradient(circle at calc(${F.AV.x} * var(--c)) calc(${F.AV.y} * var(--c)), transparent calc(${F.AV.r - 0.6} * var(--c)), #000 calc(${F.AV.r + 0.4} * var(--c)))`, maskImage: `radial-gradient(circle at calc(${F.AV.x} * var(--c)) calc(${F.AV.y} * var(--c)), transparent calc(${F.AV.r - 0.6} * var(--c)), #000 calc(${F.AV.r + 0.4} * var(--c)))` }}>
        <div ref={thumb} className="pzf-thumb" style={{ left: `calc(${F.SLOT.x - 15 * DP} * var(--c))`, top: `calc(${F.SLOT.y - 21 * DP} * var(--c))`, width: `calc(${30 * DP} * var(--c))` }}>
          <PortraitCard card={card} family={family} tagline={tagline} />
        </div>
      </div>
      <div ref={flyc} className="pzf-card" style={{ left: `calc(${x1 - F.PW / 2} * var(--c))`, top: `calc(${y1 - F.PH / 2} * var(--c))`, width: `calc(${F.PW} * var(--c))` }}>
        <PortraitCard card={card} family={family} tagline={tagline} />
      </div>
      <div ref={chip} className="pzf-chip">{T.chip}</div>
      <div ref={gap} className="pzf-gap" />
      <div className="pzf-split"><div ref={blue} /></div>
      <div ref={say} className="pz-say" style={{ top: "calc(912.5 * var(--c))" }} />
    </div>
  );
}
