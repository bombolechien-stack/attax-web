export default function HowItWorks() {
  const steps = [
    { n: "01", title: "Connect", body: "Apple Health. Health Connect. Your activity syncs automatically — no manual input, ever." },
    { n: "02", title: "Train", body: "Run, lift, walk, ride. Any real-world effort earns combat points every day." },
    { n: "03", title: "Power Up", body: "Heart rate zones and session intensity translate directly into attack and defense stats." },
    { n: "04", title: "Battle", body: "Fight a real opponent every single night. Duels resolve at 21:30. The grind always pays off." },
  ];

  return (
    <section id="how-it-works" style={{ backgroundColor: "#ffffff", padding: "10rem 0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "6rem", paddingBottom: "4rem", borderBottom: "1px solid #ebebeb", gap: "3rem" }}>
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>How it works</span>
            <h2 style={{
              fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.055em", lineHeight: 0.9, margin: 0,
            }}>
              Four steps<br />to the arena.
            </h2>
          </div>
          <p style={{ fontSize: "1rem", color: "#aaa", lineHeight: 1.75, maxWidth: "280px", margin: 0, flex: "0 0 280px" }}>
            From your first workout to your first duel in under two minutes.
          </p>
        </div>

        {/* Steps — each takes full width */}
        <div>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: "0",
              padding: "4rem 0",
              borderBottom: "1px solid #ebebeb",
              alignItems: "start",
            }}>
              <div style={{
                fontSize: "clamp(3.5rem, 5vw, 5rem)", fontWeight: 900,
                color: "#ebebeb", letterSpacing: "-0.05em", lineHeight: 1,
                paddingTop: "0.1em",
              }}>{s.n}</div>
              <div style={{ paddingLeft: "3rem" }}>
                <div style={{
                  fontSize: "clamp(2.5rem, 4.5vw, 5rem)", fontWeight: 800,
                  color: "#0d0d0d", letterSpacing: "-0.05em", lineHeight: 0.95,
                  marginBottom: "1.5rem",
                }}>{s.title}</div>
                <p style={{ fontSize: "1.0625rem", color: "#888", lineHeight: 1.75, margin: 0, maxWidth: "560px" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
