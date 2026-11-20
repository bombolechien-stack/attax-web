"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { useInView, clipReveal, fadeUp } from "@/hooks/useInView";
import AppScanlines from "./AppScanlines";

// « La ligue » : le classement de l'app (app/(tabs)/rank.tsx) qui vit soir après soir, au lieu de trois citations.
// Une ligue de 7 jours rejouée en boucle : chaque « soir » (verdict de 21h30), les points tombent, les lignes changent
// de place (flèches de mouvement), le fil de ligue raconte le soir, et le détail des points de TA soirée s'allume.
// Barème réel (docs/regles/04-classement-progression.md § 1) : +1 point par PV retiré, +2 par match gagné, +1 objectif
// du jour atteint avant 21h30, +1 jour binôme (les deux ont atteint leur objectif). Zones : les 2 premiers montent,
// les 2 derniers descendent (ligues classées, § 2.5). Avatars = visages inventés des exemples de l'app.

const BLUE = "#0443FD", RED = "#EC0420", INK = "#09090B", SUB = "#6B7280";
const FONT = "var(--font-manrope), var(--font-jakarta), sans-serif";
const NIGHTS = 7, NIGHT_MS = 3400, END_HOLD_MS = 5200;

type P = { id: string; name: { en: string; fr: string }; pts: number[] };
// Points cumulés après chaque soir (1 → 7). Aucune égalité, pour un ordre net à chaque soir ; ton gain du soir = YOU_NIGHT.
const PLAYERS: P[] = [
  { id: "julia", name: { en: "Julia", fr: "Julia" }, pts: [7, 14, 20, 24, 28, 32, 38] },
  { id: "leo", name: { en: "Leo", fr: "Léo" }, pts: [6, 12, 17, 23, 27, 31, 35] },
  { id: "you", name: { en: "You", fr: "Toi" }, pts: [5, 9, 14, 20, 26, 33, 40] },
  { id: "sam", name: { en: "Sam", fr: "Sam" }, pts: [3, 10, 16, 22, 29, 36, 43] },
  { id: "nina", name: { en: "Nina", fr: "Nina" }, pts: [4, 8, 12, 16, 19, 24, 28] },
  { id: "sophie", name: { en: "Sophie", fr: "Sophie" }, pts: [2, 7, 13, 17, 22, 26, 31] },
  { id: "omar", name: { en: "Omar", fr: "Omar" }, pts: [1, 6, 10, 13, 17, 20, 24] },
  { id: "mei", name: { en: "Mei", fr: "Mei" }, pts: [0, 4, 8, 11, 15, 18, 21] },
];

// Ta soirée, ligne par ligne du barème (somme = ton gain du soir).
const YOU_NIGHT = [
  { hp: 2, win: 2, goal: 1, duo: 0 },
  { hp: 1, win: 2, goal: 1, duo: 0 },
  { hp: 2, win: 2, goal: 1, duo: 0 },
  { hp: 2, win: 2, goal: 1, duo: 1 },
  { hp: 3, win: 2, goal: 1, duo: 0 },
  { hp: 3, win: 2, goal: 1, duo: 1 },
  { hp: 3, win: 2, goal: 1, duo: 1 },
];

