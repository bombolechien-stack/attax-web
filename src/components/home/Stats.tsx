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

        {/* App screenshots — the real UI */}
        <InView>
          <div style={{
            backgroundColor: "#f7f7f7", borderRadius: "20px",
            padding: "3rem 2rem",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem",
            marginBottom: "10px",
          }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: 0 }}>
              The app
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: 0, lineHeight: 1.1, textAlign: "center" }}>
              Your workouts, tracked automatically.
            </h2>
            <p style={{ fontSize: "1rem", color: "#777", maxWidth: "440px", lineHeight: 1.65, margin: 0, textAlign: "center" }}>
              Connect Apple Health or Google Health Connect and attax does the rest — no manual logging, ever.
            </p>
            <Image
              src="/images/app-screenshots.png"
              alt="Attax app screenshots"
              width={800}
              height={520}
              style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "480px" }}
            />
          </div>
        </InView>

        {/* Community + sport photo grid */}
        <InView delay={100}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {/* Dark community card */}
            <div style={{
              backgroundColor: "#0d0d0d", borderRadius: "20px",
              padding: "3rem", display: "flex", flexDirection: "column",
              justifyContent: "space-between", minHeight: "360px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", right: "-20%", top: "-20%",
                width: "400px", height: "400px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(252,95,43,0.18) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />
              <div style={{ position: "relative" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Community</p>
                <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.035em", lineHeight: 1.15, margin: "0 0 1rem" }}>
                  Alone, you work out.<br />
                  <em style={{ fontStyle: "normal", color: "#FC5F2B" }}>Together, you stay motivated.</em>
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
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

            {/* Sport photos grid */}
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "10px" }}>
              <div style={{ borderRadius: "16px", overflow: "hidden", position: "relative" }}>
                <Image src="/images/sport-running-group.png" alt="Running" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ borderRadius: "16px", overflow: "hidden", position: "relative" }}>
                <Image src="/images/sport-cycling.png" alt="Cycling" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
