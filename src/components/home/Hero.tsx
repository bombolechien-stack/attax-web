"use client";
import Image from "next/image";

import PageNavbar from "@/components/PageNavbar";
import { useLang, useT } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const t = useT();
  const h = t.hero;

  return (
    <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
      <div style={{
        position: "relative",
        borderRadius: "24px",
        minHeight: "calc(100vh - 24px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "#0d0d0d",
      }}>
        {/* Vidéo du héros : 3 athlètes × 3 sports, rendus en scanlines (même DA que les héros des autres pages) ; vidéo,
            cadrage et transitions = ceux de la version en ligne (master). Seuls le titre et le bouton → /download changent. */}
        <video
          className="home-hero-video"
          autoPlay muted loop playsInline preload="auto"
          poster="/videos/hero-scan-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-scan.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(13,13,13,0.94) 0%, rgba(13,13,13,0.75) 32%, rgba(13,13,13,0.1) 58%, rgba(13,13,13,0) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0) 22%, rgba(13,13,13,0) 72%, rgba(13,13,13,0.85) 100%)" }} />

        <div style={{ position: "relative", zIndex: 10, flexShrink: 0 }}>
          <PageNavbar pill />
        </div>

        <div className="hero-text-box home-hero-copy">
          <p className="p-label animate-fade-up" style={{ color: "rgba(255,255,255,0.55)", margin: "0 0 1.25rem" }}>
            {h.kicker[0]} · {h.kicker[1]}
          </p>
          {/* Le titre façon affiche des pins : 2e ligne en italique serif, bleu glacier */}
          <h1 className="p-h1 p-h1-A animate-fade-up">
            <span className="l1">{h.h1[0]}</span> <span className="l2">{h.h1[1]}</span>
          </h1>
          <p className="animate-fade-up delay-100" style={{
            fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)", color: "rgba(255,255,255,0.8)",
            lineHeight: 1.65, margin: "0 0 clamp(1.75rem, 3vw, 2.5rem)", maxWidth: "470px", whiteSpace: "pre-line",
          }}>
            {h.subtitle}
          </p>
          <div className="animate-fade-up delay-200" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: 0 }}>
            <a href="/download" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700,
              fontSize: "1rem",
              padding: "15px 26px", borderRadius: "999px", textDecoration: "none",
            }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {h.cta_ios}
            </a>
            <a href="#opponent" style={{
              display: "inline-flex", alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)", fontWeight: 600,
              fontSize: "1rem",
              padding: "15px 26px", borderRadius: "999px", textDecoration: "none",
              border: "1px solid rgba(201,213,240,0.18)",
            }}>
              {h.cta_secondary}
            </a>
          </div>
        </div>

        {/* Passe 5 : seulement le HAUT du téléphone, qui monte du bord bas de la carte, sous les boutons (jamais devant les
            sportifs). Cadre dessiné en CSS (bords nets), écran = vraie capture de la page Match (round final), EN / FR. */}
        <div className="hero-peek" aria-hidden="true">
          <div className="hero-peek-frame">
            <div className="hero-peek-screen">
              <div className="hero-peek-status"><b>9:41</b><i className="hero-peek-island" /><span className="hero-peek-icons"><i /><i /><i /><em /></span></div>
              <Image src={`/screens/story/${lang}/final-round.webp`} alt="" width={522} height={1017} priority sizes="280px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
