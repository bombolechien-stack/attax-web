export default function DailyMatch() {
  const feed = [
    { time: "14:23", pts: "+180 pts", label: "Run 32 min", color: "#3b82f6" },
    { time: "11:47", pts: "+95 pts",  label: "Strength 45 min", color: "#8b5cf6" },
    { time: "09:12", pts: "+210 pts", label: "Cycling 1h05", color: "#3b82f6" },
    { time: "Yesterday", pts: "+140 pts", label: "Walk 8 200 steps", color: "#22c55e" },
    { time: "Yesterday", pts: "+60 pts",  label: "Yoga 30 min", color: "#f59e0b" },
  ];

  return (
    <section style={{
      backgroundColor: "#080808",
      padding: "9rem 2rem",
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.018) 3px, rgba(255,255,255,0.018) 4px)",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

        {/* Left */}
        <div>
          <div className="section-label-light" style={{ marginBottom: "1.5rem" }}>The game</div>
          <h2 style={{
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.045em",
            lineHeight: 1.0,
            margin: "0 0 1.75rem",
          }}>
            Every day<br />is a match.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "400px", marginBottom: "2.5rem" }}>
            Your workouts aren&apos;t just statistics. Every session changes the outcome of your next battle.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              "Results every night at 21:30",
              "7-day rolling performance score",
              "Cards add tactical depth",
            ].map(item => (
              <div key={item} style={{
                borderLeft: "2px solid rgba(255,255,255,0.12)",
                paddingLeft: "1rem",
                fontSize: "0.9375rem",
                color: "rgba(255,255,255,0.5)",
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right — App screen mockup */}
        <div>
          <div style={{
            width: "100%",
            maxWidth: "380px",
            borderRadius: "20px",
            backgroundColor: "#0e0e0e",
            border: "1px solid rgba(255,255,255,0.07)",
            padding: "1.5rem",
            margin: "0 auto",
          }}>
            {/* Top bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em" }}>LIVE · Day 4/7</span>
              </div>
              <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>21:30</span>
            </div>

            {/* Scores */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "0.75rem" }}>
              <div>
                <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: "4px" }}>YOU</div>
                <div className="score-num" style={{ fontSize: "2.25rem", color: "#ffffff", fontWeight: 800, lineHeight: 1 }}>2 847</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: "4px" }}>ALEX</div>
                <div className="score-num" style={{ fontSize: "2.25rem", color: "rgba(255,255,255,0.45)", fontWeight: 800, lineHeight: 1 }}>2 231</div>
              </div>
            </div>

            {/* Bar */}
            <div style={{ height: "3px", borderRadius: "2px", backgroundColor: "#1a1a1a", marginBottom: "1.5rem", overflow: "hidden", display: "flex" }}>
              <div style={{ flex: "56", backgroundColor: "#3b82f6" }} />
              <div style={{ flex: "44", backgroundColor: "#ef4444" }} />
            </div>

            {/* Activity feed */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
              <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>YOUR ACTIVITY</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {feed.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: f.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", minWidth: "60px" }}>{f.time}</span>
                    <span style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: 600, minWidth: "64px" }}>{f.pts}</span>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
