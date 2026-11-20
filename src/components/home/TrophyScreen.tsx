"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

// L'écran Profil de l'app, partie BASSE : la vitrine des trophées (components/profile/ProfilePalmares.tsx), refaite en
// HTML avec les vraies images de l'app (assets/trophies → public/trophies). Le plus beau titre en grand, le prochain
// objectif, puis l'étagère : les trophées gagnés (×n, bleu) et ceux à décrocher en silhouette (opacité 0,2, « ×0 »),
// comme dans l'app (cellules 74 × 122, nom en Manrope 700, compteur en Manrope 800).
// Exemple : Rookie, Challenger et Pro gagnés une fois ; prochain objectif = Elite (règle « mieux que son meilleur »).

const BLUE = "#0443FD", INK = "#09090B", MUTED = "#9CA3AF";
const FONT = "var(--font-manrope), var(--font-jakarta), sans-serif";

type Cell = { img: string; en: string; fr: string; n: number; medal?: boolean };
const SHELF: Cell[] = [
  { img: "friends", en: "Friends", fr: "Amis", n: 0 },
  { img: "rookie", en: "Rookie", fr: "Rookie", n: 1 },
  { img: "challenger", en: "Challenger", fr: "Challenger", n: 1 },
  { img: "champion", en: "Pro", fr: "Pro", n: 1 },
  { img: "elite", en: "Elite", fr: "Elite", n: 0 },
  { img: "legend", en: "Legend", fr: "Legend", n: 0 },
  { img: "medal_2", en: "Runner-up", fr: "2e de ligue", n: 2, medal: true },
  { img: "medal_3", en: "Third", fr: "3e de ligue", n: 0, medal: true },
];

const COPY = {
  en: { tabs: ["Profile", "Matches", "Stats", "Badges"], honours: "HONOURS", count: "3 TROPHIES", top: "YOUR TOP HONOUR", name: "PRO", won: "Won once",
    goal: "NEXT GOAL", goalTxt: "Win an Elite league", alt: "The Honours section of the Attax profile: trophies won and trophies still to unlock" },
  fr: { tabs: ["Profil", "Matchs", "Stats", "Badges"], honours: "PALMARÈS", count: "3 TROPHÉES", top: "TON PLUS BEAU TITRE", name: "PRO", won: "Remporté 1 fois",
    goal: "PROCHAIN OBJECTIF", goalTxt: "Gagner une ligue Elite", alt: "Le palmarès du profil Attax : trophées gagnés et trophées à décrocher" },
};

export default function TrophyScreen() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <div className="ts-phone" role="img" aria-label={c.alt}>
      <div className="ts-screen" style={{ fontFamily: FONT }}>
        <div className="ts-status"><span>9:41</span><i className="ts-island" /><span className="ts-icons" /></div>

        <div className="ts-tabs">
          {c.tabs.map((t, i) => <span key={t} className={i === 0 ? "is-on" : undefined}>{t}</span>)}
        </div>

        <div className="ts-head">
          <span style={{ fontWeight: 800, fontSize: 8.5, letterSpacing: 1.4, color: INK }}>{c.honours}</span>
          <span style={{ fontWeight: 800, fontSize: 7.5, letterSpacing: 1, color: MUTED }}>{c.count}</span>
        </div>

        <div className="ts-stage">
          <div className="ts-big"><Image src="/trophies/champion.webp" alt="" width={360} height={612} sizes="110px" /></div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 7, letterSpacing: 1, color: BLUE, marginBottom: 6 }}>{c.top}</div>
            <div style={{ fontWeight: 800, fontSize: 21, lineHeight: 1.08, letterSpacing: -0.8, color: INK }}>{c.name}</div>
            <div style={{ fontWeight: 800, fontSize: 21, lineHeight: 1.08, letterSpacing: -0.8, color: INK }}>CHAMPION</div>
            <div style={{ marginTop: 6, fontWeight: 800, fontSize: 10, color: INK }}>{c.won}</div>
          </div>
        </div>

        <div className="ts-goal">
          <span style={{ fontWeight: 800, fontSize: 7, letterSpacing: 1, color: MUTED }}>{c.goal}</span>
          <span style={{ fontWeight: 700, fontSize: 10, color: INK }}>{c.goalTxt}</span>
        </div>

        {/* L'étagère entière (dans l'app elle défile) : les trophées gagnés et ceux qui restent à décrocher */}
        <div>
          <div className="ts-shelf">
            {SHELF.map((t) => (
              <div key={t.img} className="ts-cell">
                <div className={`ts-cell-img${t.medal ? " ts-medal" : ""}${t.img === "elite" ? " ts-cell-new" : ""}`} style={{ opacity: t.n ? 1 : 0.2 }}>
                  <Image src={`/trophies/${t.img}.webp`} alt="" width={t.medal ? 200 : 360} height={t.medal ? 207 : 612} sizes="60px" />
                </div>
                <span style={{ marginTop: 6, fontWeight: 700, fontSize: 8.5, color: t.n ? INK : MUTED, whiteSpace: "nowrap" }}>{t[lang]}</span>
                <span style={{ fontWeight: 800, fontSize: 9.5, color: t.n ? BLUE : MUTED, fontVariantNumeric: "tabular-nums" }}>{`×${t.n}`}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
