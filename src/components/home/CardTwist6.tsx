"use client";

import { useEffect, useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import Story6 from "./Story6";
import AppPhone from "./AppPhone";
import { PortraitCard, TAGLINE, type Card } from "./CardsShowcase";

// Écran 5 : « Une carte peut tout renverser. » La carte se retourne comme dans la révélation de l'app (CardFlip de
// components/reveal/FightNight.tsx : dos noir #1C2129 → #07090D à 26 lignes, « Attax » penché, filet, famille ; la carte
// tremble de plus en plus puis pivote en 460 ms) : c'est la carte portrait de l'app (CardPortraitV3), Overdrive.
// Puis la récompense : l'écran bleu du vainqueur (vraie capture, textes FR de l'app : story/<langue>/winner.webp).
const COPY = {
  en: { title: ["One card can", "turn it all around."] as [string, string], line: "Overdrive: today's workout counts ×1.5. At 9:3000a0PM, the verdict.", alt: "The verdict: Johnny wins on HP" },
  fr: { title: ["Une carte peut", "tout renverser."] as [string, string], line: "Overdrive : ta séance du jour compte ×1,5. À 21h30, le verdict.", alt: "Le verdict : Johnny gagne aux PV" },
};

export default function CardTwist6() {
  const { lang } = useLang();
  const t = useT();
  const c = COPY[lang];
  const cs = t.cardsShowcase;
  const card = (cs.cards as readonly Card[]).find((x) => x.id === "overdrive")!;
  const fam = (cs.families as Record<string, string>)[card.fam];
  const { ref, visible } = useInView<HTMLDivElement>(0.35, { oneShot: true });
  // 0 = dos, 1 = tremble, 2 = retournée, 3 = le vainqueur arrive
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStep(3); return; }
    const a = setTimeout(() => setStep(1), 500), b = setTimeout(() => setStep(2), 1300), d = setTimeout(() => setStep(3), 2600);
    return () => { clearTimeout(a); clearTimeout(b); clearTimeout(d); };
  }, [visible]);

  return (
    <Story6 id="cards" title={c.title} line={c.line}>
      <div ref={ref} className="tw6">
        <div className={`tw6-card${step === 1 ? " is-shake" : ""}`}>
          <div className="tw6-back" style={{ transform: `perspective(900px) rotateY(${step >= 2 ? 90 : 0}deg)`, opacity: step >= 2 ? 0 : 1 }}>
            <b>Attax</b><i /><span>{fam}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/flag.svg" alt="" />
          </div>
          <div className="tw6-front" style={{ transform: `perspective(900px) rotateY(${step >= 2 ? 0 : -90}deg)`, opacity: step >= 2 ? 1 : 0 }}>
            <PortraitCard card={card} family={fam} tagline={TAGLINE[lang].overdrive} />
          </div>
        </div>
        <div className="tw6-win" style={{ opacity: step >= 3 ? 1 : 0, transform: step >= 3 ? "none" : "translateY(40px)" }}>
          <AppPhone src={`/screens/story/${lang}/winner.webp`} alt={c.alt} dark />
        </div>
      </div>
    </Story6>
  );
}
