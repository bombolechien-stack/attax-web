"use client";

import Image from "next/image";
import PageNavbar from "@/components/PageNavbar";

const AppleIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const AndroidIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z" />
  </svg>
);

const FEATURES = [
  "Sync with Apple Health or Health Connect",
  "Face real opponents every day",
  "Climb the competitive rankings",
  "Strategic card system",
  "Free to download",
];

export default function DownloadPage() {
  return (
    <>
      <div style={{ backgroundColor: "#ffffff", padding: "12px" }}>
        <div style={{ position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px", minHeight: "calc(100vh - 24px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 60%, #0d0d0d 100%)" }} />
          <PageNavbar />
          <div style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 2rem", textAlign: "center" }}>
            <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>
              FREE TO DOWNLOAD
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.0, letterSpacing: "-0.045em", margin: "0 0 1.5rem", maxWidth: "700px" }}>
              Download Attax.<br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>Start competing today.</span>
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: "0 0 3rem", maxWidth: "480px" }}>
              Turn your daily activity into competition. Available on iPhone and Android — free to download, free to play.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginBottom: "4rem" }}>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "12px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "1rem", padding: "16px 32px", borderRadius: "999px", textDecoration: "none", minWidth: "200px", justifyContent: "center" }}
              >
                <AppleIcon />
                App Store
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "12px", backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff", fontWeight: 700, fontSize: "1rem", padding: "16px 32px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", minWidth: "200px", justifyContent: "center" }}
              >
                <AndroidIcon />
                Google Play
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
              {FEATURES.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill="rgba(255,255,255,0.1)" />
                    <path d="M4 7l2 2 4-4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f7f7f7", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 1rem" }}>
            Available on all platforms
          </h2>
          <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.75, margin: "0 0 3rem" }}>
            Attax works with Apple Health on iPhone and Health Connect on Android.<br />
            A smartwatch or fitness tracker is required for activity synchronization.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", maxWidth: "480px", margin: "0 auto" }}>
            <div style={{ padding: "2rem", backgroundColor: "#ffffff", borderRadius: "20px", textAlign: "left" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>iOS</div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.25rem" }}>iPhone</div>
              <div style={{ fontSize: "0.875rem", color: "#888", marginBottom: "1.25rem" }}>Requires iOS 16.0+<br />Apple Health integration</div>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.8125rem", padding: "10px 18px", borderRadius: "999px", textDecoration: "none" }}>
                <AppleIcon /> Download
              </a>
            </div>
            <div style={{ padding: "2rem", backgroundColor: "#ffffff", borderRadius: "20px", textAlign: "left" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Android</div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.25rem" }}>Android</div>
              <div style={{ fontSize: "0.875rem", color: "#888", marginBottom: "1.25rem" }}>Requires Android 8.0+<br />Health Connect integration</div>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.8125rem", padding: "10px 18px", borderRadius: "999px", textDecoration: "none" }}>
                <AndroidIcon /> Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
