import Image from "next/image";

export default function CombatScreen() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "0 2rem clamp(8rem, 14vh, 12rem)" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>

        {/* The combat UI — wide, no phone frame, like Apple product shots */}
        <div style={{
          position: "relative",
          backgroundColor: "#080808",
          borderRadius: "20px",
          overflow: "hidden",
          aspectRatio: "16/9",
          boxShadow: "0 40px 100px rgba(0,0,0,0.15), 0 8px 30px rgba(0,0,0,0.08)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          {/* Scanlines */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)",
          }} />

          {/* Left player */}
          <div style={{ position: "absolute", left: "5%", top: 0, bottom: 0, width: "28%", zIndex: 2 }}>
            <Image src="/fighters/A2.png" alt="Fighter" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 30px rgba(59,130,246,0.5))" }} />
          </div>

          {/* Right player — mirrored */}
          <div style={{ position: "absolute", right: "5%", top: 0, bottom: 0, width: "28%", zIndex: 2, transform: "scaleX(-1)" }}>
            <Image src="/fighters/B2.png" alt="Opponent" fill style={{ objectFit: "contain", objectPosition: "bottom center", filter: "drop-shadow(0 0 30px rgba(239,68,68,0.42))" }} />
          </div>

          {/* Floor glows */}
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "40%", height: "50%", background: "radial-gradient(ellipse at 20% 100%, rgba(59,130,246,0.2) 0%, transparent 70%)", zIndex: 1 }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: "40%", height: "50%", background: "radial-gradient(ellipse at 80% 100%, rgba(239,68,68,0.18) 0%, transparent 70%)", zIndex: 1 }} />

          {/* Center HUD */}
          <div style={{
            position: "absolute", left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3, textAlign: "center",
            width: "38%",
          }}>
            {/* Live badge */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginBottom: "1.5rem" }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
              <span style={{ fontSize: "0.625rem", fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em" }}>LIVE · DAY 4 / 7</span>
            </div>

            {/* Scores */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "0.75rem" }}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.5rem", fontWeight: 700, color: "#60a5fa", letterSpacing: "0.1em", marginBottom: "2px" }}>YOU</div>
                <div style={{ fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.05em", lineHeight: 1 }}>2 847</div>
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>VS</div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.5rem", fontWeight: 700, color: "#f87171", letterSpacing: "0.1em", marginBottom: "2px" }}>ALEX</div>
                <div style={{ fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)", fontWeight: 900, color: "rgba(255,255,255,0.4)", letterSpacing: "-0.05em", lineHeight: 1 }}>2 231</div>
              </div>
            </div>

            {/* Score bar */}
            <div style={{ height: "3px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.05)", overflow: "hidden", marginBottom: "1.25rem" }}>
              <div style={{ width: "56%", height: "100%", background: "linear-gradient(90deg, #1d4ed8, #60a5fa)" }} />
            </div>

            {/* Timer */}
            <div>
              <div style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.22)", letterSpacing: "0.1em", marginBottom: "4px" }}>RESOLVES TONIGHT</div>
              <div style={{ fontSize: "clamp(1.25rem, 2.5vw, 2.5rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em" }}>21:30</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
