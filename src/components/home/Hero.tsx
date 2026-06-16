"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

export default function Hero() {
  return (
    <div style={{ backgroundColor: "#ffffff", padding: "12px" }}>
      <div style={{
        position: "relative",
        borderRadius: "24px",
        minHeight: "calc(100vh - 24px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "#080808",
      }}>

        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            zIndex: 0,
          }}
        >
          <source src="/videos/boxingonring.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.3) 40%, rgba(8,8,8,0.75) 85%, rgba(8,8,8,0.97) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(8,8,8,0.6) 0%, transparent 60%)" }} />

        {/* ── Navbar ── */}
        <div style={{
          position: "relative", zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 2.5rem", height: "68px", flexShrink: 0,
        }}>
          <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center", flex: 1 }}>
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="nav-link" style={{
                fontSize: "0.875rem", fontWeight: 500,
                color: "rgba(255,255,255,0.65)", textDecoration: "none",
              }}>{l.label}</Link>
            ))}
          </nav>

          {/* Logo — SVG icon + text */}
          <Link href="/" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <Image
              src="/images/attaxlogos.svg"
              alt="Attax logo"
              width={22}
              height={21}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <Image
              src="/images/attaxtxt.svg"
              alt="Attax"
              width={72}
              height={22}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1, justifyContent: "flex-end" }}>
            <a href="#" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Log in</a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{
              display: "inline-flex", alignItems: "center",
              backgroundColor: "#ffffff", color: "#0d0d0d",
              fontWeight: 700, fontSize: "0.8125rem",
              padding: "8px 18px", borderRadius: "999px", textDecoration: "none",
            }}>Download</a>
          </div>
        </div>

        {/* ── Content ── */}
        <div style={{
          position: "relative", zIndex: 2,
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "0 4rem 5rem",
        }}>
          <div style={{ maxWidth: "580px" }}>
            <div className="animate-fade-up" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              marginBottom: "2rem",
            }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.38)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Free · iOS & Android</span>
            </div>

            <h1 className="animate-fade-up delay-100" style={{
              fontSize: "clamp(3rem, 5.5vw, 5rem)",
              fontWeight: 800, color: "#ffffff",
              lineHeight: 1.0, letterSpacing: "-0.04em", margin: "0 0 1.75rem",
            }}>
              Your workouts<br />become a fight.
            </h1>

            <p className="animate-fade-up delay-200" style={{
              fontSize: "1rem", color: "rgba(255,255,255,0.42)",
              lineHeight: 1.75, margin: "0 0 2.75rem", maxWidth: "380px",
            }}>
              Train. Score Activity Points. Face a real opponent every night at 21:30. 8 players, 7 days, 12 strategic cards.
            </p>

            <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                backgroundColor: "#ffffff", color: "#0d0d0d",
                fontWeight: 700, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
              }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{
                display: "inline-flex", alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.65)",
                fontWeight: 600, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px",
                textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)",
              }}>Google Play</a>
            </div>
          </div>
        </div>

        {/* ── Bottom stats ── */}
        <div className="animate-fade-up delay-400" style={{
          position: "relative", zIndex: 2,
          display: "flex", gap: 0,
          padding: "0 4rem 3rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {[
            { title: "8 players", sub: "Per league · 7 days" },
            { title: "12 cards", sub: "Strategic powers" },
            { title: "21:30", sub: "Duel resolution nightly" },
          ].map((s, i) => (
            <div key={s.title} style={{
              paddingTop: "2rem",
              paddingLeft: i > 0 ? "2.5rem" : 0,
              marginLeft: i > 0 ? "2.5rem" : 0,
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}>
              <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "3px" }}>{s.title}</div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.32)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
