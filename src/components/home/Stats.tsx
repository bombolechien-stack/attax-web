import InView from "@/components/InView";
import Image from "next/image";

export default function Stats() {
  return (
    <>
      {/* Community section — "Alone, you work out. Together, you stay motivated." */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <InView>
            <div style={{
              backgroundColor: "#0d0d0d", borderRadius: "28px",
              overflow: "hidden", position: "relative",
              display: "grid", gridTemplateColumns: "1fr 1fr",
              alignItems: "center", minHeight: "420px",
            }}>
              {/* Orange glow */}
              <div style={{
                position: "absolute", left: "-5%", top: "-20%",
                width: "600px", height: "500px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(252,95,43,0.14) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />

              {/* Text left */}
              <div style={{ position: "relative", zIndex: 1, padding: "4rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1.25rem" }}>
                  A new challenge
                </p>
                <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.035em", margin: "0 0 1.25rem", lineHeight: 1.1 }}>
                  Alone, you work out.<br />Together, you stay motivated.
                </h2>
                <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: "0 0 2.5rem", maxWidth: "360px" }}>
                  attax brings together motivated, curious, and passionate athletes. Find your community, share your achievements, and grow together.
                </p>
                {/* Stats */}
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                  {[
                    { title: "1 community", sub: "United around sport" },
                    { title: "Thousands", sub: "of athletes" },
                    { title: "1 shared energy", sub: "#gowithattax", accent: true },
                  ].map((s, i) => (
                    <div key={s.title} style={{
                      paddingLeft: i > 0 ? "2rem" : 0,
                      marginLeft: i > 0 ? "2rem" : 0,
                      borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    }}>
                      <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: s.accent ? "#FC5F2B" : "#ffffff", marginBottom: "3px" }}>{s.title}</div>
                      <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* App screenshot right */}
              <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "flex-end", padding: "2rem 3rem 0", height: "100%" }}>
                <Image
                  src="/images/app-screen.png"
                  alt="Attax app"
                  width={260}
                  height={520}
                  style={{ objectFit: "contain", display: "block" }}
                />
              </div>
            </div>
          </InView>
        </div>
      </section>

      {/* Why attax — 3 pillars */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <InView style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>
              Why attax
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1rem", lineHeight: 1.1 }}>
              Not just an app,<br />a source of motivation.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#777", maxWidth: "480px", margin: "0 auto", lineHeight: 1.65 }}>
              No more emotionless fitness apps. attax turns your workouts into a motivating and positive experience. Your energy becomes your driving force.
            </p>
          </InView>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "10px" }}>
            {[
              { icon: "🔥", title: "Lasting motivation", desc: "Sustainable motivation with every effort. attax celebrates every improvement and keeps you moving forward, one session at a time." },
              { icon: "🤝", title: "A community that lifts you up", desc: "Share your energy, find inspiration, and grow together. Because together, we go further — and we keep going longer." },
              { icon: "🎯", title: "Find your rhythm", desc: "Keep moving, progressing, and adjusting your pace to go further. Whether you're just starting out or pushing your limits, attax adapts to you." },
            ].map((p) => (
              <InView key={p.title}>
                <div className="premium-card" style={{ padding: "2.5rem", borderRadius: "20px", backgroundColor: "#ffffff", height: "100%" }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    backgroundColor: "#fff5eb", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "24px", marginBottom: "1.25rem",
                  }}>{p.icon}</div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.75rem", letterSpacing: "-0.02em" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
