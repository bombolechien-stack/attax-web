"use client";

import Image from "next/image";
import InView from "@/components/InView";

const feed = [
  { time: "07:42", text: "Alex trained 45 min — now leading by 84 pts", side: "opp" },
  { time: "09:15", text: "You crushed a 6km run — 127 pts earned", side: "you" },
  { time: "12:03", text: "Alex played FREEZE — your best day −8%", side: "opp" },
  { time: "14:30", text: "You activated COUNTER — +25% after 6 PM", side: "you" },
  { time: "17:55", text: "You're now 43 pts ahead. Hold the lead.", side: "you" },
];

export default function CombatSection() {
  return (
    <section style={{ backgroundColor: "#080808", padding: "0 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "7rem 0" }}>

        {/* Header */}
        <InView>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", gap: "2rem" }}>
            <div>
              <p className="section-label-light" style={{ margin: "0 0 1.25rem" }}>The daily duel</p>
              <h2 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
                color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0,
              }}>
                Every day, a real fight.
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
              Your health data becomes your weapon. More intensity, more points. More points, more wins.
            </p>
          </div>
        </InView>

        {/* Combat arena */}
        <InView>
          <div className="scanlines" style={{
            backgroundColor: "#0d0d0d",
            borderRadius: "28px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
          }}>
            {/* Grain */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 1, opacity: 0.18, pointerEvents: "none",
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
            }} />

            {/* HUD top bar */}
            <div style={{
              position: "relative", zIndex: 3,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "1.25rem 2rem",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Live</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>Resolves tonight</div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>21:30</div>
              </div>
              <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>Day 4 / 7</div>
            </div>

            {/* Main arena */}
            <div style={{
              position: "relative", zIndex: 3,
              display: "grid", gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              padding: "3rem 3rem 2rem",
              gap: "2rem",
            }}>
              {/* Player A */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.75rem", fontWeight: 800, color: "#fff",
                  }}>Y</div>
                  <div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#ffffff" }}>You</div>
                    <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>Silver II</div>
                  </div>
                </div>
                {/* Score */}
                <div>
                  <div className="score-num" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", color: "#ffffff", lineHeight: 1 }}>2 847</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>Activity Points · 7 days</div>
                </div>
                {/* Today */}
                <div style={{
                  backgroundColor: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  borderRadius: "8px", padding: "8px 12px",
                }}>
                  <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Today</div>
                  <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#60a5fa" }}>+412 pts</div>
                </div>
              </div>

              {/* Center — fighters + VS */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "0" }}>
                  {/* Fighter A */}
                  <div style={{
                    width: "120px", height: "160px", position: "relative",
                    "--glow-col": "rgba(59,130,246,0.6)",
                  } as React.CSSProperties}>
                    <div className="fighter-glow" style={{
                      position: "absolute", inset: 0,
                      "--glow-col": "rgba(59,130,246,0.5)",
                    } as React.CSSProperties}>
                      <Image
                        src="/fighters/A1.png"
                        alt="Fighter A"
                        fill
                        style={{ objectFit: "contain", objectPosition: "bottom center", filter: "brightness(1.1) drop-shadow(0 0 20px rgba(59,130,246,0.4))" }}
                      />
                    </div>
                  </div>
                  {/* VS */}
                  <div className="vs-flicker" style={{
                    fontSize: "1.25rem", fontWeight: 900, color: "rgba(255,255,255,0.2)",
                    letterSpacing: "-0.02em", padding: "0 4px", alignSelf: "center",
                  }}>VS</div>
                  {/* Fighter B — mirrored */}
                  <div style={{
                    width: "120px", height: "160px", position: "relative",
                    transform: "scaleX(-1)",
                  }}>
                    <div className="fighter-glow" style={{
                      position: "absolute", inset: 0,
                      "--glow-col": "rgba(239,68,68,0.5)",
                    } as React.CSSProperties}>
                      <Image
                        src="/fighters/B1.png"
                        alt="Fighter B"
                        fill
                        style={{ objectFit: "contain", objectPosition: "bottom center", filter: "brightness(1.1) drop-shadow(0 0 20px rgba(239,68,68,0.4))" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Score bar */}
                <div style={{ width: "260px" }}>
                  <div style={{
                    height: "6px", borderRadius: "3px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    overflow: "hidden", position: "relative",
                  }}>
                    {/* Player A side */}
                    <div className="bar-fill" style={{
                      position: "absolute", left: 0, top: 0, bottom: 0,
                      width: "56%",
                      background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
                      borderRadius: "3px",
                      "--bar-pct": "56%",
                    } as React.CSSProperties} />
                    {/* Player B fills from right */}
                    <div className="bar-fill" style={{
                      position: "absolute", right: 0, top: 0, bottom: 0,
                      width: "44%",
                      background: "linear-gradient(270deg, #ef4444, #f87171)",
                      borderRadius: "3px",
                      "--bar-pct": "44%",
                    } as React.CSSProperties} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                    <span style={{ fontSize: "0.6875rem", color: "#60a5fa", fontWeight: 700 }}>56%</span>
                    <span style={{ fontSize: "0.6875rem", color: "#f87171", fontWeight: 700 }}>44%</span>
                  </div>
                </div>
              </div>

              {/* Player B */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexDirection: "row-reverse" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #ef4444, #b91c1c)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.75rem", fontWeight: 800, color: "#fff",
                  }}>A</div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#ffffff" }}>Alex</div>
                    <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>Gold I</div>
                  </div>
                </div>
                {/* Score */}
                <div style={{ textAlign: "right" }}>
                  <div className="score-num" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", color: "#ffffff", lineHeight: 1 }}>2 231</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>Activity Points · 7 days</div>
                </div>
                {/* Today */}
                <div style={{
                  backgroundColor: "rgba(239,68,68,0.10)",
                  border: "1px solid rgba(239,68,68,0.18)",
                  borderRadius: "8px", padding: "8px 12px",
                  textAlign: "right",
                }}>
                  <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Today</div>
                  <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#f87171" }}>+384 pts</div>
                </div>
              </div>
            </div>

            {/* Active card */}
            <div style={{
              position: "relative", zIndex: 3,
              padding: "0 3rem 1.5rem",
              display: "flex", justifyContent: "center",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px", padding: "10px 16px",
              }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "6px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                  <Image src="/cards/counter.png" alt="Counter card" fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Your card today</div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#ffffff" }}>Counter — +25% after 6 PM if losing</div>
                </div>
              </div>
            </div>

            {/* Activity feed */}
            <div style={{
              position: "relative", zIndex: 3,
              borderTop: "1px solid rgba(255,255,255,0.05)",
              padding: "1.5rem 2rem",
              display: "flex", flexDirection: "column", gap: "10px",
            }}>
              <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", marginBottom: "4px" }}>Combat feed</div>
              {feed.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.22)", fontVariantNumeric: "tabular-nums", flexShrink: 0, width: "36px" }}>{item.time}</span>
                  <div style={{
                    width: "4px", height: "4px", borderRadius: "50%", flexShrink: 0,
                    backgroundColor: item.side === "you" ? "#60a5fa" : "#f87171",
                  }} />
                  <span style={{
                    fontSize: "0.8125rem",
                    color: item.side === "you" ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
                    lineHeight: 1.4,
                  }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
