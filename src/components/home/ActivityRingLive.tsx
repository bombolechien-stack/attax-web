"use client";

import { useMemo, useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

// Chapitre 02 (22/11, accord du propriétaire) : l'anneau des Activités de l'app, reconstruit à l'identique et lié au
// défilement. Sources : budyfit components/motion/TickRing.tsx (48 crans, profil scanlines : épais en haut et en bas,
// fins sur les côtés ; allumés dans le sens horaire, arrondis au cran), components/v3/GoalRing.tsx (crans #0B1116 sur
// piste #DDE1E7, chiffre Manrope 800 68 pt, « pts aujourd'hui » Manrope 600 13 pt #6B7280) et app/(tabs)/activity.tsx
// (ligne du challenge 13,5 pt, « Challenge réussi » en bleu, sous-ligne 12,5 pt « Soit environ … de course à pied »).
// Posé en calque sur la vraie capture (story/<langue>/activity.webp, 522 × 1016) : on couvre l'anneau et ses deux lignes
// avec le fond de l'app et on redessine aux mêmes coordonnées. Le score monte jusqu'à 864 pts ; le challenge (820 pts,
// celui de la capture) est réussi en cours de route : l'anneau se ferme, la ligne passe à « Challenge réussi ».
const N = 48, SIZE = 236, TARGET = 820, SCORE = 864;
const cq = (px: number) => `${((px * 100) / 522).toFixed(3)}cqw`;   // px de la capture → unités du conteneur (écran)
const T = {
  fr: { of: "pts aujourd'hui", ch: "Challenge : ", before: " avant 21h30 · ", done: "Challenge réussi", plus: " · +1 point au classement", about: "Soit environ ", run: " de course à pied.", loc: "fr-FR", d1: "Léa a validé.", d2: "À toi.", e1: "Validé à deux.", e2: "+1 ce soir.", x0: 102, tx: 190, cx: 436 },
  en: { of: "pts today", ch: "Challenge: ", before: " before 9:30 PM · ", done: "Challenge done", plus: " · +1 leaderboard point", about: "About ", run: " of running.", loc: "en-US", d1: "Léa is done.", d2: "Your turn.", e1: "Done together.", e2: "+1 tonight.", x0: 118, tx: 205, cx: 420 },
};

// 22/11 (demande du coordinateur) : la ligne du binôme sous l'anneau suit la même progression, comme les états de
// BinomeCard (components/league/BinomeCard.tsx, version « bare » des Activités) : tant que le score est sous l'objectif,
// Léa a déjà validé → « Léa a validé. » + « À toi. » (orange #E0922A), mon anneau partiel (min(0,97, score / objectif)),
// le sien plein ; dès que le score passe 820 → « Validé à deux. » + « +1 ce soir. », les deux anneaux pleins.
// MiniRing de l'app : 40 pt, crans de 3 pt (TickRing, largeur × 40/236), le 2e décalé de 32 pt ; 1 pt = 1,3 px de la
// capture. Seul MON anneau change : on recouvre sa couronne du fond de l'app et on la redessine ; les crans de Léa
// recouverts au passage sont redessinés pleins par-dessus (Léa est au-dessus, comme dans l'app).
const MS = 40, MD = 3, PT = 1.3, DY = 709, ORANGE = "#E0922A";
function miniTicks() {
  const c = MS / 2, rO = MS / 2 - 1, rI = rO - MD;
  return Array.from({ length: N }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / N;
    const w = (MS / 236) * (1.4 + 3.2 * Math.pow(Math.abs(Math.sin(a)), 1.5));
    const ux = Math.cos(a), uy = Math.sin(a), px = -uy * (w / 2), py = ux * (w / 2);
    const f = (v: number) => v.toFixed(3);
    return `M${f(c + rI * ux + px)} ${f(c + rI * uy + py)}L${f(c + rO * ux + px)} ${f(c + rO * uy + py)}L${f(c + rO * ux - px)} ${f(c + rO * uy - py)}L${f(c + rI * ux - px)} ${f(c + rI * uy - py)}Z`;
  });
}

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
  const tickK = useRef<number[]>(Array(N).fill(-1));
  const numRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const mini = useMemo(miniTicks, []);
  const miniRefs = useRef<(SVGPathElement | null)[]>([]);
  const miniK = useRef<number[]>(Array(N).fill(-1));
  const duo1 = useRef<HTMLParagraphElement>(null), duo2 = useRef<HTMLParagraphElement>(null);
  const lastScore = useRef(-1), lastDone = useRef<boolean | null>(null), lastMin = useRef(-1);
  const nf = (n: number) => n.toLocaleString(t.loc);
  // 22/11 (retour du propriétaire : « l'anneau se remplit à 50 % puis à 100 % ») : les 48 crans s'allument UN PAR UN,
  // dans l'ordre horaire, au fil de p (le cran i s'allume quand p × 48 dépasse i ; le cran de tête fond et grossit
  // légèrement en arrivant) ; le score monte de 0 à 864 avec p ; la ligne passe à « Challenge réussi » au moment exact où
  // le score dépasse 820. Tout repart en arrière en remontant. Aucun rendu React : DOM direct, seulement ce qui change.
  const ref = useScrollProgress<HTMLDivElement>((p) => {
    const L = p * N;
    for (let i = 0; i < N; i++) {
      const k = Math.min(1, Math.max(0, L - i));
      const q = Math.round(k * 50) / 50;                     // 2 % près : on n'écrit que ce qui bouge
      if (q === tickK.current[i]) continue;
      tickK.current[i] = q;
      const el = tickRefs.current[i]; if (!el) continue;
      const e = 1 - Math.pow(1 - q, 3);
      el.style.opacity = e.toFixed(3);
      el.style.transform = q >= 1 ? "" : `scale(${(0.55 + 0.45 * e).toFixed(3)})`;
    }
    const cur = Math.min(SCORE, Math.floor(SCORE * p + 0.0001));
    if (cur !== lastScore.current) {
      lastScore.current = cur;
      if (numRef.current) numRef.current.textContent = nf(cur);
    }
    const done = cur >= TARGET;
    // Mon anneau du binôme : la part de l'objectif (plafonnée à 0,97 comme l'app), plein dès l'objectif atteint.
    const Lm = (done ? 1 : Math.min(0.97, (SCORE * p) / TARGET)) * N;
    for (let i = 0; i < N; i++) {
      const q = Math.round(Math.min(1, Math.max(0, Lm - i)) * 50) / 50;
      if (q === miniK.current[i]) continue;
      miniK.current[i] = q;
      const el = miniRefs.current[i]; if (el) el.style.opacity = (1 - Math.pow(1 - q, 3)).toFixed(3);
    }
    const m = Math.max(5, Math.ceil(Math.max(0, TARGET - cur) / 8 / 5) * 5);
    if (done !== lastDone.current || (!done && m !== lastMin.current)) {
      lastDone.current = done; lastMin.current = m;
      if (lineRef.current) lineRef.current.innerHTML = done
        ? `<b style="color:#0443FD">${t.done}</b>${t.plus}`
        : `${t.ch}<b>${TARGET} pts</b>${t.before}<b>+1 point</b>`;
      if (subRef.current) subRef.current.innerHTML = done ? "&nbsp;" : `${t.about}<b>${m} min</b>${t.run}`;
      if (duo1.current) duo1.current.textContent = done ? t.e1 : t.d1;
      if (duo2.current) duo2.current.textContent = done ? t.e2 : t.d2;
    }
  }, { start: 0.85, end: 0.3 });   // 22/11 : plein (et « Validé à deux ») quand le téléphone est encore bien à l'écran   // l'anneau et la ligne du binôme sont à l'écran pendant tout le remplissage
  return (
    <div ref={ref} className="arl" aria-hidden="true">
      <div className="arl-panel" style={{ left: cq(8), width: cq(506), top: cq(160), height: cq(458) }} />
      <svg className="arl-ring" viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ left: cq(261 - 170), top: cq(345 - 170), width: cq(340), height: cq(340) }}>
        {paths.map((d, i) => <path key={`t${i}`} d={d} fill="#DDE1E7" />)}
        {paths.map((d, i) => <path key={`l${i}`} className="arl-lit" ref={(el) => { tickRefs.current[i] = el; }} d={d} fill="#0B1116" style={{ opacity: 0 }} />)}
      </svg>
      <div className="arl-center" style={{ left: cq(261 - 170), top: cq(345 - 170), width: cq(340), height: cq(340) }}>
        <span ref={numRef} className="arl-num" style={{ fontSize: cq(98), lineHeight: cq(106), letterSpacing: cq(-4.3) }}>0</span>
        <span className="arl-of" style={{ fontSize: cq(18.7), marginTop: cq(3) }}>{t.of}</span>
      </div>
      <p ref={lineRef} className="arl-line" style={{ top: cq(546), fontSize: cq(19.4) }} />
      <p ref={subRef} className="arl-sub" style={{ top: cq(582), fontSize: cq(18) }} />
      {/* La ligne du binôme : mon anneau (recouvert puis redessiné), les crans de Léa repassés au-dessus, les 2 lignes */}
      <svg className="arl-duo" viewBox={`0 0 ${MS + 32} ${MS}`} style={{ left: cq(t.x0 - (MS / 2) * PT), top: cq(DY - (MS / 2) * PT), width: cq((MS + 32) * PT), height: cq(MS * PT) }}>
        <defs>
          <clipPath id={`arl-c-${lang}`}><circle cx={MS / 2} cy={MS / 2} r={MS / 2 - 0.2} /></clipPath>
          <mask id={`arl-m-${lang}`}><rect width={MS + 32} height={MS} fill="#000" /><circle cx={MS / 2} cy={MS / 2} r={MS / 2 - 0.2} fill="#fff" /><circle cx={MS / 2} cy={MS / 2} r={14.6} fill="#000" /><circle cx={MS / 2 + 32} cy={MS / 2} r={14.5} fill="#000" /></mask>
        </defs>
        <rect width={MS + 32} height={MS} fill="#EEF1F9" mask={`url(#arl-m-${lang})`} />
        <g mask={`url(#arl-m-${lang})`}>
          {mini.map((d, i) => <path key={`mt${i}`} d={d} fill="#DDE1E7" />)}
          {mini.map((d, i) => <path key={`ml${i}`} ref={(el) => { miniRefs.current[i] = el; }} d={d} fill="#0B1116" style={{ opacity: 0 }} />)}
        </g>
        <g transform="translate(32 0)" clipPath={`url(#arl-c2-${lang})`}>
          {mini.map((d, i) => <path key={`mp${i}`} d={d} fill="#0B1116" />)}
        </g>
        <defs><clipPath id={`arl-c2-${lang}`}><circle cx={MS / 2 - 32} cy={MS / 2} r={MS / 2 - 0.2} /></clipPath></defs>
      </svg>
      <div className="arl-duo-txt" style={{ left: cq(t.tx - 4), width: cq(t.cx - t.tx - 2), top: cq(692), height: cq(64) }}>
        <p ref={duo1} style={{ left: cq(4), top: cq(714.5 - 692 - 0.883 * 17.55), fontSize: cq(17.55), color: "#0B1116", fontWeight: 600 }}>{t.d1}</p>
        <p ref={duo2} style={{ left: cq(4), top: cq(746 - 692 - 0.883 * 17.55), fontSize: cq(17.55), color: ORANGE, fontWeight: 800 }}>{t.d2}</p>
      </div>
    </div>
  );
}
