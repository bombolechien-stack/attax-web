const steps = [
  {
    n: "1",
    title: "Do your sport",
    desc: "Walk, run, cycle, lift — any physical activity counts. Attax connects to Apple Health and Google Health Connect automatically.",
    bg: "#f4f4f5",
  },
  {
    n: "2",
    title: "Your data, explained",
    desc: "Get a complete picture of your activity in one place. Weekly trends, recovery patterns, and performance insights.",
    bg: "#fff5eb",
  },
  {
    n: "3",
    title: "Build your consistency",
    desc: "Focus on the habit, not perfection. Attax celebrates showing up — daily streaks, weekly goals, small wins.",
    bg: "#f4f4f5",
  },
  {
    n: "4",
    title: "Climb the ranks",
    desc: "Compete in leagues with athletes at your level. Earn points, climb the leaderboard, and become the best version of yourself.",
    bg: "#111111",
    dark: true,
  },
];

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              letterSpacing: "-0.03em",
              margin: "0 0 1rem",
              lineHeight: 1.1,
            }}
          >
            How it works
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#666666",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            It starts with your first workout, then so much more.
          </p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "12px",
          }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                backgroundColor: s.bg,
                borderRadius: "20px",
                padding: "2.5rem 2rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  fontSize: "4rem",
                  fontWeight: 800,
                  color: s.dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                  lineHeight: 1,
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.5rem",
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                }}
              >
                {s.n}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: s.dark ? "rgba(252,95,43,0.2)" : "#FC5F2B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ fontSize: "20px" }}>
                  {s.n === "1" ? "🏃" : s.n === "2" ? "📊" : s.n === "3" ? "🔥" : "🏆"}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: s.dark ? "#ffffff" : "#1a1a1a",
                  margin: "0 0 0.75rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: s.dark ? "rgba(255,255,255,0.55)" : "#666666",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
