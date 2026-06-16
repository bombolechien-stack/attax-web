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
        backgroundColor: "#0d0d0d",
        borderRadius: "24px",
        minHeight: "calc(100vh - 24px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>

        {/* ── Athlete photo — right side ── */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0,
          width: "55%", zIndex: 0,
        }}>
          <Image
            src="/images/hero-boxing-1.jpg"
            alt="Athlete"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
          {/* left-to-dark gradient over photo */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, #0d0d0d 0%, rgba(13,13,13,0.7) 35%, rgba(13,13,13,0.1) 70%, rgba(13,13,13,0) 100%)",
          }} />
          {/* bottom fade */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, #0d0d0d 0%, rgba(13,13,13,0.3) 25%, transparent 50%)",
          }} />
        </div>

        {/* ── Grain texture ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, opacity: 0.25, pointerEvents: "none",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        }} />

        {/* ── Navbar inside dark block ── */}
        <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", height: "68px" }}>
          <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center", flex: 1 }}>
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="nav-link" style={{
                fontSize: "0.875rem", fontWeight: 500,
                color: "rgba(255,255,255,0.7)", textDecoration: "none",
              }}>{l.label}</Link>
            ))}
          </nav>
          <Link href="/" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textDecoration: "none" }}>
            <span style={{ fontSize: "1.375rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>attax</span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1, justifyContent: "flex-end" }}>
            <a href="#" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Log in</a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center",
              backgroundColor: "#ffffff", color: "#0d0d0d",
              fontWeight: 700, fontSize: "0.8125rem",
              padding: "8px 18px", borderRadius: "999px", textDecoration: "none",
            }}>Download App</a>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "grid", gridTemplateColumns: "repeat(3,5px)", gap: "3px" }} aria-label="Menu">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.7)" }} />
              ))}
            </button>
          </div>
        </div>

        {/* ── Hero content ── */}
        <div style={{
          position: "relative", zIndex: 2,
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "4rem 4rem 3rem",
          maxWidth: "600px",
        }}>
          <div className="animate-fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "999px", padding: "5px 14px 5px 8px", marginBottom: "2rem", width: "fit-content",
          }}>
            <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "rgba(252,95,43,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2.5 5L4.5 7L7.5 3" stroke="#FC5F2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>Free to download · iOS &amp; Android</span>
          </div>

          <h1 className="animate-fade-up delay-100" style={{
            fontSize: "clamp(3rem, 5.5vw, 4.75rem)",
            fontWeight: 800, color: "#ffffff",
            lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.5rem",
          }}>
            Keep moving<br />
            <em style={{ fontStyle: "normal", color: "#FC5F2B" }}>with attax.</em>
          </h1>

          <p className="animate-fade-up delay-200" style={{
            fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7, margin: "0 0 2.5rem", maxWidth: "420px", fontWeight: 400,
          }}>
            Move, progress, and stay motivated every day. Every step counts. Every effort brings you closer to your goals.
          </p>

          <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#ffffff", color: "#0d0d0d",
              fontWeight: 700, fontSize: "0.9375rem",
              padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
            }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "rgba(255,255,255,0.08)", color: "#ffffff",
              fontWeight: 600, fontSize: "0.9375rem",
              padding: "13px 26px", borderRadius: "999px",
              textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)",
            }}>Google Play</a>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="animate-fade-up delay-500" style={{
          position: "relative", zIndex: 2,
          display: "flex", padding: "0 4rem 3.5rem",
        }}>
          {[
            { title: "1 community", sub: "United around sport" },
            { title: "Thousands of athletes", sub: "Moving every day" },
            { title: "1 shared energy", sub: "#gowithattax", accent: true },
          ].map((s, i) => (
            <div key={s.title} style={{
              paddingLeft: i > 0 ? "2.5rem" : 0,
              marginLeft: i > 0 ? "2.5rem" : 0,
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}>
              <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: s.accent ? "#FC5F2B" : "#ffffff", marginBottom: "3px" }}>{s.title}</div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
