import Image from "next/image";

interface Card {
  src: string;
  title: string;
  position?: string;
}

const topCards: Card[] = [
  { src: "/images/hero-boxing-2.jpg", title: "The fight starts\nat 21:30", position: "center 40%" },
  { src: "/images/strength-portrait.jpg", title: "Your fitness\nis your weapon", position: "center 25%" },
];

const bottomCards: Card[] = [
  { src: "/images/cycling-portrait.jpg", title: "Every sport. Every effort.", position: "center center" },
  { src: "/images/warmup.jpg", title: "7 days. 1 champion.", position: "center 30%" },
  { src: "/images/cycling-race.jpg", title: "Compete daily.", position: "center center" },
];

function PhotoCard({ src, title, position = "center center", style }: Card & { style?: React.CSSProperties }) {
  return (
    <div style={{
      position: "relative",
      borderRadius: "16px",
      overflow: "hidden",
      ...style,
    }}>
      <Image
        src={src}
        alt={title}
        fill
        style={{
          objectFit: "cover",
          objectPosition: position,
          filter: "grayscale(15%) contrast(1.05) brightness(0.75)",
        }}
      />
      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.72) 100%)",
      }} />
      {/* Text */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "1.75rem 1.75rem 1.625rem",
      }}>
        <p style={{
          fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-0.03em",
          lineHeight: 1.2,
          margin: 0,
          whiteSpace: "pre-line",
        }}>
          {title}
        </p>
      </div>
    </div>
  );
}

export default function VisualGrid() {
  return (
    <section style={{ backgroundColor: "#070707", padding: "0 12px 12px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "8px", height: "380px" }}>
          {topCards.map(c => <PhotoCard key={c.src} {...c} style={{ height: "100%" }} />)}
        </div>
        {/* Bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", height: "280px" }}>
          {bottomCards.map(c => <PhotoCard key={c.src} {...c} style={{ height: "100%" }} />)}
        </div>
      </div>
    </section>
  );
}
