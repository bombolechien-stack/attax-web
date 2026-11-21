"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { flagUri } from "@/lib/rankFlag";
import SectionHead from "./SectionHead";

// « Une semaine, une ligue, un champion » (passe 6) : le classement de la ligue de l'app, À L'IDENTIQUE
// (budyfit app/(tabs)/rank.tsx, bloc « LEAGUE STANDINGS / POINTS » ; capture store-assets/shots-2026-11-17/en/rank-a.png) :
// place (or / argent / bronze pour le podium, plus petite ensuite, montée « ↑1 » dessous), photo ronde avec anneau,
// pseudo, badge de rang (RankBadgeIcon, ici Pro pour tous), 5 derniers résultats en pastilles, face-à-face « YOU 1 – 0 »,
// points à droite ; MA ligne en noir aux scanlines blanches ; filet bleu « ▲ PROMOTION » sous le 2e, filet rouge
// « ▼ RELEGATION » au-dessus des 2 derniers. Toutes les tailles sont celles de la capture, en proportion de la largeur
// (unité u = 1 px de la capture affichée à 923 px, contenu de 838 px).
// À côté : l'échelle des rangs avec les vrais badges de l'app (lib/rank.ts : Rookie à Legend, couleurs de division).

const BLUE = "#0443FD", RED = "#EC0420", MUTED = "#94A3B8", GOLD = "#F59E0B", SILVER = "#94A3B8", BRONZE = "#B45309";
type R = "V" | "D";
type Row = { name: string; av: number; pts: number; sub: number; form: R[]; h2h?: [number, number]; move?: number; me?: boolean };
const ROWS: Row[] = [
  { name: "Johnny", av: 0, pts: 48, sub: 2, form: ["V", "V", "D", "V", "V"], me: true },
  { name: "Sophie", av: 1, pts: 41, sub: 2, form: ["V", "V", "D", "V", "D"], h2h: [1, 0] },
  { name: "Casey", av: 3, pts: 37, sub: 2, form: ["V", "V", "D", "V", "V"], h2h: [1, 0], move: 1 },
  { name: "Avery", av: 5, pts: 36, sub: 3, form: ["D", "V", "V", "D", "V"] },
  { name: "Taylor", av: 4, pts: 34, sub: 1, form: ["V", "D", "V", "D", "D"], h2h: [0, 1], move: -2 },
  { name: "Drew", av: 2, pts: 31, sub: 2, form: ["D", "V", "D", "V", "V"], h2h: [1, 0] },
  { name: "Morgan", av: 7, pts: 27, sub: 1, form: ["D", "D", "V", "D", "V"], h2h: [1, 0], move: 1 },
  { name: "Quinn", av: 6, pts: 25, sub: 1, form: ["D", "V", "D", "D", "D"], h2h: [1, 0], move: -1 },
];
const DIVS = [
  { d: 5, k: "Legend", c: "#16191F" }, { d: 4, k: "Elite", c: "#4D7CFF" }, { d: 3, k: "Pro", c: "#C79A3F" },
  { d: 2, k: "Challenger", c: "#8A93A0" }, { d: 1, k: "Rookie", c: "#B87333" },
];
const COPY = {
  en: {
    label: "The league",
    title: ["One week, one league,", "one champion."] as [string, string],
    lead: "A duel a day against your league. The top 2 move up a rank, the bottom 2 move down.",
    league: "LEAGUE 922", table: "LEAGUE STANDINGS", you: " · you", vs: "YOU", up: "▲ PROMOTION", down: "▼ RELEGATION",
    ranks: "RANKS", climb: "From Rookie to Legend, each in three tiers. Your rank follows you from league to league.",
  },
  fr: {
    label: "La ligue",
    title: ["Une semaine, une ligue,", "un champion."] as [string, string],
    lead: "Un duel par jour contre ta ligue. Les 2 premiers montent d'un rang, les 2 derniers descendent.",
    league: "LIGUE 922", table: "CLASSEMENT DE LA LIGUE", you: " · toi", vs: "TOI", up: "▲ MONTÉE", down: "▼ DESCENTE",
    ranks: "RANGS", climb: "De Rookie à Legend, chacun en trois paliers. Ton rang te suit de ligue en ligue.",
  },
};

