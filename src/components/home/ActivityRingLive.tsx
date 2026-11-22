"use client";

import { useMemo, useRef } from "react";
import { useScrollProgress, easeOut } from "@/hooks/useScrollProgress";

// Chapitre 02 (22/11, accord du propriétaire) : l'anneau des Activités de l'app, reconstruit à l'identique et lié au
// défilement. Sources : budyfit components/motion/TickRing.tsx (48 crans, profil scanlines : épais en haut et en bas,
// fins sur les côtés ; allumés dans le sens horaire, arrondis au cran), components/v3/GoalRing.tsx (crans #0B1116 sur
// piste #DDE1E7, chiffre Manrope 800 68 pt, « pts aujourd'hui » Manrope 600 13 pt #6B7280) et app/(tabs)/activity.tsx
// (ligne du challenge 13,5 pt, « Challenge réussi » en bleu, sous-ligne 12,5 pt « Soit environ … de course à pied »).
// Posé en calque sur la vraie capture (story/<langue>/activity.webp, 522 × 1016) : on couvre l'anneau et ses deux lignes
// avec le fond de l'app et on redessine aux mêmes coordonnées. Le score monte jusqu'à 864 pts ; le challenge (490 pts,
// celui de la capture) est réussi en cours de route : l'anneau se ferme, la ligne passe à « Challenge réussi ».
const N = 48, SIZE = 236, TARGET = 490, SCORE = 864;
const cq = (px: number) => `${((px * 100) / 522).toFixed(3)}cqw`;   // px de la capture → unités du conteneur (écran)
const T = {
  fr: { of: "pts aujourd'hui", ch: "Challenge : ", before: " avant 21h30 · ", done: "Challenge réussi", plus: " · +1 point au classement", about: "Soit environ ", run: " de course à pied.", loc: "fr-FR" },
  en: { of: "pts today", ch: "Challenge: ", before: " before 9:30 PM · ", done: "Challenge done", plus: " · +1 leaderboard point", about: "About ", run: " of running.", loc: "en-US" },
};

function ticks() {
  const c = SIZE / 2, rO = SIZE / 2 - 1, d = Math.round(SIZE * 0.07), rI = rO - d;
  return Array.from({ length: N }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / N;
    const w = 1.4 + 3.2 * Math.pow(Math.abs(Math.sin(a)), 1.5);
    const ux = Math.cos(a), uy = Math.sin(a), px = -uy * (w / 2), py = ux * (w / 2);
    const f = (v: number) => v.toFixed(2);
    return `M${f(c + rI * ux + px)} ${f(c + rI * uy + py)}L${f(c + rO * ux + px)} ${f(c + rO * uy + py)}L${f(c + rO * ux - px)} ${f(c + rO * uy - py)}L${f(c + rI * ux - px)} ${f(c + rI * uy - py)}Z`;
  });
}

export default function ActivityRingLive({ lang }: { lang: "fr" | "en" }) {
  const t = T[lang];
  const paths = useMemo(ticks, []);
  const tickRefs = useRef<(SVGPathElement | null)[]>([]);
  const numRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const lastN = useRef(-1), lastDone = useRef<boolean | null>(null);
  const nf = (n: number) => n.toLocaleString(t.loc);
  const ref = useScrollProgress<HTMLDivElement>((p) => {
    const cur = Math.round(SCORE * easeOut(p));
    if (numRef.current) numRef.current.textContent = nf(cur);
    const lit = Math.round(Math.min(1, cur / TARGET) * N);
    if (lit !== lastN.current) {
      lastN.current = lit;
      tickRefs.current.forEach((el, i) => el?.setAttribute("fill", i < lit ? "#0B1116" : "#DDE1E7"));
    }
    const done = cur >= TARGET;
    const left = Math.max(0, TARGET - cur), m = Math.max(5, Math.ceil(left / 8 / 5) * 5);
    if (done !== lastDone.current || !done) {
      lastDone.current = done;
      if (lineRef.current) lineRef.current.innerHTML = done
        ? `<b style="color:#0443FD">${t.done}</b>${t.plus}`
        : `${t.ch}<b>${TARGET} pts</b>${t.before}<b>+1 point</b>`;
      if (subRef.current) subRef.current.innerHTML = done ? "&nbsp;" : `${t.about}<b>${m} min</b>${t.run}`;
    }
  }, { start: 0.7, end: 0.05 });
  return (
    <div ref={ref} className="arl" aria-hidden="true">
      <div className="arl-panel" style={{ left: cq(8), width: cq(506), top: cq(160), height: cq(458) }} />
      <svg className="arl-ring" viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ left: cq(261 - 170), top: cq(345 - 170), width: cq(340), height: cq(340) }}>
        {paths.map((d, i) => <path key={i} ref={(el) => { tickRefs.current[i] = el; }} d={d} fill="#DDE1E7" />)}
      </svg>
      <div className="arl-center" style={{ left: cq(261 - 170), top: cq(345 - 170), width: cq(340), height: cq(340) }}>
        <span ref={numRef} className="arl-num" style={{ fontSize: cq(98), lineHeight: cq(106), letterSpacing: cq(-4.3) }}>0</span>
        <span className="arl-of" style={{ fontSize: cq(18.7), marginTop: cq(3) }}>{t.of}</span>
      </div>
      <p ref={lineRef} className="arl-line" style={{ top: cq(546), fontSize: cq(19.4) }} />
      <p ref={subRef} className="arl-sub" style={{ top: cq(582), fontSize: cq(18) }} />
    </div>
  );
}
