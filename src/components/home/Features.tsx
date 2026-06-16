export default function Features() {
  const items = [
    { num: "01", title: "Real-world activity", desc: "Your body powers your progression." },
    { num: "02", title: "Daily battles", desc: "Face a real opponent every single day." },
    { num: "03", title: "Card strategy", desc: "Pick from 12 tactical cards to shift the battle." },
    { num: "04", title: "Leagues & rankings", desc: "Climb the competitive ladder each season." },
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "9rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "5rem", maxWidth: "600px" }}>
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>The full picture</div>
          <h2 style={{
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            fontWeight: 800,
            color: "#0d0d0d",
            letterSpacing: "-0.045em",
            lineHeight: 1.0,
            margin: "0 0 1.25rem",
          }}>
            More than<br />a fitness app.
          </h2>
          <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.65, maxWidth: "500px", margin: 0 }}>
            Attax combines fitness, progression, competition and strategy into one experience.
          </p>
        </div>

        {/* 2x2 grid */}
        <div style={{ maxWidth: "800px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {items.map((item, i) => {
            const isRight = i % 2 === 1;
            const isBottom = i >= 2;
            return (
              <div key={item.num} style={{
                padding: "2.5rem",
                borderRight: !isRight ? "1px solid rgba(0,0,0,0.07)" : "none",
                borderBottom: !isBottom ? "1px solid rgba(0,0,0,0.07)" : "none",
              }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", color: "#aaa", marginBottom: "0.75rem" }}>{item.num}</div>
                <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.5rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.55 }}>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
