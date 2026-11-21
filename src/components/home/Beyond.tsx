"use client";

import { useLang, useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import SectionHead from "./SectionHead";
import AppPhone from "./AppPhone";

// Au-delà de la ligue (passe 6b) : trois vraies captures de l'app montrées EN ENTIER, dans le même téléphone que le Soir
// de combat (écrans public/screens/app/<langue>/6, 7, 8.webp recadrés sur l'écran : story/<langue>/season, duo, profile).
const SHOTS = ["season", "duo", "profile"] as const;

export default function Beyond() {
  const t = useT();
  const { lang } = useLang();
  const b = t.beyond;
  const { ref, visible } = useInView<HTMLDivElement>(0.12, { oneShot: true });

  return (
    <section id="season" className="p5-sec by6">
      <div className="p5-wrap">
        <SectionHead label={b.label} title={[b.h2[0], b.h2[1]]} />
        <div ref={ref} className="fn6-row">
          {b.items.map((it, i) => (
            <figure key={it.k} className="fn6-item" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transitionDelay: `${i * 140}ms` }}>
              <AppPhone src={`/screens/story/${lang}/${SHOTS[i]}.webp`} alt={`${it.t[0]} ${it.t[1]}`} baked dark={i === 0} />
              <figcaption><span>{it.k}</span>{it.t[0]} {it.t[1]}<small>{it.d}</small></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
