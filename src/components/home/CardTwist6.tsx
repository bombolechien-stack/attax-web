"use client";

import { useLang, useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import AppPhone from "./AppPhone";
import { PortraitCard, TAGLINE, type Card } from "./CardsShowcase";

// Chapitre 04 « Une carte peut tout renverser. » (21/11, refait à la demande de gui) : 3 étapes claires, VRAIES captures.
// 1. Le matin : les 3 cartes du jour en éventail (cartes portrait de l'app : Ghost, Overdrive, Freeze), Overdrive choisie.
// 2. 21h30 : la révélation de la carte dans la page Match (Overdrive ×1,5) : store-assets/shots-2026-11-17 fn-18 (FR),
//    en/fn-13 (EN) → story/<langue>/card-reveal.webp.
// 3. Le round final après les cartes : fn-30 (FR, « 82 pts de retard ») / en/fn-29 (EN, « 121 pts ahead », le round bascule)
//    → story/<langue>/card-final.webp. Il n'existe pas encore de capture FR où le score passe devant.
// Plus d'écran bleu du vainqueur ici, plus d'épinglage au défilement ; rien derrière les téléphones.
const SHOWN = ["ghost", "overdrive", "freeze"] as const;
const COPY = {
  en: {
    kick: "04 · 9:30 PM", title: ["One card can", "turn it all around."],
    steps: [["Morning", "In the morning, 3 cards. Pick one before 1 PM."], ["9:30 PM", "Your cards are revealed and play out before the final round."], ["The final round", "One card can turn it all around."]],
    alt: ["Your card revealed at 9:30 PM: Overdrive, today's workout pts ×1.5", "The final round after the cards: Johnny 121 pts ahead"],
  },
  fr: {
    kick: "04 · 21h30", title: ["Une carte peut", "tout renverser."],
    steps: [["Le matin", "Le matin, 3 cartes. Choisis-en une avant 13h."], ["21h30", "Vos cartes se révèlent et entrent en jeu avant le round final."], ["Le round final", "Le round final se joue en direct, cartes comprises."]],
    alt: ["Ta carte dévoilée à 21h30 : Overdrive, les pts de ta séance du jour ×1,5", "Le round final après les cartes : Johnny revient à 82 pts"],
  },
};

export default function CardTwist6() {
  const { lang } = useLang();
  const t = useT();
  const c = COPY[lang];
  const cs = t.cardsShowcase;
  const fams = cs.families as Record<string, string>;
  const cards = SHOWN.map((id) => (cs.cards as readonly Card[]).find((x) => x.id === id)!);
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const { ref: visRef, visible: visIn } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  return (
    <section id="cards" className="st6 cw7">
      <div className="p5-wrap st6-grid">
        <div ref={ref} className={`st6-txt${visible ? " is-in" : ""}`}>
          <p className="st6-kick">{c.kick}</p>
          <h2 className="st6-h2"><span>{c.title[0]}</span> <span>{c.title[1]}</span></h2>
          <ol className="cw7-steps">
            {c.steps.map(([k, l], i) => (
              <li key={k}>
                <span className="cw7-n">{i + 1} · {k}</span>
                <p>{l}</p>
                {i === 0 && (
                  <div className="cw7-fan" aria-hidden="true">
                    {cards.map((cd) => (
                      <div key={cd.id} className={`cw7-card${cd.id === "overdrive" ? " is-pick" : ""}`}>
                        <PortraitCard card={cd} family={fams[cd.fam]} tagline={TAGLINE[lang][cd.id]} />
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div ref={visRef} className={`cw7-phones${visIn ? " is-in" : ""}`}>
          {(["card-reveal", "card-final"] as const).map((src, i) => (
            <figure key={src} className="cw7-ph">
              <AppPhone src={`/screens/story/${lang}/${src}.webp`} alt={c.alt[i]} />
              <figcaption>{i + 2} · {c.steps[i + 1][0]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
