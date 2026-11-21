"use client";

import Image from "next/image";
import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp } from "@/hooks/useInView";

/** Saison, binôme, palmarès : trois vraies captures de l'app (public/screens/app/<langue>/6, 7, 8.webp). */
export default function Beyond() {
  const t = useT();
  const { lang } = useLang();
  const b = t.beyond;
  const { ref, visible } = useInView<HTMLDivElement>(0.08, { oneShot: true });

  return (
    <section id="season" className="p5-sec by5">
      <div className="p5-wrap">
        <div className="by5-top"><p className="p5-label">{b.label}</p><p className="by5-line">{b.h2[0]} {b.h2[1]}</p></div>
        <div ref={ref} className="by5-grid">
          {b.items.map((it, i) => (
            <article key={it.k} className="by5-item" style={{ ...fadeUp(visible, i * 120) }}>
              <div className="by5-shot">
                <Image src={`/screens/app/${lang}/${it.img}.webp`} alt={`${it.t[0]} ${it.t[1]}`} width={560} height={1107} quality={90} sizes="(max-width: 860px) 60vw, 240px" />
              </div>
              <div className="by5-txt">
                <span className="p5-label">{it.k}</span>
                <h3 className="by5-h3">{it.t[0]} {it.t[1]}</h3>
                <p className="by5-p">{it.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
