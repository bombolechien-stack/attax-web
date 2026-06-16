"use client";

import InView from "@/components/InView";

const features = [
  { icon: "⚡", title: "Automatic Sync", desc: "Connects to Apple Health & Google Health Connect. Your workouts are recorded the moment you finish — no manual logging.", badge: "iOS & Android" },
  { icon: "🎯", title: "Smart Consistency", desc: "Focus on the habit, not perfection. Attax celebrates consistency over intensity — because showing up is what matters.", badge: "Daily motivation" },
  { icon: "📊", title: "Deep Analytics", desc: "Weekly insights, trend analysis, and recovery patterns. Understand your body and optimize your training over time.", badge: "Performance" },
  { icon: "🏅", title: "Competitive Leagues", desc: "Join leagues with athletes at your level. Compete weekly, earn points, and climb the global leaderboard.", badge: "Coming in V2", soon: true },
  { icon: "🌍", title: "Global Ranking", desc: "See where you stand against athletes worldwide. Rankings by sport, city, country, and overall performance.", badge: "Coming in V2", soon: true },
  { icon: "🤝", title: "Community", desc: "A community that lifts you up. Shared energy among thousands of athletes moving toward their goals.", badge: "Social" },
];

export default function Features() {
  return (
    <section style={{ backgroundColor: "#f7f7f7", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <InView style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>
            Features
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, color: "#0d0d0d",
            letterSpacing: "-0.035em", margin: "0 0 1rem", lineHeight: 1.1,
          }}>
            Not just an app.<br />A source of motivation.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#777", maxWidth: "400px", margin: "0 auto", lineHeight: 1.65 }}>
            Built for athletes who want more than a step counter.
          </p>
        </InView>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: "10px" }}>
          {features.map((f, i) => (
            <InView key={f.title} delay={i * 60} className={f.soon ? "" : "premium-card"}>
              <div style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "2rem 2rem 2.25rem",
                border: "1px solid #ebebeb",
                opacity: f.soon ? 0.55 : 1,
                height: "100%",
                cursor: f.soon ? "default" : "pointer",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    backgroundColor: f.soon ? "#f4f4f4" : "#fff5eb",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px",
                  }}>{f.icon}</div>
                  <span style={{
                    fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em",
                    padding: "4px 10px", borderRadius: "999px", textTransform: "uppercase",
                    backgroundColor: f.soon ? "#f4f4f4" : "#fff5eb",
                    color: f.soon ? "#aaa" : "#FC5F2B",
                  }}>{f.badge}</span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.5rem", letterSpacing: "-0.015em" }}>{f.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
