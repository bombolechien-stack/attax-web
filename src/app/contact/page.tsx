"use client";

// Contact (21/11) : système de l'accueil (src/components/site/Site.tsx). Mêmes textes (translations.ts → contact) ;
// formulaire inchangé (POST /api/contact).
import { useState } from "react";
import { useT } from "@/lib/i18n";
import { SitePage, PageHero, PhotoBg, Sec, Reveal, FinalCta } from "@/components/site/Site";

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

  return (
    <SitePage>
      <PageHero full bg={<PhotoBg src="/images/strength.jpg" alt="Contact Attax" pos="center 30%" c="13,13,13" a={[0.95, 0.75, 0.3]} b={0.8} />} kick={c.hero_label} title={c.h1} lead={c.subtitle} stats={c.hero_stats} />

      <section className="sp-sec">
        <div className="p5-wrap sp-contact">
          <div>
            <p className="st6-kick">{c.categories_label}</p>
            <Reveal as="ul" className="sp-cats">
              {c.categories.map((cat) => (
                <li key={cat.title}>
                  <h2 className="sp-li-t">{cat.title}</h2>
                  <p className="sp-li-b">{cat.desc}</p>
                  <a href={`mailto:${cat.email}`}>{cat.email}</a>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal className="sp-surface">
            {done ? (
              <div className="sp-ok">
                <b style={{ display: "block", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.35rem" }}>{c.form_success_title ?? "Message sent!"}</b>
                {c.form_success_body ?? "We'll get back to you as soon as possible."}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="sp-form">
                <div className="sp-form-row">
                  <label className="sp-field">
                    <span>{c.form_name}</span>
                    <input className="sp-input" type="text" required value={name} onChange={e => setName(e.target.value)} placeholder={c.form_name} />
                  </label>
                  <label className="sp-field">
                    <span>{c.form_email}</span>
                    <input className="sp-input" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
                  </label>
                </div>
                <label className="sp-field">
                  <span>{c.form_subject}</span>
                  <input className="sp-input" type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder={c.form_subject_placeholder} />
                </label>
                <label className="sp-field">
                  <span>{c.form_message}</span>
                  <textarea className="sp-input" required rows={6} value={message} onChange={e => setMessage(e.target.value)} placeholder={c.form_message_placeholder} />
                </label>
                {error && <p className="sp-err">{error}</p>}
                <div className="sp-form-foot">
                  <button type="submit" className="h7-btn h7-btn-ink" disabled={sending}>
                    {sending ? (c.form_sending ?? "Sending…") : c.form_submit}
                  </button>
                  <p className="sp-note">{c.form_note}</p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <Sec kick={c.faq_label} title={c.faq_h2}>
        <div className="h7-faq-list">
          {c.faq.map((item: { q: string; a: string }, i: number) => (
            <Reveal key={i} className="h7-faq-item">
              <h3 className="h7-faq-q" style={{ cursor: "default", margin: 0 }}>{item.q}</h3>
              <p className="h7-faq-a">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec kick={c.community_label} title={c.community_h2}>
        <Reveal className="h7-grid is-in sp-links">
          {c.community_links.map((link: { platform: string; handle: string; href: string; desc: string }) => (
            <a key={link.platform} className="h7-cell" href={link.href} target="_blank" rel="noopener noreferrer">
              <span className="h7-n">{link.platform}</span>
              <h3 className="h7-h3">{link.handle}</h3>
              <p className="h7-p">{link.desc}</p>
            </a>
          ))}
        </Reveal>
      </Sec>

      <FinalCta />
    </SitePage>
  );
}
