"use client";

import Image from "next/image";
import InView from "@/components/InView";

const cards = [
  { name: "Spike",     cat: "BOOST",    color: "#22c55e", bg: "/cards/spike-bg.png",    icon: "/cards/spike.png",    desc: "+30% AP on next session" },
  { name: "Overdrive", cat: "BOOST",    color: "#22c55e", bg: "/cards/overdrive-bg.png", icon: "/cards/overdrive.png", desc: "Best 20-min window ×2" },
  { name: "Recover",   cat: "BOOST",    color: "#22c55e", bg: "/cards/recover-bg.png",   icon: "/cards/recover.png",   desc: "+15% AP next session" },
  { name: "Shield",    cat: "DEFENSE",  color: "#3b82f6", bg: "/cards/shield-bg.png",    icon: "/cards/shield.png",    desc: "Opponent −15% next session" },
  { name: "Freeze",    cat: "SABOTAGE", color: "#ef4444", bg: "/cards/freeze-bg.png",    icon: "/cards/freeze.png",    desc: "Opponent's best day −8%" },
  { name: "Pressure",  cat: "SABOTAGE", color: "#ef4444", bg: "/cards/pressure-bg.png",  icon: "/cards/pressure.png",  desc: "+15% if they train 30+ min" },
  { name: "Parasite",  cat: "SABOTAGE", color: "#ef4444", bg: "/cards/parasite-bg.png",  icon: "/cards/parasite.png",  desc: "Steal 7% of their points" },
  { name: "Scan",      cat: "INTEL",    color: "#a855f7", bg: "/cards/scan-bg.png",      icon: "/cards/scan.png",      desc: "Reveal opponent's HR curve" },
  { name: "Ghost",     cat: "MASQUE",   color: "#8b5cf6", bg: "/cards/ghost-bg.png",     icon: "/cards/ghost.png",     desc: "Your score looks flat" },
  { name: "Mirage",    cat: "MASQUE",   color: "#8b5cf6", bg: "/cards/mirage-bg.png",    icon: "/cards/mirage.png",    desc: "Your score faked ±15%" },
  { name: "Blackout",  cat: "MASQUE",   color: "#8b5cf6", bg: "/cards/blackout-bg.png",  icon: "/cards/blackout.png",  desc: "No score info until 7 PM" },
  { name: "Counter",   cat: "MOMENTUM", color: "#f59e0b", bg: "/cards/boost-bg.png",     icon: "/cards/counter.png",   desc: "+25% after 6 PM if losing" },
];

export default function CardsShowcase() {
  return (
    <section style={{ backgroundColor: "#0d0d0d", padding: "7rem 2rem", overflow: "hidden" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <InView>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", gap: "2rem" }}>
            <div>
              <p className="section-label-light" style={{ margin: "0 0 1.25rem" }}>Strategic cards</p>
              <h2 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
                color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0,
              }}>
                12 cards.<br />Pick one. Every day.
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
              Every morning you receive 3 cards. Choose before 1 PM. Boost yourself, sabotage your rival, or manipulate information. No second chances.
            </p>
          </div>
        </InView>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "10px" }}>
          {cards.map((card, i) => (
            <InView key={card.name} delay={i * 40}>
              <div className="power-card" style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "2/3",
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                {/* Background image */}
                <Image
                  src={card.bg}
                  alt={card.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Dark overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.0) 100%)",
                }} />
                {/* Scanlines */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
                  pointerEvents: "none",
                }} />
                {/* Category badge */}
                <div style={{
                  position: "absolute", top: "10px", left: "10px",
                  fontSize: "0.5625rem", fontWeight: 800, letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: card.color,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  border: `1px solid ${card.color}33`,
                  padding: "3px 7px", borderRadius: "4px",
                }}>{card.cat}</div>
                {/* Icon */}
                <div style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -60%)",
                  width: "44px", height: "44px",
                  opacity: 0.9,
                }}>
                  <Image src={card.icon} alt={card.name} fill style={{ objectFit: "contain" }} />
                </div>
                {/* Bottom text */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px" }}>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.01em", marginBottom: "2px" }}>{card.name}</div>
                  <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>{card.desc}</div>
                </div>
              </div>
            </InView>
          ))}
        </div>

        {/* Bottom note */}
        <InView>
          <div style={{
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            display: "flex", alignItems: "center", gap: "1.5rem",
          }}>
            <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", flexShrink: 0 }}>
              How it works
            </div>
            <div style={{ width: "1px", height: "24px", backgroundColor: "rgba(255,255,255,0.08)", flexShrink: 0 }} />
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: 0 }}>
              Each day, 3 cards are offered to everyone in your league — the same 3 for all players, determined by the day and the room. Pick your card before 1 PM. Effects apply instantly to your session data.
            </p>
          </div>
        </InView>
      </div>
    </section>
  );
}
