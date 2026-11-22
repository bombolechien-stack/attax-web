"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import DuoFistsLive from "./DuoFistsLive";
import AppPhone from "./AppPhone";
import { TrophyMomentLive, SeasonMomentLive } from "./MomentsLive";

// Chapitre 06 « Au-delà de la ligue » (passe 7, 21/11, demande du propriétaire) : un bloc compact juste après la ligue,
// avant l'appel du milieu. Deux VRAIES captures de l'app en entier (public/screens/story/<langue>/season, duo,
// les mêmes que l'ancienne section Beyond ; depuis le 22/11 la saison et le profil sont les moments de l'app, voir MomentsLive), dans le
// téléphone des chapitres, rien derrière ; titre court + une ligne.
const SHOTS = ["season", "duo", "profile"] as const;

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
      ["Ton binôme.", "Dès ta 2e ligue, un binôme t'est attribué pour te motiver. Chaque jour où vous atteignez tous les deux votre objectif du jour : +1 point chacun."],
      ["Ton profil.", "Tes trophées, ta couronne, ton palmarès, ta série : tout ce que tu gagnes reste sur ton profil."],
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
                {/* 22/11 : la saison et le profil montrent les VRAIS moments de l'app (MomentsLive), joués au défilement */}
                {SHOTS[i] === "profile"
                  ? <AppPhone><TrophyMomentLive lang={lang} profile={`/screens/story/${lang}/profile.webp`} /></AppPhone>
                  : SHOTS[i] === "season"
                  ? <AppPhone><SeasonMomentLive lang={lang} /></AppPhone>
                  : <AppPhone src={`/screens/story/${lang}/${SHOTS[i]}.webp`} alt={`${t} ${d}`} baked dark={i === 0}
                      overlay={SHOTS[i] === "duo" ? <DuoFistsLive src={`/screens/story/${lang}/duo.webp`} /> : undefined} />}
              </div>
              <figcaption><b>{t}</b> {d}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
