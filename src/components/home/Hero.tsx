"use client";

import PageNavbar from "@/components/PageNavbar";

export default function Hero() {
  return (
    <div style={{ backgroundColor: "#ffffff", padding: "12px" }}>
      <div style={{
        position: "relative",
        borderRadius: "24px",
        height: "calc(100vh - 24px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "#070707",
      }}>

        {/* Boxing video */}
        <video autoPlay muted loop playsInline preload="metadata" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 30%", zIndex: 0,
        }}>
          <source src="/videos/boxingonring.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundColor: "rgba(7,7,7,0.6)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(7,7,7,0.4) 0%, rgba(7,7,7,0.1) 35%, rgba(7,7,7,0.6) 75%, rgba(7,7,7,1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(7,7,7,0.88) 0%, rgba(7,7,7,0.4) 50%, rgba(7,7,7,0) 80%)" }} />

        {/* Navbar */}
        <div style={{ position: "relative", zIndex: 10, flexShrink: 0 }}>
          <PageNavbar />
        </div>

        {/* Left-aligned content */}
        <div style={{
          position: "relative", zIndex: 5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(2rem, 5vw, 5rem)",
          maxWidth: "60%",
        }}>
          <h1 className="animate-fade-up" style={{
            fontSize: "clamp(3.5rem, 6.5vw, 7rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 0.93,
            letterSpacing: "-0.05em",
            margin: "0 0 clamp(1.25rem, 2.5vw, 2rem)",
          }}>
            Train.<br />Fight.<br />Dominate.
          </h1>

          <p className="animate-fade-up delay-100" style={{
            fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.75,
            margin: "0 0 clamp(1.75rem, 3vw, 2.75rem)",
            maxWidth: "380px",
          }}>
            Turn your real-world activity into power.<br />Battle real players every day.
          </p>

          <div className="animate-fade-up delay-200" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700,
              fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)",
              padding: "13px 24px", borderRadius: "999px", textDecoration: "none",
            }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)", fontWeight: 600,
              fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)",
              padding: "13px 24px", borderRadius: "999px", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.12)",
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z"/></svg>
              Google Play
            </a>
          </div>
        </div>

        {/* Bottom stats — left aligned */}
        <div className="animate-fade-up delay-300" style={{
          position: "relative", zIndex: 5,
          display: "flex",
          padding: "0 clamp(2rem, 5vw, 5rem) 3rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {[
            { n: "8 players", sub: "Per league · 7 days" },
            { n: "12 cards", sub: "Strategic powers" },
            { n: "21:30", sub: "Duel every night" },
          ].map((s, i) => (
            <div key={s.n} style={{
              paddingTop: "2rem",
              paddingLeft: i > 0 ? "2.5rem" : 0,
              marginLeft: i > 0 ? "2.5rem" : 0,
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}>
              <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "3px" }}>{s.n}</div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.32)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
