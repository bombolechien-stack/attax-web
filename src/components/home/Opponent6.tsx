"use client";

import { useLang } from "@/lib/i18n";
import { useScrollProgress, seg, easeOut } from "@/hooks/useScrollProgress";
import { flagUri } from "@/lib/rankFlag";
import Story6 from "./Story6";
import AppPhone from "./AppPhone";

// Écran 2 : « Chaque jour, un nouvel adversaire. » La fiche de l'adversaire de la révélation de l'app, À L'IDENTIQUE
// (components/reveal/FightNight.tsx, bloc « La fiche de l'adversaire » : « MATCH 6 · TON ADVERSAIRE », photo à anneau
// rouge, pseudo, pastille de rang, 4 stats de lib/revealFromMatch.ts) ; valeurs et proportions de la capture
// _kit/build/img/app/v3/opponent-sophie.png (unité u = 1 px de la capture affichée à 899 px de large).
const COPY = {
  en: {
    kick: "01 · Every day",
    title: ["Every day,", "a new opponent."] as [string, string],
    line: "A new opponent, every day. Today: Sophie, Pro II.",
    sheet: "MATCH 6 · YOUR OPPONENT",
    stats: [["FAVORITE SPORT", "Swimming", ""], ["AVERAGE WORKOUT", "56 min", ""], ["PER DAY", "506 pts", "on average"], ["HEAD TO HEAD", "1st duel", "between you"]],
  },
  fr: {
    kick: "01 · Chaque jour",
    title: ["Chaque jour,", "un nouvel adversaire."] as [string, string],
    line: "Un nouvel adversaire, tous les jours. Aujourd'hui : Sophie, Pro II.",
    sheet: "MATCH 6 · TON ADVERSAIRE",
    stats: [["SPORT FAVORI", "Natation", ""], ["SÉANCE MOYENNE", "56 min", ""], ["PAR JOUR", "506 pts", "en moyenne"], ["FACE À FACE", "1er duel", "entre vous"]],
  },
};

export default function Opponent6() {
  const { lang } = useLang();
  const c = COPY[lang];
  // 22/11 : la fiche apparaît élément par élément au fil du défilement (repère, photo, pseudo, rang, puis les 4 stats),
  // et repart en remontant. Mouvements réduits : fiche complète.
  const ref = useScrollProgress<HTMLDivElement>((p) => {
    const root = ref.current; if (!root) return;
    const els = [...Array.from(root.children).filter((e) => !e.classList.contains("opp6-grid")), ...Array.from(root.querySelectorAll(".opp6-stat"))] as HTMLElement[];
    els.forEach((el, i) => el.style.setProperty("--k", easeOut(seg(p, i * 0.085, i * 0.085 + 0.3)).toFixed(3)));
  }, { start: 0.8, end: 0.2 });
  return (
    <Story6 id="opponent" kicker={c.kick} title={c.title} line={c.line}>
      <div className="st6-phone">
        <AppPhone>
          <div ref={ref} className="opp6 is-scrub">
            <p className="opp6-kick">{c.sheet}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="opp6-av" src="/league/av-1.webp" alt="" />
            <p className="opp6-name">Sophie</p>
            <span className="opp6-pill">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={flagUri(3, 2)} alt="" />Pro II
            </span>
            <div className="opp6-grid">
              {c.stats.map(([l, v, s]) => (
                <div key={l} className="opp6-stat">
                  <span>{l}</span>
                  <b>{v}{s && <em> {s}</em>}</b>
                </div>
              ))}
            </div>
          </div>
        </AppPhone>
      </div>
    </Story6>
  );
}
