import Image from "next/image";

export default function LifestyleSection() {
  return (
    <section style={{ backgroundColor: "#0d0d0d", padding: "9rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "5rem", maxWidth: "540px" }}>
          <span className="section-label-light" style={{ display: "block", marginBottom: "1.5rem" }}>For athletes</span>
          <h2 style={{
            fontSize: "clamp(2.5rem,4.5vw,4rem)", fontWeight: 800,
            color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.0, margin: 0,
          }}>
            Built for competitors.
          </h2>
        </div>

        {/* Three fighter panels */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {[
            { img: "/fighters/A2.png", label: "Challenger", rank: "II" },
            { img: "/fighters/B2.png", label: "Pro", rank: "III" },
            { img: "/fighters/A2.png", label: "Elite", rank: "I" },
          ].map((card, i) => (
            <div key={i} style={{
              position: "relative",
              aspectRatio: "3/4",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundColor: "#111",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              {/* Fighter */}
              <div style={{ position: "absolute", bottom: 0, left: "10%", right: "10%", height: "85%", zIndex: 2 }}>
                <Image
                  src={card.img}
                  alt={card.label}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "bottom center",
                    filter: i === 1 ? "brightness(0.9) saturate(0.7)" : "brightness(0.85) saturate(0.5) contrast(1.1)",
                  }}
                />
              </div>
              {/* Gradient */}
              <div style={{ position: "absolute", inset: 0, zIndex: 3, background: "linear-gradient(to bottom, transparent 40%, rgba(6,6,6,0.95) 100%)" }} />
              {/* Rank */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 4, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>RANK</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>{card.label} {card.rank}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div style={{ marginTop: "5rem", paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "clamp(1.125rem,2vw,1.5rem)", fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "-0.025em", margin: 0 }}>
            Whether you run, lift, swim or cycle —<br />your effort becomes your power.
          </p>
          <div style={{ display: "flex", gap: "10px", flexShrink: 0, marginLeft: "3rem" }}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.875rem",
              padding: "12px 22px", borderRadius: "999px", textDecoration: "none",
            }}>
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: "0.875rem",
              padding: "12px 22px", borderRadius: "999px", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.12)",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z"/></svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
