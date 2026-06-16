"use client";

import Image from "next/image";
import InView from "@/components/InView";

const feed = [
  { time: "07:42", text: "Alex logged a 45-min run — now 84 pts ahead", you: false },
  { time: "09:15", text: "You completed a 6 km run — 127 pts earned", you: true },
  { time: "12:03", text: "Alex played FREEZE — your best day −8%", you: false },
  { time: "14:30", text: "You activated COUNTER — +25% after 6 PM", you: true },
  { time: "17:55", text: "You're now leading by 43 pts", you: true },
];

export default function CombatSection() {
  return (
    <section style={{
      backgroundColor: "#080808",
      padding: "0 2rem",
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.018) 3px, rgba(255,255,255,0.018) 4px)",
    }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "7rem 0" }}>

        <InView>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "5rem", gap: "2rem" }}>
            <div>
              <p className="section-label-light" style={{ margin: "0 0 1.25rem" }}>The daily duel</p>
              <h2 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
                color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0,
              }}>
                Every night,<br />a winner is decided.
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
              Your 7-day rolling Activity Score is your weapon. More intensity, more points. More points, more wins. Resolved at 9:30 PM every night.
            </p>
          </div>
        </InView>

        {/* Combat UI */}
        <InView>
          <div style={{
            backgroundColor: "#0e0e0e",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.07)",
            overflow: "hidden",
          }}>

            {/* Top bar */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "1rem 1.75rem",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 4px)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Live</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.16em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>Resolves tonight</div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "rgba(255,255,255,0.7)", letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" }}>9:30 PM</div>
              </div>
              <div style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>Day 4 / 7</div>
            </div>

            {/* Fighters + scores */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 280px 1fr",
              padding: "3rem 2.5rem 2rem",
              gap: "2rem", alignItems: "center",
            }}>
              {/* Player */}
              <div>
                <div style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "0.75rem" }}>You</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "0.375rem" }}>
                  <span className="score-num" style={{ fontSize: "clamp(2.5rem, 4vw, 3.75rem)", color: "#ffffff", lineHeight: 1 }}>2 847</span>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", fontWeight: 500 }}>pts</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.22)", marginBottom: "1.5rem" }}>7-day score</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#3b82f6", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.75rem", color: "#60a5fa", fontWeight: 600 }}>+412 pts today</span>
                </div>
                <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.2)", marginTop: "4px", letterSpacing: "0.06em" }}>Challenger II</div>
              </div>

              {/* Center — fighters */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-end", width: "100%", height: "200px", position: "relative" }}>
                  <div style={{ flex: 1, height: "100%", position: "relative" }}>
                    <Image src="/fighters/A2.png" alt="You" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 16px rgba(59,130,246,0.35))" }} />
                  </div>
                  <div style={{ flex: 1, height: "100%", position: "relative", transform: "scaleX(-1)" }}>
                    <Image src="/fighters/B2.png" alt="Opponent" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 16px rgba(239,68,68,0.3))" }} />
                  </div>
                </div>
                {/* Score bar */}
                <div style={{ width: "100%" }}>
                  <div style={{ height: "3px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.06)", overflow: "hidden", display: "flex" }}>
                    <div style={{ width: "56%", background: "linear-gradient(90deg, #1d4ed8, #3b82f6)" }} />
                    <div style={{ width: "44%", background: "linear-gradient(90deg, #ef4444, #b91c1c)" }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <span style={{ fontSize: "0.625rem", color: "#60a5fa", fontWeight: 600 }}>56%</span>
                    <span style={{ fontSize: "0.625rem", color: "#f87171", fontWeight: 600 }}>44%</span>
                  </div>
                </div>
              </div>

              {/* Opponent */}
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "0.75rem" }}>Alex</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", justifyContent: "flex-end", marginBottom: "0.375rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", fontWeight: 500 }}>pts</span>
                  <span className="score-num" style={{ fontSize: "clamp(2.5rem, 4vw, 3.75rem)", color: "rgba(255,255,255,0.5)", lineHeight: 1 }}>2 231</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.22)", marginBottom: "1.5rem" }}>7-day score</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
                  <span style={{ fontSize: "0.75rem", color: "#f87171", fontWeight: 600 }}>+384 pts today</span>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#ef4444", flexShrink: 0 }} />
                </div>
                <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.2)", marginTop: "4px", letterSpacing: "0.06em" }}>Pro III</div>
              </div>
            </div>

            {/* Active card */}
            <div style={{
              margin: "0 2.5rem",
              padding: "0.875rem 1.25rem",
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "10px",
              display: "flex", alignItems: "center", gap: "12px",
            }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "5px", overflow: "hidden", position: "relative", flexShrink: 0, opacity: 0.85 }}>
                <Image src="/cards/counter.png" alt="Counter" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Active card — </span>
                <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "rgba(255,255,255,0.55)" }}>Counter · +25% after 6 PM if losing</span>
              </div>
              <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Deadline passed</div>
            </div>

            {/* Feed */}
            <div style={{ padding: "1.5rem 2.5rem 2rem", marginTop: "0.5rem" }}>
              <div style={{ fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", color: "rgba(255,255,255,0.15)", textTransform: "uppercase", marginBottom: "1rem" }}>Activity feed</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {feed.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.18)", fontVariantNumeric: "tabular-nums", width: "32px", flexShrink: 0 }}>{item.time}</span>
                    <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: item.you ? "rgba(96,165,250,0.7)" : "rgba(248,113,113,0.5)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8125rem", color: item.you ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.28)", lineHeight: 1.5 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </InView>
      </div>
    </section>
  );
}
