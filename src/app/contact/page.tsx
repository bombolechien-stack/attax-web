"use client";

import Image from "next/image";
import { useState } from "react";
import PageNavbar from "@/components/PageNavbar";
import { useT } from "@/lib/i18n";

export default function ContactPage() {
  const t = useT();
  const c = t.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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
      <div style={{ backgroundColor: "#ffffff", padding: "12px" }}>
        <div style={{ position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px", height: "calc(100vh - 24px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Image src="/images/strength.jpg" alt="Contact Attax" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.75) 55%, rgba(13,13,13,0.3) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 50%)" }} />
          <PageNavbar />
          <div className="contact-hero-content" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 4rem 4rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", margin: "0 0 1.25rem" }}>{c.hero_label}</p>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.25rem" }}>{c.h1}</h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "440px", margin: "0 auto" }}>{c.subtitle}</p>
          </div>
        </div>
      </div>

      <section className="contact-section" style={{ backgroundColor: "#ffffff", padding: "5rem 2rem 6rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <div className="contact-cats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", marginBottom: "3rem" }}>
            {c.categories.map((cat) => (
              <div key={cat.title} className="premium-card" style={{ padding: "1.75rem", borderRadius: "20px", backgroundColor: "#f7f7f7", textAlign: "center" }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.4rem" }}>{cat.title}</div>
                <div style={{ fontSize: "0.8125rem", color: "#888", lineHeight: 1.5, marginBottom: "0.75rem" }}>{cat.desc}</div>
                <a href={`mailto:${cat.email}`} style={{ fontSize: "0.8125rem", color: "#0d0d0d", fontWeight: 600, textDecoration: "none" }}>{cat.email}</a>
              </div>
            ))}
          </div>

          <div className="contact-form-box" style={{ backgroundColor: "#f7f7f7", borderRadius: "24px", padding: "3rem" }}>
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
    </>
  );
}
