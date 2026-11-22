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
//   l'avatar, un voile couvre les boxeurs, sa règle s'écrit ; elle repart ; puis des scanlines rouges quittent le torse
//   de Sophie et filent en arc sur Johnny : −120 pts chez elle, +120 pts chez lui, l'écart bascule
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

/* ═════════════════ 3 · Le round final : Parasite se joue en plein combat (PV inchangés, 4 contre 4) ═════════════════ */
const F = {
  S: 600,                           // la frappe de la carte (onStrike)
  END: 6900,
  PW: 122 * DP, PH: 122 * 1.4 * DP, // carte de combat : PW = min(W × 0,34, (PZ − 36) / 1,4)
  DUEL: 539, PZ: 213 * DP,          // haut du combat dans la capture ; voile = 66 % de la zone
  SLOT: { x: 84, y: 169.5 },        // l'emplacement de carte derrière l'avatar de Johnny (30 pt, −14°)
  AV: { x: 136.5, y: 206, r: 50.5 },
  STEAL: 3350, TRAVEL: 900, STAG: 75,
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
// Les scanlines volées : 9 lignes du torse de Sophie (une sur trois, entre 30 et 72 % de sa hauteur) → celles de Johnny.
const FLY = Array.from({ length: 9 }, (_, i) => ({
  y0: 640 + i * 13.5, x0: 336, w0: [40, 46, 50, 52, 50, 48, 46, 44, 42][i],
  y1: 636 + i * 13.5, x1: 214, w1: [36, 42, 46, 46, 44, 42, 40, 38, 36][i],
}));

export function StealLive({ lang, card, family, tagline, drive }: { lang: "en" | "fr"; card: Card; family: string; tagline: string; drive: Drive }) {
  const T = FIN_TXT[lang];
  const box = useRef<HTMLDivElement>(null);
  const k = useUnit(box);
  const thumb = useRef<HTMLDivElement>(null), flyc = useRef<HTMLDivElement>(null), veil = useRef<HTMLDivElement>(null), panel = useRef<HTMLDivElement>(null);
  const bars = useRef<(HTMLElement | null)[]>([]), popV = useRef<HTMLDivElement>(null), popT = useRef<HTMLDivElement>(null);
  const gap = useRef<HTMLDivElement>(null), blue = useRef<HTMLDivElement>(null), chip = useRef<HTMLDivElement>(null), say = useRef<HTMLDivElement>(null);

  const draw = (q: number) => {
    const t = q * F.END, u = k.current, s = t - F.S;
    // La carte de combat : sort de l'emplacement (30 pt, −14°), vient sur le combat (−7°) ; repart (cardK).
    const ck = s < 0 ? 0 : s < 600 ? 0 : s < 1250 ? inOut3((s - 600) / 650) : s < 2650 ? 1 : s < 3200 ? 1 - inOut3((s - 2650) / 550) : 0;
    const pause = s >= 0 && s < 3260;
    const x1 = 24 * DP + F.PW / 2, y1 = F.DUEL + F.PZ / 2;
    if (flyc.current) {
      flyc.current.style.opacity = pause ? "1" : "0";
      const sc = lerp(30 * DP / F.PW, 1, ck);
      flyc.current.style.transform = `translate3d(${(lerp(F.SLOT.x - x1, 0, ck) * u).toFixed(2)}px, ${(lerp(F.SLOT.y - y1, 0, ck) * u).toFixed(2)}px, 0) scale(${sc.toFixed(4)}) rotate(${lerp(-14, -7, ck).toFixed(3)}deg)`;
    }
    const used = s >= F.STEAL + 600 + F.TRAVEL + 0;
    if (thumb.current) thumb.current.style.opacity = pause ? "0" : used ? "0.35" : "1";
    if (veil.current) veil.current.style.opacity = kf(ck, [0, 0.77, 1], [0, 0.82, 0.82]).toFixed(3);
    if (panel.current) {
      const o = kf(ck, [0, 0.75, 1], [0, 0, 1]);
      panel.current.style.opacity = o.toFixed(3);
      panel.current.style.transform = `translate3d(${(kf(ck, [0, 0.75, 1], [12, 12, 0]) * DP * u).toFixed(2)}px, 0, 0)`;
    }
    // Le vol : chaque ligne part 75 ms après la précédente, 900 ms en arc (26 à 44 pt de hauteur), puis se fond en Johnny.
    const tt = s - F.STEAL;
    FLY.forEach((L, i) => {
      const b = bars.current[i]; if (!b) return;
      const qq = (tt - i * F.STAG) / F.TRAVEL;
      if (qq <= 0 || qq >= 1.35) { b.style.opacity = "0"; return; }
      const e = inOut2(Math.min(1, qq));
      const lift = Math.sin(Math.PI * e) * (26 + (i % 3) * 9) * DP;
      const w = lerp(L.w0, L.w1, e), cx = lerp(L.x0, L.x1, e), cy = lerp(L.y0, L.y1, e) - lift;
      b.style.opacity = (qq < 1 ? 1 : 1 - (qq - 1) / 0.35).toFixed(3);
      b.style.width = `${(w * u).toFixed(2)}px`;
      b.style.transform = `translate3d(${((cx - w / 2) * u).toFixed(2)}px, ${((cy - 1.6) * u).toFixed(2)}px, 0)`;
    });
    // Les points : −120 chez elle dès la première ligne partie, +120 chez lui à l'arrivée de la dernière (StrikePopup).
    const tV = F.S + F.STEAL, tT = F.S + F.STEAL + 8 * F.STAG + F.TRAVEL;
    const pop = (el: HTMLDivElement | null, at: number) => {
      if (!el) return;
      const a = sg(t, at, at + 1100);
      el.style.opacity = (a <= 0 || a >= 1 ? 0 : kf(a, [0, 0.15, 0.7, 1], [0, 1, 1, 0])).toFixed(3);
      el.style.transform = `translate3d(0, ${(-40 * DP * outQ(a) * u).toFixed(2)}px, 0)`;
    };
    pop(popV.current, tV); pop(popT.current, tT);
    const g = t >= tT ? { me: BEFORE.me + STEAL, opp: BEFORE.opp - STEAL } : t >= tV ? { me: BEFORE.me, opp: BEFORE.opp - STEAL } : BEFORE;
    const d = g.me - g.opp;
    if (gap.current) {
      const txt = T.gap(d);
      if (gap.current.textContent !== txt) gap.current.textContent = txt;
      gap.current.style.color = d > 0 ? BLUE : d < 0 ? RED : "#09090B";
    }
    // La répartition (SplitLive) glisse en 420 ms vers la nouvelle part.
    if (blue.current) {
      const share = (x: { me: number; opp: number }) => x.me / (x.me + x.opp);
      const s0 = share(BEFORE), s1 = share({ me: BEFORE.me, opp: BEFORE.opp - STEAL }), s2 = share({ me: BEFORE.me + STEAL, opp: BEFORE.opp - STEAL });
      const v = t < tV ? s0 : t < tT ? lerp(s0, s1, out3(sg(t, tV, tV + 420))) : lerp(s1, s2, out3(sg(t, tT, tT + 420)));
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
    draw(reduced() ? 1 : 0);
    return () => { drive.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const x1 = 24 * DP + F.PW / 2, y1 = F.DUEL + F.PZ / 2;
  return (
    <div ref={box} className="pz" aria-hidden="true">
      <div ref={veil} className="pzf-veil" style={{ top: `calc(${F.DUEL} * var(--c))`, height: `calc(${F.PZ} * var(--c))` }} />
      <div ref={panel} className="pzf-panel" style={{ top: `calc(${F.DUEL} * var(--c))`, height: `calc(${F.PZ} * var(--c))`, left: `calc(${24 * DP + F.PW + 18 * DP} * var(--c))` }}>
        <p className="pzf-kick">{T.kick}</p>
        <p className="pzf-big">{T.big}</p>
        <p className="pzf-line">{T.line}</p>
      </div>
      <div className="pzf-fly">{FLY.map((_, i) => <i key={i} ref={(e) => { bars.current[i] = e; }} />)}</div>
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
