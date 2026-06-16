export default function WorkoutsNowMatter() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "10rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>The concept</span>
            <h2 style={{
              fontSize: "clamp(2.5rem,4.5vw,4rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.0, margin: "0 0 2rem",
            }}>
              Your workouts<br />now matter.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#777", lineHeight: 1.8, margin: "0 0 1rem", maxWidth: "400px" }}>
              Every run, workout, walk or ride directly impacts your fighter.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#777", lineHeight: 1.8, margin: 0, maxWidth: "400px" }}>
              The more active you are, the stronger you become — and the harder you are to beat.
            </p>
          </div>
          {/* Right — clean bar chart, no card border */}
          <div>
            <div style={{ marginBottom: "0.5rem" }}>
              <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#ccc", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>This week</div>
              {[
                { day: "Mon", val: 68 },
                { day: "Tue", val: 82 },
                { day: "Wed", val: 45 },
                { day: "Thu", val: 91 },
                { day: "Fri", val: 0 },
                { day: "Sat", val: 0 },
                { day: "Sun", val: 0 },
              ].map(b => (
                <div key={b.day} style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.625rem" }}>
                  <div style={{ width: "28px", fontSize: "0.6875rem", color: "#bbb", fontWeight: 600, flexShrink: 0 }}>{b.day}</div>
                  <div style={{ flex: 1, height: "6px", backgroundColor: "#f3f3f3", borderRadius: "3px", overflow: "hidden" }}>
                    {b.val > 0 && <div style={{ width: b.val + "%", height: "100%", borderRadius: "3px", backgroundColor: "#0d0d0d" }} />}
                  </div>
                  <div style={{ width: "28px", fontSize: "0.6875rem", fontWeight: 700, color: b.val > 0 ? "#0d0d0d" : "#ccc", textAlign: "right" }}>
                    {b.val > 0 ? b.val + "%" : "—"}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
              <div>
                <div style={{ fontSize: "0.6875rem", color: "#bbb", marginBottom: "4px" }}>Your score</div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em" }}>2 847</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.6875rem", color: "#bbb", marginBottom: "4px" }}>Opponent</div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ccc", letterSpacing: "-0.04em" }}>2 231</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