const COPY = {
  en: {
    label: "THE LEAGUE",
    h2: ["Every night,", "the table moves."],
    body: "A league lasts 7 days. Every duel feeds the table, and every night at 9:30 PM the verdict reshuffles it. Climb into the blue zone, stay out of the red.",
    pointsKick: "LEAGUE POINTS",
    tonight: "YOU TONIGHT",
    rules: [
      { k: "hp", t: "Per HP you take from your opponent", v: "+1" },
      { k: "win", t: "Per match won", v: "+2" },
      { k: "goal", t: "Daily goal hit before 9:30 PM", v: "+1" },
      { k: "duo", t: "Duo day: you and your partner both hit your goal", v: "+1" },
    ],
    zones: "Top 2 move up a rank, bottom 2 move down.",
    league: "PRO · LEAGUE 100",
    night: (n: number) => `NIGHT ${n} / 7`,
    over: "LEAGUE OVER",
    standings: "LEAGUE STANDINGS",
    points: "POINTS",
    promo: "PROMOTION",
    releg: "RELEGATION",
    feedKick: "LEAGUE FEED · 9:30 PM",
    feed: [
      "Julia opens the league in 1st place.",
      "Leo stays on Julia's heels.",
      "Sam wins again and climbs to 3rd.",
      "Leo is 1 point behind Julia. The top spot is up for grabs.",
      "The king fell: Julia drops, Sam takes 1st with 4 wins in a row.",
      "You pass Julia and Leo and take 2nd place.",
      "League over. Sam is champion, and you both move up a rank.",
    ],
    pause: "Pause the league",
    play: "Play the league",
  },
  fr: {
    label: "LA LIGUE",
    h2: ["Chaque soir,", "le classement bouge."],
    body: "Une ligue dure 7 jours. Chaque duel nourrit le classement, et chaque soir à 21h30 le verdict le rebat. Monte dans la zone bleue, reste hors de la rouge.",
    pointsKick: "POINTS DE LIGUE",
    tonight: "TOI CE SOIR",
    rules: [
      { k: "hp", t: "Par PV retiré à ton adversaire", v: "+1" },
      { k: "win", t: "Par match gagné", v: "+2" },
      { k: "goal", t: "Objectif du jour atteint avant 21h30", v: "+1" },
      { k: "duo", t: "Jour binôme : ton binôme et toi atteignez votre objectif", v: "+1" },
    ],
    zones: "Les 2 premiers montent d'un rang, les 2 derniers descendent.",
    league: "PRO · LIGUE 100",
    night: (n: number) => `SOIR ${n} / 7`,
    over: "LIGUE TERMINÉE",
    standings: "CLASSEMENT DE LA LIGUE",
    points: "POINTS",
    promo: "MONTÉE",
    releg: "DESCENTE",
    feedKick: "FIL DE LA LIGUE · 21H30",
    feed: [
      "Julia ouvre la ligue à la 1re place.",
      "Léo reste dans la roue de Julia.",
      "Sam gagne encore et monte à la 3e place.",
      "Léo à 1 point de Julia. La 1re place se joue.",
      "Le roi a plié : Julia chute, Sam prend la tête avec 4 victoires de suite.",
      "Tu passes Julia et Léo et prends la 2e place.",
      "Ligue terminée. Sam est champion, et vous montez tous les deux d'un rang.",
    ],
    pause: "Mettre la ligue en pause",
    play: "Relancer la ligue",
  },
};

const order = (n: number) => [...PLAYERS].sort((a, b) => b.pts[n] - a.pts[n]).map((p) => p.id);
// Forme des 5 derniers soirs (gagné si le soir a rapporté au moins 5 points : victoire + PV retirés).
const form = (p: P, n: number) => {
  const out: boolean[] = [];
  for (let k = Math.max(0, n - 4); k <= n; k++) out.push(p.pts[k] - (k ? p.pts[k - 1] : 0) >= 5);
  return out;
};

