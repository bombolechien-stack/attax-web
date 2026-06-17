"use client";

import Image from "next/image";
import { useInView, fadeUp, clipReveal, slideLeft } from "@/hooks/useInView";

export default function DownloadCTA() {
  const { ref, visible } = useInView<HTMLElement>(0.18);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        backgroundColor: "#0d0d0d",
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.016) 3px, rgba(255,255,255,0.016) 4px)",
        padding: "9rem 2rem",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-8%",
          zIndex: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1.05)" : "scale(1)",
          transition: "opacity 2s cubic-bezier(0.16,1,0.3,1), transform 2.5s cubic-bezier(0.16,1,0.3,1)",
          willChange: "opacity, transform",
        }}
      />
      <div style={{ position: "absolute", right: "clamp(2rem, 8vw, 10rem)", bottom: 0, zIndex: 0, width: "clamp(160px, 22vw, 320px)", pointerEvents: "none" }}>
        <Image
          src="/images/app-half.webp"
          alt="Attax app"
          width={320}
          height={560}
          style={{ width: "100%", height: "auto", display: "block", opacity: visible ? 0.55 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 1.4s cubic-bezier(0.16,1,0.3,1) 300ms, transform 1.4s cubic-bezier(0.16,1,0.3,1) 300ms" }}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
        <p className="section-label-light" style={{ ...fadeUp(visible, 0), margin: "0 0 2rem" }}>Download</p>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.0, margin: "0 0 1.5rem" }}>
          <div style={{ overflow: "hidden" }}><span style={clipReveal(visible, 80)}>Ready to enter</span></div>
          <div style={{ overflow: "hidden" }}><span style={clipReveal(visible, 220)}>the arena?</span></div>
        </h2>
        <p style={{ ...slideLeft(visible, 380), fontSize: "1.0625rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: "0 auto 3rem", maxWidth: "380px" }}>
          Download Attax and start turning your activity into victories.
        </p>
        <div style={{ ...fadeUp(visible, 520), display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "15px 30px", borderRadius: "999px", textDecoration: "none" }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "0.9375rem", padding: "15px 30px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.14)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z"/></svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}

