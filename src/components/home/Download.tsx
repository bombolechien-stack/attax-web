import InView from "@/components/InView";
import Image from "next/image";

export default function Download() {
  return (
    <section style={{ backgroundColor: "#f7f7f7", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <InView>
          <div style={{
            position: "relative", backgroundColor: "#0d0d0d",
            borderRadius: "28px", overflow: "hidden",
            display: "grid", gridTemplateColumns: "1fr 1fr",
            minHeight: "420px",
          }}>
            {/* Glow */}
            <div className="glow-pulse" style={{
              position: "absolute", top: "-30%", left: "30%",
              transform: "translateX(-50%)",
              width: "600px", height: "500px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(252,95,43,0.22) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />
            {/* Grid pattern */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />

            {/* Left — text */}
            <div style={{ position: "relative", zIndex: 1, padding: "4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1.25rem" }}>
                Join the adventure
              </p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", margin: "0 0 1rem", lineHeight: 1.05 }}>
                Ready to push<br />your limits?
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: "0 0 2.5rem", maxWidth: "340px" }}>
                Discover attax and join a community that moves. Free to download — start your journey today.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: "#FC5F2B", color: "#ffffff",
                  fontWeight: 700, fontSize: "0.9375rem",
                  padding: "14px 28px", borderRadius: "999px",
                  textDecoration: "none",
                }}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: "rgba(255,255,255,0.07)", color: "#ffffff",
                  fontWeight: 600, fontSize: "0.9375rem",
                  padding: "14px 28px", borderRadius: "999px",
                  textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)",
                }}>
                  Google Play
                </a>
              </div>
              <p style={{ marginTop: "1.5rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.2)" }}>
                Free · iOS 15+ · Android 8.0+
              </p>
            </div>

            {/* Right — app image */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
              <Image
                src="https://attax.app/wp-content/uploads/2025/10/budyscreen-e1760880076657-1-515x1024.png"
                alt="Download Attax"
                width={280}
                height={520}
                style={{ objectFit: "contain", objectPosition: "bottom", filter: "drop-shadow(0 0 60px rgba(252,95,43,0.15))" }}
              />
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
