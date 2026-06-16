export default function FeaturesGrid() {
  const features = [
    { title: "Real Activity", desc: "Your real effort fuels your progression. No cheating, no shortcuts." },
    { title: "Daily Battles", desc: "Fight a real opponent every single day. Consistency is your greatest weapon." },
    { title: "Card Strategy", desc: "Choose from 12 tactical cards each morning to shift the battle." },
    { title: "Leagues", desc: "Climb through competitive divisions — Rookie, Challenger, Pro, Elite, Legend." },
    { title: "Collection", desc: "Discover and collect cards that define your playstyle and identity." },
    { title: "Progression", desc: "Every workout makes you measurably stronger. See your ranking climb in real time." },
  ];

  return (
    <section id="features" style={{ backgroundColor: "#ffffff", padding: "10rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ marginBottom: "6rem" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>Features</span>
          <h2 style={{
            fontSize: "clamp(2.5rem,4.5vw,4rem)", fontWeight: 800,
            color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.0, margin: 0,
          }}>
            Built for athletes.<br />Designed for gamers.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {features.map((f, i) => (
            <div key={f.title} style={{
              padding: "3rem 2.5rem",
              borderTop: "1px solid #f0f0f0",
              borderLeft: i % 3 > 0 ? "1px solid #f0f0f0" : "none",
            }}>
              <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>{f.title}</div>
              <p style={{ fontSize: "0.9375rem", color: "#888", lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
          {/* Bottom border */}
          <div style={{ gridColumn: "1 / -1", borderTop: "1px solid #f0f0f0" }} />
        </div>
      </div>
    </section>
  );
}
