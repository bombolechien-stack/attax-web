"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";
import { PRESS } from "@/lib/translations";

function LogoFull({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg width="36" height="36" viewBox="0 0 958.37 914.93" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M449.69,663.33H179.88q-16.87-45-33.73-89.93h.39Q82.21,400.65,17.88,227.88l.09,0L0,179.92H269.81l33.73,89.94H154.94L267.42,573.4H416Q432.82,618.37,449.69,663.33Z"/>
        <path d="M539.63,179.92H269.81Q253,135,236.08,90H505.9Q522.76,135,539.63,179.92Z"/>
        <path d="M685.77,573.4H416q-16.86-45-33.73-89.94H652.05Z"/>
        <path d="M921.67,483.42a.08.08,0,0,0,0,0H651.87q-16.86-45-33.73-89.93H774.39l0,0q-34.77-44.5-69.55-89l-.56-.27-57-73q18-70.6,36-141.22H505.76Q488.9,45.08,472,0H799L776.14,89.94l-30.6,120.78-.07.27,0,.12.18-.29q71.24,91.33,142.49,182.66h-.82l.1,0,.7.34.53.26-.51-.65h.34l17.2,22c2.05,2.62,4.11,5.25,6.15,7.88Q935,452.92,958,482.52a.9.9,0,0,0,.22.45.69.69,0,0,0,.11.45Z"/>
        <path d="M272.93,914.93Q232.49,806.45,192,698l96.33,49.68,60.15,163Z"/>
      </svg>
      <svg width="90" height="27" viewBox="0 0 1095.26 330.11" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M229.5,242.84H108.76L62.63,326.27H0L185.86,0h66.25l45.22,326.27H239.67Zm-97-46.13h92.7l-17-136.57h-1.13Z"/>
        <path d="M331.3,277.88a129.44,129.44,0,0,1,2.26-22.83L360,132.72H324.29l9.27-44.09h35.73L381.5,29.85h55.39L424.46,88.63h50l-9.27,44.09H415.41l-24,111.7a72.93,72.93,0,0,0-2.27,17.18c0,16.28,10.86,22.84,30.08,22.84a97.19,97.19,0,0,0,16.28-1.13L426.27,326a142.6,142.6,0,0,1-27.82,2.72C358.43,328.76,331.3,311.8,331.3,277.88Z"/>
        <path d="M482.17,277.88a128.6,128.6,0,0,1,2.27-22.83l26.45-122.33H475.16l9.28-44.09h35.72l12.21-58.78h55.39L575.33,88.63h50L616,132.72H566.28l-24,111.7a72.87,72.87,0,0,0-2.26,17.18c0,16.28,10.85,22.84,30.07,22.84a97,97,0,0,0,16.28-1.13L577.14,326a142.41,142.41,0,0,1-27.81,2.72C509.31,328.76,482.17,311.8,482.17,277.88Z"/>
        <path d="M609.08,264.09c0-48.16,38.21-76.42,101.75-79.14l65.34-2.71,3.17-14.47a39.83,39.83,0,0,0,.9-10c0-19.44-15.15-31.65-41.6-31.65-27.14,0-43.87,12.43-48.39,31.65H636.44c7.91-45.67,48.84-76.65,106.49-76.65,55.17,0,92,28.72,92,70.32a103.05,103.05,0,0,1-1.81,19.9L800.36,326.27H747l6.11-28.94h-.91c-14.92,19.89-40,32.78-69.64,32.78C641.64,330.11,609.08,302.53,609.08,264.09Zm154.2-21.71,5.2-22.83-56.07,2.71c-30.52,1.13-48.84,14-48.84,34.37,0,18.54,16,30.52,39.34,30.52C732.08,287.15,757.4,268.61,763.28,242.38Z"/>
        <path d="M950.33,243.29l-65.57,83H822.13L925,204,873,86.15h58.79l33.92,82.75h1.13l65.57-82.75h62.85L992.39,208.47l51.77,117.8H985.6l-33.91-83Z"/>
      </svg>
    </div>
  );
}

function ColorSwatch({ color }: { color: { name: string; hex: string; usage: string } }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #ebebeb" }}>
      <div
        onClick={copy}
        style={{
          height: "80px",
          backgroundColor: color.hex,
          cursor: "pointer",
          border: color.hex === "#FFFFFF" ? "1px solid #e8e8e8" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.75rem",
          color: color.hex === "#FFFFFF" || color.hex === "#F7F7F7" ? "#999" : "rgba(255,255,255,0.5)",
          fontWeight: 600,
          letterSpacing: "0.05em",
          transition: "opacity 0.15s",
        }}
      >
        {copied ? "✓" : color.hex}
      </div>
      <div style={{ padding: "1rem 1.25rem" }}>
        <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.25rem" }}>{color.name}</div>
        <div style={{ fontSize: "0.8125rem", color: "#999" }}>{color.usage}</div>
      </div>
    </div>
  );
}

function LogoCard({ bg, label }: { bg: string; label: string }) {
  const isDark = bg === "#0d0d0d";
  return (
    <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #ebebeb" }}>
      <div style={{
        backgroundColor: bg,
        padding: "2.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "140px",
      }}>
        <LogoFull color={isDark ? "#ffffff" : "#0d0d0d"} />
      </div>
      <div style={{ padding: "1rem 1.25rem", backgroundColor: "#fafafa" }}>
        <span style={{ fontSize: "0.8125rem", color: "#999", fontWeight: 500 }}>{label}</span>
      </div>
    </div>
  );
}

const LABEL: React.CSSProperties = {
  fontSize: "0.6875rem", fontWeight: 700, color: "#aaa",
  letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "1.25rem",
};
const RULE: React.CSSProperties = { border: "none", borderTop: "1px solid #ebebeb", margin: "5rem 0" };

