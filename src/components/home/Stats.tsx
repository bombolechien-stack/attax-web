import InView from "@/components/InView";
import Image from "next/image";

export default function Stats() {
  return (
    <>
      {/* ── Big stat numbers ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem 0" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <InView>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr", gap: 0, alignItems: "center" }}>
              {[
                { num: "1", label: "community", sub: "United around sport" },
                null,
                { num: "50+", label: "countries", sub: "Athletes worldwide" },
                null,
                { num: "∞", label: "shared energy", sub: "#gowithattax", accent: true },
              ].map((s, i) =>
                s === null ? (
                  <div key={i} style={{ width: "1px", height: "80px", backgroundColor: "#e8e8e8", margin: "0 auto" }} />
                ) : (
                  <div key={i} style={{ padding: "2rem 3rem", textAlign: "center" }}>
                    <div className="stat-num" style={{ color: "#0d0d0d", marginBottom: "0.5rem" }}>{s.num}</div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.25rem", letterSpacing: "-0.01em" }}>{s.label}</div>
                    <div style={{ fontSize: "0.8125rem", color: "#aaa" }}>{s.sub}</div>
                  </div>
                )
              )}
            </div>
          </InView>
          <hr className="rule" style={{ marginTop: "4rem" }} />
        </div>
      </section>

      {/* ── Community dark block ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "2rem 2rem 0" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <InView>
            <div className="dark-card" style={{
              backgroundColor: "#0d0d0d",
              borderRadius: "28px",
              overflow: "hidden",
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "520px",
            }}>
              {/* Grain */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 1, opacity: 0.3, pointerEvents: "none",
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
              }} />

              {/* Left text */}
              <div style={{ position: "relative", zIndex: 2, padding: "4.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="section-label-light" style={{ margin: "0 0 1.5rem" }}>A new challenge</p>
                <h2 style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800,
                  color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1.08,
                  margin: "0 0 1.5rem",
                }}>
                  Alone, you work out.<br />
                  <span style={{ color: "#FC5F2B" }}>Together, you stay motivated.</span>
                </h2>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: "0 0 3rem", maxWidth: "340px" }}>
                  attax brings together motivated, curious, and passionate athletes. Find your community, share your achievements, and grow together.
                </p>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px", width: "fit-content",
                  backgroundColor: "#ffffff", color: "#0d0d0d",
                  fontWeight: 700, fontSize: "0.9375rem",
                  padding: "13px 28px", borderRadius: "999px", textDecoration: "none",
                }}>Download free</a>
              </div>

              {/* Right — app screenshot */}
              <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center", alignItems: "flex-end", paddingBottom: 0 }}>
                <Image
                  src="/images/app-screen.png"
                  alt="Attax app"
                  width={280}
                  height={560}
                  style={{ objectFit: "contain", display: "block" }}
                />
              </div>
            </div>
          </InView>
        </div>
      </section>

      {/* ── Why attax — editorial 3 cols ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <InView style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", gap: "4rem" }}>
            <div style={{ flex: 1 }}>
              <p className="section-label" style={{ margin: "0 0 1.25rem" }}>Why attax</p>
              <h2 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
                color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02,
                margin: 0,
              }}>
                Not just an app,<br />a source of motivation.
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "#777", lineHeight: 1.75, maxWidth: "320px", margin: 0, flex: "0 0 320px" }}>
              No more emotionless fitness apps. attax turns your workouts into a motivating and positive experience.
            </p>
          </InView>

          <hr className="rule" style={{ marginBottom: "3rem" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0" }}>
            {[
              { n: "01", title: "Lasting motivation", desc: "Sustainable motivation with every effort. attax celebrates every improvement and keeps you moving forward." },
              { n: "02", title: "A community that lifts you up", desc: "Share your energy, find inspiration, and grow together. Because together, we go further — and we keep going longer." },
              { n: "03", title: "Find your rhythm", desc: "Keep moving, progressing, and adjusting your pace. Whether starting out or pushing limits, attax adapts to you." },
            ].map((p, i) => (
              <InView key={p.n} delay={i * 80}>
                <div style={{
                  padding: "2.5rem 2.5rem 2.5rem 0",
                  borderLeft: i > 0 ? "1px solid #f0f0f0" : "none",
                  paddingLeft: i > 0 ? "2.5rem" : 0,
                }}>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", textTransform: "uppercase", marginBottom: "1.5rem" }}>{p.n}</div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", letterSpacing: "-0.025em", margin: "0 0 0.875rem", lineHeight: 1.2 }}>{p.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#777", lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
