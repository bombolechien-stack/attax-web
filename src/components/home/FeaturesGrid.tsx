export default function FeaturesGrid() {
  const features = [
    { title: "Real Activity", desc: "Your real effort fuels your progression. No shortcuts." },
    { title: "Daily Battles", desc: "Fight a real opponent every day. Consistency wins." },
    { title: "Card Strategy", desc: "12 tactical cards each morning. Choose wisely." },
    { title: "Leagues", desc: "Rookie → Challenger → Pro → Elite → Legend." },
    { title: "Collection", desc: "Unlock cards that define your playstyle." },
    { title: "Progression", desc: "Every workout makes you measurably stronger." },
  ];

  return (
    <section id="features" style={{ backgroundColor: "#ffffff", padding: "9rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "6rem", gap: "4rem", flexWrap: "wrap" }}>
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>Features</span>
            <h2 style={{
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.0, margin: 0,
            }}>
              Built for athletes.<br />Designed for gamers.
            </h2>
          </div>
          <p style={{ fontSize: "1rem", color: "#999", lineHeight: 1.75, maxWidth: "300px", margin: 0 }}>
            Whether you&apos;re chasing fitness goals or competitive rankings, every workout is meaningful progress.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #f0f0f0" }}>
          {features.map((f, i) => (
            <div key={f.title} style={{
              padding: "3rem 2rem",
              borderBottom: "1px solid #f0f0f0",
              borderLeft: i % 3 > 0 ? "1px solid #f0f0f0" : "none",
            }}>
              <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.875rem", letterSpacing: "-0.025em" }}>{f.title}</div>
              <p style={{ fontSize: "0.9375rem", color: "#999", lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
