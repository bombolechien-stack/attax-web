"use client";
import Image from "next/image";

import PageNavbar from "@/components/PageNavbar";
import { useLang, useT } from "@/lib/i18n";

const STATS = {
  en: [["Your real effort", "Apple Health & Health Connect"], ["1 duel a day", "Verdict at 9:30 PM"], ["Leagues of 8", "7 days, 1 champion"]],
  fr: [["Ton vrai effort", "Apple Santé & Health Connect"], ["1 duel par jour", "Verdict à 21h30"], ["Ligues de 8", "7 jours, 1 champion"]],
};

export default function Hero() {
  const { lang } = useLang();
  const t = useT();
  const h = t.hero;

  return (
    <div style={{ backgroundColor: "#EEF1F7", padding: "0 12px 12px" }}>
      <div className="hero-card" style={{
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
          <div className="animate-fade-up delay-200 hero-ctas" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: 0 }}>
            <a href="/download" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700,
              fontSize: "1rem",
              padding: "15px 26px", borderRadius: "999px", textDecoration: "none",
            }}>

              {lang === "fr" ? "Télécharger" : "Download"}
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

        {/* Les chiffres du hero (comme avant), en bas à droite sous les sportifs */}
        <div className="hero-stats6 animate-fade-up delay-300">
          {(lang === "fr" ? STATS.fr : STATS.en).map((st) => (
            <div key={st[0]}><b>{st[0]}</b><span>{st[1]}</span></div>
          ))}
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
