"use client";

import { useEffect, useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
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
  const { ref, visible } = useInView<HTMLDivElement>(0.35, { oneShot: true });
  // 0 = les 3 cartes, 1 = Overdrive jouée, 2 = le vainqueur
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStep(2); return; }
    const a = setTimeout(() => setStep(1), 1400), b = setTimeout(() => setStep(2), 3000);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, [visible]);

  // L'éventail vit dans la colonne du texte ; son état suit l'attribut data-step de la section (voir TwState).
  const fan = (
    <div className="tw7-fan" aria-hidden="true">
      {cards.map((cd) => (
        <div key={cd.id} className={`tw7-card${cd.id === "overdrive" ? " is-pick" : ""}`}>
          <PortraitCard card={cd} family={fams[cd.fam]} tagline={TAGLINE[lang][cd.id]} />
        </div>
      ))}
    </div>
  );

  return (
    <Story6 id="cards" kicker={c.kick} big={c.big} title={c.title} line={c.line} pin extra={<div ref={ref}>{fan}</div>}>
      {(p, pinned) => {
        const s = pinned ? (p < 0.3 ? 0 : p < 0.62 ? 1 : 2) : step;
        return (
          <div className="tw7">
            <TwState s={s} />
            <div className="st6-phone">
              <AppPhone dark={s >= 2}>
                <div className="tw6-screens">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/screens/story/${lang}/card.webp`} alt={c.alt[0]} style={{ opacity: s >= 2 ? 0 : 1 }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/screens/story/${lang}/winner.webp`} alt={c.alt[1]} style={{ opacity: s >= 2 ? 1 : 0 }} />
                </div>
              </AppPhone>
            </div>
          </div>
        );
      }}
    </Story6>
  );
}

/** Pousse l'étape courante sur l'éventail (qui vit dans la colonne du texte) via un attribut de la section. */
function TwState({ s }: { s: number }) {
  useEffect(() => { document.getElementById("cards")?.setAttribute("data-step", String(s)); }, [s]);
  return null;
}