export default function Testimonials() {
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref: headRef, visible: headVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: tableRef, visible: tableVisible } = useInView<HTMLDivElement>(0.25);
  const [night, setNight] = useState(5); // index du soir (0 → 6) ; au premier rendu, un soir parlant
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);

  // Lancement : à l'arrivée à l'écran, la ligue repart du 1er soir et avance d'un soir toutes les 3,4 s.
  useEffect(() => {
    if (!tableVisible || started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => { setStarted(true); setNight(0); }, 0);
    return () => clearTimeout(id);
  }, [tableVisible, started]);
  useEffect(() => {
    if (!started || !tableVisible || paused) return;
    const id = setTimeout(() => setNight((n) => (n + 1) % NIGHTS), night === NIGHTS - 1 ? END_HOLD_MS : NIGHT_MS);
    return () => clearTimeout(id);
  }, [started, tableVisible, paused, night]);

  const now = order(night);
  const prev = night > 0 ? order(night - 1) : now;
  const mine = YOU_NIGHT[night];
  const gain = mine.hp + mine.win + mine.goal + mine.duo;
  const over = night === NIGHTS - 1;

  return (
    <section id="league" className="lg-section">
      <div className="lg-inner">
        {/* Le texte et le barème */}
        <div ref={headRef} className="lg-copy">
          <p style={{ ...fadeUp(headVisible, 0) }} className="lg-label">{c.label}</p>
          <h2 className="lg-h2">
            <div><span style={clipReveal(headVisible, 80)}>{c.h2[0]}</span></div>
            <div><span style={{ ...clipReveal(headVisible, 200), color: "#4D7BFF" }}>{c.h2[1]}</span></div>
          </h2>
          <p style={{ ...fadeUp(headVisible, 300) }} className="lg-body">{c.body}</p>

          <div className="lg-rules" style={fadeUp(headVisible, 420)}>
            <div className="lg-rules-head">
              <span>{c.pointsKick}</span>
              <span>{c.tonight} <b key={night} className="lg-gain">+{gain}</b></span>
            </div>
            {c.rules.map((r) => {
              const v = mine[r.k as keyof typeof mine];
              return (
                <div key={r.k} className="lg-rule">
                  <span className="lg-rule-v">{r.v}</span>
                  <span className="lg-rule-t">{r.t}</span>
                  <span key={`${r.k}-${night}`} className={v > 0 ? "lg-rule-you is-on" : "lg-rule-you"}>{v > 0 ? `+${v}` : "0"}</span>
                </div>
              );
            })}
            <div className="lg-zones">
              <span className="lg-zone-dot" style={{ background: BLUE }} />
              <span className="lg-zone-dot" style={{ background: RED }} />
              {c.zones}
            </div>
          </div>
        </div>

        {/* Le classement de l'app, vivant */}
        <div ref={tableRef} className="lg-board-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="lg-board">
            <div className="lg-board-top">
              <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.65625rem", letterSpacing: "0.2em", color: SUB }}>{c.league}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <span key={night} className="lg-night" style={{ color: over ? BLUE : INK }}>{over ? c.over : c.night(night + 1)}</span>
                <button type="button" className="lg-pause" onClick={() => setPaused((p) => !p)} aria-label={paused ? c.play : c.pause} title={paused ? c.play : c.pause}>
                  {paused
                    ? <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 1l7 4-7 4z" fill="currentColor" /></svg>
                    : <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 1h2v8H2zM6 1h2v8H6z" fill="currentColor" /></svg>}
                </button>
              </span>
            </div>
            {/* La frise des 7 soirs, comme « Match 6 of 7 » dans l'app */}
            <div className="lg-progress" aria-hidden="true">
              {Array.from({ length: NIGHTS }, (_, k) => (
                <span key={k} style={{ background: k < night ? INK : k === night ? BLUE : "#D9DEE6" }} />
              ))}
            </div>

            <div className="lg-table-head">
              <span>{c.standings}</span>
              <span>{c.points}</span>
            </div>

            <div className="lg-rows" style={{ ["--rows" as string]: PLAYERS.length }}>
              {/* Filets de zone : bleu sous la 2e place, rouge au-dessus des 2 dernières */}
              <div className="lg-zone-line lg-zone-up" style={{ top: "calc(var(--row) * 2)" }}><span>▲ {c.promo}</span></div>
              <div className="lg-zone-line lg-zone-down" style={{ top: "calc(var(--row) * 6)" }}><span>▼ {c.releg}</span></div>

              {PLAYERS.map((p) => {
                const pos = now.indexOf(p.id), was = prev.indexOf(p.id), move = was - pos;
                const me = p.id === "you";
                const zone = pos < 2 ? BLUE : pos >= 6 ? RED : null;
                return (
                  <div key={p.id} className={me ? "lg-row is-me" : "lg-row"} style={{ transform: `translateY(calc(var(--row) * ${pos}))` }}>
                    {me && <AppScanlines w={560} h={56} color="#FFFFFF" opacity={0.07} />}
                    <span className="lg-pos" style={{ color: me ? "#fff" : zone ?? INK }}>{pos + 1}</span>
                    <span className="lg-avatar"><Image src={`/league/${p.id}.webp`} alt="" width={48} height={48} /></span>
                    <span className="lg-name">
                      <span>{p.name[lang]}</span>
                      <span className="lg-form" aria-hidden="true">
                        {form(p, night).map((w, k) => <i key={k} style={{ background: w ? (me ? "#7EA0FF" : BLUE) : me ? "#FF6B7D" : RED }} />)}
                      </span>
                    </span>
                    <span className="lg-move" style={{ color: move > 0 ? (me ? "#7EA0FF" : BLUE) : move < 0 ? (me ? "#FF6B7D" : RED) : "transparent" }}>
                      {move > 0 ? `▲${move}` : move < 0 ? `▼${-move}` : "·"}
                    </span>
                    <span key={`${p.id}-${night}`} className="lg-pts">{Math.floor(p.pts[night])}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Le fil de la ligue : l'histoire du soir */}
          <div className="lg-feed">
            <span className="lg-feed-kick">{c.feedKick}</span>
            <p key={`${lang}-${night}`} className="lg-feed-line">{c.feed[night]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
