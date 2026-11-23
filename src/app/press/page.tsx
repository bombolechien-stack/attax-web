"use client";

// Kit presse (22/11) : système de l'accueil (src/components/site/Site.tsx). Même contenu (./content.ts), mêmes fichiers
// à télécharger, mêmes boutons Copier. Fond d'origine de l'en-tête gardé (dégradé radial + colonnes fines).
import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { SitePage, PageHero, Sec, HairList, Reveal } from "@/components/site/Site";
import { PRESS_CONTENT, KIT_URL, LOGOS, SCREENS, VIDEO, SCREEN_PREVIEW } from "./content";

function DownloadIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>;
}

/** Fond d'origine de l'en-tête du kit presse : dégradé radial bleu nuit et six colonnes fines. */
function PressBg() {
  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: "#080808" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 30% 60%, rgba(20,20,40,0.9) 0%, rgba(8,8,8,1) 70%)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent calc(16.666% - 0.5px), rgba(255,255,255,0.025) calc(16.666% - 0.5px), rgba(255,255,255,0.025) 16.666%)" }} />
    </>
  );
}

function CopyBlock({ label, body, copy, copied }: { label: string; body: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="sp-copy">
      <div className="sp-copy-top">
        <span className="sp-label">{label}</span>
        <button
          type="button"
          className="h7-btn h7-btn-line sp-chip"
          onClick={() => { navigator.clipboard.writeText(body); setDone(true); setTimeout(() => setDone(false), 1500); }}
        >
          {done ? `✓ ${copied}` : copy}
        </button>
      </div>
      <div className="sp-prose">{body.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}</div>
    </div>
  );
}

