"use client";

import Image from "next/image";
import InView from "@/components/InView";

const cards = [
  {
    n: "01", name: "SPIKE",     cat: "BOOST",    icon: "/cards/spike.png",
    effect: "+30% AP",   sub: "30 MIN WINDOW",  desc: "Targeted intensity spike.",
    grad: ["#0c1a3a", "#1e3a8a", "#2563eb"],
    textColor: "#93c5fd",
  },
  {
    n: "02", name: "OVERDRIVE", cat: "BOOST",    icon: "/cards/overdrive.png",
    effect: "×2 AP",     sub: "BEST 20 MIN",    desc: "All or nothing. This is the moment.",
    grad: ["#2d1500", "#92400e", "#d97706"],
    textColor: "#fcd34d",
  },
  {
    n: "03", name: "RECOVER",   cat: "BOOST",    icon: "/cards/recover.png",
    effect: "+15% AP",   sub: "NEXT SESSION",   desc: "Recover better. Come back stronger.",
    grad: ["#3b0a2a", "#9d174d", "#ec4899"],
    textColor: "#f9a8d4",
  },
  {
    n: "04", name: "SHIELD",    cat: "DEFENSE",  icon: "/cards/shield.png",
    effect: "−15%",      sub: "OPP. NEXT SESSION", desc: "Block their momentum.",
    grad: ["#1a0a00", "#7f1d1d", "#dc2626"],
    textColor: "#fca5a5",
  },
  {
    n: "05", name: "FREEZE",    cat: "SABOTAGE", icon: "/cards/freeze.png",
    effect: "−8%",       sub: "OPP. BEST DAY",  desc: "Erase their peak performance.",
    grad: ["#031c2d", "#164e63", "#0891b2"],
    textColor: "#67e8f9",
  },
  {
    n: "06", name: "PRESSURE",  cat: "SABOTAGE", icon: "/cards/pressure.png",
    effect: "+15%",      sub: "IF THEY TRAIN",   desc: "Turn their effort against them.",
    grad: ["#0f0f0f", "#1c1c1c", "#374151"],
    textColor: "#d1d5db",
  },
  {
    n: "07", name: "PARASITE",  cat: "SABOTAGE", icon: "/cards/parasite.png",
    effect: "STEAL 7%",  sub: "OF THEIR POINTS", desc: "What they build, you take.",
    grad: ["#1c1000", "#78350f", "#b45309"],
    textColor: "#fde68a",
  },
  {
    n: "08", name: "SCAN",      cat: "INTEL",    icon: "/cards/scan.png",
    effect: "REVEAL",    sub: "HR CURVE",        desc: "See their full session data.",
    grad: ["#051e10", "#14532d", "#16a34a"],
    textColor: "#86efac",
  },
  {
    n: "09", name: "GHOST",     cat: "MASQUE",   icon: "/cards/ghost.png",
    effect: "HIDE",      sub: "YOUR SCORE",      desc: "Your activity looks flat to them.",
    grad: ["#1a0a3a", "#4c1d95", "#7c3aed"],
    textColor: "#c4b5fd",
  },
  {
    n: "10", name: "MIRAGE",    cat: "MASQUE",   icon: "/cards/mirage.png",
    effect: "FAKE ±15%", sub: "YOUR DISPLAY",    desc: "Let them react to a lie.",
    grad: ["#1f1000", "#7c2d12", "#ea580c"],
    textColor: "#fdba74",
  },
  {
    n: "11", name: "BLACKOUT",  cat: "MASQUE",   icon: "/cards/blackout.png",
    effect: "NO INFO",   sub: "UNTIL 19:00",     desc: "Blind both sides. Who dares?",
    grad: ["#000000", "#0a0a0a", "#111827"],
    textColor: "#9ca3af",
  },
  {
    n: "12", name: "COUNTER",   cat: "MOMENTUM", icon: "/cards/counter.png",
    effect: "+25%",      sub: "AFTER 18:00",     desc: "If losing at 18:00, strike back.",
    grad: ["#001f1a", "#134e4a", "#0d9488"],
    textColor: "#5eead4",
  },
];

export default function CardsShowcase() {
  return (
    <section style={{
      backgroundColor: "#0a0a0a",
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.018) 3px, rgba(255,255,255,0.018) 4px)",
      padding: "7rem 2rem",
    }}>
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
              Every morning, 3 cards are offered. Choose before 1 PM. No second chances.
            </p>
          </div>
        </InView>

        {/* Cards — horizontal format, real app style */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
          {cards.map((card, i) => (
            <InView key={card.name} delay={i * 30}>
              <div className="app-card" style={{
                position: "relative",
                borderRadius: "14px",
                overflow: "hidden",
                height: "160px",
                background: `linear-gradient(135deg, ${card.grad[0]} 0%, ${card.grad[1]} 50%, ${card.grad[2]} 100%)`,
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
              }}>
                {/* Horizontal scanlines — exactly like the app */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 3px)",
                  pointerEvents: "none",
                }} />

                {/* Left — text content */}
                <div style={{ position: "relative", zIndex: 2, flex: 1, padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {/* Top row */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.625rem" }}>
                      <span style={{ fontSize: "0.625rem", fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em" }}>Attax</span>
                      <span style={{ fontSize: "0.5625rem", fontWeight: 700, color: card.textColor, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.9 }}>{card.cat}</span>
                    </div>
                    <div style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "0.375rem" }}>{card.name}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: 800, color: card.textColor }}>{card.effect}</span>
                      <span style={{ fontSize: "0.5625rem", fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{card.sub}</span>
                    </div>
                  </div>
                  {/* Bottom */}
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.4, marginBottom: "0.25rem" }}>{card.desc}</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "rgba(255,255,255,0.12)", letterSpacing: "-0.02em", lineHeight: 1 }}>{card.n}</div>
                  </div>
                </div>

                {/* Right — 3D icon */}
                <div style={{ position: "relative", zIndex: 2, width: "140px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.75rem 1rem 0.75rem 0" }}>
                  <div style={{ width: "110px", height: "110px", position: "relative" }}>
                    <Image
                      src={card.icon}
                      alt={card.name}
                      fill
                      style={{ objectFit: "contain", filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.4))" }}
                    />
                  </div>
                </div>
              </div>
            </InView>
          ))}
        </div>

        {/* Bottom note */}
        <InView>
          <div style={{
            marginTop: "2.5rem",
            padding: "1.25rem 1.75rem",
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "10px",
            display: "flex", alignItems: "center", gap: "1.5rem",
          }}>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>Every day, the same 3 cards for everyone in your league</strong> — determined by the day and the room. Card effects apply instantly to session data.
            </p>
          </div>
        </InView>
      </div>
    </section>
  );
}
