"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import AppPhone from "./AppPhone";

// Chapitre 06 « Au-delà de la ligue » (passe 7, 21/11, demande du propriétaire) : un bloc compact juste après la ligue,
// avant l'appel du milieu. Deux VRAIES captures de l'app en entier (public/screens/story/<langue>/season, duo,
// les mêmes que l'ancienne section Beyond ; pour les trophées, l'étagère du bas du profil, voir TrophyShelf), dans le
// téléphone des chapitres, rien derrière ; titre court + une ligne.
const SHOTS = ["season", "duo", "profile"] as const;

// Trophées : la partie BASSE du profil seulement (jamais le haut « ligue actuelle » ni le grand titre du palmarès) :
// l'étagère de components/profile/ProfilePalmares.tsx refaite en HTML avec les vraies images (public/trophies), les
// trophées gagnés (×n, bleu) et ceux à décrocher en silhouette (opacité 0,2, « ×0 »). Même exemple que TrophyScreen.tsx.
const SHELF = [
  { img: "rookie", en: "Rookie", fr: "Rookie", n: 1 },
  { img: "challenger", en: "Challenger", fr: "Challenger", n: 1 },
  { img: "champion", en: "Pro", fr: "Pro", n: 1 },
  { img: "elite", en: "Elite", fr: "Elite", n: 0 },
  { img: "legend", en: "Legend", fr: "Legend", n: 0 },
  { img: "friends", en: "Friends", fr: "Amis", n: 0 },
  { img: "medal_2", en: "Runner-up", fr: "2e de ligue", n: 2, medal: true },
  { img: "medal_3", en: "Third", fr: "3e de ligue", n: 0, medal: true },
];
const TR = {
  en: { tabs: ["Profile", "Matches", "Stats", "Badges"], honours: "HONOURS", count: "3 TROPHIES", goal: "NEXT GOAL", goalTxt: "Win an Elite league" },
  fr: { tabs: ["Profil", "Matchs", "Stats", "Badges"], honours: "PALMARÈS", count: "3 TROPHÉES", goal: "PROCHAIN OBJECTIF", goalTxt: "Gagner une ligue Elite" },
};
function TrophyShelf({ lang }: { lang: "en" | "fr" }) {
  const c = TR[lang];
  return (
    <div className="tr7">
      <div className="tr7-tabs">{c.tabs.map((t, i) => <span key={t} className={i === 0 ? "is-on" : undefined}>{t}</span>)}</div>
      <div className="tr7-head"><b>{c.honours}</b><span>{c.count}</span></div>
      <div className="tr7-goal"><span>{c.goal}</span><b>{c.goalTxt}</b></div>
      <div className="tr7-shelf">
        {SHELF.map((t) => (
          <div key={t.img} className={`tr7-cell${t.n ? "" : " is-off"}`}>
            <div className={`tr7-img${t.medal ? " is-medal" : ""}`}>
              <Image src={`/trophies/${t.img}.webp`} alt="" width={t.medal ? 200 : 360} height={t.medal ? 207 : 612} sizes="80px" loading="eager" />
            </div>
            <span>{t[lang]}</span>
            <b>{`×${t.n}`}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
const COPY = {
  en: {
    kick: "06 · Beyond the league",
    title: ["A league a week.", "A story all season."],
    items: [
      ["The season.", "The global ranking of effort."],
      ["Your duo.", "A duo partner is assigned to you to keep you going. Every day you both hit your challenge: +1 point each."],
      ["Your trophies.", "Every league you win leaves a mark: trophy, crown."],
    ],
  },
  fr: {
    kick: "06 · Au-delà de la ligue",
    title: ["Une ligue par semaine.", "Une histoire toute la saison."],
    items: [
      ["La saison.", "Le classement mondial de l'effort."],
      ["Ton binôme.", "Un binôme t'est attribué pour te motiver. Chaque jour où vous atteignez tous les deux votre challenge : +1 point chacun."],
      ["Tes trophées.", "Chaque ligue gagnée laisse une trace : trophée, couronne."],
    ],
  },
};

export default function Beyond7() {
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref: headRef, visible: headIn } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const { ref, visible } = useInView<HTMLDivElement>(0.12, { oneShot: true });
  return (
    <section id="beyond" className="h7 h7-beyond">
      <div className="p5-wrap">
        <div ref={headRef} className={`h7-head${headIn ? " is-in" : ""}`}>
          <p className="st6-kick">{c.kick}</p>
          <h2 className="h7-h2"><span>{c.title[0]}</span> <span>{c.title[1]}</span></h2>
        </div>
        <div ref={ref} className={`by7-row${visible ? " is-in" : ""}`}>
          {c.items.map(([t, d], i) => (
            <figure key={SHOTS[i]} className="by7-item">
              <div className="by7-phone">
                {SHOTS[i] === "profile"
                  ? <AppPhone><TrophyShelf lang={lang} /></AppPhone>
                  : <AppPhone src={`/screens/story/${lang}/${SHOTS[i]}.webp`} alt={`${t} ${d}`} baked dark={i === 0} />}
              </div>
              <figcaption><b>{t}</b> {d}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
