"use client";

import InView from "@/components/InView";
import Image from "next/image";

const features = [
  {
    n: "01",
    title: "Every session counts",
    desc: `With attax, every effort matters. The app automatically records your activities, analyzes your performance, and helps you build a lasting routine that fits your lifestyle. Whether you're running, walking, cycling, or training at the gym, attax transforms your effort into clear, meaningful data that shows your real evolution over time.`,
  },
  {
    n: "02",
    title: "Focus on consistency",
    desc: `Forget the pressure of perfection — focus on progress. attax encourages you to stay active and celebrate each improvement. The app shows how far you've come, highlights your milestones, and keeps you moving forward one session at a time. Every movement counts, and attax ensures you never lose sight of your motivation.`,
  },
  {
    n: "03",
    title: "Technology that supports you",
    desc: `Built with powerful technology and a human-first approach, attax gives you a clear view of your journey. You can track your stats, set realistic goals, and measure your progress week after week. It's not about doing more — it's about doing better — with determination, clarity, and consistency.`,
  },
  {
    n: "04",
    title: "Reconnect with movement",
    desc: `The attax experience goes beyond tracking. It's a way to rediscover the pleasure of movement, regain energy, and strengthen your motivation day after day. Each workout becomes a moment for yourself — a way to recharge and reconnect. And you're not alone — an active community shares the same vision.`,
  },
  {
    n: "05",
    title: "A community that moves with you",
    desc: `At attax, motivation is collective. Join a community of people who share the same mindset: to move, to grow, and to keep each other inspired. The app builds real connections between users, turning individual effort into a shared source of energy. Because together, we go further — and we keep going longer.`,
  },
  {
    n: "06",
    title: "Move at your own pace",
    desc: `Whether you're just starting out or pushing your limits, attax adapts to your level and your rhythm. The more you move, the more you progress. Every step, every workout, every moment brings you closer to the best version of yourself.`,
  },
];

export default function Features() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Top — editorial header + image */}
        <InView style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", marginBottom: "6rem" }}>
          <div>
            <p className="section-label" style={{ margin: "0 0 1.5rem" }}>Features</p>

            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02,
              margin: "0 0 2rem",
            }}>
              Your motivation,<br />powered by<br />movement.
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#0d0d0d", flexShrink: 0 }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Your new challenge starts with attax
              </span>
            </div>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.8, margin: "0 0 1rem" }}>
              attax is the next-generation fitness companion that helps you stay consistent, track your progress, and reach your goals with confidence.
            </p>
            <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.8, margin: 0 }}>
              Designed for people who want to move more and improve week after week, attax brings structure, motivation, and intelligent analysis to every workout.
            </p>
          </div>
          <div className="img-zoom" style={{ borderRadius: "24px", overflow: "hidden", height: "480px", position: "relative" }}>
            <Image src="/images/sport-silhouette.png" alt="Athlete" fill style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)" }} />
          </div>
        </InView>

        {/* Feature rows — editorial list */}
        <div>
          {features.map((f, i) => (
            <InView key={f.n} delay={i * 40} blur={false}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 2fr",
                gap: "2rem",
                alignItems: "start",
                padding: "2.5rem 0",
                borderTop: "1px solid #f0f0f0",
              }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", paddingTop: "4px" }}>{f.n}</div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.3 }}>{f.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.8, margin: 0 }}>{f.desc}</p>
              </div>
            </InView>
          ))}
          <div style={{ height: "1px", background: "#f0f0f0" }} />
        </div>
      </div>
    </section>
  );
}
