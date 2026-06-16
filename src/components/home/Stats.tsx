export default function Stats() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Intro credibility line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* Avatar stack */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {["🏃", "🚴", "🏋️", "⛹️"].map((emoji, i) => (
              <div
                key={i}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#f4f4f5",
                  border: "2px solid #fff",
                  marginLeft: i > 0 ? "-10px" : "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  zIndex: 4 - i,
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#666666",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Trusted by athletes in 50+ countries worldwide
          </p>
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2px",
            backgroundColor: "#f4f4f5",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {[
            { value: "10,000+", label: "Active Athletes", desc: "And growing every day" },
            { value: "50+", label: "Countries", desc: "Global competition" },
            { value: "1M+", label: "Workouts Logged", desc: "Every rep counted" },
            { value: "100%", label: "Free to start", desc: "No hidden fees" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                backgroundColor: "#ffffff",
                padding: "2.5rem 2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "#1a1a1a",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  marginBottom: "4px",
                }}
              >
                {s.label}
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#999999" }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
