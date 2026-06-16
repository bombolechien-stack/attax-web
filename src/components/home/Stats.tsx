import InView from "@/components/InView";
import Image from "next/image";

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Trust line */}
        <InView style={{ display: "flex", justifyContent: "center", marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ display: "flex" }}>
              {["🏃","🚴","🏋️","⛹️"].map((e, i) => (
                <div key={i} style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  backgroundColor: i % 2 === 0 ? "#fff5eb" : "#f0f0f0",
                  border: "2px solid #fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "16px", marginLeft: i > 0 ? "-10px" : 0,
                  zIndex: 4 - i, position: "relative",
                }}>{e}</div>
              ))}
            </div>
            <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "#555" }}>
              Trusted by athletes in 50+ countries worldwide
            </span>
          </div>
        </InView>

        {/* 2-column grid */}
        <InView>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>

            {/* Dark community card */}
            <div style={{
              backgroundColor: "#0d0d0d", borderRadius: "20px",
              padding: "3rem", display: "flex", flexDirection: "column",
              justifyContent: "space-between", minHeight: "440px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", right: "-20%", top: "-20%",
                width: "400px", height: "400px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(252,95,43,0.2) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />
              <div style={{ position: "relative" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Community</p>
                <h2 style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.035em", lineHeight: 1.15, margin: "0 0 1rem" }}>
                  Alone, you work out.<br />
                  <em style={{ fontStyle: "normal", color: "#FC5F2B" }}>Together, you stay motivated.</em>
                </h2>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                  attax brings together motivated, curious, and passionate athletes.
                </p>
              </div>
              <div style={{ display: "flex", gap: "2.5rem" }}>
                {[{ n: "1", label: "community" }, { n: "50+", label: "countries" }, { n: "∞", label: "shared energy" }].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>{s.n}</div>
                    <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo card */}
            <div style={{ borderRadius: "20px", overflow: "hidden", minHeight: "440px", position: "relative" }}>
              <Image
                src="/images/warmup.jpg"
                alt="Athlete warming up"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </InView>

        {/* 3-photo strip below */}
        <InView delay={100}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "10px" }}>
            {[
              { src: "/images/cycling-race.jpg", label: "Cycling" },
              { src: "/images/strength.jpg", label: "Strength" },
              { src: "/images/hero-boxing-2.jpg", label: "Combat" },
            ].map((p, i) => (
              <div key={p.src} style={{ borderRadius: "20px", overflow: "hidden", height: "220px", position: "relative" }}>
                <Image src={p.src} alt={p.label} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                }} />
                <span style={{
                  position: "absolute", bottom: "1rem", left: "1rem",
                  fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.6)", textTransform: "uppercase",
                }}>{p.label}</span>
              </div>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
}
