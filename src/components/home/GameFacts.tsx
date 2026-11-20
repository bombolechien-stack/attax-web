"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";

// Les faits du jeu (passe 4) : une rangée calme de grands chiffres tabulaires séparés par des filets. Uniquement des règles
// du jeu, aucun chiffre d'utilisateurs.
const FACTS = {
  en: [{ n: "7", u: "rounds" }, { n: "7", u: "HP" }, { n: "12", u: "cards" }, { n: "9:30", u: "PM" }],
  fr: [{ n: "7", u: "rounds" }, { n: "7", u: "PV" }, { n: "12", u: "cartes" }, { n: "21h30", u: "" }],
};
const CAP = {
  en: ["a match", "each, to start", "to play", "the final round"],
  fr: ["par match", "chacun au départ", "à jouer", "le round final"],
};

export default function GameFacts() {
  const { lang } = useLang();
  const { ref, visible } = useInView<HTMLDivElement>(0.3, { oneShot: true });
  return (
    <section className="facts" aria-label={lang === "fr" ? "Le jeu en chiffres" : "The game in numbers"}>
      <div ref={ref} className="p-wrap facts-row">
        {FACTS[lang].map((f, i) => (
          <div key={i} className="fact" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)", transitionDelay: `${i * 90}ms` }}>
            <span className="fact-n">{f.n}{f.u && <small>{f.u}</small>}</span>
            <span className="fact-cap">{CAP[lang][i]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
