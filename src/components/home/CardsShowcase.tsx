"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, scaleIn } from "@/hooks/useInView";

const CARD_IMGS: Record<string, string> = {
  Overdrive: "/cards/overdrive.png",
  Ghost:     "/cards/ghost.png",
  Blackout:  "/cards/blackout.png",
};

const CARD_NUMBERS: Record<string, string> = {
  Overdrive: "02",
  Ghost:     "10",
  Blackout:  "11",
};

const CARD_BG: Record<string, { from: string; to: string }> = {
  Overdrive: { from: "#e89050", to: "#a03810" },
  Ghost:     { from: "#eee8f8", to: "#cfc0ec" },
  Blackout:  { from: "#242424", to: "#0d0d0d" },
};

// Cards with light background need dark text
const LIGHT_CARDS = new Set(["Ghost"]);

function Scanlines({ color }: { color: string }) {
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", borderRadius: "inherit",
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${color} 3px, ${color} 4px)`,
    }} />
  );
}

function AttaxBrand({ dark }: { dark?: boolean }) {
  return (
    <Image
      src="/images/attaxtxt.svg"
      alt="Attax"
      width={34}
      height={11}
      style={{
        filter: dark ? "brightness(0)" : "brightness(0) invert(1)",
        opacity: dark ? 0.55 : 0.5,
      }}
    />
  );
}

function FlagIcon({ dark }: { dark?: boolean }) {
  const opacity = dark ? 0.35 : 0.45;
  return (
    <Image
      src="/images/flag.svg"
      alt=""
      width={13}
      height={13}
      style={{
        filter: dark ? "brightness(0)" : "brightness(0) invert(1)",
        opacity,
      }}
    />
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
  const dark = LIGHT_CARDS.has(card.name);

  const scanlineColor = dark
    ? "rgba(90,40,180,0.10)"
    : "rgba(0,0,0,0.18)";

  const textWhite = dark ? "#160830" : "#ffffff";
  const textSub = dark ? "rgba(20,5,50,0.6)" : "rgba(255,255,255,0.7)";
  const textDesc = dark ? "rgba(20,5,50,0.42)" : "rgba(255,255,255,0.45)";
  const numColor = dark ? "rgba(80,40,160,0.18)" : "rgba(255,255,255,0.15)";

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
      <Scanlines color={scanlineColor} />

      {/* Artwork — right side, large, partially cropped */}
      {imgSrc && (
        <div style={{
          position: "absolute",
          right: card.name === "Ghost" ? "-5px" : "-15px",
          top: card.name === "Ghost" ? "-10px" : "50%",
          transform: card.name === "Ghost" ? "none" : "translateY(-50%)",
          width: "190px",
          height: "190px",
          zIndex: 1,
          filter: `drop-shadow(0 0 24px ${card.glow})`,
        }}>
          <Image src={imgSrc} alt={card.name} fill style={{ objectFit: "contain" }} />
        </div>
      )}

      {/* Left content */}
      <div style={{
        position: "relative", zIndex: 3,
        height: "100%", width: "60%",
        display: "flex", flexDirection: "column",
        justifyContent: "space-between",
        padding: "13px 12px 11px 15px",
      }}>
        {/* Top row: brand left, flag right (flag is outside left content — positioned absolute) */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <AttaxBrand dark={dark} />
        </div>

        {/* Category badge */}
        <div style={{
          fontSize: "0.5rem", fontWeight: 800, letterSpacing: "0.18em",
          color: card.color, textTransform: "uppercase",
          marginTop: "6px",
        }}>
          {card.type}
        </div>

        {/* Card name — big italic */}
        <div style={{
          fontSize: "1.75rem", fontWeight: 900, fontStyle: "italic",
          color: textWhite, letterSpacing: "-0.04em", lineHeight: 0.95,
          marginTop: "2px",
        }}>
          {card.name.toUpperCase()}
        </div>

        {/* Effect */}
        <div style={{ marginTop: "5px" }}>
          <div style={{ fontSize: "0.5625rem", fontWeight: 700, color: textSub, letterSpacing: "0.04em" }}>
            {card.effect}
          </div>
        </div>

        {/* Description */}
        <div style={{
          fontSize: "0.5rem", color: textDesc,
          lineHeight: 1.5, marginTop: "6px",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        } as React.CSSProperties}>
          {card.desc}
        </div>
      </div>

      {/* Flag — absolute top-right */}
      <div style={{ position: "absolute", top: "13px", right: "14px", zIndex: 4 }}>
        <FlagIcon dark={dark} />
      </div>

      {/* Number — bottom right */}
      <div style={{
        position: "absolute", bottom: "10px", right: "14px",
        fontSize: "2rem", fontWeight: 900, fontStyle: "italic",
        color: numColor, letterSpacing: "-0.06em",
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
    <section style={{ backgroundColor: "#0d0d0d", padding: "9rem 2rem", overflow: "hidden" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div className="cards-showcase-inner" style={{ display: "flex", alignItems: "center", gap: "10rem", justifyContent: "center" }}>

          {/* Left: text */}
          <div ref={headerRef} className="cards-showcase-text" style={{ flex: "0 0 380px", maxWidth: "380px" }}>
            <p style={{ ...fadeUp(headerVisible, 0), fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.28)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.5rem" }}>{cs.label}</p>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.1, margin: "0 0 1.5rem" }}>
              <div style={{ overflow: "hidden", paddingBottom: "0.1em" }}><span style={clipReveal(headerVisible, 80)}>{cs.h2[0]}</span></div>
              <div style={{ overflow: "hidden", paddingBottom: "0.15em" }}><span style={clipReveal(headerVisible, 200)}>{cs.h2[1]}</span></div>
            </h2>
            <p style={{ ...fadeUp(headerVisible, 280), fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: "0 0 2.5rem" }}>{cs.sub}</p>
            <div style={fadeUp(headerVisible, 360)}>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.25rem" }}>{cs.cta}</p>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", margin: 0 }}>{cs.cta_sub}</p>
            </div>
          </div>

          {/* Right: stacked cards */}
          <div ref={cardsRef} className="cards-showcase-fan" style={{
            flex: "0 0 auto", display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center",
            gap: "1rem",
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
