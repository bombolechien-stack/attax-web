"use client";

import PageNavbar from "@/components/PageNavbar";
import { useT } from "@/lib/i18n";

/**
 * Hero de l'accueil (19/11) : EXACTEMENT le style des héros des autres pages (Discover, Adventure, pages SEO) —
 * carte arrondie #0d0d0d, fines scanlines `.scan-hero-lines`, dégradés noirs gauche → droite et bas → haut,
 * titre « pins » (Inter Tight + Instrument Serif italique bleu glacier). À droite, à la place de la photo / de
 * l'athlète : la vidéo des sportifs en scanlines, lignes bleu glacier #C9D5F0 comme les athlètes des autres héros
 * (scripts/hero-lines/ice.py), posée en « screen ». Téléphone / tablette : sportifs atténués derrière le texte.
 */
export default function Hero() {
  const t = useT();
  const h = t.hero;

  return (
    <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
      <div className="home-hero" style={{ position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px", minHeight: "calc(100vh - 24px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="scan-hero-lines" />
        <video className="home-hero-video" autoPlay muted loop playsInline preload="auto" poster="/videos/hero-lines-ice-poster.jpg" aria-hidden="true">
          <source src="/videos/hero-lines-ice.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to right, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.75) 45%, rgba(10,10,10,0.1) 75%, rgba(10,10,10,0) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 50%)" }} />
        <div style={{ position: "relative", zIndex: 10 }}>
          <PageNavbar />
        </div>

        <div className="hero-text-box" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem 4rem 2rem", maxWidth: "640px" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {h.kicker[0]} · {h.kicker[1]}
            </span>
          </div>
          <h1 className="pin-title" style={{ fontSize: "clamp(3rem, 5.5vw, 4.75rem)", color: "#ffffff", lineHeight: 1, margin: "0 0 1.25rem" }}>
            {h.h1[0]}{" "}<br className="hero-h1-br" /><em>{h.h1[1]}</em>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: "0 0 2rem", maxWidth: "440px", whiteSpace: "pre-line" }}>{h.subtitle}</p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="/download" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none" }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {h.cta_ios}
            </a>
            <a href="#how-it-works" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>{h.cta_secondary}</a>
          </div>
        </div>
        <div className="hero-stats" style={{ position: "relative", zIndex: 3, display: "flex", padding: "0 4rem clamp(2.5rem, 4vh, 4rem)", gap: 0 }}>
          {h.stats.map((s, i) => (
            <div key={s.n} style={{ paddingLeft: i > 0 ? "2.5rem" : 0, marginLeft: i > 0 ? "2.5rem" : 0, borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "3px" }}>{s.n}</div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
