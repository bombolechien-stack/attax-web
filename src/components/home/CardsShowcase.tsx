"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, scaleIn } from "@/hooks/useInView";

const CARD_IMGS: Record<string, string> = {
  Overdrive: "/cards/overdrive.png",
  Ghost: "/cards/ghost.png",
  Freeze: "/cards/freeze.png",
};

const CARD_IMG_SCALE: Record<string, number> = {
  Overdrive: 1,
  Ghost: 1,
  Freeze: 0.65,
};

/* Inline Attax logo flag (monochrome, recolored via CSS filter) */
function AttaxFlag({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <Image
        src="/images/attaxlogos.svg"
        alt="Attax"
        width={14}
        height={14}
        style={{ filter: `brightness(0) invert(1)`, opacity: 0.25 }}
      />
      <Image
        src="/images/attaxtxt.svg"
        alt="Attax"
        width={36}
        height={11}
        style={{ filter: `brightness(0) invert(1)`, opacity: 0.22 }}
      />
    </div>
  );
}

function Scanlines() {
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
      borderRadius: "20px",
    }} />
  );
}

function GameCard({ card, index, visible }: {
  card: { name: string; type: string; effect: string; desc: string; color: string; glow: string };
  index: number;
  visible: boolean;
}) {
  const rotations = [-7, 0, 7];
  const delays = [200, 80, 320];
  const translateYs = ["14px", "0px", "10px"];
  const imgSrc = CARD_IMGS[card.name];

  return (
    <div
      style={{
        ...scaleIn(visible, delays[index], 0.85),
        transform: `${scaleIn(visible, delays[index], 0.85).transform} rotate(${rotations[index]}deg) translateY(${translateYs[index]})`,
        width: 230,
        height: 340,
        borderRadius: "20px",
        backgroundColor: "#0e0e0e",
        border: `1px solid rgba(255,255,255,0.09)`,
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "default",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: `0 24px 60px rgba(0,0,0,0.55)`,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = `rotate(0deg) translateY(-16px) scale(1.04)`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 40px 80px rgba(0,0,0,0.65), 0 0 28px ${card.glow}`;
        (e.currentTarget as HTMLElement).style.zIndex = "10";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = `rotate(${rotations[index]}deg) translateY(${translateYs[index]})`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 60px rgba(0,0,0,0.55)`;
        (e.currentTarget as HTMLElement).style.zIndex = "1";
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute", top: "-30%", left: "-10%",
        width: "120%", height: "100%",
        background: `radial-gradient(ellipse at 50% 10%, ${card.glow} 0%, transparent 60%)`,
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Scanlines */}
      <Scanlines />

      {/* Top: Attax brand + type badge */}
      <div style={{ position: "relative", zIndex: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <AttaxFlag color={card.color} />
        <span style={{
          fontSize: "0.5rem", fontWeight: 800, letterSpacing: "0.16em",
          color: card.color, border: `1px solid ${card.color}`,
          borderRadius: "999px", padding: "2px 8px", textTransform: "uppercase", opacity: 0.9,
        }}>{card.type}</span>
      </div>

      {/* Center: real card image */}
      <div style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", margin: "0.75rem 0" }}>
        {imgSrc && (
          <div style={{ position: "relative", width: `${(CARD_IMG_SCALE[card.name] ?? 1) * 100}%`, height: "120px" }}>
            <Image
              src={imgSrc}
              alt={card.name}
              fill
              style={{ objectFit: "contain", filter: `drop-shadow(0 0 18px ${card.glow})` }}
            />
          </div>
        )}
      </div>

      {/* Bottom: name + effect + desc */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <div style={{ fontSize: "1.125rem", fontWeight: 900, color: card.color, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "3px", filter: `drop-shadow(0 0 10px ${card.glow})` }}>
            {card.name}
          </div>
          <div style={{ fontSize: "0.5625rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {card.effect}
          </div>
        </div>
        <div style={{ height: "1px", backgroundColor: `${card.color}28`, marginBottom: "0.625rem" }} />
        <p style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.6, margin: 0 }}>
          {card.desc}
        </p>
      </div>
    </div>
  );
}

export default function CardsShowcase() {
  const t = useT();
  const cs = t.cardsShowcase;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: cardsRef, visible: cardsVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section style={{ backgroundColor: "#080808", padding: "9rem 2rem", overflow: "hidden" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div className="cards-showcase-inner" style={{ display: "flex", alignItems: "center", gap: "5rem", justifyContent: "space-between" }}>

          {/* Left: text */}
          <div ref={headerRef} className="cards-showcase-text" style={{ flex: "0 0 400px", maxWidth: "400px" }}>
            <p style={{ ...fadeUp(headerVisible, 0), fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.28)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.5rem" }}>{cs.label}</p>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.0, margin: "0 0 1.5rem" }}>
              <div style={{ overflow: "hidden" }}><span style={clipReveal(headerVisible, 80)}>{cs.h2[0]}</span></div>
              <div style={{ overflow: "hidden" }}><span style={clipReveal(headerVisible, 200)}>{cs.h2[1]}</span></div>
            </h2>
            <p style={{ ...fadeUp(headerVisible, 280), fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: "0 0 2.5rem" }}>{cs.sub}</p>
            <div style={fadeUp(headerVisible, 360)}>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.25rem" }}>{cs.cta}</p>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", margin: 0 }}>{cs.cta_sub}</p>
            </div>
          </div>

          {/* Right: fan of cards */}
          <div ref={cardsRef} className="cards-showcase-fan" style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75rem", paddingTop: "2rem" }}>
            {cs.cards.map((card: { name: string; type: string; effect: string; desc: string; color: string; glow: string }, i: number) => (
              <GameCard key={card.name} card={card} index={i} visible={cardsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
