export default function HowItWorks() {
  const steps = [
    { n: "01", title: "Connect", body: "Link Apple Health or Health Connect. Your activity syncs automatically." },
    { n: "02", title: "Train", body: "Run, lift, walk, ride — any real-world activity earns combat points." },
    { n: "03", title: "Power Up", body: "Effort and heart rate zones translate into attack and defense stats." },
    { n: "04", title: "Battle", body: "Face a real opponent every day. Duels resolve at 21:30. Grind wins." },
  ];

  return (
    <section id="how-it-works" style={{ backgroundColor: "#ffffff", padding: "9rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ marginBottom: "5rem" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>How it works</span>
          <h2 style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800,
            color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.0, margin: 0,
          }}>
            Four steps to the arena.
          </h2>
        </div>

        {/* 4 giant horizontal steps */}
        <div style={{ borderTop: "1px solid #f0f0f0" }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              display: "grid",
              gridTemplateColumns: "4rem 1fr 2fr",
              gap: "3rem",
              alignItems: "start",
              padding: "3.5rem 0",
              borderBottom: "1px solid #f0f0f0",
            }}>
              <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", paddingTop: "0.25rem" }}>{s.n}</div>
              <div style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.title}</div>
              <p style={{ fontSize: "1.0625rem", color: "#777", lineHeight: 1.7, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
