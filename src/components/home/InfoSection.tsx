export default function InfoSection() {
  const steps = [
    {
      index: "01",
      title: "Connect your wearable",
      body: "Attax requires an Apple Watch or a Wear OS / Garmin / Fitbit device. Activity syncs automatically via Apple Health on iPhone or Health Connect on Android.",
    },
    {
      index: "02",
      title: "Power up every day",
      body: "Steps, active minutes, heart rate zones — every effort earns you ATK and DEF points. The harder you train, the stronger your fighter for that day's battle.",
    },
    {
      index: "03",
      title: "Battle every night at 21:30",
      body: "Face one real opponent in a 1v1 duel. Results drop at the same time for everyone. Over 7 days, the most consistent athlete wins the league.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Statement */}
        <div style={{ marginBottom: "5rem", maxWidth: "640px" }}>
          <p className="section-label" style={{ margin: "0 0 1.25rem" }}>How it works</p>
          <h2 style={{
            fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
            fontWeight: 800,
            color: "#0d0d0d",
            letterSpacing: "-0.04em",
            lineHeight: 1.06,
            margin: 0,
          }}>
            Your fitness is the game engine.
          </h2>
        </div>

        {/* 3 steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
          {steps.map((step, i) => (
            <div
              key={step.index}
              style={{
                borderTop: "1px solid #e8e8e8",
                borderLeft: i > 0 ? "1px solid #e8e8e8" : "none",
                padding: "2.5rem 2.5rem 2.5rem 0",
                paddingLeft: i > 0 ? "2.5rem" : 0,
              }}
            >
              <span style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#c0c0c0",
                letterSpacing: "0.1em",
                marginBottom: "1.5rem",
              }}>
                {step.index}
              </span>
              <h3 style={{
                fontSize: "1.0625rem",
                fontWeight: 700,
                color: "#0d0d0d",
                letterSpacing: "-0.025em",
                lineHeight: 1.3,
                margin: "0 0 0.875rem",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: "#888",
                lineHeight: 1.75,
                margin: 0,
              }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
