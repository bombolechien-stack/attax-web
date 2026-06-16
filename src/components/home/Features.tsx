"use client";

import InView from "@/components/InView";
import Image from "next/image";

const features = [
  {
    icon: "🤸",
    title: "Every session counts",
    desc: "With attax, every effort matters. The app automatically records your activities, analyzes your performance, and helps you build a lasting routine that fits your lifestyle. Whether you're running, walking, cycling, or training at the gym, attax transforms your effort into clear, meaningful data.",
    badge: "Auto-sync",
  },
  {
    icon: "⏱️",
    title: "Focus on consistency",
    desc: "Forget the pressure of perfection — focus on progress. attax encourages you to stay active and celebrate each improvement. The app shows how far you've come, highlights your milestones, and keeps you moving forward one session at a time. Every movement counts.",
    badge: "Daily motivation",
  },
  {
    icon: "⚙️",
    title: "Technology that supports you",
    desc: "Built with powerful technology and a human-first approach, attax gives you a clear view of your journey. Track your stats, set realistic goals, and measure your progress week after week. It's not about doing more — it's about doing better.",
    badge: "Smart analytics",
  },
  {
    icon: "🧘",
    title: "Reconnect with movement",
    desc: "The attax experience goes beyond tracking. It's a way to rediscover the pleasure of movement, regain energy, and strengthen your motivation day after day. Each workout becomes a moment for yourself — a way to recharge and reconnect.",
    badge: "Wellbeing",
  },
  {
    icon: "🤝",
    title: "A community that moves with you",
    desc: "At attax, motivation is collective. Join a community of people who share the same mindset: to move, to grow, and to keep each other inspired. The app builds real connections between users, turning individual effort into a shared source of energy.",
    badge: "Social",
  },
  {
    icon: "🏁",
    title: "Move at your own pace",
    desc: "Whether you're just starting out or pushing your limits, attax adapts to your level and your rhythm. The more you move, the more you progress. Every step, every workout, every moment brings you closer to the best version of yourself.",
    badge: "For everyone",
  },
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
              attax is the next-generation fitness companion that helps you stay consistent, track your progress, and reach your goals with confidence.
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
            <InView key={f.title} delay={i * 60} className="premium-card">
              <div style={{
                backgroundColor: "#ffffff", borderRadius: "20px",
                padding: "2rem 2rem 2.25rem", border: "1px solid #ebebeb",
                height: "100%",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    backgroundColor: "#fff5eb",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px",
                  }}>{f.icon}</div>
                  <span style={{
                    fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em",
                    padding: "4px 10px", borderRadius: "999px", textTransform: "uppercase",
                    backgroundColor: "#fff5eb",
                    color: "#FC5F2B",
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
