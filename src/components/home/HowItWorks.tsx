export default function HowItWorks() {
  const steps = [
    { n: "01", title: "Connect", sub: "Link Apple Health or Health Connect. Your activity syncs automatically." },
    { n: "02", title: "Train", sub: "Run, lift, walk, ride — any real-world activity counts toward your power." },
    { n: "03", title: "Power Up", sub: "Heart rate zones and effort translate into combat points every day." },
    { n: "04", title: "Battle", sub: "Face a real opponent daily. Duels resolve every night at 21:30." },
  ];

  return (
    <section id="how-it-works" style={{
      backgroundColor: "#0d0d0d",
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.016) 3px, rgba(255,255,255,0.016) 4px)",
      padding: "9rem 2rem",
    }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem" }}>
          <p className="section-label-light" style={{ margin: "0 0 1.5rem" }}>How it works</p>
          <h2 style={{
            fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800,
            color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.0, margin: 0,
            maxWidth: "500px",
          }}>
            Four steps to the arena.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding: "2.5rem 2rem",
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
              position: "relative",
            }}>
              <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.2)", letterSpacing: "0.14em", marginBottom: "2rem" }}>{s.n}</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "0.75rem", lineHeight: 1 }}>{s.title}</div>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{s.sub}</p>
              {/* Large ghost number */}
              <div style={{
                position: "absolute", bottom: "1.5rem", right: "1.5rem",
                fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.04)",
                letterSpacing: "-0.05em", lineHeight: 1, userSelect: "none",
              }}>{s.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
