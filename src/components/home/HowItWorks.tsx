import Image from "next/image";

const steps = [
  { n: "1", title: "Sync your training", desc: "Connect Apple Health or Google Health Connect. Every workout flows in automatically — no logging, no friction.", img: "/images/sport-shoe.png" },
  { n: "2", title: "Earn Activity Points", desc: "Heart rate zones score your effort in real time. Steps, sessions, intensity — all converted into your daily Activity Score.", img: "/images/sport-running-group.png" },
  { n: "3", title: "Pick your card", desc: "Every morning, choose one of 12 strategic cards before 1 PM. Boost yourself, sabotage your rival, or hide your score.", img: "/images/sport-weights.png" },
  { n: "4", title: "Win the daily duel", desc: "At 9:30 PM, the duel resolves. Your 7-day rolling score vs. your opponent's. The most active player wins the day.", img: "/images/sport-cycling.png" },
  { n: "5", title: "Climb the ranking", desc: "Win your league of 8 over 7 days. Earn League Points. Rise through Bronze, Silver, Gold, Platinum — one division at a time.", img: "/images/sport-basketball.png" },
];

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header — centered */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.05, margin: "0 0 0.875rem",
          }}>
            The game loop
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#888", lineHeight: 1.65, margin: 0 }}>
            Five steps. Every day. The most consistent athlete wins.
          </p>
        </div>

        {/* Cards — text BELOW image */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
          {steps.map((s) => (
            <div key={s.n} className="img-zoom" style={{ display: "flex", flexDirection: "column" }}>
              {/* Image card */}
              <div style={{
                borderRadius: "16px",
                overflow: "hidden",
                height: "320px",
                position: "relative",
                backgroundColor: "#f0f0f0",
                marginBottom: "1rem",
              }}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Number badge */}
                <div style={{
                  position: "absolute", top: "0.875rem", left: "0.875rem",
                  width: "24px", height: "24px", borderRadius: "6px",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", fontWeight: 700, color: "#0d0d0d",
                }}>
                  {s.n}
                </div>
              </div>
              {/* Text below card */}
              <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.375rem", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ fontSize: "0.8125rem", color: "#888", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
