export default function HowItWorks() {
  const steps = [
    { n: "01", title: "Connect", body: "Link Apple Health or Health Connect. Your activity syncs automatically, no manual input." },
    { n: "02", title: "Train", body: "Run, lift, walk, ride — any real-world activity earns combat points every day." },
    { n: "03", title: "Power Up", body: "Heart rate zones and effort translate into attack and defense stats in real time." },
    { n: "04", title: "Battle", body: "Face a real opponent every single day. Duels resolve at 21:30. The grind pays off." },
  ];

  return (
    <section id="how-it-works" style={{
      backgroundColor: "#ffffff",
      padding: "10rem 2rem",
    }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "6rem", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "6rem" }}>
            <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>How it works</span>
            <h2 style={{
              fontSize: "clamp(2rem,3vw,2.5rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.05, margin: 0,
            }}>
              Four steps<br />to the arena.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{
                padding: "3rem 2.5rem",
                borderLeft: i % 2 === 1 ? "1px solid #f0f0f0" : "none",
                borderTop: i >= 2 ? "1px solid #f0f0f0" : "none",
              }}>
                <div style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", marginBottom: "2rem" }}>{s.n}</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.03em", marginBottom: "0.75rem", lineHeight: 1 }}>{s.title}</div>
                <p style={{ fontSize: "0.9375rem", color: "#777", lineHeight: 1.7, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