export default function PressPage() {
  const { lang } = useLang();
  const p = PRESS[lang];

  const SCREEN_SRCS = ["/screens/screenactivity.png", "/screens/screenmatch.png", "/screens/screencards.png"];

  return (
    <>
      {/* Hero */}
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{ position: "relative", backgroundColor: "#080808", borderRadius: "24px", minHeight: "52vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 30% 60%, rgba(20,20,40,0.9) 0%, rgba(8,8,8,1) 70%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent calc(16.666% - 0.5px), rgba(255,255,255,0.025) calc(16.666% - 0.5px), rgba(255,255,255,0.025) 16.666%)" }} />
          <div style={{ position: "relative", zIndex: 10, flexShrink: 0 }}>
            <PageNavbar />
          </div>
          <div style={{ position: "relative", zIndex: 5, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem clamp(2rem, 5vw, 5rem) 4rem" }}>
            <span style={{ ...LABEL, color: "rgba(255,255,255,0.28)" }}>{p.hero_label}</span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.02, letterSpacing: "-0.045em", margin: "0 0 1.5rem", maxWidth: "700px" }}>
              {p.hero_title.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: "0 0 2.5rem", maxWidth: "480px" }}>{p.hero_sub}</p>
            <a
              href="mailto:press@attax.app"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none", alignSelf: "flex-start" }}
            >
              {p.hero_cta}
            </a>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "7rem 4rem" }}>

          {/* Contact */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
            <span style={LABEL}>{p.contact_label}</span>
            <div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 1.25rem" }}>{p.contact_title}</h2>
              <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.75, margin: "0 0 1rem" }}>{p.contact_body}</p>
              <a
                href={`mailto:${p.contact_email}`}
                style={{ fontSize: "1.375rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.03em", textDecoration: "none", borderBottom: "2px solid #0d0d0d", paddingBottom: "2px" }}
              >
                {p.contact_email}
              </a>
              <p style={{ fontSize: "0.875rem", color: "#aaa", marginTop: "1rem" }}>{p.contact_response}</p>
            </div>
          </div>

          <hr style={RULE} />

          {/* Key Facts */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
            <span style={LABEL}>{p.facts_label}</span>
            <div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2.5rem" }}>{p.facts_title}</h2>
              <div style={{ border: "1px solid #ebebeb", borderRadius: "16px", overflow: "hidden" }}>
                {p.facts.map((fact, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "2rem", padding: "1.25rem 1.75rem", borderBottom: i < p.facts.length - 1 ? "1px solid #f0f0f0" : "none", alignItems: "center" }}>
                    <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em" }}>{fact.label}</span>
                    <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#0d0d0d" }}>{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr style={RULE} />

          {/* Brand Assets — Logos */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
            <span style={LABEL}>{p.assets_label}</span>
            <div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 0.75rem" }}>{p.assets_title}</h2>
              <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.7, margin: "0 0 2.5rem" }}>{p.assets_sub}</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "3rem" }}>
                <LogoCard bg="#0d0d0d" label={p.logo_dark_label} />
                <LogoCard bg="#ffffff" label={p.logo_light_label} />
              </div>

              {/* Colors */}
              <p style={{ ...LABEL, marginBottom: "1rem" }}>{p.colors_label}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "3rem" }}>
                {p.colors.map((c) => <ColorSwatch key={c.hex} color={c} />)}
              </div>

              {/* Font */}
              <div style={{ padding: "1.5rem 2rem", backgroundColor: "#f7f7f7", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.1em" }}>{p.font_label}</span>
                <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.02em" }}>{p.font_value}</span>
              </div>
            </div>
          </div>

          <hr style={RULE} />

          {/* Screenshots */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
            <span style={LABEL}>{p.screenshots_label}</span>
            <div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 0.75rem" }}>{p.screenshots_title}</h2>
              <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.7, margin: "0 0 2.5rem" }}>{p.screenshots_sub}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                {SCREEN_SRCS.map((src, i) => (
                  <div key={i}>
                    <div style={{ position: "relative", width: "100%", paddingBottom: "114.9%", backgroundColor: "#f0f0f0", borderRadius: "16px", overflow: "hidden", marginBottom: "1rem" }}>
                      <Image src={src} alt={p.screens[i].label} fill style={{ objectFit: "contain", objectPosition: "bottom" }} />
                    </div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.2rem" }}>{p.screens[i].label}</p>
                    <p style={{ fontSize: "0.8125rem", color: "#aaa", margin: 0 }}>{p.screens[i].caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr style={RULE} />

          {/* About */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
            <span style={LABEL}>{p.about_label}</span>
            <div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 1.5rem" }}>{p.about_title}</h2>
              <p style={{ fontSize: "1.0625rem", color: "#444", lineHeight: 1.85, margin: "0 0 2rem" }}>{p.about_body}</p>
              <div style={{ padding: "1.5rem 2rem", backgroundColor: "#0d0d0d", borderRadius: "14px" }}>
                <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em", margin: 0, fontStyle: "italic" }}>"{p.about_tagline}"</p>
              </div>
            </div>
          </div>

          <hr style={RULE} />

          {/* Bottom CTA */}
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 1.25rem" }}>
              {lang === "en" ? "Questions?" : "Des questions ?"}
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#888", margin: "0 0 2rem" }}>
              {lang === "en" ? "Our team is available for interviews, demos, and media requests." : "Notre équipe est disponible pour les interviews, démos et demandes médias."}
            </p>
            <a
              href="mailto:press@attax.app"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 30px", borderRadius: "999px", textDecoration: "none" }}
            >
              press@attax.app
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
