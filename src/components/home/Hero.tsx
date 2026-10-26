"use client";

import PageNavbar from "@/components/PageNavbar";
import { useT } from "@/lib/i18n";

export default function Hero() {
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
        {/* Vidéo du héros : 3 athlètes × 3 sports, rendus en scanlines (même DA que les héros des autres pages) */}
        <video
          className="home-hero-video"
          autoPlay muted loop playsInline preload="auto"
          poster="/videos/hero-scan-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-scan.mp4" type="video/mp4" />
        </video>
        <div className="scan-hero-lines" />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(13,13,13,0.94) 0%, rgba(13,13,13,0.75) 32%, rgba(13,13,13,0.1) 58%, rgba(13,13,13,0) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0) 22%, rgba(13,13,13,0) 72%, rgba(13,13,13,0.85) 100%)" }} />

        <div style={{ position: "relative", zIndex: 10, flexShrink: 0 }}>
          <PageNavbar />
        </div>

        <div className="hero-text-box home-hero-copy">
          <p className="pin-mono animate-fade-up" style={{ color: "rgba(255,255,255,0.4)", margin: "0 0 clamp(1.25rem, 2.5vw, 2rem)" }}>
            <b>{h.kicker[0]}</b>&nbsp;&nbsp;·&nbsp;&nbsp;{h.kicker[1]}
          </p>
          <h1 className="pin-title animate-fade-up" style={{
            fontSize: "clamp(3.25rem, 7vw, 7.5rem)", color: "#ffffff",
            margin: "0 0 clamp(1.5rem, 2.5vw, 2.25rem)",
          }}>
            {h.h1[0]}<br /><em>{h.h1[1]}</em>
          </h1>
          <p className="animate-fade-up delay-100" style={{
            fontSize: "clamp(0.9375rem, 1.2vw, 1.125rem)", color: "rgba(255,255,255,0.55)",
            lineHeight: 1.65, margin: "0 0 clamp(1.75rem, 3vw, 2.5rem)", maxWidth: "430px", whiteSpace: "pre-line",
          }}>
            {h.subtitle}
          </p>
          <div className="animate-fade-up delay-200" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700,
              fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)",
              padding: "13px 24px", borderRadius: "999px", textDecoration: "none",
            }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {h.cta_ios}
            </a>
            <a href="#how-it-works" style={{
              display: "inline-flex", alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)", fontWeight: 600,
              fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)",
              padding: "13px 24px", borderRadius: "999px", textDecoration: "none",
              border: "1px solid rgba(201,213,240,0.18)",
            }}>
              {h.cta_secondary}
            </a>
          </div>
          <div className="hero-stats animate-fade-up delay-300" style={{ display: "flex", gap: 0, paddingTop: "1.75rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {h.stats.map((s, i) => (
              <div key={s.n} style={{
                paddingLeft: i > 0 ? "2rem" : 0,
                marginLeft: i > 0 ? "2rem" : 0,
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>{s.n}</div>
                <div className="pin-mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.16em", color: "rgba(255,255,255,0.32)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="home-hero-foot pin-mono" style={{ fontSize: "0.75rem" }}>
          <span>@playattax</span>
          <span className="home-hero-sports">{h.sports}</span>
        </div>
      </div>
    </div>
  );
}
