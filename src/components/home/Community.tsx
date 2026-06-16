import InView from "@/components/InView";

const reviews = [
  {
    text: "I've tried every fitness app out there. attax is the first one that made me actually look forward to Monday.",
    name: "Lucas M.", loc: "Paris, France", sport: "Running",
  },
  {
    text: "The consistency tracking is addictive. I started moving more just to stay on track. That's exactly the point.",
    name: "Sarah K.", loc: "London, UK", sport: "CrossFit",
  },
  {
    text: "My mindset shifted from 'I have to work out' to 'I want to earn my points today'. Big difference.",
    name: "Thomas R.", loc: "Bordeaux, France", sport: "Cycling",
  },
];

export default function Community() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Section header */}
        <InView style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>
            Community
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1rem", lineHeight: 1.1 }}>
            What athletes are saying
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#777", maxWidth: "380px", margin: "0 auto", lineHeight: 1.65 }}>
            A community that lifts you up.
          </p>
        </InView>

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "10px", marginBottom: "4rem" }}>
          {reviews.map((r, i) => (
            <InView key={r.name} delay={i * 80} className="premium-card">
              <div style={{
                backgroundColor: "#f7f7f7", borderRadius: "20px",
                padding: "2rem 2rem 2.25rem",
                height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }}>
                  {[1,2,3,4,5].map(j => (
                    <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#FC5F2B">
                      <path d="M7 1.5l1.4 2.8 3.1.45-2.25 2.2.53 3.1L7 8.45l-2.78 1.6.53-3.1L2.5 4.75l3.1-.45z"/>
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: "1rem", color: "#1a1a1a", lineHeight: 1.7, margin: "0 0 1.5rem", fontStyle: "italic", flex: 1 }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d" }}>{r.name}</div>
                    <div style={{ fontSize: "0.8125rem", color: "#aaa", marginTop: "2px" }}>{r.loc}</div>
                  </div>
                  <span style={{
                    fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em",
                    padding: "4px 10px", borderRadius: "999px",
                    backgroundColor: "#fff5eb", color: "#FC5F2B", textTransform: "uppercase",
                  }}>{r.sport}</span>
                </div>
              </div>
            </InView>
          ))}
        </div>

        {/* Social CTA */}
        <InView style={{ textAlign: "center" }}>
          <div style={{
            backgroundColor: "#f7f7f7", borderRadius: "20px",
            padding: "3rem 2rem",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem",
          }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: 0 }}>
              #gowithattax
            </p>
            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.03em", margin: 0, lineHeight: 1.1 }}>
              A community on the move
            </h3>
            <p style={{ fontSize: "1rem", color: "#777", maxWidth: "420px", lineHeight: 1.65, margin: 0 }}>
              On our social channels, we share challenges, tips, and stories from everyday athletes. Get motivated with us.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "0.5rem" }}>
              {[
                { label: "Instagram", href: "https://instagram.com" },
                { label: "TikTok", href: "https://tiktok.com" },
                { label: "YouTube", href: "https://youtube.com" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: "0.875rem", fontWeight: 600, color: "#0d0d0d",
                  padding: "8px 18px", borderRadius: "999px",
                  border: "1px solid #e0e0e0", backgroundColor: "#fff",
                  textDecoration: "none",
                }}>{s.label}</a>
              ))}
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
