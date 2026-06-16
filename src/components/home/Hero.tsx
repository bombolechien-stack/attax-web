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
        backgroundColor: "#080808",
        borderRadius: "24px",
        minHeight: "calc(100vh - 24px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>

        {/* Scanlines */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)",
        }} />

        {/* Grain */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, opacity: 0.2, pointerEvents: "none",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        }} />

        {/* Fighter A — left side, behind text via z-index */}
        <div style={{
          position: "absolute",
          right: "6%",
          bottom: 0,
          width: "50%",
          height: "90%",
          zIndex: 2,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          gap: "0",
        }}>
          {/* Fighter A glow */}
          <div style={{ width: "50%", height: "100%", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0 }} className="fighter-glow" data-glow="blue">
              <Image
                src="/fighters/A2.png"
                alt="Fighter A"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  filter: "drop-shadow(0 0 28px rgba(59,130,246,0.45)) brightness(1.05)",
                }}
                priority
              />
            </div>
            {/* Blue aura */}
            <div style={{
              position: "absolute",
              bottom: "15%", left: "50%", transform: "translateX(-50%)",
              width: "160px", height: "160px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
          </div>
          {/* Fighter B — mirrored */}
          <div style={{ width: "50%", height: "100%", position: "relative", transform: "scaleX(-1)" }}>
            <div style={{ position: "absolute", inset: 0 }} className="fighter-glow">
              <Image
                src="/fighters/B2.png"
                alt="Fighter B"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  filter: "drop-shadow(0 0 28px rgba(239,68,68,0.4)) brightness(1.05)",
                }}
                priority
              />
            </div>
            {/* Red aura */}
            <div style={{
              position: "absolute",
              bottom: "15%", left: "50%", transform: "translateX(-50%)",
              width: "160px", height: "160px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(239,68,68,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
          </div>
        </div>

        {/* Left fade to hide fighters behind text */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #080808 0%, #080808 35%, rgba(8,8,8,0.8) 52%, rgba(8,8,8,0) 72%)",
          pointerEvents: "none", zIndex: 3,
        }} />
        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
          background: "linear-gradient(to top, #080808 0%, transparent 100%)",
          pointerEvents: "none", zIndex: 3,
        }} />

        {/* HUD score overlay — floating above fighters */}
        <div style={{
          position: "absolute",
          right: "7%", top: "38%",
          zIndex: 4,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          transform: "translateY(-50%)",
        }}>
          {/* Score badges */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{
              backgroundColor: "rgba(8,8,8,0.75)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: "10px", padding: "8px 14px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "2px" }}>You</div>
              <div className="score-num" style={{ fontSize: "1.375rem", color: "#ffffff" }}>2 847</div>
            </div>
            <div className="vs-flicker" style={{ fontSize: "0.75rem", fontWeight: 900, color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>VS</div>
            <div style={{
              backgroundColor: "rgba(8,8,8,0.75)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: "10px", padding: "8px 14px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", color: "#f87171", textTransform: "uppercase", marginBottom: "2px" }}>Alex</div>
              <div className="score-num" style={{ fontSize: "1.375rem", color: "#ffffff" }}>2 231</div>
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ width: "200px" }}>
            <div style={{
              height: "5px", borderRadius: "3px",
              backgroundColor: "rgba(255,255,255,0.08)", overflow: "hidden",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0,
                width: "56%",
                background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
              }} />
              <div style={{
                position: "absolute", right: 0, top: 0, bottom: 0,
                width: "44%",
                background: "linear-gradient(270deg, #ef4444, #f87171)",
              }} />
            </div>
          </div>
          {/* Resolves at */}
          <div style={{
            fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.25)", textTransform: "uppercase",
          }}>Resolves tonight · 21:30</div>
        </div>

        {/* ── Navbar ── */}
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

        {/* ── Content ── */}
        <div style={{
          position: "relative", zIndex: 4,
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "4rem 4rem 3rem",
          maxWidth: "580px",
        }}>
          <div className="animate-fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            marginBottom: "2rem", width: "fit-content",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
            <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>FREE · iOS &amp; ANDROID</span>
          </div>

          <h1 className="animate-fade-up delay-100" style={{
            fontSize: "clamp(3rem, 5.5vw, 4.75rem)",
            fontWeight: 800, color: "#ffffff",
            lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.5rem",
          }}>
            Your workouts<br />
            <em style={{ fontStyle: "normal", color: "rgba(255,255,255,0.85)" }}>become a fight.</em>
          </h1>

          <p className="animate-fade-up delay-200" style={{
            fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7, margin: "0 0 2.5rem", maxWidth: "400px",
          }}>
            Train. Score Activity Points. Beat your opponent tonight at 21:30. 8 players, 7 days, 12 strategic cards.
          </p>

          <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{
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
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)",
              fontWeight: 600, fontSize: "0.9375rem",
              padding: "13px 26px", borderRadius: "999px",
              textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)",
            }}>Google Play</a>
          </div>
        </div>

        {/* ── Bottom stats ── */}
        <div className="animate-fade-up delay-500" style={{
          position: "relative", zIndex: 4,
          display: "flex", padding: "0 4rem 3.5rem",
        }}>
          {[
            { title: "8 players", sub: "Per league, 7 days" },
            { title: "12 cards", sub: "Strategic powers" },
            { title: "21:30", sub: "Duel resolution every night" },
          ].map((s, i) => (
            <div key={s.title} style={{
              paddingLeft: i > 0 ? "2.5rem" : 0,
              marginLeft: i > 0 ? "2.5rem" : 0,
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}>
              <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "3px" }}>{s.title}</div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
