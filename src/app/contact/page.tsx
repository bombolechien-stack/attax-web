"use client";

import Image from "next/image";
import { useState } from "react";
import PageNavbar from "@/components/PageNavbar";
import { useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, slideLeft, scaleIn } from "@/hooks/useInView";

function FaqItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} style={{ padding: "2rem 0", borderTop: "1px solid #e8e8e8" }}>
      <h3 style={{ ...slideLeft(visible, 0), fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.75rem", letterSpacing: "-0.02em" }}>{item.q}</h3>
      <p style={{ ...fadeUp(visible, 80), fontSize: "1rem", color: "#666", lineHeight: 1.8, margin: 0 }}>{item.a}</p>
    </div>
  );
}

export default function ContactPage() {
  const t = useT();
  const c = t.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { ref: heroTextRef, visible: heroTextVisible } = useInView<HTMLDivElement>(0.1, { oneShot: true });
  const { ref: catsRef, visible: catsVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: formRef, visible: formVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: faqHeaderRef, visible: faqHeaderVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: communityRef, visible: communityVisible } = useInView<HTMLDivElement>(0.1);

  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error("error");
      setDone(true);
    } catch {
      setError(c.form_error ?? "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const INPUT_STYLE: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1px solid #e8e8e8",
    backgroundColor: "#ffffff",
    fontSize: "0.9375rem",
    color: "#0d0d0d",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  return (
    <>
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{ position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px", minHeight: "calc(100vh - 24px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Image src="/images/strength.jpg" alt="Contact Attax" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.75) 55%, rgba(13,13,13,0.3) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 50%)" }} />
          <PageNavbar />
          <div ref={heroTextRef} className="contact-hero-content" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 4rem 4rem", textAlign: "center" }}>
            <p style={{ ...fadeUp(heroTextVisible, 0), fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", margin: "0 0 1.25rem" }}>{c.hero_label}</p>
            <div style={{ overflow: "hidden" }}>
              <h1 style={{ ...clipReveal(heroTextVisible, 80), fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.25rem" }}>{c.h1}</h1>
            </div>
            <p style={{ ...fadeUp(heroTextVisible, 200), fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "440px", margin: "0 auto 2.5rem" }}>{c.subtitle}</p>
            {/* Scroll indicator */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: 0.35 }}>
              <span style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.14em", color: "#fff", textTransform: "uppercase" }}>Scroll</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v10M4 8l4 4 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
          {/* Stats bar */}
          <div className="hero-stats" style={{ position: "relative", zIndex: 3, display: "flex", padding: "0 4rem clamp(2.5rem, 4vh, 4rem)", gap: 0 }}>
            {c.hero_stats.map((s: { title: string; sub: string }, i: number) => (
              <div key={i} style={{ paddingLeft: i > 0 ? "2.5rem" : 0, marginLeft: i > 0 ? "2.5rem" : 0, borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "3px" }}>{s.title}</div>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="contact-section" style={{ backgroundColor: "#ffffff", padding: "5rem 2rem 6rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <div ref={catsRef} className="contact-cats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", marginBottom: "3rem" }}>
            {c.categories.map((cat, i) => (
              <div key={cat.title} className="premium-card" style={{ padding: "1.75rem", borderRadius: "20px", backgroundColor: "#f7f7f7", textAlign: "center", ...scaleIn(catsVisible, i * 80, 0.96) }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.4rem" }}>{cat.title}</div>
                <div style={{ fontSize: "0.8125rem", color: "#888", lineHeight: 1.5, marginBottom: "0.75rem" }}>{cat.desc}</div>
                <a href={`mailto:${cat.email}`} style={{ fontSize: "0.8125rem", color: "#0d0d0d", fontWeight: 600, textDecoration: "none" }}>{cat.email}</a>
              </div>
            ))}
          </div>

          <div ref={formRef} className="contact-form-box" style={{ backgroundColor: "#f7f7f7", borderRadius: "24px", padding: "3rem", ...scaleIn(formVisible, 0, 0.98) }}>
            {done ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.5rem" }}>{c.form_success_title ?? "Message sent!"}</p>
                <p style={{ fontSize: "1rem", color: "#666", margin: 0 }}>{c.form_success_body ?? "We'll get back to you as soon as possible."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{c.form_name}</label>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder={c.form_name} style={INPUT_STYLE} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{c.form_email}</label>
                    <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" style={INPUT_STYLE} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{c.form_subject}</label>
                  <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder={c.form_subject_placeholder} style={INPUT_STYLE} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{c.form_message}</label>
                  <textarea required rows={6} value={message} onChange={e => setMessage(e.target.value)} placeholder={c.form_message_placeholder} style={{ ...INPUT_STYLE, resize: "none" }} />
                </div>
                {error && <p style={{ fontSize: "0.875rem", color: "#c00", margin: 0 }}>{error}</p>}
                <button type="submit" disabled={sending} style={{ backgroundColor: "#0d0d0d", color: "#ffffff", fontWeight: 700, fontSize: "1rem", padding: "15px 32px", borderRadius: "999px", border: "none", cursor: sending ? "not-allowed" : "pointer", fontFamily: "inherit", opacity: sending ? 0.6 : 1 }}>
                  {sending ? (c.form_sending ?? "Sending…") : c.form_submit}
                </button>
                <p style={{ fontSize: "0.8125rem", color: "#aaa", textAlign: "center", margin: 0 }}>{c.form_note}</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f7f7f7", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <div ref={faqHeaderRef}>
            <p style={{ ...fadeUp(faqHeaderVisible, 0), fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#aaa", margin: "0 0 1.25rem" }}>{c.faq_label}</p>
            <div style={{ overflow: "hidden" }}>
              <h2 style={{ ...clipReveal(faqHeaderVisible, 80), fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.05, margin: "0 0 3.5rem" }}>{c.faq_h2}</h2>
            </div>
          </div>
          <div>
            {c.faq.map((item: { q: string; a: string }, i: number) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#0d0d0d", padding: "7rem 2rem" }}>
        <div ref={communityRef} style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <p style={{ ...fadeUp(communityVisible, 0), fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 1.25rem" }}>{c.community_label}</p>
          <div style={{ overflow: "hidden" }}>
            <h2 style={{ ...clipReveal(communityVisible, 80), fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1.05, margin: "0 0 3.5rem" }}>{c.community_h2}</h2>
          </div>
          <div className="community-links-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {c.community_links.map((link: { platform: string; handle: string; href: string; desc: string }, i: number) => (
              <a key={link.platform} href={link.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "2rem", borderRadius: "20px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none", transition: "background-color 0.2s ease", ...scaleIn(communityVisible, i * 80, 0.96) }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.09)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{link.platform}</div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>{link.handle}</div>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0 }}>{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
