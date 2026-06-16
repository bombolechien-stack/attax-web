export default function FeaturesGrid() {
  const features = [
    { title: "Real Activity", desc: "Your real effort fuels your fighter. No cheating, no shortcuts — your body is your controller." },
    { title: "Daily Battles", desc: "Fight a real opponent every single day. Consistency is your greatest competitive weapon." },
    { title: "Card Strategy", desc: "Choose from 12 tactical cards every morning to shift the duel in your favor." },
    { title: "Leagues", desc: "Rookie → Challenger → Pro → Elite → Legend. Every division harder than the last." },
    { title: "Collection", desc: "Discover and unlock cards that match your playstyle and competitive identity." },
    { title: "Progression", desc: "See your ranking climb in real time as you train. Every workout is measurable progress." },
  ];

  return (
    <section id="features" style={{ backgroundColor: "#ffffff", padding: "10rem 2rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>

        {/* Massive title block */}
        <div style={{ marginBottom: "7rem" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "2rem" }}>Features</span>
          <h2 style={{
            fontSize: "clamp(3.5rem, 7.5vw, 8rem)",
            fontWeight: 800,
            color: "#0d0d0d",
            letterSpacing: "-0.06em",
            lineHeight: 0.88,
            margin: 0,
          }}>
            Built for athletes.<br />Designed for gamers.
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #ebebeb" }}>
          {features.map((f, i) => (
            <div key={f.title} style={{
              padding: "3.5rem 2.5rem",
              borderBottom: "1px solid #ebebeb",
              borderLeft: i % 3 > 0 ? "1px solid #ebebeb" : "none",
            }}>
              <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "1rem", letterSpacing: "-0.025em" }}>{f.title}</div>
              <p style={{ fontSize: "0.9375rem", color: "#999", lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
