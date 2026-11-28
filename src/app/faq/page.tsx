"use client";

// FAQ (21/11) : système de l'accueil (src/components/site/Site.tsx) ; contenu inchangé (./content.ts, données structurées
// dans layout.tsx). Catégories : titre à gauche, questions à filets à droite (accordéon de l'accueil, .h7-faq-*).
import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { FAQ_CONTENT, type FaqItem } from "./content";
import { SitePage, PageHero, Head, Reveal, FinalCta, Lines } from "@/components/site/Site";
import Gear from "@/components/site/Gear";

function Answer({ item }: { item: FaqItem }) {
  return (
    <div className="h7-faq-a sp-prose">
      <p>{item.a}</p>
      {item.list && <ul>{item.list.map((li, i) => <li key={i}>{li}</li>)}</ul>}
      {item.after && <p>{item.after}</p>}
      {item.link && <p><a className="sp-faq-link" href={item.link.href}>{item.link.label} →</a></p>}
    </div>
  );
}

export default function FaqPage() {
  const { lang } = useLang();
  const c = FAQ_CONTENT[lang];
  const [open, setOpen] = useState<string | null>(null);

  return (
    <SitePage>
      <PageHero bg={<></>} kick={c.heroLabel} title={<Lines text={c.heroTitle} />} lead={c.heroSub}>
        {c.categories.map((cat) => (
          <a key={cat.id} className="h7-btn h7-btn-ghost sp-chip" href={`#${cat.id}`}>{cat.label}</a>
        ))}
      </PageHero>

      <div className="sp-sec">
        <div className="p5-wrap">
          {c.categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="sp-faqcat">
              <Head kick={cat.label} title={cat.title} />
              <div className="h7-faq-list">
                {cat.items.map((item, i) => {
                  const key = `${cat.id}-${i}`;
                  const isOpen = open === key;
                  return (
                    <div key={key} className={`h7-faq-item${isOpen ? " is-open" : ""}`}>
                      <button className="h7-faq-q" onClick={() => setOpen(isOpen ? null : key)} aria-expanded={isOpen}>
                        <span>{item.q}</span>
                        <span className="h7-plus" aria-hidden="true">+</span>
                      </button>
                      {isOpen && <Answer item={item} />}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <Reveal className="h7-mid-row is-in sp-faq-contact">
            <div>
              <p className="h7-mid-t">{c.contactTitle}</p>
              <p className="sp-note" style={{ marginTop: "0.5rem", fontSize: "1.0625rem" }}>{c.contactBody}</p>
            </div>
            <div className="h7-ctas" style={{ marginTop: 0 }}>
              <Link className="h7-btn h7-btn-ink" href="/contact">{c.contactCta}</Link>
            </div>
          </Reveal>
        </div>
      </div>

      <Gear />

      <FinalCta />
    </SitePage>
  );
}
