"use client";

import PageNavbar from "@/components/PageNavbar";

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
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)" }} />

        {/* Navbar */}
        <PageNavbar />

        {/* iPhone mockup — right side, bottom-aligned */}
        <div style={{
          position: "absolute",
          right: "5%",
          bottom: 0,
          zIndex: 2,
          height: "75%",
          display: "flex",
          alignItems: "flex-end",
        }}>
          <div style={{
            width: "260px",
            height: "520px",
            borderRadius: "40px",
            border: "8px solid rgba(255,255,255,0.12)",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(255,255,255,0.05)",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#080808",
          }}>
            {/* Top score bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "1.5rem 1.25rem 1rem" }}>
              <div>
                <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: "4px" }}>YOU</div>
                <div className="score-num" style={{ fontSize: "1.75rem", color: "#ffffff", fontWeight: 800 }}>2 847</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: "4px" }}>ALEX</div>
                <div className="score-num" style={{ fontSize: "1.75rem", color: "rgba(255,255,255,0.55)", fontWeight: 800 }}>2 231</div>
              </div>
            </div>

            {/* Bar */}
            <div style={{ height: "3px", backgroundColor: "#1a1a2e", margin: "0 1.25rem" }}>
              <div style={{ width: "56%", height: "100%", backgroundColor: "#3b82f6" }} />
            </div>
            <div style={{ height: "3px", backgroundColor: "#1a1a2e", margin: "0 1.25rem", marginTop: "2px" }}>
              <div style={{ width: "44%", height: "100%", backgroundColor: "#ef4444", marginLeft: "56%" }} />
            </div>

            {/* Timer */}
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}>21:30</div>
              <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", marginTop: "4px" }}>TONIGHT&apos;S DUEL</div>
            </div>

            {/* Day indicator */}
            <div style={{ flex: 1 }} />
            <div style={{ textAlign: "center", padding: "1rem 1.25rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>Day 4 of 7</div>
              <div style={{ display: "flex", gap: "4px", justifyContent: "center", marginTop: "8px" }}>
                {[1,2,3,4,5,6,7].map(d => (
                  <div key={d} style={{ width: "20px", height: "3px", borderRadius: "2px", backgroundColor: d <= 4 ? "#3b82f6" : "rgba(255,255,255,0.1)" }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content — left side */}
        <div style={{
          position: "relative", zIndex: 2,
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "0 4rem 5rem",
          maxWidth: "55%",
        }}>
          {/* Badge */}
          <div className="animate-fade-up" style={{ marginBottom: "2rem" }}>
            <span style={{
              display: "inline-block",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px",
              padding: "5px 14px",
            }}>Coming Soon</span>
          </div>

          <h1 className="animate-fade-up delay-100" style={{
            fontSize: "clamp(3rem, 5vw, 5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.0,
            letterSpacing: "-0.045em",
            margin: "0 0 1.75rem",
          }}>
            Turn your workouts<br />into victories.
          </h1>

          <p className="animate-fade-up delay-200" style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
            margin: "0 0 2.75rem",
            maxWidth: "360px",
          }}>
            Attax is the competitive fitness game where every workout, every step and every effort makes your fighter stronger.
          </p>

          <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <a href="#waitlist" className="btn-white" style={{
              display: "inline-flex", alignItems: "center",
              backgroundColor: "#ffffff", color: "#0d0d0d",
              fontWeight: 700, fontSize: "0.9375rem",
              padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
            }}>
              Join the waitlist
            </a>
            <a href="#how-it-works" className="btn-ghost" style={{
              display: "inline-flex", alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.65)",
              fontWeight: 600, fontSize: "0.9375rem",
              padding: "13px 26px", borderRadius: "999px",
              textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)",
            }}>See how it works ↓</a>
          </div>
        </div>

        {/* Bottom stats bar */}
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
