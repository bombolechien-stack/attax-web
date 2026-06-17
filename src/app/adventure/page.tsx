"use client";

import Image from "next/image";
import PageNavbar from "@/components/PageNavbar";
import { useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, slideLeft, slideRight, fadeIn, scaleIn } from "@/hooks/useInView";

function TimelineRow({ item }: { item: { n: string; year: string; title: string; description: string } }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className="adv-timeline-row" style={{ display: "grid", gridTemplateColumns: "80px 180px 1fr", gap: "2rem", alignItems: "start", padding: "2.5rem 0", borderBottom: "1px solid #f0f0f0" }}>
      <div style={{ ...fadeIn(visible, 0), fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", paddingTop: "4px" }}>{item.n}</div>
      <div style={slideLeft(visible, 60)}>
        <div className="adv-timeline-year" style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", color: "#999", textTransform: "uppercase", marginBottom: "0.5rem" }}>{item.year}</div>
        <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.3 }}>{item.title}</h3>
      </div>
      <p style={{ ...fadeUp(visible, 130), fontSize: "0.9375rem", color: "#666", lineHeight: 1.8, margin: 0 }}>{item.description}</p>
    </div>
  );
}

function ValueItem({ item }: { item: { n: string; title: string; description: string } }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "1.5rem", alignItems: "start", padding: "2rem 0", borderBottom: "1px solid #eaeaea" }}>
      <div style={{ ...fadeIn(visible, 0), fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", paddingTop: "3px" }}>{item.n}</div>
      <div style={fadeUp(visible, 60)}>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>{item.title}</h3>
        <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{item.description}</p>
      </div>
    </div>
  );
}

export default function AdventurePage() {
  const t = useT();
  const a = t.adventure;

  const { ref: storyHeaderRef, visible: storyHeaderVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: manifestoRef, visible: manifestoVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: valuesHeaderRef, visible: valuesHeaderVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: valuesImgRef, visible: valuesImgVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <>
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{ position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px", minHeight: "calc(100vh - 24px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Image src="/images/cycling-race.jpg" alt="Cycling is Attax" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.72) 55%, rgba(10,10,10,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)" }} />
          <PageNavbar />
          <div className="hero-text-box" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem 4rem 3rem", maxWidth: "620px" }}>
            <div style={{ marginBottom: "1.75rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{a.hero_label}</span>
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 5.5vw, 4.75rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.5rem" }}>
              {a.h1[0]}<br /><em style={{ fontStyle: "normal" }}>{a.h1[1]}</em>
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: "0 0 2.5rem", maxWidth: "420px" }}>{a.subtitle}</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none" }}>
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                {a.cta_download}
              </a>
              <a href="/contact" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>{a.cta_contact}</a>
            </div>
          </div>
          <div className="hero-stats" style={{ position: "relative", zIndex: 3, display: "flex", padding: "0 4rem clamp(2.5rem, 4vh, 4rem)" }}>
            {a.stats.map((s, i) => (
              <div key={i} style={{ paddingLeft: i > 0 ? "2.5rem" : 0, marginLeft: i > 0 ? "2.5rem" : 0, borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "3px" }}>{s.title}</div>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="adv-section" style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div ref={storyHeaderRef} className="adv-story-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", marginBottom: "4rem" }}>
            <div>
              <p className="section-label" style={{ ...fadeUp(storyHeaderVisible, 0), margin: "0 0 1.25rem" }}>{a.story_label}</p>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0 }}>
                <div style={{ overflow: "hidden" }}><span style={clipReveal(storyHeaderVisible, 80)}>{a.story_h2[0]}</span></div>
                <div style={{ overflow: "hidden" }}><span style={clipReveal(storyHeaderVisible, 200)}>{a.story_h2[1]}</span></div>
              </h2>
            </div>
            <p className="adv-story-sub" style={{ ...slideRight(storyHeaderVisible, 200), fontSize: "1rem", color: "#888", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>{a.story_sub}</p>
          </div>
          <hr className="rule" />
          {a.timeline.map((item) => <TimelineRow key={item.n} item={item} />)}
        </div>
      </section>

      <section style={{ backgroundColor: "#0d0d0d", padding: "9rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div ref={manifestoRef} className="adv-manifesto" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "6rem" }}>
            <div className="adv-manifesto-left" style={{ ...slideLeft(manifestoVisible, 0), flex: "0 0 auto" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 1.5rem" }}>{a.manifesto_label}</p>
              <h2 style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.05em", lineHeight: 0.95, margin: 0, maxWidth: "480px" }}>
                {a.manifesto_h2}
              </h2>
            </div>
            <div style={{ flex: 1, maxWidth: "520px", display: "flex", flexDirection: "column", gap: "2rem", paddingTop: "0.5rem" }}>
              {a.manifesto_body.map((text: string, i: number) => (
                <p key={i} style={{ ...fadeUp(manifestoVisible, i * 80 + 100), fontSize: "1.0625rem", color: i === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)", lineHeight: 1.85, margin: 0, fontWeight: i === 0 ? 500 : 400, borderTop: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none", paddingTop: i > 0 ? "2rem" : 0 }}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="adv-values-section" style={{ backgroundColor: "#f7f7f7", padding: "7rem 2rem 9rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div className="adv-values-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div ref={valuesImgRef} className="adv-values-img" style={{ ...scaleIn(valuesImgVisible, 0, 0.96), borderRadius: "24px", overflow: "hidden", height: "600px", position: "relative" }}>
              <Image src="/images/runsunrise.jpg" alt="Running at sunrise" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
            </div>
            <div>
              <div ref={valuesHeaderRef}>
                <p className="section-label" style={{ ...fadeUp(valuesHeaderVisible, 0), margin: "0 0 1.25rem" }}>{a.values_label}</p>
                <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.05, margin: "0 0 3rem" }}>
                  <div style={{ overflow: "hidden" }}><span style={clipReveal(valuesHeaderVisible, 80)}>{a.values_h2[0]}</span></div>
                  <div style={{ overflow: "hidden" }}><span style={clipReveal(valuesHeaderVisible, 200)}>{a.values_h2[1]}</span></div>
                </h2>
              </div>
              <hr className="rule" />
              {a.values.map((v) => <ValueItem key={v.n} item={v} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
