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
  en: { tabs: ["Profile", "Matches", "Stats", "Badges"], honours: "HONOURS", count: "3 TROPHIES", season: "BETA SEASON", cup: "The season trophy", cupSub: "Finish the season on top to lift it", toWin: "TO WIN" },
  fr: { tabs: ["Profil", "Matchs", "Stats", "Badges"], honours: "PALMARÈS", count: "3 TROPHÉES", season: "SAISON BETA", cup: "Le trophée de la saison", cupSub: "Termine la saison en tête pour le soulever", toWin: "À DÉCROCHER" },
};
function TrophyShelf({ lang }: { lang: "en" | "fr" }) {
  const c = TR[lang];
  return (
    <div className="tr7">
      <div className="tr7-tabs">{c.tabs.map((t, i) => <span key={t} className={i === 0 ? "is-on" : undefined}>{t}</span>)}</div>
      <div className="tr7-head"><b>{c.honours}</b><span>{c.count}</span></div>
      {/* 22/11 (retour du propriétaire) : le grand trophée de la Saison Beta en haut, comme le palmarès du profil */}
      <div className="tr7-cup">
        <div className="tr7-cup-img"><Image src="/trophies/beta_cup.webp" alt="" width={471} height={1000} sizes="120px" loading="eager" /></div>
        <div className="tr7-cup-txt"><span>{c.season}</span><b>{c.cup}</b><em>{c.cupSub}</em><i>{c.toWin}</i></div>
      </div>
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
      ["The season.", "Join the season in one tap, then race all season for the world ranking and the Beta Season trophy."],
      ["Your duo.", "From your 2nd league, a duo partner is assigned to keep you going. Every day you both hit your daily goal: +1 point each."],
      ["Your profile.", "Your trophies, your crown, your record, your streak: everything you win stays on your profile."],
    ],
  },
  fr: {
    kick: "06 · Au-delà de la ligue",
    title: ["Une ligue par semaine.", "Une histoire toute la saison."],
    items: [
      ["La saison.", "Rejoins la saison en un geste, puis cours toute la saison pour le classement mondial et le trophée de la Saison Beta."],
      ["Ton binôme.", "Dès ta 2e ligue, un binôme t'est attribué pour te motiver. Chaque jour où vous atteignez tous les deux votre objectif du jour : +1 point chacun."],
      ["Ton profil.", "Tes trophées, ta couronne, ton palmarès, ta série : tout ce que tu gagnes reste sur ton profil."],
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
