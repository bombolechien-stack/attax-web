import InView from "@/components/InView";

const stats = [
  { value: "10K+", label: "Active Athletes", desc: "And growing every day" },
  { value: "50+",  label: "Countries",       desc: "Global competition" },
  { value: "1M+",  label: "Workouts Logged", desc: "Every rep counted" },
  { value: "Free", label: "To Get Started",  desc: "No hidden fees, ever" },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Credibility line */}
        <InView style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "4rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex" }}>
            {["🏃","🚴","🏋️","⛹️"].map((e, i) => (
              <div key={i} style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: "#f0f0f0",
                border: "2.5px solid #fff",
                marginLeft: i > 0 ? "-10px" : 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "15px", zIndex: 4 - i, position: "relative",
              }}>{e}</div>
            ))}
          </div>
          <p style={{ fontSize: "0.9375rem", color: "#555", fontWeight: 500, margin: 0 }}>
            Trusted by athletes in 50+ countries worldwide
          </p>
        </InView>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "#f0f0f0",
          borderRadius: "20px",
          overflow: "hidden",
        }}>
          {stats.map((s, i) => (
            <InView key={s.label} delay={i * 80}>
              <div style={{
                backgroundColor: "#fff",
                padding: "2.5rem 2rem",
                textAlign: "center",
                height: "100%",
              }}>
                <div style={{
                  fontSize: "clamp(2rem, 3vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#0d0d0d",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}>{s.value}</div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "4px" }}>{s.label}</div>
                <div style={{ fontSize: "0.8125rem", color: "#aaa" }}>{s.desc}</div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
