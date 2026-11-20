"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import SectionHead from "./SectionHead";

// « Une semaine, une ligue, un champion » (passe 5) : un classement de ligue vivant. 8 joueurs, les points qui
// montent à chaque round dévoilé, les lignes qui changent de place, la zone de montée (2 premiers) et de descente
// (2 derniers) ; à côté, l'échelle des rangs de l'app (lib/rank.ts : Rookie, Challenger, Pro, Elite, Legend, I à III).
// Noms d'exemple uniquement.

const START = [
  { n: "Johnny", p: 31, me: true }, { n: "Sophie", p: 29 }, { n: "Maya", p: 27 }, { n: "Noah", p: 26 },
  { n: "Léo", p: 24 }, { n: "Inès", p: 22 }, { n: "Kai", p: 21 }, { n: "Tom", p: 19 },
];
const COLORS = ["#0443FD", "#EC0420", "#7C3AED", "#0891B2", "#C79A3F", "#16191F", "#4D7CFF", "#B87333"];
const DIVS = [
  { k: "Legend", c: "#16191F" }, { k: "Elite", c: "#4D7CFF" }, { k: "Pro", c: "#C79A3F" }, { k: "Challenger", c: "#8A93A0" }, { k: "Rookie", c: "#B87333" },
];
const COPY = {
  en: {
    label: "The league",
    title: ["One week, one league,", "one champion."] as [string, string],
    lead: "A duel a day against your league. The top 2 move up a rank, the bottom 2 move down.",
    table: "League table", day: (d: number) => `Day ${d} / 7`, pts: "Points", up: "Promotion", down: "Relegation", you: "You",
    ranks: "Ranks", climb: "From Rookie to Legend. Win your league and the crown is yours.",
  },
  fr: {
    label: "La ligue",
    title: ["Une semaine, une ligue,", "un champion."] as [string, string],
    lead: "Un duel par jour contre ta ligue. Les 2 premiers montent d'un rang, les 2 derniers descendent.",
    table: "Classement", day: (d: number) => `Jour ${d} / 7`, pts: "Points", up: "Montée", down: "Descente", you: "Toi",
    ranks: "Les rangs", climb: "De Rookie à Legend. Gagne ta ligue, la couronne est à toi.",
  },
};

type Row = { n: string; p: number; me?: boolean; c: string; move: number; gain: number };
const fresh = (): Row[] => START.map((r, i) => ({ ...r, c: COLORS[i], move: 0, gain: 0 }));

export default function LeagueTable() {
  const { lang } = useLang();
  const c = COPY[lang];
  const [rows, setRows] = useState<Row[]>(fresh);
  const [day, setDay] = useState(3);
  const seed = useRef(7);
  const dayRef = useRef(3);
  const { ref, visible } = useInView<HTMLDivElement>(0.25);

  // Un round dévoilé toutes les 2,6 s : chacun gagne 0 à 3 points (round +1, victoire +2), la table se retrie.
  useEffect(() => {
    if (!visible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rnd = () => { seed.current = (seed.current * 9301 + 49297) % 233280; return seed.current / 233280; };
    const id = setInterval(() => {
      if (dayRef.current >= 7) { dayRef.current = 3; setDay(3); setRows(fresh()); return; }
      dayRef.current += 1;
      setDay(dayRef.current);
      const gains: Record<string, number> = {};
      START.forEach((r) => { gains[r.n] = [0, 1, 1, 2, 3, 3][Math.floor(rnd() * 6)]; });
      setRows((prev) => {
        const order = prev.map((r) => r.n);
        const next = prev.map((r) => ({ ...r, p: r.p + gains[r.n], gain: gains[r.n] }));
        next.sort((x, y) => y.p - x.p || x.n.localeCompare(y.n));
        return next.map((r, i) => ({ ...r, move: order.indexOf(r.n) - i }));
      });
    }, 2600);
    return () => clearInterval(id);
  }, [visible]);

  const byName = [...START].map((s) => rows.find((r) => r.n === s.n)!);

  return (
    <section id="league" className="p5-sec lg">
      <div className="p5-wrap">
        <SectionHead label={c.label} title={c.title} lead={c.lead} />
        <div ref={ref} className="lg-grid">
          <div className="lg-table" aria-label={c.table}>
            <div className="lg-top"><b>{c.table}</b><span>{c.day(day)}</span></div>
            <div className="lg-rows" style={{ ["--n" as string]: rows.length }}>
              <span className="lg-zone lg-zone-up" />
              <span className="lg-zone lg-zone-down" />
              {byName.map((r) => {
                const i = rows.indexOf(r);
                return (
                  <div key={r.n} className={`lg-row${r.me ? " is-me" : ""}`} style={{ transform: `translateY(${i * 100}%)` }}>
                    <span className="lg-pos">{i + 1}</span>
                    <span className="lg-av" style={{ background: r.c }}>{r.n[0]}</span>
                    <span className="lg-name">{r.me ? `${r.n} · ${c.you}` : r.n}</span>
                    <span className={`lg-move ${r.move > 0 ? "up" : r.move < 0 ? "down" : ""}`} key={`${r.n}${day}`}>{r.move > 0 ? `▲${r.move}` : r.move < 0 ? `▼${-r.move}` : ""}</span>
                    <span className="lg-gain" key={`g${r.n}${day}`}>{r.gain > 0 ? `+${r.gain}` : ""}</span>
                    <span className="lg-pts">{r.p}</span>
                  </div>
                );
              })}
            </div>
            <div className="lg-legend"><span className="up">▲ {c.up}</span><span className="down">▼ {c.down}</span></div>
          </div>

          <div className="lg-ranks">
            <p className="p5-label">{c.ranks}</p>
            <ol>
              {DIVS.map((d) => (
                <li key={d.k} className={d.k === "Pro" ? "is-on" : undefined}>
                  <i className="lg-gem" style={{ background: d.c }} />
                  <span className="lg-div">{d.k}</span>
                  <span className="lg-sub">I · II · III</span>
                </li>
              ))}
            </ol>
            <p className="lg-climb">{c.climb}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
