export default function DailyMatch() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "8rem 2rem", overflow: "hidden" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "6rem" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>The game</span>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "4rem", flexWrap: "wrap" }}>
            <h2 style={{
              fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.055em", lineHeight: 0.9, margin: 0,
            }}>
              Every day<br />is a match.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#999", lineHeight: 1.75, maxWidth: "360px", margin: 0 }}>
              Most fitness apps stop at tracking. Attax turns every session into a competitive duel that resolves every night at 21:30.
            </p>
          </div>
        </div>

        {/* Giant floating mockup — centered, slightly tilted */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            transform: "perspective(1200px) rotateX(4deg) rotateY(-2deg) rotateZ(-1deg)",
            transformOrigin: "center center",
            boxShadow: "0 60px 160px rgba(0,0,0,0.18), 0 20px 40px rgba(0,0,0,0.08)",
            borderRadius: "24px",
            overflow: "hidden",
            width: "min(800px, 90vw)",
            backgroundColor: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            {/* Match header */}
            <div style={{ padding: "2rem 2.5rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>LIVE · DAY 4 / 7</span>
              </div>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em" }}>RESOLVES 21:30</span>
            </div>

            {/* Scores */}
            <div style={{ padding: "2.5rem 2.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#60a5fa", letterSpacing: "0.12em", marginBottom: "0.5rem" }}>YOU</div>
                <div style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.05em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>2 847</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", marginTop: "0.5rem" }}>Challenger II</div>
              </div>
              <div style={{ fontSize: "1rem", fontWeight: 900, color: "rgba(255,255,255,0.08)", paddingBottom: "1.5rem" }}>VS</div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#f87171", letterSpacing: "0.12em", marginBottom: "0.5rem" }}>ALEX</div>
                <div style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, color: "rgba(255,255,255,0.35)", letterSpacing: "-0.05em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>2 231</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", marginTop: "0.5rem" }}>Pro III</div>
              </div>
            </div>

            {/* Score bar */}
            <div style={{ margin: "0 2.5rem", height: "5px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.05)", overflow: "hidden", marginBottom: "2rem" }}>
              <div style={{ width: "56%", height: "100%", background: "linear-gradient(90deg, #1d4ed8, #60a5fa)" }} />
            </div>

            {/* Activity feed */}
            <div style={{ padding: "0 2.5rem 2rem" }}>
              <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", marginBottom: "1rem" }}>TODAY&apos;S ACTIVITY</div>
              {[
                { time: "14:23", text: "Run 32 min · Zone 3 · 5.4 km", pts: "+214 pts", color: "#60a5fa" },
                { time: "09:47", text: "Strength training 45 min · Zone 2", pts: "+188 pts", color: "#60a5fa" },
                { time: "08:12", text: "Alex — Cycling 60 min · Zone 3", pts: "+246 pts", color: "#f87171" },
                { time: "Yesterday", text: "Alex — Run 28 min · 4.1 km", pts: "+198 pts", color: "#f87171" },
                { time: "Yesterday", text: "Walk 8 200 steps · 6.1 km", pts: "+72 pts", color: "#60a5fa" },
              ].map((item, i, arr) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "0.875rem 0",
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: item.color, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.25)", marginBottom: "2px" }}>{item.time}</div>
                    <div style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>{item.text}</div>
                  </div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: item.color, flexShrink: 0 }}>{item.pts}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Below mockup — 4 bullet stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0", marginTop: "5rem", borderTop: "1px solid #f0f0f0" }}>
          {[
            { n: "7 days", label: "Rolling performance window" },
            { n: "21:30", label: "Nightly battle resolution" },
            { n: "8 players", label: "Per league, real opponents" },
            { n: "Free", label: "Download and play" },
          ].map((s, i) => (
            <div key={s.n} style={{
              flex: 1, padding: "2.5rem 2rem 0", textAlign: "center",
              borderLeft: i > 0 ? "1px solid #f0f0f0" : "none",
            }}>
              <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.03em" }}>{s.n}</div>
              <div style={{ fontSize: "0.8125rem", color: "#aaa", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