/** Les scanlines de MA ligne (RankScanlines de rank.tsx : épaisses au centre, fines aux bords), en SVG étiré. */
function MeScanlines() {
  const w = 340, h = 48, N = Math.max(2, Math.round(h / 7) - 1), stepY = h / (N + 1), xs: number[] = [];
  for (let x = 0; x < w; x += 10) xs.push(x);
  xs.push(w);
  const paths = Array.from({ length: N }, (_, i) => {
    const baseY = stepY * (i + 1), t = baseY / h, seed = i * 1.37;
    const vEnv = 0.5 + 0.5 * Math.exp(-Math.pow((t - 0.5) / 0.34, 2));
    const top: number[][] = [], bot: number[][] = [];
    for (const x of xs) {
      const n = Math.sin(x * 0.045 + seed * 1.7) * 0.5 + Math.sin(x * 0.015 + seed * 3.1) * 0.5;
      const hEnv = Math.sin(Math.PI * Math.min(1, Math.max(0, x / w)));
      const half = (0.45 + (n + 1) * 0.05) * (0.55 + 2.6 * hEnv) * (0.72 + 0.5 * vEnv) * 0.5;
      top.push([x, baseY - half]); bot.push([x, baseY + half]);
    }
    let d = `M${top[0][0]} ${top[0][1].toFixed(2)}`;
    for (let k = 1; k < top.length; k++) d += `L${top[k][0]} ${top[k][1].toFixed(2)}`;
    for (let k = bot.length - 1; k >= 0; k--) d += `L${bot[k][0]} ${bot[k][1].toFixed(2)}`;
    return { d: d + "Z", op: 0.85 * (0.78 + 0.22 * vEnv) };
  });
  return (
    <svg className="lt6-scan" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      {paths.map((p, i) => <path key={i} d={p.d} fill="#FFFFFF" opacity={p.op} />)}
    </svg>
  );
}

export default function LeagueTable() {
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref, visible } = useInView<HTMLDivElement>(0.15, { oneShot: true });
  const n = ROWS.length;

  return (
    <section id="league" className="p5-sec lg6">
      <div className="p5-wrap">
        <SectionHead label={c.label} title={c.title} lead={c.lead} />
        {/* Une carte blanche centrée (surface de l'app) : le classement, puis les rangs en une rangée de badges */}
        <div className="lg6-card">
            <div ref={ref} className="lt6" aria-label={c.table}>
              <p className="lt6-league">{c.league} <span>·</span> <b>PRO</b></p>
              <div className="lt6-rule" />
              <div className="lt6-head"><span>{c.table}</span><em>POINTS</em></div>
              {ROWS.map((r, i) => {
                const pos = i + 1, podium = pos === 1 ? GOLD : pos === 2 ? SILVER : pos === 3 ? BRONZE : null;
                return (
                  <div key={r.name} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)", transition: `opacity 0.6s ease ${i * 70}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms` }}>
                    {pos === n - 1 && <div className="lt6-zone" style={{ color: RED }}><i /><span>{c.down}</span></div>}
                    <div className={`lt6-row${r.me ? " is-me" : ""}${pos === n || pos === 2 || pos === n - 2 ? " no-line" : ""}`}>
                      {r.me && <MeScanlines />}
                      <div className="lt6-place">
                        <span style={{ color: r.me ? "#FFFFFF" : podium ?? "#0F172A" }} className={pos <= 3 ? "big" : undefined}>{pos}</span>
                        {!!r.move && <small style={{ color: r.move > 0 ? BLUE : RED }}>{r.move > 0 ? `↑${r.move}` : `↓${-r.move}`}</small>}
                      </div>
                      <div className="lt6-avw">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="lt6-av" src={`/league/av-${r.av}.webp`} alt="" style={{ borderColor: podium ?? "#D7DEE8", borderWidth: pos === 1 ? "var(--ring1)" : "var(--ring)" }} />
                      </div>
                      <div className="lt6-mid">
                        <div className="lt6-namerow">
                          <span className="lt6-name">{r.name}{r.me ? c.you : ""}</span>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img className="lt6-badge" src={flagUri(3, r.sub)} alt={`Pro ${["I", "II", "III"][r.sub - 1]}`} />
                        </div>
                        <div className="lt6-meta">
                          <span className="lt6-form">{r.form.map((f, k) => <i key={k} style={{ background: f === "V" ? BLUE : RED }} />)}</span>
                          {r.h2h && (
                            <span className="lt6-h2h"><b>{c.vs} </b><strong style={{ color: BLUE }}>{r.h2h[0]}</strong><em> – </em><strong style={{ color: RED }}>{r.h2h[1]}</strong></span>
                          )}
                        </div>
                      </div>
                      <span className="lt6-pts">{r.pts}</span>
                    </div>
                    {pos === 2 && <div className="lt6-zone" style={{ color: BLUE }}><i /><span>{c.up}</span></div>}
                  </div>
                );
              })}
            </div>

            <div className="lg6-ranks">
              <div className="lt6-head lg6-ranks-head"><span>{c.ranks}</span></div>
              <ol>
                {[...DIVS].reverse().map((d) => (
                  <li key={d.k}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={flagUri(d.d, 3)} alt="" />
                    <span style={{ color: d.c }}>{d.k}</span>
                  </li>
                ))}
              </ol>
              <p className="lg6-climb">{c.climb}</p>
            </div>
        </div>
      </div>
    </section>
  );
}
