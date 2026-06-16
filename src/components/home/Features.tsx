"use client";

import InView from "@/components/InView";
import Image from "next/image";

const features = [
  {
    n: "01",
    title: "Connect your health data",
    desc: `attax reads your Apple Health or Google Health Connect data automatically — no manual logging, no friction. Every workout, every step, every heart rate sample flows in the moment you open the app. You focus on training; attax handles the data.`,
  },
  {
    n: "02",
    title: "Convert effort into Activity Points",
    desc: `Your sessions are scored by heart rate zone: moderate effort earns points, sustained effort earns more, and maximum intensity earns the most. Steps count too. The result is your daily Activity Score — an honest number that reflects how hard you actually worked, not just how long you moved.`,
  },
  {
    n: "03",
    title: "Fight one opponent, every day",
    desc: `Each day you're matched against a single opponent in a 1v1 duel. Your 7-day rolling Activity Score is your weapon — the sum of today's effort and the past six days. The duel resolves every evening at 9:30 PM. Win the day. Repeat.`,
  },
  {
    n: "04",
    title: "Play a strategic card",
    desc: `Every morning, you choose one card from a rotating deck of 12. Spike your next session by +30%. Freeze your opponent's best day. Deploy Ghost to hide your activity. Scan to reveal their heart rate curve. Cards are chosen before 1 PM — strategy matters as much as sweat.`,
  },
  {
    n: "05",
    title: "Compete in leagues of 8",
    desc: `Each league runs for 7 days. Eight players. One duel per day per player. At the end of the week, the standings decide who rises, who falls, and who earns a rematch. Join a random league or challenge friends with a private invite code.`,
  },
  {
    n: "06",
    title: "Climb your competitive division",
    desc: `Win streaks earn League Points and push you up through divisions — from Bronze to Silver, Gold, Platinum, and beyond. Lose and you drop. Your hidden MMR ensures you always face opponents at your level. A cinematic rank reveal awaits every first promotion.`,
  },
];

export default function Features() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Top — editorial header + image */}
        <InView style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", marginBottom: "6rem" }}>
          <div>
            <p className="section-label" style={{ margin: "0 0 1.5rem" }}>How it works</p>

            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02,
              margin: "0 0 2rem",
            }}>
              Your workouts<br />become a fight.
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#0d0d0d", flexShrink: 0 }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Sync. Score. Duel. Climb.
              </span>
            </div>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.8, margin: "0 0 1rem" }}>
              attax turns your real-world activity into a competitive game. Your heart rate, steps, and session intensity become points — and every evening, those points decide a winner.
            </p>
            <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.8, margin: 0 }}>
              Six mechanics. One loop. The most motivated athlete wins.
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
