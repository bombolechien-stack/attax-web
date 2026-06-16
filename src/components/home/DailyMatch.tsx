export default function DailyMatch() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "10rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
          {/* Left text */}
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>The game</span>
            <h2 style={{
              fontSize: "clamp(2.5rem,4.5vw,4rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.0, margin: "0 0 2rem",
            }}>
              Every day<br />is a match.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.8, margin: "0 0 3rem", maxWidth: "400px" }}>
              Most fitness apps stop at tracking. Attax transforms your activity into a competitive experience where every session changes the outcome of your next battle.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                "Results every night at 21:30",
                "7-day rolling performance score",
                "8 players per league",
                "Strategic cards every duel",
              ].map((item, i, arr) => (
                <div key={i} style={{
                  padding: "1.125rem 0",
                  borderBottom: i < arr.length - 1 ? "1px solid #f5f5f5" : "none",
                  display: "flex", alignItems: "center", gap: "1rem",
                  borderTop: i === 0 ? "1px solid #f5f5f5" : "none",
                }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#0d0d0d", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9375rem", color: "#333", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — minimal match screen, no card border */}
          <div style={{
            backgroundColor: "#0a0a0a",
            borderRadius: "24px",
            padding: "2rem",
            boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>LIVE · DAY 4/7</span>
              </div>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>21:30</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "0.875rem" }}>
              <div>
                <div style={{ fontSize: "0.5625rem", fontWeight: 700, color: "#60a5fa", letterSpacing: "0.12em", marginBottom: "4px" }}>YOU</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1 }}>2 847</div>
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "rgba(255,255,255,0.1)" }}>VS</div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.5625rem", fontWeight: 700, color: "#f87171", letterSpacing: "0.12em", marginBottom: "4px" }}>ALEX</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "rgba(255,255,255,0.35)", letterSpacing: "-0.04em", lineHeight: 1 }}>2 231</div>
              </div>
            </div>
            <div style={{ height: "3px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.04)", overflow: "hidden", marginBottom: "2rem" }}>
              <div style={{ width: "56%", height: "100%", background: "linear-gradient(90deg, #1d4ed8, #60a5fa)" }} />
            </div>
            {[
              { time: "14:23", text: "Run 32 min · Zone 3", pts: "+214", color: "#60a5fa" },
              { time: "09:47", text: "Strength 45 min", pts: "+188", color: "#60a5fa" },
              { time: "08:12", text: "Alex — Cycling 60 min", pts: "+246", color: "#f87171" },
              { time: "Yesterday", text: "Walk 8 200 steps", pts: "+72", color: "#60a5fa" },
            ].map((item, i, arr) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.75rem 0",
                borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: item.color, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.5625rem", color: "rgba(255,255,255,0.25)", marginBottom: "1px" }}>{item.time}</div>
                  <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>{item.text}</div>
                </div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: item.color }}>{item.pts}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
