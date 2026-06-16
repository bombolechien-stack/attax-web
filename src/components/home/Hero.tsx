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

        {/* Dark overlays */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(7,7,7,0.72) 0%, rgba(7,7,7,0.35) 30%, rgba(7,7,7,0.6) 70%, rgba(7,7,7,1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(7,7,7,0.92) 0%, rgba(7,7,7,0.55) 40%, rgba(7,7,7,0.1) 70%, rgba(7,7,7,0) 100%)" }} />

        {/* Navbar */}
        <div style={{ position: "relative", zIndex: 5, flexShrink: 0 }}>
          <PageNavbar />
        </div>

        {/* ── Phone mockup — right, giant, combat ── */}
        <div style={{
          position: "absolute",
          right: "clamp(2%, 6vw, 8%)",
          top: "50%",
          transform: "translateY(-48%)",
          zIndex: 4,
          width: "clamp(280px, 26vw, 360px)",
        }}>
          {/* Glow halos behind phone */}
          <div style={{
            position: "absolute",
            top: "25%", left: "50%", transform: "translateX(-50%)",
            width: "140%", height: "60%",
            background: "radial-gradient(ellipse at center, rgba(59,130,246,0.22) 0%, transparent 70%)",
            zIndex: 0, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            top: "55%", left: "50%", transform: "translateX(-50%)",
            width: "120%", height: "50%",
            background: "radial-gradient(ellipse at center, rgba(239,68,68,0.16) 0%, transparent 70%)",
            zIndex: 0, pointerEvents: "none",
          }} />

          {/* Phone shell */}
          <div style={{
            position: "relative", zIndex: 2,
            width: "100%",
            paddingBottom: "204%",
            borderRadius: "clamp(36px,4vw,52px)",
            border: "clamp(9px,1vw,12px) solid rgba(255,255,255,0.13)",
            backgroundColor: "#060606",
            overflow: "hidden",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 50px 100px rgba(0,0,0,0.8), 0 0 120px rgba(59,130,246,0.06)",
          }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>

              {/* Notch */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "38%", height: "24px", backgroundColor: "#060606", borderRadius: "0 0 16px 16px", zIndex: 10 }} />

              {/* Status row */}
              <div style={{ padding: "8px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0, zIndex: 5 }}>
                <span style={{ fontSize: "0.5625rem", fontWeight: 700, color: "rgba(255,255,255,0.45)" }}>9:41</span>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: "12px", height: "6px", border: "1px solid rgba(255,255,255,0.35)", borderRadius: "1.5px", position: "relative" }}>
                    <div style={{ position: "absolute", inset: "1.5px", right: "3px", backgroundColor: "rgba(255,255,255,0.35)", borderRadius: "0.5px" }} />
                  </div>
                </div>
              </div>

              {/* LIVE badge + Day */}
              <div style={{ padding: "6px 16px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
                  <span style={{ fontSize: "0.5rem", fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>LIVE</span>
                </div>
                <span style={{ fontSize: "0.5rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}>Day 4 / 7</span>
              </div>

              {/* Scores */}
              <div style={{ padding: "2px 16px 6px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexShrink: 0 }}>
                <div>
                  <div style={{ fontSize: "0.4375rem", fontWeight: 800, letterSpacing: "0.12em", color: "#60a5fa", marginBottom: "1px" }}>YOU</div>
                  <div style={{ fontSize: "clamp(1.25rem,2vw,1.75rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>2 847</div>
                </div>
                <div style={{ fontSize: "0.625rem", fontWeight: 900, color: "rgba(255,255,255,0.15)", alignSelf: "center" }}>VS</div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.4375rem", fontWeight: 800, letterSpacing: "0.12em", color: "#f87171", marginBottom: "1px" }}>ALEX</div>
                  <div style={{ fontSize: "clamp(1.25rem,2vw,1.75rem)", fontWeight: 900, color: "rgba(255,255,255,0.45)", letterSpacing: "-0.04em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>2 231</div>
                </div>
              </div>

              {/* Score bar */}
              <div style={{ margin: "0 16px 10px", height: "3px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.05)", overflow: "hidden", flexShrink: 0 }}>
                <div style={{ width: "56%", height: "100%", background: "linear-gradient(90deg, #1d4ed8, #60a5fa)" }} />
              </div>

              {/* Fighters — main visual */}
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                {/* Floor line */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)", zIndex: 3 }} />
                {/* Blue glow floor */}
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "50%", height: "30%", background: "radial-gradient(ellipse at 30% 100%, rgba(59,130,246,0.3) 0%, transparent 70%)", zIndex: 1, pointerEvents: "none" }} />
                {/* Red glow floor */}
                <div style={{ position: "absolute", bottom: 0, right: 0, width: "50%", height: "30%", background: "radial-gradient(ellipse at 70% 100%, rgba(239,68,68,0.25) 0%, transparent 70%)", zIndex: 1, pointerEvents: "none" }} />
                {/* Fighter A */}
                <div style={{ position: "absolute", bottom: 0, left: "2%", width: "52%", height: "100%", zIndex: 2 }}>
                  <Image src="/fighters/A2.png" alt="Fighter" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 16px rgba(59,130,246,0.5))" }} />
                </div>
                {/* Fighter B — mirrored */}
                <div style={{ position: "absolute", bottom: 0, right: "2%", width: "52%", height: "100%", zIndex: 2, transform: "scaleX(-1)" }}>
                  <Image src="/fighters/B2.png" alt="Opponent" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 16px rgba(239,68,68,0.4))" }} />
                </div>
              </div>

              {/* Bottom — timer + card */}
              <div style={{
                flexShrink: 0, padding: "8px 16px 12px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                background: "linear-gradient(to top, rgba(6,6,6,0.9), transparent)",
              }}>
                <div>
                  <div style={{ fontSize: "0.4375rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: "2px" }}>RESOLVES</div>
                  <div style={{ fontSize: "clamp(0.875rem,1.4vw,1.125rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>21:30</div>
                </div>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1,2,3,4,5,6,7].map(d => (
                    <div key={d} style={{ width: "14px", height: "2.5px", borderRadius: "2px", backgroundColor: d <= 4 ? "#3b82f6" : "rgba(255,255,255,0.1)" }} />
                  ))}
                </div>
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "8px",
                  padding: "4px 8px", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", gap: "4px",
                }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "3px", background: "linear-gradient(135deg, #1e3a8a, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "0.4375rem", color: "#fff", fontWeight: 800 }}>S</span>
                  </div>
                  <span style={{ fontSize: "0.4375rem", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>SPIKE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Left content ── */}
        <div style={{
          position: "relative", zIndex: 3,
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 clamp(2rem,5vw,5rem)",
          maxWidth: "52%",
        }}>
          <h1 className="animate-fade-up" style={{
            fontSize: "clamp(3.5rem,6.5vw,7rem)",
            fontWeight: 800, color: "#ffffff",
            lineHeight: 0.93, letterSpacing: "-0.05em",
            margin: "0 0 clamp(1.25rem,2.5vw,2rem)",
          }}>
            Train.<br />
            Fight.<br />
            Dominate.
          </h1>

          <p className="animate-fade-up delay-100" style={{
            fontSize: "clamp(0.9375rem,1.2vw,1.0625rem)",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.75, margin: "0 0 clamp(1.75rem,3vw,2.75rem)",
            maxWidth: "360px",
          }}>
            Turn your real-world activity into power<br />and battle real players every day.
          </p>

          <div className="animate-fade-up delay-200" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700,
              fontSize: "clamp(0.8125rem,1vw,0.9375rem)",
              padding: "13px 24px", borderRadius: "999px", textDecoration: "none",
            }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.75)", fontWeight: 600,
              fontSize: "clamp(0.8125rem,1vw,0.9375rem)",
              padding: "13px 24px", borderRadius: "999px", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.12)",
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z"/></svg>
              Google Play
            </a>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="animate-fade-up delay-300" style={{
          position: "relative", zIndex: 3,
          display: "flex", padding: "0 clamp(2rem,5vw,5rem) 3rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {[
            { n: "8", label: "players per league" },
            { n: "12", label: "strategic cards" },
            { n: "21:30", label: "battle resolution" },
          ].map((s, i) => (
            <div key={s.n} style={{
              paddingTop: "2rem",
              paddingLeft: i > 0 ? "2.5rem" : 0,
              marginLeft: i > 0 ? "2.5rem" : 0,
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#ffffff", marginBottom: "3px", letterSpacing: "-0.03em" }}>{s.n}</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
