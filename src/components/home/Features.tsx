"use client";

import InView from "@/components/InView";
import Image from "next/image";

const features = [
  {
    icon: "🤸",
    title: "Every session counts",
    desc: `With attax, every effort matters.\nThe app automatically records your activities, analyzes your performance, and helps you build a lasting routine that fits your lifestyle.\nWhether you're running, walking, cycling, or training at the gym, attax transforms your effort into clear, meaningful data that shows your real evolution over time.`,
  },
  {
    icon: "⏱️",
    title: "Focus on consistency",
    desc: `Forget the pressure of perfection — focus on progress.\nattax encourages you to stay active and celebrate each improvement.\nThe app shows how far you've come, highlights your milestones, and keeps you moving forward one session at a time.\nEvery movement counts, and attax ensures you never lose sight of your motivation.`,
  },
  {
    icon: "⚙️",
    title: "Technology that supports you",
    desc: `Built with powerful technology and a human-first approach, attax gives you a clear view of your journey.\nYou can track your stats, set realistic goals, and measure your progress week after week.\nIt's not about doing more — it's about doing better — with determination, clarity, and consistency.`,
  },
  {
    icon: "🧘",
    title: "Reconnect with movement",
    desc: `The attax experience goes beyond tracking.\nIt's a way to rediscover the pleasure of movement, regain energy, and strengthen your motivation day after day.\nEach workout becomes a moment for yourself — a way to recharge and reconnect.\nAnd you're not alone — an active community shares the same vision: progress, perseverance, and commitment.`,
  },
  {
    icon: "🤝",
    title: "A community that moves with you",
    desc: `At attax, motivation is collective.\nJoin a community of people who share the same mindset: to move, to grow, and to keep each other inspired.\nThe app builds real connections between users, turning individual effort into a shared source of energy.\nBecause together, we go further — and we keep going longer.`,
  },
  {
    icon: "🏁",
    title: "Move at your own pace",
    desc: `Whether you're just starting out or pushing your limits, attax adapts to your level and your rhythm.\nThe more you move, the more you progress.\nEvery step, every workout, every moment brings you closer to the best version of yourself.`,
  },
];

export default function Features() {
  return (
    <section style={{ backgroundColor: "#f7f7f7", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Section header */}
        <InView style={{ marginBottom: "4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>Features</p>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1.5rem", lineHeight: 1.1 }}>
                Your motivation,<br />powered by movement.
              </h2>
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#fff5eb", borderRadius: "999px",
                padding: "6px 16px 6px 10px", marginBottom: "1.25rem",
              }}>
                <span style={{ fontSize: "1rem" }}>💪🥇</span>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#FC5F2B", letterSpacing: "0.02em" }}>Your new challenge starts with attax</span>
              </div>
              <p style={{ fontSize: "1.0625rem", color: "#555", lineHeight: 1.75, margin: "0 0 1.25rem" }}>
                attax is the next-generation fitness companion that helps you stay consistent, track your progress, and reach your goals with confidence.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "#777", lineHeight: 1.75, margin: 0 }}>
                Designed for people who want to move more and improve week after week, attax brings structure, motivation, and intelligent analysis to every workout — wherever you are, whatever your rhythm.
              </p>
            </div>
            <div style={{ borderRadius: "20px", overflow: "hidden", height: "400px", position: "relative", backgroundColor: "#111" }}>
              <Image src="/images/sport-silhouette.png" alt="Athlete" fill style={{ objectFit: "cover", objectPosition: "center" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }} />
            </div>
          </div>
        </InView>

        {/* Feature list — 2 columns, full text */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {features.map((f, i) => (
            <InView key={f.title} delay={i * 50}>
              <div className="premium-card" style={{
                backgroundColor: "#ffffff", borderRadius: "20px",
                padding: "2.25rem 2.5rem",
                borderLeft: "3px solid #fff5eb",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.25rem" }}>{f.icon}</span>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d", margin: 0, letterSpacing: "-0.015em" }}>{f.title}</h3>
                </div>
                <div style={{ fontSize: "0.9375rem", color: "#555", lineHeight: 1.75 }}>
                  {f.desc.split("\n").map((line, j) => (
                    <p key={j} style={{ margin: j === 0 ? 0 : "0.6rem 0 0" }}>{line}</p>
                  ))}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
