"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import AppPhone from "./AppPhone";

// Chapitre 06 « Au-delà de la ligue » (passe 7, 21/11, demande du propriétaire) : un bloc compact juste après la ligue,
// avant l'appel du milieu. Trois VRAIES captures de l'app en entier (public/screens/story/<langue>/season, duo, profile,
// les mêmes que l'ancienne section Beyond), dans le téléphone des chapitres, rien derrière ; titre court + une ligne.
const SHOTS = ["season", "duo", "profile"] as const;
const COPY = {
  en: {
    kick: "06 · Beyond the league",
    title: ["A league a week.", "A story all season."],
    items: [
      ["The season.", "The global ranking of effort."],
      ["Your duo.", "Every day you both hit your challenge: +1 point each."],
      ["Your trophies.", "Every league you win leaves a mark: trophy, crown."],
    ],
  },
  fr: {
    kick: "06 · Au-delà de la ligue",
    title: ["Une ligue par semaine.", "Une histoire toute la saison."],
    items: [
      ["La saison.", "Le classement mondial de l'effort."],
      ["Ton binôme.", "Chaque jour où vous atteignez tous les deux votre challenge : +1 point chacun."],
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
              <div className="by7-phone"><AppPhone src={`/screens/story/${lang}/${SHOTS[i]}.webp`} alt={`${t} ${d}`} baked dark={i === 0} /></div>
              <figcaption><b>{t}</b> {d}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
