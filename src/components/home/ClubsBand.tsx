// Bande « Clubs » de l'accueil (26/11) : juste SOUS l'appel du milieu (« Prêt à entrer dans l'arène ? »). Une question,
// une ligne, un bouton vers la page des organisations (/clubs). Même gabarit que cet appel (.h7-mid-row), sans filet
// du haut : celui de l'appel du dessus sert de séparation.
"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";

const COPY = {
  en: { t: "A gym, a club, a community?", s: "Create your Attax club: a rival every day, a champion every month.", cta: "Discover Clubs" },
  fr: { t: "Une salle, un club, une communauté ?", s: "Créez votre club Attax : un rival par jour, un champion par mois.", cta: "Découvrir les Clubs" },
};

export default function ClubsBand() {
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref, visible } = useInView<HTMLDivElement>(0.3, { oneShot: true });
  return (
    <section className="h7-mid" id="clubs" style={{ paddingTop: 0 }}>
      <div className="p5-wrap">
        <div ref={ref} className={`h7-mid-row${visible ? " is-in" : ""}`} style={{ borderTop: 0 }}>
          <div>
            <p className="h7-mid-t">{c.t}</p>
            <p className="h7-line" style={{ marginTop: "0.5rem", maxWidth: "none" }}>{c.s}</p>
          </div>
          <div className="h7-ctas">
            <a className="h7-btn h7-btn-ink" href="/clubs">{c.cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
