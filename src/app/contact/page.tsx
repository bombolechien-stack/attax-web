import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageNavbar from "@/components/PageNavbar";

export const metadata: Metadata = {
  title: "Contact — Attax",
  description: "Get in touch with the Attax team. Questions, feedback, partnerships — we'd love to hear from you.",
};

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero — with navbar embedded inside dark block */}
      <div style={{ backgroundColor: "#ffffff", padding: "12px" }}>
        <div style={{
          position: "relative",
          backgroundColor: "#0d0d0d",
          borderRadius: "24px",
          height: "calc(100vh - 24px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          <Image
            src="/images/strength.jpg"
            alt="Contact Attax"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.75) 55%, rgba(13,13,13,0.3) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 50%)",
          }} />

          {/* ── Navbar ── */}
          <PageNavbar />

          {/* ── Hero Content ── */}
          <div style={{
            position: "relative", zIndex: 3,
            flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "3rem 4rem 4rem",
            textAlign: "center",
          }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Contact</p>
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800, color: "#ffffff",
              lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.25rem",
            }}>
              Let&apos;s talk.
            </h1>
            <p style={{
              fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7, maxWidth: "440px", margin: "0 auto",
            }}>
              Have a question, feedback, or a partnership idea? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact cards + form */}
      <section style={{ backgroundColor: "#ffffff", padding: "5rem 2rem 6rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>

          {/* Contact categories */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", marginBottom: "3rem" }}>
            {[
              { icon: "01", title: "General", desc: "Questions about the app or how Attax works", email: "hello@attax.app" },
              { icon: "02", title: "Partnership", desc: "Brand deals, events, sport organizations", email: "partners@attax.app" },
              { icon: "03", title: "Support", desc: "Bug reports or account issues", email: "support@attax.app" },
            ].map((c) => (
              <div key={c.title} className="premium-card" style={{ padding: "1.75rem", borderRadius: "20px", backgroundColor: "#f7f7f7", textAlign: "center" }}>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", marginBottom: "1rem" }}>{c.icon}</div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.4rem" }}>{c.title}</div>
                <div style={{ fontSize: "0.8125rem", color: "#888", lineHeight: 1.5, marginBottom: "0.75rem" }}>{c.desc}</div>
                <a href={`mailto:${c.email}`} style={{ fontSize: "0.8125rem", color: "#0d0d0d", fontWeight: 600, textDecoration: "none" }}>{c.email}</a>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ backgroundColor: "#f7f7f7", borderRadius: "24px", padding: "3rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.03em", margin: "0 0 2rem" }}>Send us a message</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                {[
                  { label: "Name", type: "text", placeholder: "Your name" },
                  { label: "Email", type: "email", placeholder: "you@example.com" },
                ].map((f) => (
                  <div key={f.label}>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} style={{
                      width: "100%", padding: "12px 16px", borderRadius: "12px",
                      border: "1px solid #e8e8e8", backgroundColor: "#ffffff",
                      fontSize: "0.9375rem", color: "#0d0d0d", outline: "none",
                      fontFamily: "inherit", boxSizing: "border-box",
                    }} />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Subject</label>
                <input type="text" placeholder="What's this about?" style={{
                  width: "100%", padding: "12px 16px", borderRadius: "12px",
                  border: "1px solid #e8e8e8", backgroundColor: "#ffffff",
                  fontSize: "0.9375rem", color: "#0d0d0d", outline: "none",
                  fontFamily: "inherit", boxSizing: "border-box",
                }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Message</label>
                <textarea rows={6} placeholder="Tell us more..." style={{
                  width: "100%", padding: "12px 16px", borderRadius: "12px",
                  border: "1px solid #e8e8e8", backgroundColor: "#ffffff",
                  fontSize: "0.9375rem", color: "#0d0d0d", outline: "none",
                  fontFamily: "inherit", resize: "none", boxSizing: "border-box",
                }} />
              </div>
              <button type="submit" style={{
                backgroundColor: "#0d0d0d", color: "#ffffff",
                fontWeight: 700, fontSize: "1rem",
                padding: "15px 32px", borderRadius: "999px",
                border: "none", cursor: "pointer", fontFamily: "inherit",
              }}>Send message</button>
              <p style={{ fontSize: "0.8125rem", color: "#aaa", textAlign: "center", margin: 0 }}>We typically respond within 48 hours.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
