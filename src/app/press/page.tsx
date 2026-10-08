"use client";

import Image from "next/image";
import { useState } from "react";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";
import { PRESS_CONTENT, KIT_URL, LOGOS, SCREENS, CARDS } from "./content";

const LABEL: React.CSSProperties = {
  fontSize: "0.6875rem", fontWeight: 700, color: "#aaa",
  letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "1.25rem",
};
const H2: React.CSSProperties = { fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 0.75rem" };
const SUB: React.CSSProperties = { fontSize: "1rem", color: "#888", lineHeight: 1.7, margin: "0 0 2.5rem" };
const RULE: React.CSSProperties = { border: "none", borderTop: "1px solid #ebebeb", margin: "5rem 0" };
const PILL: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", fontWeight: 700, color: "#0d0d0d", padding: "6px 12px", borderRadius: "999px", border: "1px solid #e2e2e2", textDecoration: "none", backgroundColor: "#fff" };

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="seo-section-grid" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
      <span style={LABEL}>{label}</span>
      <div>{children}</div>
    </div>
  );
}

function DownloadIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>;
}

function CopyBlock({ label, body, copy, copied }: { label: string; body: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false);
  return (
    <div style={{ border: "1px solid #ebebeb", borderRadius: "16px", padding: "1.5rem 1.75rem", marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: "0.875rem" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
        <button
          onClick={() => { navigator.clipboard.writeText(body); setDone(true); setTimeout(() => setDone(false), 1500); }}
          style={{ ...PILL, cursor: "pointer", fontFamily: "inherit" }}
        >
          {done ? `✓ ${copied}` : copy}
        </button>
      </div>
      {body.split("\n\n").map((para, i) => (
        <p key={i} style={{ fontSize: "1rem", color: "#333", lineHeight: 1.8, margin: i ? "0.875rem 0 0" : 0 }}>{para}</p>
      ))}
    </div>
  );
}

function ColorSwatch({ color }: { color: { name: string; hex: string; usage: string } }) {
  const [copied, setCopied] = useState(false);
  const light = color.hex === "#FFFFFF";
  return (
    <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #ebebeb" }}>
      <button
        onClick={() => { navigator.clipboard.writeText(color.hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
        style={{ width: "100%", height: "80px", backgroundColor: color.hex, border: "none", borderBottom: light ? "1px solid #ebebeb" : "none", cursor: "pointer", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", color: light ? "#999" : "rgba(255,255,255,0.7)", fontFamily: "inherit" }}
      >
        {copied ? "✓" : color.hex}
      </button>
      <div style={{ padding: "1rem 1.25rem" }}>
        <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.25rem" }}>{color.name}</div>
        <div style={{ fontSize: "0.8125rem", color: "#999" }}>{color.usage}</div>
      </div>
    </div>
  );
}

export default function PressPage() {
  const { lang } = useLang();
  const p = PRESS_CONTENT[lang];

  return (
    <>
      {/* Hero */}
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{ position: "relative", backgroundColor: "#080808", borderRadius: "24px", minHeight: "56vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 30% 60%, rgba(20,20,40,0.9) 0%, rgba(8,8,8,1) 70%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent calc(16.666% - 0.5px), rgba(255,255,255,0.025) calc(16.666% - 0.5px), rgba(255,255,255,0.025) 16.666%)" }} />
          <div style={{ position: "relative", zIndex: 10, flexShrink: 0 }}>
            <PageNavbar />
          </div>
          <div style={{ position: "relative", zIndex: 5, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem clamp(2rem, 5vw, 5rem) 4rem" }}>
            <span style={{ ...LABEL, color: "rgba(255,255,255,0.28)" }}>{p.hero_label}</span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.02, letterSpacing: "-0.045em", margin: "0 0 1.5rem", maxWidth: "760px", whiteSpace: "pre-line" }}>
              {p.hero_title}
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: "0 0 2.5rem", maxWidth: "560px" }}>{p.hero_sub}</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              <a href={KIT_URL} download style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none" }}>
                <DownloadIcon /> {p.hero_cta}
              </a>
              <a href={`mailto:${p.contact_email}`} style={{ display: "inline-flex", alignItems: "center", backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: "0.9375rem", padding: "13px 24px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}>
                {p.hero_cta2}
              </a>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)", margin: "1rem 0 0" }}>{p.kit_note}</p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "7rem 4rem" }} className="press-wrap">

          {/* Le kit */}
          <Section label={p.kit_label}>
            <h2 style={{ ...H2, margin: "0 0 2rem" }}>{p.kit_title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {p.kit_items.map((k) => (
                <div key={k.title} style={{ backgroundColor: "#f7f7f7", borderRadius: "16px", padding: "1.5rem" }}>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.02em", marginBottom: "0.4rem" }}>{k.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "#777", lineHeight: 1.6 }}>{k.desc}</div>
                </div>
              ))}
            </div>
            <a href={KIT_URL} download style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none" }}>
              <DownloadIcon /> {p.hero_cta}
            </a>
          </Section>

          <hr style={RULE} />

          {/* Chiffres clés */}
          <Section label={p.facts_label}>
            <h2 style={{ ...H2, margin: "0 0 2.5rem" }}>{p.facts_title}</h2>
            <div style={{ border: "1px solid #ebebeb", borderRadius: "16px", overflow: "hidden" }}>
              {p.facts.map((fact, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "2rem", padding: "1.1rem 1.75rem", borderBottom: i < p.facts.length - 1 ? "1px solid #f0f0f0" : "none", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em" }}>{fact.label}</span>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#0d0d0d" }}>{fact.value}</span>
                </div>
              ))}
            </div>
          </Section>

          <hr style={RULE} />

          {/* Textes prêts à l'emploi */}
          <Section label={p.texts_label}>
            <h2 style={H2}>{p.texts_title}</h2>
            <p style={SUB}>{p.texts_sub}</p>
            {p.texts.map((t) => <CopyBlock key={t.label} label={t.label} body={t.body} copy={p.copy_btn} copied={p.copied_btn} />)}
          </Section>

          <hr style={RULE} />

          {/* Comment ça marche */}
          <Section label={p.how_label}>
            <h2 style={{ ...H2, margin: "0 0 2rem" }}>{p.how_title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
              {p.how.map((h, i) => (
                <div key={h.title} style={{ border: "1px solid #ebebeb", borderRadius: "16px", padding: "1.5rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#c0c0c0", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{String(i + 1).padStart(2, "0")}</div>
                  <div style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>{h.title}</div>
                  <div style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.65 }}>{h.body}</div>
                </div>
              ))}
            </div>
          </Section>

          <hr style={RULE} />

          {/* Créateurs */}
          <Section label={p.creators_label}>
            <h2 style={H2}>{p.creators_title}</h2>
            <p style={SUB}>{p.creators_sub}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {p.ideas.map((idea) => (
                <div key={idea.title} style={{ backgroundColor: "#0d0d0d", borderRadius: "16px", padding: "1.5rem" }}>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>{idea.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{idea.body}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.1em", marginRight: "6px" }}>{p.tags_label}</span>
              {p.tags.map((tag) => <span key={tag} style={{ ...PILL, fontSize: "0.9375rem", padding: "8px 16px" }}>{tag}</span>)}
            </div>
          </Section>

          <hr style={RULE} />

          {/* Logos */}
          <Section label={p.logos_label}>
            <h2 style={H2}>{p.logos_title}</h2>
            <p style={SUB}>{p.logos_sub}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
              {LOGOS.flatMap((l) => l.files.map((f) => {
                const dark = f.endsWith("white");
                return (
                  <div key={f} style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #ebebeb" }}>
                    <div style={{ backgroundColor: dark ? "#0d0d0d" : "#ffffff", height: "150px", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/press/${f}.svg`} alt={`Attax — ${p.logo_names[l.key]}`} style={{ maxHeight: l.key === "icon" ? "72px" : "48px", maxWidth: "100%" }} />
                    </div>
                    <div style={{ padding: "1rem 1.25rem", backgroundColor: "#fafafa", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                      <div>
                        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d" }}>{p.logo_names[l.key]}</div>
                        <div style={{ fontSize: "0.75rem", color: "#999" }}>{dark ? p.on_dark : p.on_light}</div>
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <a href={`/press/${f}.svg`} download style={PILL}>SVG</a>
                        <a href={`/press/${f}.png`} download style={PILL}>PNG</a>
                      </div>
                    </div>
                  </div>
                );
              }))}
            </div>

            <p style={{ ...LABEL, marginBottom: "1rem" }}>{p.colors_label}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {p.colors.map((c) => <ColorSwatch key={c.hex} color={c} />)}
            </div>
            <div style={{ padding: "1.5rem 2rem", backgroundColor: "#f7f7f7", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.1em" }}>{p.font_label}</span>
              <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.02em" }}>{p.font_value}</span>
            </div>
          </Section>

          <hr style={RULE} />

          {/* Captures & vidéo */}
          <Section label={p.media_label}>
            <h2 style={H2}>{p.media_title}</h2>
            <p style={SUB}>{p.media_sub}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.5rem" }}>
              <div>
                <div style={{ position: "relative", width: "100%", paddingBottom: "205.6%", backgroundColor: "#ffffff", border: "1px solid #ebebeb", borderRadius: "16px", overflow: "hidden", marginBottom: "1rem" }}>
                  <video src="/press/attax-match-video.mp4" autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.2rem" }}>{p.video_title}</p>
                <p style={{ fontSize: "0.8125rem", color: "#aaa", margin: "0 0 0.75rem" }}>{p.video_caption}</p>
                <a href="/press/attax-match-video.mp4" download style={PILL}><DownloadIcon /> {p.download}</a>
              </div>
              {SCREENS.map((s, i) => (
                <div key={s.src}>
                  <div style={{ position: "relative", width: "100%", paddingBottom: "205.6%", backgroundColor: "#ffffff", border: "1px solid #ebebeb", borderRadius: "16px", overflow: "hidden", marginBottom: "1rem" }}>
                    <Image src={s.src} alt={p.screens[i].label} fill sizes="300px" style={{ objectFit: "contain" }} />
                  </div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.2rem" }}>{p.screens[i].label}</p>
                  <p style={{ fontSize: "0.8125rem", color: "#aaa", margin: "0 0 0.75rem" }}>{p.screens[i].caption}</p>
                  <a href={s.file} download style={PILL}><DownloadIcon /> {p.download}</a>
                </div>
              ))}
            </div>
          </Section>

          <hr style={RULE} />

          {/* Cartes */}
          <Section label={p.cards_label}>
            <h2 style={H2}>{p.cards_title}</h2>
            <p style={SUB}>{p.cards_sub}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "0.75rem" }}>
              {CARDS.map((c) => (
                <a key={c} href={`/cards/${c}.png`} download={`attax-card-${c}.png`} style={{ textDecoration: "none", backgroundColor: "#111", borderRadius: "14px", padding: "0.75rem 0.75rem 0.9rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
                    <Image src={`/cards/${c}.png`} alt={c} fill sizes="140px" style={{ objectFit: "contain" }} />
                  </div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase" }}>{c}</span>
                </a>
              ))}
            </div>
          </Section>

          <hr style={RULE} />

          {/* Bonnes pratiques */}
          <Section label={p.rules_label}>
            <h2 style={{ ...H2, margin: "0 0 2rem" }}>{p.rules_title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
              {[[p.rules_do_title, p.rules_do, "#0443FD", "✓"], [p.rules_dont_title, p.rules_dont, "#EC0420", "✕"]].map(([title, items, col, mark]) => (
                <div key={title as string} style={{ border: "1px solid #ebebeb", borderRadius: "16px", padding: "1.5rem 1.75rem" }}>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: col as string, marginBottom: "1rem" }}>{title as string}</div>
                  {(items as string[]).map((it) => (
                    <div key={it} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", color: "#444", lineHeight: 1.6, marginBottom: "0.6rem" }}>
                      <span style={{ color: col as string, fontWeight: 800 }}>{mark as string}</span><span>{it}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Section>

          <hr style={RULE} />

          {/* Contact */}
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <span style={{ ...LABEL, marginBottom: "1rem" }}>{p.contact_label}</span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 1.25rem" }}>{p.contact_title}</h2>
            <p style={{ fontSize: "1.0625rem", color: "#888", margin: "0 auto 2rem", maxWidth: "520px", lineHeight: 1.7 }}>{p.contact_body}</p>
            <a href={`mailto:${p.contact_email}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 30px", borderRadius: "999px", textDecoration: "none" }}>
              {p.contact_email}
            </a>
            <p style={{ fontSize: "0.875rem", color: "#aaa", marginTop: "1rem" }}>{p.contact_response}</p>
          </div>

        </div>
      </div>
    </>
  );
}
