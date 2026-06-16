import Image from "next/image";

interface PhotoBreakProps {
  src: string;
  alt: string;
  quote?: string;
  position?: string;
}

export default function PhotoBreak({ src, alt, quote, position = "center center" }: PhotoBreakProps) {
  return (
    <section style={{
      position: "relative",
      height: "90vh",
      minHeight: "560px",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
    }}>
      {/* Photo */}
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
          objectPosition: position,
          filter: "grayscale(30%) contrast(1.1) brightness(0.75)",
        }}
        priority={false}
      />

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0) 30%, rgba(5,5,5,0.7) 75%, rgba(5,5,5,0.97) 100%)" }} />

      {/* Quote */}
      {quote && (
        <div style={{ position: "relative", zIndex: 2, padding: "0 clamp(2rem, 8vw, 9rem) clamp(3rem, 6vh, 5rem)", width: "100%" }}>
          <p style={{
            fontSize: "clamp(2.25rem, 5.5vw, 5.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.048em",
            lineHeight: 0.96,
            margin: 0,
            maxWidth: "820px",
          }}>
            {quote}
          </p>
        </div>
      )}
    </section>
  );
}
