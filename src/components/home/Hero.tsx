"use client";

import Image from "next/image";
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
        <video autoPlay muted loop playsInline preload="metadata" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center center", zIndex: 0,
        }}>
          <source src="/videos/boxingonring.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0.25) 40%, rgba(8,8,8,0.8) 85%, rgba(8,8,8,0.98) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0) 75%)" }} />

        {/* Navbar */}
        <PageNavbar />

        {/* iPhone combat mockup — right, vertically centered */}
        <div style={{
          position: "absolute", right: "7%", top: "50%", transform: "translateY(-45%)",
          zIndex: 3,
        }}>
          {/* Phone frame */}
          <div style={{
            width: "280px", height: "560px",
            borderRadius: "44px",
            border: "10px solid rgba(255,255,255,0.14)",
            backgroundColor: "#080808",
            overflow: "hidden",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.7), 0 0 80px rgba(59,130,246,0.08)",
            display: "flex", flexDirection: "column", position: "relative",
          }}>
            {/* Notch */}
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100px", height: "26px", backgroundColor: "#080808", borderRadius: "0 0 18px 18px", zIndex: 10 }} />

            {/* Status bar */}
            <div style={{ padding: "10px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "0.625rem", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>9:41</span>
              <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                <div style={{ width: "14px", height: "8px", border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: "2px", position: "relative" }}>
                  <div style={{ position: "absolute", left: "2px", top: "2px", bottom: "2px", width: "60%", backgroundColor: "rgba(255,255,255,0.4)", borderRadius: "1px" }} />
                </div>
              </div>
            </div>

            {/* Match header */}
            <div style={{ padding: "8px 18px 6px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
                <span style={{ fontSize: "0.5625rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>LIVE</span>
              </div>
              <span style={{ fontSize: "0.625rem", fontWeight: 600, color: "rgba(255,255,255,0.35)" }}>Day 4 / 7</span>
            </div>

            {/* Scores */}
            <div style={{ padding: "4px 18px 8px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexShrink: 0 }}>
              <div>
                <div style={{ fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.12em", color: "#60a5fa", marginBottom: "2px" }}>YOU</div>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>2 847</div>
                <div style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>Challenger II</div>
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: 900, color: "rgba(255,255,255,0.2)" }}>VS</div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.12em", color: "#f87171", marginBottom: "2px" }}>ALEX</div>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "rgba(255,255,255,0.55)", letterSpacing: "-0.04em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>2 231</div>
                <div style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>Pro III</div>
              </div>
            </div>

            {/* Score bar */}
            <div style={{ margin: "0 18px", height: "4px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.06)", overflow: "hidden", flexShrink: 0 }}>
              <div style={{ width: "56%", height: "100%", background: "linear-gradient(90deg, #2563eb, #60a5fa)" }} />
            </div>

            {/* Fighters */}
            <div style={{ flex: 1, position: "relative", overflow: "hidden", marginTop: "8px" }}>
              {/* Blue glow */}
              <div style={{ position: "absolute", bottom: "10%", left: "15%", width: "80px", height: "80px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)", zIndex: 0 }} />
              {/* Red glow */}
              <div style={{ position: "absolute", bottom: "10%", right: "15%", width: "80px", height: "80px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,68,68,0.22) 0%, transparent 70%)", zIndex: 0 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: "50%", height: "100%", zIndex: 1 }}>
                <Image src="/fighters/A2.png" alt="Fighter" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 12px rgba(59,130,246,0.4))" }} />
              </div>
              <div style={{ position: "absolute", bottom: 0, left: "50%", right: 0, height: "100%", zIndex: 1, transform: "scaleX(-1)" }}>
                <Image src="/fighters/B2.png" alt="Opponent" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 12px rgba(239,68,68,0.35))" }} />
              </div>
            </div>

            {/* Bottom — timer + card */}
            <div style={{ padding: "8px 18px 14px", borderTop: "1px solid rgba(255,255,255,0.06)", flexShrink: 0, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: "2px" }}>RESOLVES</div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>21:30</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "10px", padding: "5px 9px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: "linear-gradient(135deg, #1e3a8a, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "0.5rem", color: "#fff", fontWeight: 800 }}>S</span>
                </div>
                <span style={{ fontSize: "0.5625rem", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>SPIKE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Left content */}
        <div style={{
          position: "relative", zIndex: 2,
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 4.5rem",
          maxWidth: "52%",
        }}>
          <h1 className="animate-fade-up" style={{
            fontSize: "clamp(3.5rem, 5.5vw, 5.5rem)",
            fontWeight: 800, color: "#ffffff",
            lineHeight: 0.98, letterSpacing: "-0.045em",
            margin: "0 0 1.75rem",
          }}>
            Train.<br />Fight.<br />Dominate.
          </h1>

          <p className="animate-fade-up delay-100" style={{
            fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7, margin: "0 0 2.75rem", maxWidth: "380px",
          }}>
            Turn your real-world activity into power and battle real players every day.
          </p>

          <div className="animate-fade-up delay-200" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "9px",
              backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem",
              padding: "14px 26px", borderRadius: "999px", textDecoration: "none",
            }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on App Store
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "9px",
              backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: "0.9375rem",
              padding: "14px 26px", borderRadius: "999px", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.12)",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z"/></svg>
              Get it on Google Play
            </a>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="animate-fade-up delay-300" style={{
          position: "relative", zIndex: 2,
          display: "flex", padding: "0 4.5rem 3rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {[
            { title: "8 players", sub: "Per league · 7 days" },
            { title: "12 cards", sub: "Strategic powers" },
            { title: "21:30", sub: "Duel every night" },
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
