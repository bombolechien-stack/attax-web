import InView from "@/components/InView";

const quotes = [
  {
    text: "I've tried every fitness app out there. attax is the first one that made me actually look forward to Monday.",
    name: "Lucas M.",
    loc: "Paris, France",
    sport: "Running",
  },
  {
    text: "The consistency tracking is addictive. I started moving more just to stay on track. That's exactly the point.",
    name: "Sarah K.",
    loc: "London, UK",
    sport: "CrossFit",
  },
  {
    text: "My mindset shifted from 'I have to work out' to 'I want to earn my points today'. Big difference.",
    name: "Thomas R.",
    loc: "Bordeaux, France",
    sport: "Cycling",
  },
];

export default function Community() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <InView style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", marginBottom: "4rem" }}>
          <div>
            <p className="section-label" style={{ margin: "0 0 1.25rem" }}>Community</p>
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0,
            }}>
              What athletes<br />are saying.
            </h2>
          </div>
          <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
            A community that lifts you up — athletes from everywhere sharing one energy.
          </p>
        </InView>

        <hr className="rule" />

        {/* Testimonials — editorial list */}
        {quotes.map((q, i) => (
          <InView key={q.name} delay={i * 60} blur={false}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr auto",
              gap: "3rem",
              alignItems: "center",
              padding: "3rem 0",
              borderBottom: "1px solid #f0f0f0",
            }}>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "4px" }}>{q.name}</div>
                <div style={{ fontSize: "0.8125rem", color: "#aaa" }}>{q.loc}</div>
              </div>
              <p style={{ fontSize: "1.125rem", color: "#333", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                &ldquo;{q.text}&rdquo;
              </p>
              <div style={{
                fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em",
                color: "#999", textTransform: "uppercase", whiteSpace: "nowrap",
              }}>{q.sport}</div>
            </div>
          </InView>
        ))}

        {/* Social row */}
        <InView style={{ marginTop: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#aaa", textTransform: "uppercase", margin: "0 0 0.5rem" }}>#gowithattax</p>
            <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.03em", margin: 0, lineHeight: 1.1 }}>
              A community on the move.
            </h3>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { label: "Instagram", href: "https://instagram.com/attax.app" },
              { label: "TikTok", href: "https://tiktok.com/@attax.app" },
              { label: "YouTube", href: "https://youtube.com/@attax" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                fontSize: "0.875rem", fontWeight: 600, color: "#0d0d0d",
                padding: "9px 20px", borderRadius: "999px",
                border: "1px solid #e0e0e0", backgroundColor: "#fff",
                textDecoration: "none", transition: "background 0.2s, border-color 0.2s",
              }}>{s.label}</a>
            ))}
          </div>
        </InView>

      </div>
    </section>
  );
}
