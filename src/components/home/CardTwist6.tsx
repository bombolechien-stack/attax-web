"use client";

import { useEffect, useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import Story6 from "./Story6";
import AppPhone from "./AppPhone";
import { PortraitCard, TAGLINE, type Card } from "./CardsShowcase";

// Chapitre 04 · 21h30 : « Une carte peut tout renverser. » Sur ordinateur, la section est épinglée et le défilement
// joue la révélation dans LE MÊME téléphone : la page Match avec ta carte dévoilée (vraie capture story/<langue>/card.webp),
// pendant que la carte portrait de l'app se retourne à côté (CardFlip de components/reveal/FightNight.tsx : dos noir à
// 26 lignes, « Attax » penché, famille ; elle tremble puis pivote), puis l'écran bleu du vainqueur (story/<langue>/winner.webp).
// Sur téléphone (ou animations réduites) : même suite, déclenchée à l'arrivée à l'écran.
const COPY = {
  en: { kick: "04 · 9:30 PM", big: "9:30", title: ["One card can", "turn it all around."] as [string, string], line: "Overdrive: today's workout counts ×1.5. At 9:30 PM, the verdict.", alt: ["Your card revealed in the Match screen", "The verdict: Johnny wins on HP"] },
  fr: { kick: "04 · 21h30", big: "21h30", title: ["Une carte peut", "tout renverser."] as [string, string], line: "Overdrive : ta séance du jour compte ×1,5. À 21h30, le verdict.", alt: ["Ta carte dévoilée sur la page Match", "Le verdict : Johnny gagne aux PV"] },
};

export default function CardTwist6() {
  const { lang } = useLang();
  const t = useT();
  const c = COPY[lang];
  const cs = t.cardsShowcase;
  const card = (cs.cards as readonly Card[]).find((x) => x.id === "overdrive")!;
  const fam = (cs.families as Record<string, string>)[card.fam];
  const { ref, visible } = useInView<HTMLDivElement>(0.35, { oneShot: true });
  // Suite déclenchée à l'arrivée (téléphone) : 0 = dos, 1 = tremble, 2 = retournée, 3 = le vainqueur
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStep(3); return; }
    const a = setTimeout(() => setStep(1), 500), b = setTimeout(() => setStep(2), 1300), d = setTimeout(() => setStep(3), 2900);
    return () => { clearTimeout(a); clearTimeout(b); clearTimeout(d); };
  }, [visible]);

  return (
    <Story6 id="cards" kicker={c.kick} big={c.big} title={c.title} line={c.line} pin>
      {(p, pinned) => {
        const s = pinned ? (p < 0.06 ? 0 : p < 0.16 ? 1 : p < 0.55 ? 2 : 3) : step;
        return (
          <div ref={ref} className="tw6">
            <div className="st6-phone tw6-phone">
              <AppPhone dark={s >= 3}>
                <div className="tw6-screens">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/screens/story/${lang}/card.webp`} alt={c.alt[0]} style={{ opacity: s >= 3 ? 0 : 1 }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/screens/story/${lang}/winner.webp`} alt={c.alt[1]} style={{ opacity: s >= 3 ? 1 : 0 }} />
                </div>
              </AppPhone>
            </div>
            <div className={`tw6-card${s === 1 ? " is-shake" : ""}`} style={{ opacity: s >= 3 ? 0 : 1, transform: s >= 3 ? "rotate(-7deg) translateY(30px) scale(0.92)" : undefined }}>
              <div className="tw6-back" style={{ transform: `perspective(900px) rotateY(${s >= 2 ? 90 : 0}deg)`, opacity: s >= 2 ? 0 : 1 }}>
                <b>Attax</b><i /><span>{fam}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/flag.svg" alt="" />
              </div>
              <div className="tw6-front" style={{ transform: `perspective(900px) rotateY(${s >= 2 ? 0 : -90}deg)`, opacity: s >= 2 ? 1 : 0 }}>
                <PortraitCard card={card} family={fam} tagline={TAGLINE[lang].overdrive} />
              </div>
            </div>
          </div>
        );
      }}
    </Story6>
  );
}
