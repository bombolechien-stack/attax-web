import Image from "next/image";

interface PhotoStripProps {
  src: string;
  alt: string;
  position?: string;
  height?: string;
}

export default function PhotoStrip({ src, alt, position = "center center", height = "70vh" }: PhotoStripProps) {
  return (
    <section style={{
      position: "relative",
      height,
      minHeight: "480px",
      overflow: "hidden",
    }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
          objectPosition: position,
          filter: "grayscale(20%) contrast(1.08) brightness(0.82)",
        }}
      />
    </section>
  );
}
