"use client";

import { useLang, useT } from "@/lib/i18n";
import Story6 from "./Story6";
import AppPhone from "./AppPhone";
import { PortraitCard, TAGLINE, type Card } from "./CardsShowcase";

// Chapitre 04 : « Une carte peut tout renverser. » Les 3 cartes du jour, comme l'éventail du tirage de la page Match
// (cartes portrait de l'app, CardPortraitV3 : Ghost, Overdrive, Freeze), sous le texte ; puis la carte jouée (Overdrive)
// ressort et les deux autres s'effacent ; puis, dans le téléphone, la page Match avec ta carte (vraie capture
// story/<langue>/card.webp) laisse place à l'écran bleu du vainqueur (story/<langue>/winner.webp).
// Rien derrière le téléphone. Ordinateur : la section est épinglée et le défilement joue la suite ; téléphone ou
// animations réduites : la suite se joue à l'arrivée à l'écran.
const SHOWN = ["ghost", "overdrive", "freeze"] as const;
const COPY = {
  en: { kick: "04 · 9:30 PM", big: "9:30", title: ["One card can", "turn it all around."] as [string, string], line: "3 cards every morning. Play one before 1 PM. At 9:30 PM, the verdict.", alt: ["Your card revealed in the Match screen", "The verdict: Johnny wins on HP"] },
  fr: { kick: "04 · 21h30", big: "21h30", title: ["Une carte peut", "tout renverser."] as [string, string], line: "3 cartes chaque matin. Joues-en une avant 13h. À 21h30, le verdict.", alt: ["Ta carte dévoilée sur la page Match", "Le verdict : Johnny gagne aux PV"] },
};

export default function CardTwist6() {
  const { lang } = useLang();
  const t = useT();
  const c = COPY[lang];
  const cs = t.cardsShowcase;
  const fams = cs.families as Record<string, string>;
  const cards = SHOWN.map((id) => (cs.cards as readonly Card[]).find((x) => x.id === id)!);
  // Statique (21/11) : l'éventail des 3 cartes du jour sous le texte, le téléphone avec l'écran du vainqueur ; simple fondu.
  const fan = (
    <div className="tw7-fan" aria-hidden="true">
      {cards.map((cd) => (
        <div key={cd.id} className="tw7-card">
          <PortraitCard card={cd} family={fams[cd.fam]} tagline={TAGLINE[lang][cd.id]} />
        </div>
      ))}
    </div>
  );
  return (
    <Story6 id="cards" kicker={c.kick} title={c.title} line={c.line} extra={fan}>
      <div className="st6-phone"><AppPhone src={`/screens/story/${lang}/winner.webp`} alt={c.alt[1]} dark /></div>
    </Story6>
  );
}
