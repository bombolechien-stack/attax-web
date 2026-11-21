// Textes et photo repris tels quels du site en ligne (branche master, 21/11). Mise en forme : passe 7 (21/11), une carte
// photo arrondie posée dans la page comme le hero (12 px de marge, rayon 24 px), contenu sur la grille de 1 120 px,
// titre du système des chapitres et boutons en pilule du hero (classes .h7-* de src/app/home-p5.css).
"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { useParallax } from "@/hooks/useParallax";

export default function ArenaSection() {
  const t = useT();
  const a = t.arena;
  const { ref: textRef, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const bgRef = useParallax(0.06);

  return (
    <section className="h7-card-wrap h7-arena-sec">
      <div className="h7-arena">
        <div ref={bgRef} className="h7-arena-bg">
          <Image src="/images/sport/033-A.jpg" alt="Runner training at night" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 45%", filter: "grayscale(40%) contrast(1.1) brightness(0.42)" }} />
          <div className="scan-overlay" />
        </div>
        <div className="h7-arena-shade" />
        <div className="p5-wrap h7-arena-in">
          <div ref={textRef} className={`h7-head${visible ? " is-in" : ""}`}>
            <h2 className="h7-h2"><span>{a.h2[0]}</span> <span>{a.h2[1]}</span></h2>
            <p className="h7-line">{a.body[0]}<br />{a.body[1]}</p>
            <div className="h7-ctas">
              <a className="h7-btn h7-btn-light" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                {a.cta_ios}
              </a>
              <a className="h7-btn h7-btn-ghost" href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z"/></svg>
                {a.cta_android}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
