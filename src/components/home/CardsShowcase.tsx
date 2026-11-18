"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal } from "@/hooks/useInView";

// Les 12 cartes de l'app : fond validé (scène HD + scanlines de l'app, budyfit/assets/cards/v3/bg_*),
// textes posés par-dessus comme dans l'app (app/(tabs)/match.tsx → V3_BG). dark = scène claire → textes sombres.
const STYLE: Record<string, { dark: boolean; cat: string }> = {
  spike: { dark: true, cat: "#1D4ED8" },
  overdrive: { dark: true, cat: "#C2410C" },
  recover: { dark: true, cat: "#15803D" },
  shield: { dark: true, cat: "#DC2626" },
  freeze: { dark: true, cat: "#0891B2" },
  pressure: { dark: false, cat: "#93C5FD" },
  parasite: { dark: false, cat: "#7CE03A" },
  scan: { dark: true, cat: "#15803D" },
  mirage: { dark: false, cat: "#BFDBFE" },
  ghost: { dark: true, cat: "#7C3AED" },
  bluff: { dark: true, cat: "#475569" },
  counter: { dark: true, cat: "#DB2777" },
};

type Card = { id: string; n: string; fam: string; name: string; punchy: string; sub: string };

function GameCard({ card, family, visible, delay }: { card: Card; family: string; visible: boolean; delay: number }) {
  const st = STYLE[card.id];
  const ink = st.dark ? "#0B1116" : "#ffffff";
  const soft = st.dark ? "rgba(11,17,22,0.55)" : "rgba(255,255,255,0.7)";
  return (
    <div className="game-card" style={{
      ...fadeUp(visible, delay),
      position: "relative", aspectRatio: "2 / 1", borderRadius: 18, overflow: "hidden",
      boxShadow: "0 18px 40px rgba(11,17,22,0.10), 0 2px 6px rgba(11,17,22,0.05)",
      containerType: "inline-size",
    }}>
      <Image src={`/cards/v3/${card.id}.webp`} alt="" fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 380px" style={{ objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, padding: "6.5cqw 6cqw", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "4.2cqw", fontWeight: 800, fontStyle: "italic", letterSpacing: "-0.03em", color: ink, lineHeight: 1 }}>Attax</div>
        <div style={{ fontSize: "2.9cqw", fontWeight: 800, letterSpacing: "0.16em", color: st.cat, marginTop: "1.2cqw" }}>{family}</div>
        <div style={{ fontSize: "8.4cqw", fontWeight: 900, fontStyle: "italic", letterSpacing: "-0.045em", color: ink, lineHeight: 0.95, marginTop: "1.4cqw", textTransform: "uppercase", maxWidth: "70%" }}>{card.name}</div>
        <div style={{ marginTop: "auto", maxWidth: "62%" }}>
          <div style={{ fontSize: "3.4cqw", fontWeight: 800, color: ink, letterSpacing: "0.01em" }}>{card.punchy}</div>
          <div style={{ fontSize: "2.5cqw", fontWeight: 600, color: soft, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "0.8cqw", lineHeight: 1.35 }}>{card.sub}</div>
        </div>
      </div>
      <div style={{ position: "absolute", right: "5cqw", bottom: "4cqw", fontSize: "11cqw", fontWeight: 900, fontStyle: "italic", letterSpacing: "-0.06em", color: ink, lineHeight: 1 }}>{card.n}</div>
    </div>
  );
}

export default function CardsShowcase() {
  const t = useT();
  const cs = t.cardsShowcase;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: cardsRef, visible: cardsVisible } = useInView<HTMLDivElement>(0.05, { oneShot: true });
  const fam = cs.families as Record<string, string>;

  return (
    <section id="cards" className="cards-section" style={{ backgroundColor: "#F5F5F8", padding: "9rem 2rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div ref={headerRef} className="cards-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          <div>
            <span style={{ ...fadeUp(headerVisible, 0), marginBottom: "1.5rem" }} className="section-label">{cs.label}</span>
            <h2 style={{ fontSize: "clamp(2.75rem, 5vw, 5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.05em", lineHeight: 0.98, margin: 0 }}>
              <div style={{ overflow: "hidden", paddingBottom: "0.08em" }}><span style={clipReveal(headerVisible, 80)}>{cs.h2[0]}</span></div>
              <div style={{ overflow: "hidden", paddingBottom: "0.12em" }}><span style={{ ...clipReveal(headerVisible, 200), color: "#0443FD" }}>{cs.h2[1]}</span></div>
            </h2>
          </div>
          <div style={{ ...fadeUp(headerVisible, 280), maxWidth: 420 }}>
            <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.75, margin: "0 0 1.25rem" }}>{cs.sub}</p>
            <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.25rem" }}>{cs.cta}</p>
            <p style={{ fontSize: "0.875rem", color: "#999", margin: 0 }}>{cs.cta_sub}</p>
          </div>
        </div>

        <div ref={cardsRef} className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {(cs.cards as readonly Card[]).map((c, i) => (
            <GameCard key={c.id} card={c} family={fam[c.fam]} visible={cardsVisible} delay={(i % 6) * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
