export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Move",
      sub: "Your activity is automatically synced via Apple Health or Health Connect.",
    },
    {
      num: "02",
      title: "Earn power",
      sub: "Every workout generates combat points based on effort and heart rate zones.",
    },
    {
      num: "03",
      title: "Battle",
      sub: "Use your accumulated power to defeat real opponents in daily 1v1 duels.",
    },
  ];

  return (
    <section id="how-it-works" style={{ backgroundColor: "#ffffff", padding: "9rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Title block */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>How it works</div>
          <h2 style={{
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            fontWeight: 800,
            color: "#0d0d0d",
            letterSpacing: "-0.045em",
            lineHeight: 1.0,
            margin: 0,
          }}>
            Train in real life.<br />Fight in Attax.
          </h2>
        </div>

        {/* 3 columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{
              position: "relative",
              padding: "2.5rem",
              borderRight: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none",
            }}>
              {/* Ghost number top-right */}
              <div style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                fontSize: "4rem",
                fontWeight: 800,
                color: "rgba(0,0,0,0.06)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                userSelect: "none",
              }}>{s.num}</div>

              <div style={{ fontWeight: 700, fontSize: "1.25rem", color: "#0d0d0d", marginBottom: "0.75rem" }}>
                {s.title}
              </div>
              <div style={{ fontSize: "0.9375rem", color: "rgba(0,0,0,0.5)", lineHeight: 1.65 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
