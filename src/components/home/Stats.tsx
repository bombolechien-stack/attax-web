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

        {/* Community + App screenshot */}
        <InView>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {/* Dark community card */}
            <div style={{
              backgroundColor: "#0d0d0d", borderRadius: "20px",
              padding: "3rem", display: "flex", flexDirection: "column",
              justifyContent: "space-between", minHeight: "420px",
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
                {[
                  { n: "1", label: "community" },
                  { n: "50+", label: "countries" },
                  { n: "∞", label: "shared energy" },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>{s.n}</div>
                    <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* App screenshot card */}
            <div style={{
              backgroundColor: "#f7f7f7", borderRadius: "20px",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "2rem", minHeight: "420px", overflow: "hidden",
            }}>
              <Image
                src="https://attax.app/wp-content/uploads/2025/10/budyhalf-e1762375408962-1.webp"
                alt="Attax app interface"
                width={500}
                height={400}
                style={{ objectFit: "contain", maxHeight: "380px", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))" }}
              />
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
