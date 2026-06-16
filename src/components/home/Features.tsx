"use client";

import InView from "@/components/InView";
import Image from "next/image";

const features = [
  { icon: "🤸", title: "Every session counts", desc: "The app automatically records your activities, analyzes your performance, and helps you build a lasting routine. Running, walking, cycling, gym training — it all counts.", badge: "Auto-sync" },
  { icon: "⏱️", title: "Focus on consistency", desc: "Forget the pressure of perfection — focus on progress. Attax celebrates every improvement and tracks each milestone on your journey.", badge: "Daily motivation" },
  { icon: "⚙️", title: "Technology that supports you", desc: "Built with powerful technology and a human-first approach. Track your stats, set goals, and measure your weekly progress with precision.", badge: "Smart analytics" },
  { icon: "🏅", title: "Competitive Leagues", desc: "Join leagues with athletes at your level. Compete weekly, earn points, and climb the global leaderboard.", badge: "Coming in V2", soon: true },
  { icon: "🌍", title: "Global Ranking", desc: "See where you stand against athletes worldwide. Rankings by sport, city, country, and overall performance.", badge: "Coming in V2", soon: true },
  { icon: "🤝", title: "A community that moves with you", desc: "At attax, motivation is collective. The app builds real connections between users, turning individual effort into shared energy.", badge: "Social" },
];

export default function Features() {
  return (
    <section style={{ backgroundColor: "#f7f7f7", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header: text left + sport silhouette right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px", alignItems: "stretch" }}>
          <InView style={{
            backgroundColor: "#ffffff", borderRadius: "20px", padding: "3rem",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>Features</p>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1.25rem", lineHeight: 1.1 }}>
              Your motivation,<br />powered by movement.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#777", lineHeight: 1.65, margin: "0 0 2rem", maxWidth: "380px" }}>
              No more emotionless fitness apps. attax turns your workouts into a motivating and positive experience.
            </p>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px", width: "fit-content",
              backgroundColor: "#0d0d0d", color: "#ffffff", fontWeight: 700, fontSize: "0.9375rem",
              padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
            }}>Discover your new challenge →</a>
          </InView>

          <div style={{ borderRadius: "20px", overflow: "hidden", minHeight: "360px", position: "relative", backgroundColor: "#111" }}>
            <Image src="/images/sport-silhouette.png" alt="Athlete" fill style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
            }} />
          </div>
        </div>

        {/* Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: "10px" }}>
          {features.map((f, i) => (
            <InView key={f.title} delay={i * 60} className={f.soon ? "" : "premium-card"}>
              <div style={{
                backgroundColor: "#ffffff", borderRadius: "20px",
                padding: "2rem 2rem 2.25rem", border: "1px solid #ebebeb",
                opacity: f.soon ? 0.55 : 1, height: "100%",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    backgroundColor: f.soon ? "#f4f4f4" : "#fff5eb",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px",
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
