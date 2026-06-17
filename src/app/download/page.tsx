"use client";

import Image from "next/image";
import PageNavbar from "@/components/PageNavbar";
import { useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, slideLeft, slideRight, scaleIn, fadeIn } from "@/hooks/useInView";

const AppleIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const AndroidIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.08)" />
    <path d="M5 8l2 2 4-4" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SCREEN_SRCS = [
  "/screens/screenactivity.png",
  "/screens/screenmatch.png",
  "/screens/screencards.png",
];

export default function DownloadPage() {
  const t = useT();
  const d = t.download;

  const { ref: heroRef, visible: heroVisible } = useInView<HTMLDivElement>(0.05, { oneShot: true });
  const { ref: platformsRef, visible: platformsVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: screensHeaderRef, visible: screensHeaderVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: screensRef, visible: screensVisible } = useInView<HTMLDivElement>(0.08);

  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{ position: "relative", backgroundColor: "#080808", borderRadius: "24px", minHeight: "calc(100vh - 24px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Background: subtle gradient + grid lines */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(30,30,60,0.9) 0%, rgba(8,8,8,1) 65%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "80px 80px", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,8,8,0.4) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.95) 100%)", zIndex: 1 }} />

          <div style={{ position: "relative", zIndex: 10, flexShrink: 0 }}>
            <PageNavbar />
          </div>

          {/* Content: left text + right phones */}
          <div ref={heroRef} className="dl-hero-inner" style={{ position: "relative", zIndex: 5, flex: 1, display: "flex", alignItems: "center", padding: "3rem clamp(2rem, 5vw, 5rem)", gap: "4rem" }}>

            {/* Left: text */}
            <div className="dl-hero-text" style={{ flex: "0 0 auto", maxWidth: "520px" }}>
              <p style={{ ...fadeIn(heroVisible, 0), fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.75rem" }}>
                {d.hero_label}
              </p>
              <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 5rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.0, letterSpacing: "-0.045em", margin: "0 0 1.5rem" }}>
                <div style={{ overflow: "hidden" }}><span style={clipReveal(heroVisible, 80)}>{d.h1[0]}</span></div>
                <div style={{ overflow: "hidden" }}><span style={{ ...clipReveal(heroVisible, 200), color: "rgba(255,255,255,0.38)" }}>{d.h1[1]}</span></div>
              </h1>
              <p style={{ ...fadeUp(heroVisible, 280), fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: "0 0 2.5rem", maxWidth: "420px" }}>
                {d.subtitle}
              </p>

              <div style={{ ...fadeUp(heroVisible, 360), display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none", whiteSpace: "nowrap" }}>
                  <AppleIcon />{d.cta_ios}
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", whiteSpace: "nowrap" }}>
                  <AndroidIcon />{d.cta_android}
                </a>
              </div>

              <div style={{ ...fadeUp(heroVisible, 440), display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {d.features.map((f: string, i: number) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <CheckIcon />
                    <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stacked phone screens */}
            <div className="dl-phones" style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "0", position: "relative", height: "680px", marginBottom: "-3rem" }}>
              {SCREEN_SRCS.map((src, i) => {
                const isCenter = i === 1;
                const W = isCenter ? 320 : 265;
                const H = W * (873 / 760);
                const offsets = [-108, 0, 108];
                const zIndexes = [1, 3, 2];
                const scales = [0.88, 1, 0.92];
                return (
                  <div key={i} style={{
                    ...scaleIn(heroVisible, 200 + i * 100, 0.88),
                    position: "absolute",
                    bottom: 0,
                    left: `calc(50% + ${offsets[i]}px - ${W / 2}px)`,
                    width: W,
                    height: H,
                    zIndex: zIndexes[i],
                    filter: `drop-shadow(0 32px 64px rgba(0,0,0,0.6)) ${isCenter ? "" : "brightness(0.7)"}`,
                    transform: `${scaleIn(heroVisible, 200 + i * 100, 0.88).transform} scale(${scales[i]})`,
                  }}>
                    <Image src={src} alt={d.screens[i].label} fill style={{ objectFit: "contain" }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Platforms ── */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "7rem 2rem" }}>
        <div ref={platformsRef} style={{ maxWidth: "64rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ ...fadeUp(platformsVisible, 0), fontSize: "0.6875rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>{d.platforms_label}</p>
            <div style={{ overflow: "hidden" }}>
              <h2 style={{ ...clipReveal(platformsVisible, 80), fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.0, margin: "0 0 1.25rem" }}>{d.platforms_h2}</h2>
            </div>
            <p style={{ ...fadeUp(platformsVisible, 200), fontSize: "1rem", color: "#888", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto" }}>{d.platforms_sub}</p>
          </div>

          <div className="dl-platform-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
            {/* iOS card */}
            <div style={{ ...scaleIn(platformsVisible, 100, 0.96), padding: "2.5rem 2rem", backgroundColor: "#ffffff", borderRadius: "24px", border: "1px solid #ebebeb" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "12px", overflow: "hidden", flexShrink: 0, position: "relative", border: "1.5px solid #e0e0e0" }}>
                  <Image src="/images/apple-touch-icon.png" alt="Attax" fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase" }}>iOS</div>
                  <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d" }}>{d.ios_title}</div>
                </div>
              </div>
              <div style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.65, marginBottom: "1.75rem" }}>
                <div style={{ marginBottom: "0.25rem" }}>{d.ios_req}</div>
                <div>{d.ios_sub}</div>
              </div>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "7px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.8125rem", padding: "11px 20px", borderRadius: "999px", textDecoration: "none" }}>
                <AppleIcon /> {d.cta_ios.split(" ")[0]}
              </a>
            </div>

            {/* Android card */}
            <div style={{ ...scaleIn(platformsVisible, 200, 0.96), padding: "2.5rem 2rem", backgroundColor: "#ffffff", borderRadius: "24px", border: "1px solid #ebebeb" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "12px", overflow: "hidden", flexShrink: 0, position: "relative", border: "1.5px solid #e0e0e0" }}>
                  <Image src="/images/apple-touch-icon.png" alt="Attax" fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase" }}>Android</div>
                  <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d" }}>{d.android_title}</div>
                </div>
              </div>
              <div style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.65, marginBottom: "1.75rem" }}>
                <div style={{ marginBottom: "0.25rem" }}>{d.android_req}</div>
                <div>{d.android_sub}</div>
              </div>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "7px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.8125rem", padding: "11px 20px", borderRadius: "999px", textDecoration: "none" }}>
                <AndroidIcon /> {d.cta_android.split(" ")[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── App screens ── */}
      <section style={{ backgroundColor: "#0d0d0d", padding: "8rem 2rem 10rem", overflow: "hidden" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div ref={screensHeaderRef} style={{ marginBottom: "5rem" }}>
            <p style={{ ...fadeUp(screensHeaderVisible, 0), fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.28)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>{d.screens_label}</p>
            <div style={{ overflow: "hidden" }}>
              <h2 style={{ ...clipReveal(screensHeaderVisible, 80), fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.0, margin: 0 }}>{d.screens_h2}</h2>
            </div>
          </div>

          <div ref={screensRef} className="dl-screens-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", alignItems: "end" }}>
            {SCREEN_SRCS.map((src, i) => {
              const H = i === 1 ? 560 : 480;
              const W = H * (760 / 873);
              return (
                <div key={i}>
                  <div style={{ ...scaleIn(screensVisible, i * 100, 0.92), position: "relative", width: "100%", height: H, marginBottom: "1.75rem", filter: "drop-shadow(0 32px 60px rgba(0,0,0,0.5))" }}>
                    <Image src={src} alt={d.screens[i].label} fill style={{ objectFit: "contain", objectPosition: "bottom" }} />
                  </div>
                  <div style={fadeUp(screensVisible, i * 100 + 100)}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.4rem", letterSpacing: "-0.02em" }}>{d.screens[i].label}</h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{d.screens[i].caption}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
