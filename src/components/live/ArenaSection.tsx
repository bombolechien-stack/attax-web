// Appel final (passe 7, 21/11, accord du propriétaire) : « L'arène ne s'arrête jamais » et la bande Télécharger réunies
// en UNE carte photo arrondie posée comme le hero (12 px de marge, rayon 24 px), contenu sur la grille de 1 120 px :
// repère « Télécharger », titre de l'arène, ses 3 lignes, pilules App Store / Google Play (vers /download/ios|android).
// Sur l'accueil, la bande Télécharger du pied de page est masquée (home-p5.css).
"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { useParallax } from "@/hooks/useParallax";
import { AppleIcon, PlayIcon } from "./StoreIcons";

export default function ArenaSection() {
  const t = useT();
  const a = t.arena;
  const f = t.footer;
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
            <p className="st6-kick">{f.cta_label}</p>
            <h2 className="h7-h2"><span>{a.h2[0]}</span> <span>{a.h2[1]}</span></h2>
            <p className="h7-line">{a.body.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}</p>
            <div className="h7-ctas">
              <a className="h7-btn h7-btn-light" href="/download/ios"><AppleIcon />{f.cta_ios}</a>
              <a className="h7-btn h7-btn-ghost" href="/download/android"><PlayIcon />{f.cta_android}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
