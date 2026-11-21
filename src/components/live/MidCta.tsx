// Appel au milieu de la page (passe 7, 21/11, accord du propriétaire), juste après le chapitre 05 (la ligue) : une ligne
// (le titre de la bande Télécharger, src/lib/translations.ts → footer.cta_h2) et les pilules App Store / Google Play.
"use client";

import { useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { AppleIcon, PlayIcon } from "./StoreIcons";

export default function MidCta() {
  const f = useT().footer;
  const { ref, visible } = useInView<HTMLDivElement>(0.3, { oneShot: true });
  return (
    <section className="h7-mid">
      <div className="p5-wrap">
        <div ref={ref} className={`h7-mid-row${visible ? " is-in" : ""}`}>
          <p className="h7-mid-t">{f.cta_h2[0]} {f.cta_h2[1]}</p>
          <div className="h7-ctas">
            <a className="h7-btn h7-btn-ink" href="/download/ios"><AppleIcon />{f.cta_ios}</a>
            <a className="h7-btn h7-btn-line" href="/download/android"><PlayIcon />{f.cta_android}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
