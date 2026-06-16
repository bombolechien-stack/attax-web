import InView from "@/components/InView";
import Image from "next/image";

export default function Stats() {
  return (
    <>
      {/* ── Big stat numbers ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <InView>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr", gap: 0, alignItems: "center" }}>
              {[
                { num: "8", label: "players per league", sub: "7 days. One winner." },
                null,
                { num: "12", label: "strategic cards", sub: "Boost, sabotage, deceive." },
                null,
                { num: "4", label: "divisions", sub: "Bronze to Platinum." },
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

      {/* ── Community — light block with image ── */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "2rem 2rem 0" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <InView>
            <div style={{
              borderRadius: "28px",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "500px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ffffff",
            }}>
              {/* Left text */}
              <div style={{ padding: "4.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="section-label" style={{ margin: "0 0 1.5rem" }}>The competition</p>
                <h2 style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800,
                  color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.08,
                  margin: "0 0 1.5rem",
                }}>
                  Alone, you train.<br />
                  With attax, you fight.
                </h2>
                <p style={{ fontSize: "1rem", color: "#777", lineHeight: 1.75, margin: "0 0 2.5rem", maxWidth: "340px" }}>
                  Every day, attax matches you against a real opponent. Your workouts become your weapon — the more you move, the stronger your score. Win the day. Win the league.
                </p>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-dark-primary" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px", width: "fit-content",
                  backgroundColor: "#0d0d0d", color: "#fff",
                  fontWeight: 700, fontSize: "0.9375rem",
                  padding: "13px 28px", borderRadius: "999px", textDecoration: "none",
                }}>Download free</a>
              </div>

              {/* Right — app screenshot */}
              <div style={{ backgroundColor: "#f7f7f7", display: "flex", justifyContent: "center", alignItems: "flex-end", overflow: "hidden" }}>
                <Image
                  src="/images/app-screen.png"
                  alt="Attax app"
                  width={280}
                  height={520}
                  style={{ objectFit: "contain", display: "block" }}
                />
              </div>
            </div>
          </InView>
        </div>
      </section>

      {/* ── Why attax — 3 cols ── */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <InView style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", gap: "4rem" }}>
            <div style={{ flex: 1 }}>
              <p className="section-label" style={{ margin: "0 0 1.25rem" }}>Why attax</p>
              <h2 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
                color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0,
              }}>
                The game that makes<br />you actually move.
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "#777", lineHeight: 1.75, maxWidth: "320px", margin: 0, flex: "0 0 320px" }}>
              No more empty streaks or pointless badges. attax creates real daily stakes — a live opponent, a real score, a winner every evening.
            </p>
          </InView>

          <hr className="rule" style={{ marginBottom: "3rem" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0" }}>
            {[
              { n: "01", title: "Real stakes, every day", desc: "A 1v1 duel resolves every evening at 9:30 PM. Your workouts decided the outcome — not your app usage. Show up or lose ground." },
              { n: "02", title: "Strategy on top of effort", desc: "12 cards add a layer of tactics to raw fitness. Boost your score, sabotage a rival, hide your activity, or reveal theirs. Skill meets sweat." },
              { n: "03", title: "A rank that means something", desc: "Divisions from Bronze to Platinum, with a hidden MMR ensuring every match is competitive. Earn your spot or get knocked down." },
            ].map((p, i) => (
              <InView key={p.n} delay={i * 80}>
                <div style={{
                  padding: "2.5rem 2.5rem 2.5rem 0",
                  borderLeft: i > 0 ? "1px solid #e8e8e8" : "none",
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