function ColorSwatch({ color }: { color: { name: string; hex: string; usage: string } }) {
  const [copied, setCopied] = useState(false);
  const light = color.hex === "#FFFFFF";
  return (
    <div className="sp-swatch">
      <button
        type="button"
        onClick={() => { navigator.clipboard.writeText(color.hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
        style={{ backgroundColor: color.hex, color: light ? "#5A5F67" : "rgba(255,255,255,0.8)", boxShadow: light ? "inset 0 0 0 1px rgba(9,9,11,0.12)" : "none" }}
      >
        {copied ? "✓" : color.hex}
      </button>
      <b>{color.name}</b>
      <span>{color.usage}</span>
    </div>
  );
}

/** Grille à filets de l'accueil (h7-grid), apparition à l'entrée dans l'écran. */
function Grid({ items, four = false }: { items: { title: string; body: string }[]; four?: boolean }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.12, { oneShot: true });
  return (
    <div ref={ref} className={`h7-grid sp-grid${four ? " h7-grid-4" : ""}${visible ? " is-in" : ""}`}>
      {items.map((it) => (
        <div key={it.title} className="h7-cell">
          <h3 className="h7-h3">{it.title}</h3>
          <p className="h7-p">{it.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function PressPage() {
  const { lang } = useLang();
  const p = PRESS_CONTENT[lang];
  const [l1, ...rest] = p.hero_title.split("\n");

  return (
    <SitePage>
      <PageHero
        bg={<PressBg />}
        kick={p.hero_label}
        title={<><span>{l1}</span> {rest.length > 0 && <span><em>{rest.join(" ")}</em></span>}</>}
        lead={p.hero_sub}
        meta={p.kit_note}
      >
        <a className="h7-btn h7-btn-light" href={KIT_URL} download><DownloadIcon />{p.hero_cta}</a>
        <a className="h7-btn h7-btn-ghost" href={`mailto:${p.contact_email}`}>{p.hero_cta2}</a>
      </PageHero>

      {/* Le kit */}
      <Sec kick={p.kit_label} title={p.kit_title}>
        <HairList items={p.kit_items.map((k) => ({ title: k.title, body: k.desc }))} />
        <div className="sp-btns" style={{ marginTop: "2rem" }}>
          <a className="h7-btn h7-btn-ink" href={KIT_URL} download><DownloadIcon />{p.hero_cta}</a>
        </div>
      </Sec>

      {/* Chiffres clés */}
      <Sec kick={p.facts_label} title={p.facts_title}>
        <Reveal as="dl" className="sp-facts">
          {p.facts.map((f) => (
            <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
          ))}
        </Reveal>
      </Sec>

      {/* Textes prêts à l'emploi */}
      <Sec kick={p.texts_label} title={p.texts_title} lead={p.texts_sub} split>
        <Reveal className="sp-copies">
          {p.texts.map((t) => <CopyBlock key={t.label} label={t.label} body={t.body} copy={p.copy_btn} copied={p.copied_btn} />)}
        </Reveal>
      </Sec>

      {/* Comment ça marche */}
      <Sec kick={p.how_label} title={p.how_title}>
        <HairList items={p.how.map((h) => ({ title: h.title, body: h.body }))} />
      </Sec>

      {/* Créateurs */}
      <Sec kick={p.creators_label} title={p.creators_title} lead={p.creators_sub} split>
        <Grid items={p.ideas} />
        <div className="sp-tags">
          <span className="sp-label">{p.tags_label}</span>
          {p.tags.map((tag) => <span key={tag} className="sp-tag">{tag}</span>)}
        </div>
      </Sec>

      {/* Logos */}
      <Sec kick={p.logos_label} title={p.logos_title} lead={p.logos_sub} split>
        <Reveal className="sp-logos">
          {LOGOS.flatMap((l) => l.files.map((f) => {
            const dark = f.endsWith("white");
            return (
              <div key={f} className="sp-logo">
                <div className={`sp-logo-art${dark ? " is-dark" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/press/${f}.svg`} alt={`Attax: ${p.logo_names[l.key]}`} style={{ maxHeight: l.key === "icon" ? "72px" : "48px" }} />
                </div>
                <div className="sp-logo-foot">
                  <div><b>{p.logo_names[l.key]}</b><span>{dark ? p.on_dark : p.on_light}</span></div>
                  <div className="sp-logo-dl">
                    <a href={`/press/${f}.svg`} download>SVG</a>
                    <a href={`/press/${f}.png`} download>PNG</a>
                  </div>
                </div>
              </div>
            );
          }))}
        </Reveal>

        <p className="st6-kick" style={{ margin: "clamp(3rem, 5vw, 4rem) 0 1.25rem" }}>{p.colors_label}</p>
        <Reveal className="sp-swatches">
          {p.colors.map((c) => <ColorSwatch key={c.hex} color={c} />)}
        </Reveal>
        <div className="sp-fontrow">
          <span className="sp-label">{p.font_label}</span>
          <b>{p.font_value}</b>
        </div>
      </Sec>

      {/* Captures et vidéo */}
      <Sec kick={p.media_label} title={p.media_title} lead={p.media_sub} split>
        <Reveal className="sp-media">
          <figure>
            {/* 22/11 : la vidéo dans le même téléphone que les captures (cadre, île, barre d'état 9:41) */}
            <div className="sp-media-shot sp-media-phone">
              <div className="sp-media-scr">
                <div className="sp-media-status" aria-hidden="true"><b>9:41</b><i /><span><svg viewBox="0 0 18 12" width="18" height="12"><rect x="0" y="7" width="3" height="5" rx="1" /><rect x="5" y="4.5" width="3" height="7.5" rx="1" /><rect x="10" y="2" width="3" height="10" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" opacity=".3" /></svg><em /></span></div>
                <video key={lang} src={VIDEO(lang)} poster={`/press/attax-fight-night-${lang}-poster.jpg`} autoPlay muted loop playsInline preload="metadata" />
              </div>
            </div>
            <figcaption><b>{p.video_title}</b><span>{p.video_caption}</span></figcaption>
            <a className="sp-dl" href={VIDEO(lang)} download><DownloadIcon />{p.download}</a>
          </figure>
          {SCREENS.map((s, i) => (
            <figure key={s.n}>
              <div className="sp-media-shot">
                <Image src={SCREEN_PREVIEW(lang, s.n)} alt={p.screens[i].label} fill sizes="(max-width: 760px) 45vw, 260px" />
              </div>
              <figcaption><b>{p.screens[i].label}</b><span>{p.screens[i].caption}</span></figcaption>
              <a className="sp-dl" href={`/press/screens/${lang}/${s.file}`} download><DownloadIcon />{p.download}</a>
            </figure>
          ))}
        </Reveal>
      </Sec>

      {/* Bonnes pratiques */}
      <Sec kick={p.rules_label} title={p.rules_title}>
        <Reveal className="sp-dos">
          {([[p.rules_do_title, p.rules_do, false], [p.rules_dont_title, p.rules_dont, true]] as const).map(([title, items, no]) => (
            <div key={title}>
              <h3 className={`sp-dos-t${no ? " is-no" : ""}`}>{title}</h3>
              <ul className={`sp-dos-l${no ? " is-no" : ""}`}>
                {items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </Reveal>
      </Sec>

      {/* Contact */}
      <Sec kick={p.contact_label} title={p.contact_title} lead={p.contact_body}>
        <div className="sp-btns">
          <a className="h7-btn h7-btn-ink" href={`mailto:${p.contact_email}`}>{p.contact_email}</a>
        </div>
        <p className="sp-note" style={{ marginTop: "1rem" }}>{p.contact_response}</p>
        <p className="sp-note" style={{ marginTop: "0.5rem" }}>{p.partners_label} <a href={`mailto:${p.partners_email}`} style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>{p.partners_email}</a></p>
      </Sec>
    </SitePage>
  );
}
