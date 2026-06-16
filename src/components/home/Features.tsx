"use client";

const features = [
  { icon: "⚡", title: "Automatic Sync", desc: "Connects to Apple Health & Google Health Connect. Your workouts are recorded the moment you finish.", badge: "iOS & Android" },
  { icon: "🎯", title: "Smart Consistency", desc: "Focus on the habit, not perfection. Attax celebrates consistency over intensity.", badge: "Daily motivation" },
  { icon: "📊", title: "Deep Analytics", desc: "Weekly insights, trend analysis, and recovery patterns. Understand your body over time.", badge: "Performance" },
  { icon: "🏅", title: "Competitive Leagues", desc: "Join leagues with athletes at your level. Compete weekly, earn points, climb the leaderboard.", badge: "Coming in V2", soon: true },
  { icon: "🌍", title: "Global Ranking", desc: "See where you stand against athletes worldwide. Rankings by sport, city, and country.", badge: "Coming in V2", soon: true },
  { icon: "🤝", title: "Community", desc: "A community that lifts you up. Shared energy among thousands of athletes.", badge: "Social" },
];

export default function Features() {
  return (
    <section style={{ backgroundColor: "#fafafa", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              letterSpacing: "-0.03em",
              margin: "0 0 1rem",
              lineHeight: 1.1,
            }}
          >
            Not just an app.
            <br />
            A source of motivation.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#666666", maxWidth: "420px", margin: "0 auto", lineHeight: 1.6 }}>
            Built for athletes who want more than a step counter.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "12px",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "2rem",
                border: "1px solid #f0f0f0",
                opacity: f.soon ? 0.6 : 1,
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!f.soon) {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ fontSize: "1.75rem" }}>{f.icon}</div>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    backgroundColor: f.soon ? "#f4f4f5" : "#fff5eb",
                    color: f.soon ? "#999" : "#FC5F2B",
                    textTransform: "uppercase",
                  }}
                >
                  {f.badge}
                </span>
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 0.5rem", letterSpacing: "-0.01em" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#666666", lineHeight: 1.65, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
