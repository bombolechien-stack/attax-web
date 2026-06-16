export default function FeaturesGrid() {
  const features = [
    { n: "01", title: "Real Activity", desc: "Your real effort fuels your progression. No cheating, no shortcuts." },
    { n: "02", title: "Daily Battles", desc: "Fight a real opponent every single day. Consistency is your greatest weapon." },
    { n: "03", title: "Card Strategy", desc: "Choose from 12 tactical cards each morning to shift the battle in your favor." },
    { n: "04", title: "Leagues", desc: "Climb through competitive divisions — Rookie, Challenger, Pro, Elite, Legend." },
    { n: "05", title: "Collection", desc: "Discover and collect cards that define your playstyle and competitive identity." },
    { n: "06", title: "Progression", desc: "Every workout makes you measurably stronger. See your ranking climb in real time." },
  ];

  return (
    <section id="features" style={{
      backgroundColor: "#0d0d0d",
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.016) 3px, rgba(255,255,255,0.016) 4px)",
      padding: "9rem 2rem",
    }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "5rem", gap: "4rem" }}>
          <div>
            <p className="section-label-light" style={{ margin: "0 0 1.5rem" }}>Features</p>
            <h2 style={{
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800,
              color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.0, margin: 0,
            }}>
              Built for athletes.<br />Designed for gamers.
            </h2>
          </div>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.75, maxWidth: "320px", margin: 0, flex: "0 0 320px" }}>
            Whether you&apos;re chasing fitness goals or competitive rankings, every workout becomes meaningful progress.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
          {features.map((f, i) => (
            <div key={f.n} style={{
              padding: "2.5rem 2rem",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              borderLeft: i % 3 > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}>
              <div style={{ fontSize: "0.625rem", fontWeight: 700, color: "rgba(255,255,255,0.2)", letterSpacing: "0.14em", marginBottom: "1.25rem" }}>{f.n}</div>
              <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.625rem", letterSpacing: "-0.02em" }}>{f.title}</div>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
