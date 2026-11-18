"use client";

import PageNavbar from "@/components/PageNavbar";
import { useT } from "@/lib/i18n";

const INK = "#0B1116";
const BLUE_LIGHT = "#5B86FF";   // bleu Attax éclairci pour rester lisible sur fond sombre
const BG = "#05070B";

export default function Hero() {
  const t = useT();
  const h = t.hero;

  return (
    <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
      <div className="home-hero" style={{
        position: "relative",
        borderRadius: "24px",
        minHeight: "calc(100vh - 24px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: BG,
        isolation: "isolate",
      }}>
        {/* 18/11 (2) : hero SOMBRE, plus contrasté. Variante sombre de la vidéo des sportifs
            (mêmes scanlines, couleur seule changée : scripts/hero-lines/dark.py) : fond noir, lignes bleu clair. */}
        {/* Vidéo : 3 scènes × 3 sports, rendues en scanlines comme les boxeurs de l'app (lignes bleues dont
            l'épaisseur suit la profondeur dans la silhouette ; scripts/hero-lines). Version sombre. */}
        <video
          className="home-hero-video"
          autoPlay muted loop playsInline preload="auto"
          poster="/videos/hero-lines-dark-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-lines-dark.mp4" type="video/mp4" />
        </video>
        <div className="home-hero-veil" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", background: "linear-gradient(to right, rgba(5,7,11,0.94) 0%, rgba(5,7,11,0.72) 32%, rgba(5,7,11,0) 56%)" }} />

        <div style={{ position: "relative", zIndex: 10, flexShrink: 0 }}>
          <PageNavbar />
        </div>

        <div className="hero-text-box home-hero-copy">
          <p className="pin-mono animate-fade-up" style={{ color: "rgba(255,255,255,0.5)", margin: "0 0 clamp(1.25rem, 2.5vw, 2rem)" }}>
            <b style={{ color: "#ffffff" }}>{h.kicker[0]}</b>&nbsp;&nbsp;·&nbsp;&nbsp;{h.kicker[1]}
          </p>
          <h1 className="pin-title animate-fade-up" style={{
            fontSize: "clamp(3rem, 6.2vw, 7rem)", color: "#ffffff",
            margin: "0 0 clamp(1.5rem, 2.5vw, 2.25rem)",
          }}>
            {h.h1[0]}<br /><em style={{ color: BLUE_LIGHT }}>{h.h1[1]}</em>
          </h1>
          <p className="animate-fade-up delay-100" style={{
            fontSize: "clamp(0.9375rem, 1.2vw, 1.125rem)", color: "rgba(255,255,255,0.72)",
            lineHeight: 1.65, margin: "0 0 clamp(1.75rem, 3vw, 2.5rem)", maxWidth: "440px", whiteSpace: "pre-line",
          }}>
            {h.subtitle}
          </p>
          <div className="animate-fade-up delay-200" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <a href="/download" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#ffffff", color: INK, fontWeight: 700,
              fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)",
              padding: "13px 24px", borderRadius: "999px", textDecoration: "none",
            }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {h.cta_ios}
            </a>
            <a href="#how-it-works" style={{
              display: "inline-flex", alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.08)", color: "#ffffff", fontWeight: 600,
              fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)",
              padding: "13px 24px", borderRadius: "999px", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
            }}>
              {h.cta_secondary}
            </a>
          </div>
          <div className="hero-stats animate-fade-up delay-300" style={{ display: "flex", gap: 0, paddingTop: "1.75rem", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            {h.stats.map((s, i) => (
              <div key={s.n} style={{
                paddingLeft: i > 0 ? "2rem" : 0,
                marginLeft: i > 0 ? "2rem" : 0,
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
              }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>{s.n}</div>
                <div className="pin-mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.16em", color: "rgba(255,255,255,0.45)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="home-hero-foot pin-mono" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
          <span>@playattax</span>
          <span className="home-hero-sports">{h.sports}</span>
        </div>
      </div>
    </div>
  );
}
