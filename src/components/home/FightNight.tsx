"use client";

import { useLang, useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import SectionHead from "./SectionHead";
import AppPhone from "./AppPhone";

// Soir de combat (passe 6) : trois VRAIS écrans de la révélation de 21h30 (components/reveal/FightNight.tsx), dans le
// même téléphone, sur le fond clair de l'app :
// 1. la carte dévoilée (capture story/<langue>/card.webp : Overdrive ×1,5 sur la page Match) ;
// 2. le round final en direct (story/<langue>/final-round.webp : les boxeurs en scanlines, barres de PV) ;
// 3. le verdict, l'écran bleu du vainqueur (story/<langue>/winner.webp, tiré de la capture fn-34, scripts/winner-screen.py).
const SHOTS = ["card", "final-round", "winner"] as const;

export default function FightNight() {
  const t = useT();
  const { lang } = useLang();
  const f = t.fightNight;
  const { ref, visible } = useInView<HTMLDivElement>(0.15, { oneShot: true });

  return (
    <section id="fight-night" className="p5-sec fn6">
      <div className="p5-wrap">
        <SectionHead label={f.label} title={[f.h2[0], f.h2[1]]} lead={f.body} />
        <div ref={ref} className="fn6-row">
          {SHOTS.map((s, i) => (
            <figure key={s} className="fn6-item" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transitionDelay: `${i * 140}ms` }}>
              <AppPhone src={`/screens/story/${lang}/${s}.webp`} alt={f.alt[i]} dark={s === "winner"} />
              <figcaption><span>{f.steps[i].n}</span>{f.steps[i].t}</figcaption>
            </figure>
          ))}
        </div>
        <p className="fn6-note">{f.note}</p>
      </div>
    </section>
  );
}
