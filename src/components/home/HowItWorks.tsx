import InView from "@/components/InView";

const steps = [
  { n: "01", icon: "🏃", title: "Do your sport", desc: "Walk, run, cycle, lift — any activity counts. Attax connects to Apple Health & Google Health Connect automatically.", bg: "#f7f7f7" },
  { n: "02", icon: "📊", title: "Move regularly", desc: "Track your activity day after day. Every session recorded, every effort counted — build the habit that changes everything.", bg: "#fff5eb" },
  { n: "03", icon: "🔥", title: "Stay consistent", desc: "Forget the pressure of perfection — focus on progress. Attax celebrates showing up, week after week.", bg: "#f7f7f7" },
  { n: "04", icon: "🏆", title: "Become the best version of yourself", desc: "Weekly progress, milestones unlocked, community energy. Every step brings you closer to who you want to be.", bg: "#0d0d0d", dark: true },
];

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <InView style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>
            How it works
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1rem", lineHeight: 1.1 }}>
            It starts with your first workout,<br />then so much more.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#777", maxWidth: "440px", margin: "0 auto", lineHeight: 1.65 }}>
            Four simple steps that turn daily effort into lasting progress.
          </p>
        </InView>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px,1fr))", gap: "10px" }}>
          {steps.map((s, i) => (
            <InView key={s.n} delay={i * 80} className="premium-card">
              <div style={{
                backgroundColor: s.bg, borderRadius: "20px",
                padding: "2.25rem 2rem 2.5rem",
                position: "relative", overflow: "hidden",
                height: "100%", minHeight: "280px",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div style={{
                  position: "absolute", top: "1rem", right: "1.25rem",
                  fontSize: "5rem", fontWeight: 900, lineHeight: 1,
                  color: s.dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                  letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none",
                }}>{s.n}</div>

                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px",
                  backgroundColor: s.dark ? "rgba(252,95,43,0.15)" : "#FC5F2B",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px", marginBottom: "auto",
                }}>{s.icon}</div>

                <div style={{ marginTop: "3rem" }}>
                  <div style={{
                    fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: s.dark ? "rgba(252,95,43,0.8)" : "#FC5F2B",
                    marginBottom: "0.5rem",
                  }}>Step {s.n}</div>
                  <h3 style={{
                    fontSize: "1.125rem", fontWeight: 700, letterSpacing: "-0.02em",
                    color: s.dark ? "#ffffff" : "#0d0d0d", margin: "0 0 0.75rem",
                  }}>{s.title}</h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.65, margin: 0, color: s.dark ? "rgba(255,255,255,0.5)" : "#666" }}>{s.desc}</p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
