import InView from "@/components/InView";
import Image from "next/image";

export default function Download() {
  return (
    <section style={{ backgroundColor: "#f7f7f7", padding: "2rem 2rem 7rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <InView>
          <div className="dark-card" style={{
            backgroundColor: "#0d0d0d",
            borderRadius: "28px",
            overflow: "hidden",
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "stretch",
            minHeight: "440px",
          }}>
            {/* Grain */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 1, opacity: 0.3, pointerEvents: "none",
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
            }} />

            {/* Text left */}
            <div style={{ position: "relative", zIndex: 2, padding: "5rem 4.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p className="section-label-light" style={{ margin: "0 0 1.5rem" }}>Join the adventure</p>
              <h2 style={{
                fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", fontWeight: 800,
                color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.02,
                margin: "0 0 1.25rem",
              }}>
                Start your sport<br />now.
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: "0 0 3rem", maxWidth: "360px" }}>
                Download the attax app to get into sport and stay motivated every day with us. Free to download.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: "#ffffff", color: "#0d0d0d",
                  fontWeight: 700, fontSize: "0.9375rem",
                  padding: "14px 28px", borderRadius: "999px", textDecoration: "none",
                }}>
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: "rgba(255,255,255,0.06)", color: "#fff",
                  fontWeight: 600, fontSize: "0.9375rem",
                  padding: "14px 28px", borderRadius: "999px",
                  textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)",
                }}>Google Play</a>
              </div>
              <p style={{ marginTop: "1.75rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.02em" }}>
                Free · iOS 15+ · Android 8.0+
              </p>
            </div>

            {/* Phone right */}
            <div style={{ position: "relative", zIndex: 2, padding: "2rem 3.5rem 0 0", display: "flex", alignItems: "flex-end" }}>
              <Image
                src="/images/download-phone.png"
                alt="Download Attax"
                width={300}
                height={400}
                style={{ objectFit: "contain", display: "block" }}
              />
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
