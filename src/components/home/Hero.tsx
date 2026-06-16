"use client";

import Image from "next/image";
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

        {/* Video */}
        <video autoPlay muted loop playsInline preload="metadata" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 30%", zIndex: 0,
        }}>
          <source src="/videos/boxingonring.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(7,7,7,0.62)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(7,7,7,0.5) 0%, rgba(7,7,7,0.1) 30%, rgba(7,7,7,0.5) 70%, rgba(7,7,7,1) 100%)" }} />

        {/* Navbar */}
        <div style={{ position: "relative", zIndex: 10, flexShrink: 0 }}>
          <PageNavbar />
        </div>

        {/* ── Center content — title above phone ── */}
        <div style={{
          position: "relative", zIndex: 5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "clamp(2rem, 4vh, 4rem)",
        }}>

          {/* Title — floats above phone */}
          <h1 className="animate-fade-up" style={{
            fontSize: "clamp(4rem, 8.5vw, 9.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 0.9,
            letterSpacing: "-0.055em",
            textAlign: "center",
            margin: "0 0 clamp(1.5rem, 3vh, 2.5rem)",
            position: "relative", zIndex: 6,
          }}>
            Train.<br />Fight.<br />Dominate.
          </h1>

          {/* Subtitle + CTAs */}
          <div className="animate-fade-up delay-100" style={{ textAlign: "center", marginBottom: "clamp(2rem, 3.5vh, 3.5rem)", position: "relative", zIndex: 6 }}>
            <p style={{
              fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
              color: "rgba(255,255,255,0.42)",
              lineHeight: 1.6, margin: "0 0 1.75rem",
            }}>
              Turn your real-world activity into power.<br />Battle real players every day.
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.875rem",
                padding: "12px 22px", borderRadius: "999px", textDecoration: "none",
              }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)", fontWeight: 600, fontSize: "0.875rem",
                padding: "12px 22px", borderRadius: "999px", textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z"/></svg>
                Google Play
              </a>
            </div>
          </div>

          {/* ── Phone — giant, centered, clips bottom ── */}
          <div className="animate-fade-up delay-200" style={{
            position: "relative", zIndex: 5,
            width: "clamp(280px, 24vw, 340px)",
            flexShrink: 0,
          }}>
            {/* Glow halos */}
            <div style={{
              position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
              width: "180%", height: "70%",
              background: "radial-gradient(ellipse, rgba(59,130,246,0.2) 0%, transparent 65%)",
              zIndex: 0, pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)",
              width: "160%", height: "50%",
              background: "radial-gradient(ellipse, rgba(239,68,68,0.15) 0%, transparent 65%)",
              zIndex: 0, pointerEvents: "none",
            }} />

            {/* Phone shell */}
            <div style={{
              position: "relative", zIndex: 2,
              width: "100%",
              paddingBottom: "210%",
              borderRadius: "clamp(38px, 4.5vw, 54px)",
              border: "clamp(9px, 1.1vw, 13px) solid rgba(255,255,255,0.13)",
              backgroundColor: "#050505",
              overflow: "hidden",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 60px 120px rgba(0,0,0,0.9), 0 0 80px rgba(59,130,246,0.07)",
            }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>

                {/* Notch */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "36%", height: "22px", backgroundColor: "#050505", borderRadius: "0 0 14px 14px", zIndex: 10 }} />

                {/* Status */}
                <div style={{ padding: "8px 14px 0", display: "flex", justifyContent: "space-between", flexShrink: 0, zIndex: 5 }}>
                  <span style={{ fontSize: "0.5rem", fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>9:41</span>
                  <div style={{ width: "12px", height: "6px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "1.5px", position: "relative" }}>
                    <div style={{ position: "absolute", inset: "1.5px", right: "3px", backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "0.5px" }} />
                  </div>
                </div>

                {/* LIVE + day */}
                <div style={{ padding: "5px 14px 3px", display: "flex", justifyContent: "space-between", flexShrink: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
                    <span style={{ fontSize: "0.4375rem", fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>LIVE</span>
                  </div>
                  <span style={{ fontSize: "0.4375rem", fontWeight: 700, color: "rgba(255,255,255,0.28)" }}>Day 4 / 7</span>
                </div>

                {/* Scores */}
                <div style={{ padding: "0 14px 5px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexShrink: 0 }}>
                  <div>
                    <div style={{ fontSize: "0.375rem", fontWeight: 800, letterSpacing: "0.12em", color: "#60a5fa", marginBottom: "1px" }}>YOU</div>
                    <div style={{ fontSize: "clamp(1rem,1.8vw,1.5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>2 847</div>
                  </div>
                  <div style={{ fontSize: "0.5rem", fontWeight: 900, color: "rgba(255,255,255,0.12)" }}>VS</div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.375rem", fontWeight: 800, letterSpacing: "0.12em", color: "#f87171", marginBottom: "1px" }}>ALEX</div>
                    <div style={{ fontSize: "clamp(1rem,1.8vw,1.5rem)", fontWeight: 900, color: "rgba(255,255,255,0.4)", letterSpacing: "-0.04em", lineHeight: 1 }}>2 231</div>
                  </div>
                </div>

                {/* Bar */}
                <div style={{ margin: "0 14px 8px", height: "2.5px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.04)", overflow: "hidden", flexShrink: 0 }}>
                  <div style={{ width: "56%", height: "100%", background: "linear-gradient(90deg, #1d4ed8, #60a5fa)" }} />
                </div>

                {/* Fighters */}
                <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", bottom: 0, left: "0", width: "50%", height: "100%", zIndex: 2 }}>
                    <Image src="/fighters/A2.png" alt="Fighter" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 14px rgba(59,130,246,0.5))" }} />
                  </div>
                  <div style={{ position: "absolute", bottom: 0, right: "0", width: "50%", height: "100%", zIndex: 2, transform: "scaleX(-1)" }}>
                    <Image src="/fighters/B2.png" alt="Opponent" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 14px rgba(239,68,68,0.4))" }} />
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, rgba(5,5,5,0.7), transparent)", zIndex: 3 }} />
                  {/* Blue glow floor */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, width: "50%", height: "35%", background: "radial-gradient(ellipse at 30% 100%, rgba(59,130,246,0.3) 0%, transparent 70%)", zIndex: 1 }} />
                  <div style={{ position: "absolute", bottom: 0, right: 0, width: "50%", height: "35%", background: "radial-gradient(ellipse at 70% 100%, rgba(239,68,68,0.25) 0%, transparent 70%)", zIndex: 1 }} />
                </div>

                {/* Bottom */}
                <div style={{
                  flexShrink: 0, padding: "7px 14px 12px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <div>
                    <div style={{ fontSize: "0.375rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>RESOLVES</div>
                    <div style={{ fontSize: "clamp(0.75rem,1.2vw,1rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>21:30</div>
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[1,2,3,4,5,6,7].map(d => (
                      <div key={d} style={{ width: "12px", height: "2px", borderRadius: "1px", backgroundColor: d <= 4 ? "#3b82f6" : "rgba(255,255,255,0.08)" }} />
                    ))}
                  </div>
                  <div style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "7px", padding: "4px 7px", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "3px" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: "linear-gradient(135deg,#1e3a8a,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "0.375rem", color: "#fff", fontWeight: 800 }}>S</span>
                    </div>
                    <span style={{ fontSize: "0.375rem", fontWeight: 700, color: "rgba(255,255,255,0.45)" }}>SPIKE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
