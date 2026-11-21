"use client";
import Image from "next/image";

import PageNavbar from "@/components/PageNavbar";
import { useLang, useT } from "@/lib/i18n";

const STATS = {
  en: [["Your real effort", "Apple Health & Health Connect"], ["1 duel a day", "Verdict at 9:30 PM"], ["Leagues of 8", "7 days, 1 champion"]],
  fr: [["Ton vrai effort", "Apple Santé & Health Connect"], ["1 duel par jour", "Verdict à 21h30"], ["Ligues de 8", "7 jours, 1 champion"]],
};

// Repère et slogan du hero (21/11, demandés par gui), écrits ici : deux lignes exactes par langue.
const TITLE = {
  en: { kick: "Every day · a new rival", l1: "Sport is now", l2a: "", l2b: "a game." },
  fr: { kick: "Chaque jour · un nouvel adversaire", l1: "Le sport", l2a: "devient ", l2b: "un jeu." },
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
          {/* 21/11 (gui) : repère remis, lisible (petites capitales ~14 px, blanc 70 %). */}
          <p className="hero-kick6 animate-fade-up">{TITLE[lang].kick}</p>
          {/* Le titre façon affiche des pins : 2e ligne en italique serif, bleu glacier */}
          {/* Le slogan sur DEUX lignes (21/11, gui) : seul « un jeu. » / « a game. » en italique serif bleu glacier. */}
          <h1 className="p-h1 p-h1-A hero-h1-6 animate-fade-up">
            <span className="l1">{TITLE[lang].l1}</span>
            <span className="l1">{TITLE[lang].l2a}<em className="hero-it6">{TITLE[lang].l2b}</em></span>
          </h1>
          <p className="animate-fade-up delay-100" style={{
            fontSize: "clamp(1.1875rem, 1.5vw, 1.375rem)", color: "rgba(255,255,255,0.85)",
            lineHeight: 1.55, margin: "0 0 clamp(1.75rem, 3vw, 2.5rem)", maxWidth: "470px", whiteSpace: "pre-line",
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
            <div key={st[0]}><b>{st[0]}</b></div>
          ))}
        </div>

        {/* Passe 5 : seulement le HAUT du téléphone, qui monte du bord bas de la carte, sous les boutons (jamais devant les
            sportifs). Cadre dessiné en CSS (bords nets), écran = vraie capture de la page Match le soir (compte à rebours avant le verdict, avatars,
            barres de PV), choisie par gui : EN _captures_app/16_match_round_final_soir, FR store-assets/shots-2026-11-17/match-1b
            (même écran en français), sans la barre d'état Android → story/<langue>/hero-match.webp. */}
        <div className="hero-peek" aria-hidden="true">
          <div className="hero-peek-frame">
            <div className="hero-peek-screen">
              <div className="hero-peek-status"><b>9:41</b><i className="hero-peek-island" /><span className="hero-peek-icons"><i /><i /><i /><em /></span></div>
              <Image src={`/screens/story/${lang}/hero-match.webp`} alt="" width={522} height={582} priority sizes="280px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
