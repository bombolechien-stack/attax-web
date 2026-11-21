"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
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
  const { ref, visible } = useInView<HTMLDivElement>(0.3, { oneShot: true });
  return (
    <Story6 id="opponent" kicker={c.kick} title={c.title} line={c.line}>
      <div className="st6-phone">
        <AppPhone>
          <div ref={ref} className={`opp6${visible ? " is-in" : ""}`}>
            <p className="opp6-kick">{c.sheet}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="opp6-av" src="/league/av-1.webp" alt="" />
            <p className="opp6-name">Sophie</p>
            <span className="opp6-pill">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={flagUri(3, 2)} alt="" />Pro II
            </span>
            <div className="opp6-grid">
              {c.stats.map(([l, v, s], i) => (
                <div key={l} className="opp6-stat" style={{ transitionDelay: `${700 + i * 220}ms` }}>
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
