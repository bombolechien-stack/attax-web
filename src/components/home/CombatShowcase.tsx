import Image from "next/image";

export default function CombatShowcase() {
  return (
    <section style={{
      backgroundColor: "#050505",
      padding: "0 2rem 8rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      {/* Short headline */}
      <p style={{
        fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
        color: "rgba(255,255,255,0.25)",
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        margin: "0 0 4rem",
        textAlign: "center",
      }}>
        The combat screen
      </p>

      {/* Giant phone */}
      <div style={{
        position: "relative",
        width: "clamp(300px, 30vw, 420px)",
      }}>
        {/* Blue glow */}
        <div style={{
          position: "absolute", top: "20%", left: "-30%",
          width: "160%", height: "60%",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)",
          zIndex: 0, pointerEvents: "none",
        }} />
        {/* Red glow */}
        <div style={{
          position: "absolute", top: "45%", left: "-20%",
          width: "140%", height: "50%",
          background: "radial-gradient(ellipse, rgba(239,68,68,0.13) 0%, transparent 70%)",
          zIndex: 0, pointerEvents: "none",
        }} />

        {/* Phone shell */}
        <div style={{
          position: "relative", zIndex: 1,
          width: "100%",
          paddingBottom: "208%",
          borderRadius: "clamp(42px, 5vw, 60px)",
          border: "clamp(10px, 1.2vw, 14px) solid rgba(255,255,255,0.12)",
          backgroundColor: "#040404",
          overflow: "hidden",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 80px 160px rgba(0,0,0,0.9), 0 0 100px rgba(59,130,246,0.06)",
        }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>

            {/* Notch */}
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "35%", height: "26px", backgroundColor: "#040404", borderRadius: "0 0 16px 16px", zIndex: 10 }} />

            {/* Status */}
            <div style={{ padding: "9px 16px 0", display: "flex", justifyContent: "space-between", flexShrink: 0, zIndex: 5 }}>
              <span style={{ fontSize: "0.5625rem", fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>9:41</span>
              <div style={{ width: "14px", height: "7px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "2px", position: "relative" }}>
                <div style={{ position: "absolute", inset: "1.5px", right: "3px", backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "0.5px" }} />
              </div>
            </div>

            {/* LIVE + day */}
            <div style={{ padding: "6px 16px 4px", display: "flex", justifyContent: "space-between", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
                <span style={{ fontSize: "0.5rem", fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>LIVE</span>
              </div>
              <span style={{ fontSize: "0.5rem", fontWeight: 700, color: "rgba(255,255,255,0.28)" }}>Day 4 / 7</span>
            </div>

            {/* Scores */}
            <div style={{ padding: "0 16px 6px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexShrink: 0 }}>
              <div>
                <div style={{ fontSize: "0.4375rem", fontWeight: 800, letterSpacing: "0.12em", color: "#60a5fa", marginBottom: "2px" }}>YOU</div>
                <div style={{ fontSize: "clamp(1.375rem, 2.2vw, 2rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1 }}>2 847</div>
              </div>
              <div style={{ fontSize: "0.625rem", fontWeight: 900, color: "rgba(255,255,255,0.1)" }}>VS</div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.4375rem", fontWeight: 800, letterSpacing: "0.12em", color: "#f87171", marginBottom: "2px" }}>ALEX</div>
                <div style={{ fontSize: "clamp(1.375rem, 2.2vw, 2rem)", fontWeight: 900, color: "rgba(255,255,255,0.4)", letterSpacing: "-0.04em", lineHeight: 1 }}>2 231</div>
              </div>
            </div>

            {/* Score bar */}
            <div style={{ margin: "0 16px 8px", height: "3px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.04)", overflow: "hidden", flexShrink: 0 }}>
              <div style={{ width: "56%", height: "100%", background: "linear-gradient(90deg, #1d4ed8, #60a5fa)" }} />
            </div>

            {/* Fighters — main visual */}
            <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "52%", height: "100%", zIndex: 2 }}>
                <Image src="/fighters/A2.png" alt="Fighter" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 18px rgba(59,130,246,0.55))" }} />
              </div>
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "52%", height: "100%", zIndex: 2, transform: "scaleX(-1)" }}>
                <Image src="/fighters/B2.png" alt="Opponent" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 18px rgba(239,68,68,0.45))" }} />
              </div>
              {/* Floor glows */}
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "50%", height: "35%", background: "radial-gradient(ellipse at 30% 100%, rgba(59,130,246,0.32) 0%, transparent 70%)", zIndex: 1 }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "50%", height: "35%", background: "radial-gradient(ellipse at 70% 100%, rgba(239,68,68,0.26) 0%, transparent 70%)", zIndex: 1 }} />
              {/* Floor fade */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "25%", background: "linear-gradient(to top, rgba(4,4,4,0.6), transparent)", zIndex: 3 }} />
            </div>

            {/* Bottom timer + day dots */}
            <div style={{
              flexShrink: 0, padding: "8px 16px 14px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <div style={{ fontSize: "0.4375rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>RESOLVES</div>
                <div style={{ fontSize: "clamp(0.875rem, 1.3vw, 1.125rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>21:30</div>
              </div>
              <div style={{ display: "flex", gap: "2px" }}>
                {[1,2,3,4,5,6,7].map(d => (
                  <div key={d} style={{ width: "14px", height: "2.5px", borderRadius: "1.5px", backgroundColor: d <= 4 ? "#3b82f6" : "rgba(255,255,255,0.08)" }} />
                ))}
              </div>
              <div style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "5px 9px", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "4px" }}>
                <div style={{ width: "14px", height: "14px", borderRadius: "3px", background: "linear-gradient(135deg,#1e3a8a,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "0.4375rem", color: "#fff", fontWeight: 800 }}>S</span>
                </div>
                <span style={{ fontSize: "0.4375rem", fontWeight: 700, color: "rgba(255,255,255,0.45)" }}>SPIKE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Below phone — tagline */}
      <p style={{
        marginTop: "4rem",
        fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
        fontWeight: 800,
        color: "rgba(255,255,255,0.55)",
        letterSpacing: "-0.04em",
        textAlign: "center",
        lineHeight: 1.2,
      }}>
        Le premier jeu de combat<br />alimenté par ton activité réelle.
      </p>
    </section>
  );
}
