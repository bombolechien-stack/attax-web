export default function WorkoutsNowMatter() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "9rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          {/* Left — text */}
          <div>
            <p className="section-label" style={{ margin: "0 0 2rem" }}>The concept</p>
            <h2 style={{
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.0,
              margin: "0 0 2rem",
            }}>
              Your workouts<br />now matter.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.8, margin: "0 0 1.25rem", maxWidth: "400px" }}>
              Every run, workout, walk or ride directly impacts your fighter.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.8, margin: 0, maxWidth: "400px" }}>
              The more active you are, the stronger you become.
            </p>
          </div>
          {/* Right — visual bar chart of effort → power */}
          <div style={{
            backgroundColor: "#f7f7f7", borderRadius: "24px", padding: "3rem 2.5rem",
            border: "1px solid #ebebeb",
          }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>This week's power</div>
              {[
                { day: "Mon", val: 68, active: false },
                { day: "Tue", val: 82, active: false },
                { day: "Wed", val: 45, active: false },
                { day: "Thu", val: 91, active: true },
                { day: "Fri", val: 0, active: false },
                { day: "Sat", val: 0, active: false },
                { day: "Sun", val: 0, active: false },
              ].map(b => (
                <div key={b.day} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <div style={{ width: "28px", fontSize: "0.6875rem", color: "#999", fontWeight: 600, flexShrink: 0 }}>{b.day}</div>
                  <div style={{ flex: 1, height: "8px", backgroundColor: "#e8e8e8", borderRadius: "4px", overflow: "hidden" }}>
                    {b.val > 0 && (
                      <div style={{
                        width: b.val + "%", height: "100%", borderRadius: "4px",
                        backgroundColor: b.active ? "#0d0d0d" : "#c0c0c0",
                      }} />
                    )}
                  </div>
                  <div style={{ width: "32px", fontSize: "0.6875rem", fontWeight: 700, color: b.val > 0 ? "#0d0d0d" : "#ccc", textAlign: "right" }}>
                    {b.val > 0 ? b.val + "%" : "—"}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: "0.6875rem", color: "#999", marginBottom: "4px" }}>Power score</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em" }}>2 847</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.6875rem", color: "#999", marginBottom: "4px" }}>vs opponent</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#c0c0c0", letterSpacing: "-0.04em" }}>2 231</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
