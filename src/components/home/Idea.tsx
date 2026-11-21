"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import SectionHead from "./SectionHead";

// L'idée + les faits du jeu (passe 6, 21/11) : une phrase, la rangée des faits (règles du jeu uniquement, aucun chiffre
// d'utilisateurs), puis la compatibilité (montres) en une ligne. Fond de l'app (#EEF1F7), aucun visuel inventé.
const COPY = {
  en: {
    label: "The idea",
    h2: ["Your workout.", "Tonight's fight."] as [string, string],
    lead: "Your watch measures your effort. Every day, it fights for you against a new opponent.",
    facts: [{ n: "7", u: "rounds", c: "one per day of the week" }, { n: "7", u: "HP", c: "your life at the start" }, { n: "12", u: "cards", c: "one to play each day" }, { n: "9:30", u: "PM", c: "the verdict, every night" }],
    works: "Works with Apple Health and Health Connect:",
    meta: "Free. iPhone and Android. Read-only health data, never sold.",
  },
  fr: {
    label: "L'idée",
    h2: ["Ta séance.", "Le combat du soir."] as [string, string],
    lead: "Ta montre mesure ton effort. Chaque jour, elle se bat pour toi contre un nouvel adversaire.",
    facts: [{ n: "7", u: "rounds", c: "un par jour de la semaine" }, { n: "7", u: "PV", c: "ta vie au départ" }, { n: "12", u: "cartes", c: "une à jouer chaque jour" }, { n: "21h30", u: "", c: "le verdict, chaque soir" }],
    works: "Fonctionne avec Apple Santé et Health Connect :",
    meta: "Gratuit. iPhone et Android. Données santé en lecture seule, jamais vendues.",
  },
};
const DEVICES = ["Apple Watch", "Garmin", "Samsung Galaxy Watch", "Fitbit", "COROS", "Amazfit", "Withings", "Oura", "CMF by Nothing"];

export default function Idea() {
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref, visible } = useInView<HTMLDivElement>(0.3, { oneShot: true });
  return (
    <section id="idea" className="p5-sec idea6">
      <div className="p5-wrap">
        <SectionHead label={c.label} title={c.h2} lead={c.lead} />
        <div ref={ref} className="facts6">
          {c.facts.map((f, i) => (
            <div key={i} className="fact6" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)", transitionDelay: `${i * 90}ms` }}>
              <span className="fact6-n">{f.n}{f.u && <small>{f.u}</small>}</span>
              <span className="fact6-c">{f.c}</span>
            </div>
          ))}
        </div>
        <p className="works6"><span>{c.works}</span> {DEVICES.join(", ")}.</p>
        <p className="works6-meta">{c.meta}</p>
      </div>
    </section>
  );
}
