"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import AppPhone from "./AppPhone";

// Appel final (passe 6) : sur le fond clair de l'app, le titre du hero, les deux boutons, et le haut du téléphone avec la
// page Match pendant les rounds (vraie capture story/<langue>/rounds.webp), coupé par le bas du bloc comme dans le hero.
const COPY = {
  en: { label: "Download", h2: ["Sport is now", "a game."], lead: "Free on iPhone and Android. A new opponent every day.", ios: "App Store", android: "Google Play", alt: "The Match screen of Attax during the rounds" },
  fr: { label: "Télécharger", h2: ["Le sport devient", "un jeu."], lead: "Gratuit sur iPhone et Android. Un nouvel adversaire chaque jour.", ios: "App Store", android: "Google Play", alt: "La page Match d'Attax pendant les rounds" },
};

export default function Download6() {
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  return (
    <section id="download" className="p5-sec dl6">
      <div className="p5-wrap">
        <div ref={ref} className="dl6-card">
          <div className="dl6-txt" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)" }}>
            <p className="p5-label">{c.label}</p>
            <h2 className="p5-h2"><span>{c.h2[0]}</span> <span className="dl6-serif">{c.h2[1]}</span></h2>
            <p className="p5-lead" style={{ marginTop: "1.25rem" }}>{c.lead}</p>
            <div className="dl6-btns">
              <a href="/download/ios" className="dl6-btn dl6-main">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                {c.ios}
              </a>
              <a href="/download/android" className="dl6-btn">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.6 1.8 13.4 12l-9.8 10.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm10.9 11.3 2.6 2.7-11.6 6.6 9-9.3Zm3.9-4.1 2.9 1.7c.9.5.9 1.8 0 2.3l-2.9 1.7-2.8-2.9 2.8-2.8ZM5.5 1.6l11.6 6.6-2.6 2.7-9-9.3Z"/></svg>
                {c.android}
              </a>
            </div>
          </div>
          <div className="dl6-phone" aria-hidden="true" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(60px)" }}>
            <AppPhone src={`/screens/story/${lang}/rounds.webp`} alt={c.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
