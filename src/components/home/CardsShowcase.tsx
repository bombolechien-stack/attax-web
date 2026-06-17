"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, scaleIn } from "@/hooks/useInView";

const CARD_IMGS: Record<string, string> = {
  Overdrive: "/cards/overdrive.png",
  Ghost: "/cards/ghost.png",
  Freeze: "/cards/freeze.png",
};

const CARD_NUMBERS: Record<string, string> = {
  Overdrive: "02",
  Ghost: "10",
  Freeze: "05",
};

const CARD_BG: Record<string, { from: string; to: string }> = {
  Overdrive: { from: "#c2510a", to: "#7a2d04" },
  Ghost:     { from: "#4c2d8a", to: "#1e0f4a" },
  Freeze:    { from: "#0a5fa8", to: "#04305e" },
};

function Scanlines() {
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", borderRadius: "inherit",
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.10) 2px, rgba(0,0,0,0.10) 3px)",
    }} />
  );
}

function AttaxBrand({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <Image src="/images/attaxlogos.svg" alt="" width={12} height={12}
        style={{ filter: "brightness(0) invert(1)", opacity: 0.5 }} />
      <Image src="/images/attaxtxt.svg" alt="Attax" width={32} height={10}
        style={{ filter: "brightness(0) invert(1)", opacity: 0.45 }} />
    </div>
  );
}

function FlagIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.4)" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h11l-2 4 2 4H4V4z" /><line x1="4" y1="4" x2="4" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function GameCard({ card, index, visible }: {
  card: { name: string; type: string; effect: string; desc: string; color: string; glow: string };
  index: number;
  visible: boolean;
}) {
  const rotations = [-5, 0, 5];
  const translateYs = ["12px", "0px", "12px"];
  const delays = [180, 60, 300];
  const imgSrc = CARD_IMGS[card.name];
  const num = CARD_NUMBERS[card.name] ?? "01";
  const bg = CARD_BG[card.name] ?? { from: card.color, to: "#000" };

  return (
    <div
      style={{
        ...scaleIn(visible, delays[index], 0.88),
        transform: `${scaleIn(visible, delays[index], 0.88).transform} rotate(${rotations[index]}deg) translateY(${translateYs[index]})`,
        width: 280,
        height: 160,
        borderRadius: "18px",
        background: `linear-gradient(135deg, ${bg.from} 0%, ${bg.to} 100%)`,
        boxShadow: `0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)`,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        cursor: "default",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = `rotate(0deg) translateY(-14px) scale(1.05)`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 40px 80px rgba(0,0,0,0.7), 0 0 32px ${card.glow}, 0 0 0 1px rgba(255,255,255,0.14)`;
        (e.currentTarget as HTMLElement).style.zIndex = "10";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = `rotate(${rotations[index]}deg) translateY(${translateYs[index]})`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)`;
        (e.currentTarget as HTMLElement).style.zIndex = "1";
      }}
    >
      <Scanlines />

      {/* Artwork — right side */}
      {imgSrc && (
        <div style={{
          position: "absolute", right: "-10px", top: "50%",
          transform: "translateY(-50%)",
          width: "140px", height: "140px",
          zIndex: 1,
          filter: `drop-shadow(0 0 20px ${card.glow})`,
        }}>
          <Image src={imgSrc} alt={card.name} fill style={{ objectFit: "contain" }} />
        </div>
      )}

      {/* Left content */}
      <div style={{
        position: "relative", zIndex: 3,
        height: "100%", width: "62%",
        display: "flex", flexDirection: "column",
        justifyContent: "space-between",
        padding: "14px 14px 12px 16px",
      }}>
        {/* Top row: brand + flag */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <AttaxBrand color={card.color} />
          <FlagIcon />
        </div>

        {/* Category badge */}
        <div style={{
          fontSize: "0.5rem", fontWeight: 800, letterSpacing: "0.18em",
          color: card.color, textTransform: "uppercase",
          marginTop: "4px",
        }}>
          {card.type}
        </div>

        {/* Card name — big italic */}
        <div style={{
          fontSize: "1.75rem", fontWeight: 900, fontStyle: "italic",
          color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 0.95,
          textShadow: `0 2px 16px rgba(0,0,0,0.4)`,
          marginTop: "2px",
        }}>
          {card.name.toUpperCase()}
        </div>

        {/* Effect + sub */}
        <div style={{ marginTop: "4px" }}>
          <div style={{ fontSize: "0.5625rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em" }}>
            {card.effect}
          </div>
        </div>

        {/* Description */}
        <div style={{
          fontSize: "0.5rem", color: "rgba(255,255,255,0.45)",
          lineHeight: 1.5, marginTop: "6px",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        } as React.CSSProperties}>
          {card.desc}
        </div>
      </div>

      {/* Number — bottom right */}
      <div style={{
        position: "absolute", bottom: "10px", right: "14px",
        fontSize: "2rem", fontWeight: 900, fontStyle: "italic",
        color: "rgba(255,255,255,0.15)", letterSpacing: "-0.06em",
        zIndex: 3, lineHeight: 1,
      }}>
        {num}
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
          <div ref={headerRef} className="cards-showcase-text" style={{ flex: "0 0 380px", maxWidth: "380px" }}>
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

          {/* Right: stacked cards */}
          <div ref={cardsRef} className="cards-showcase-fan" style={{
            flex: 1, display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "flex-start",
            gap: "1rem", paddingLeft: "1rem",
          }}>
            {cs.cards.map((card: { name: string; type: string; effect: string; desc: string; color: string; glow: string }, i: number) => (
              <GameCard key={card.name} card={card} index={i} visible={cardsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
