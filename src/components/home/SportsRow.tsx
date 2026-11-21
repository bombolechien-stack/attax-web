"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import ICONS from "./sportIcons.json";

// « Tous les sports comptent » (version simple, 21/11) : un titre, une ligne, et la rangée des sports de l'app
// (icônes MaterialCommunityIcons de lib/sport.ts SPORT_ICON, noms des locales sport.* de l'app). Rien d'autre.
const SPORTS: { icon: keyof typeof ICONS; en: string; fr: string }[] = [
  { icon: "run", en: "Running", fr: "Running" },
  { icon: "bike", en: "Cycling", fr: "Vélo" },
  { icon: "swim", en: "Swimming", fr: "Natation" },
  { icon: "weight-lifter", en: "Strength training", fr: "Musculation" },
  { icon: "soccer", en: "Team sports", fr: "Sport collectif" },
  { icon: "tennis", en: "Racket sports", fr: "Sport de raquette" },
  { icon: "yoga", en: "Yoga / mobility", fr: "Yoga / mobilité" },
  { icon: "walk", en: "Walk", fr: "Marche" },
  { icon: "hiking", en: "Hiking", fr: "Randonnée" },
  { icon: "boxing-glove", en: "Combat sports", fr: "Sport de combat" },
  { icon: "dance-ballroom", en: "Dance", fr: "Danse" },
  { icon: "rowing", en: "Rowing", fr: "Rameur / aviron" },
  { icon: "ski", en: "Skiing", fr: "Ski" },
  { icon: "lightning-bolt", en: "HIIT", fr: "HIIT" },
];
const COPY = {
  en: { title: "Every sport counts.", line: "If your heart rate goes up, it counts. Running, cycling, swimming, strength, football, yoga…" },
  fr: { title: "Tous les sports comptent.", line: "Si ton cœur accélère, ça compte. Course, vélo, natation, musculation, football, yoga…" },
};

export default function SportsRow() {
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  return (
    <section id="sports" className="sr6">
      <div ref={ref} className={`p5-wrap sr6-in${visible ? " is-in" : ""}`}>
        <h2 className="sr6-h2">{c.title}</h2>
        <p className="sr6-line">{c.line}</p>
        <ul className="sr6-grid">
          {SPORTS.map((s, i) => (
            <li key={s.icon} style={{ transitionDelay: `${i * 35}ms` }}>
              <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path fill="#0F172A" d={ICONS[s.icon]} /></svg>
              <span>{s[lang]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
