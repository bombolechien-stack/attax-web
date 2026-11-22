// Textes repris tels quels du site en ligne (branche master, 21/11), dans src/lib/liveCopy.ts. Mise en forme : passe 7
// (21/11), en-tête du système des chapitres et liste à filets (classes .h7-* de src/app/home-p5.css).
"use client";

import { useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { LIVE } from "@/lib/liveCopy";
import { useInView } from "@/hooks/useInView";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const t = { ...useT(), ...LIVE[useLang().lang] };
  const f = t.faq;
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });

  return (
    <section id="faq" className="h7 h7-faq">
      <div className="p5-wrap">
        <div ref={ref} className={`h7-head h7-faq-head${visible ? " is-in" : ""}`}>
          <div>
            <p className="st6-kick">{f.label}</p>
            <h2 className="h7-h2">{f.h2}</h2>
          </div>
          <div className="h7-faq-side">
            <p>
              {f.contact_text}{" "}
              <a href="/contact">{f.contact_link}</a>.
            </p>
            <div className="h7-ctas">
              <a className="h7-btn h7-btn-ink" href="/faq">{f.all_link} →</a>
            </div>
          </div>
        </div>
        <div className="h7-faq-list">
          {f.items.map((faq, i) => (
            <div key={i} className={`h7-faq-item${open === i ? " is-open" : ""}`}>
              <button className="h7-faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{faq.q}</span>
                <span className="h7-plus" aria-hidden="true">+</span>
              </button>
              {open === i && <p className="h7-faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
