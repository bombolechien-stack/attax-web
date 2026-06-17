"use client";

import Link from "next/link";
import { useT, useLang } from "@/lib/i18n";
import { NOT_FOUND } from "@/lib/translations";

export default function NotFound() {
  const { lang } = useLang();
  const t = NOT_FOUND[lang];

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      backgroundColor: "#070707",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>

      {/* Background glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.035) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Grid lines */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent calc(16.666% - 0.5px), rgba(255,255,255,0.028) calc(16.666% - 0.5px), rgba(255,255,255,0.028) 16.666%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "0 1.5rem",
      }}>

        {/* 404 */}
        <p style={{
          fontSize: "clamp(7rem, 20vw, 14rem)",
          fontWeight: 800,
          color: "rgba(255,255,255,0.04)",
          letterSpacing: "-0.06em",
          lineHeight: 1,
          margin: 0,
          userSelect: "none",
          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
        }}>
          {t.code}
        </p>

        {/* Main heading */}
        <h1 style={{
          fontSize: "clamp(1.75rem, 5vw, 3.25rem)",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          margin: "-1.5rem 0 0",
          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
        }}>
          {t.title}
        </h1>

        {/* Subtitle */}
        <p style={{
          marginTop: "1.25rem",
          fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)",
          color: "rgba(255,255,255,0.42)",
          lineHeight: 1.6,
          maxWidth: "360px",
          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
        }}>
          {t.body}
        </p>

        {/* CTAs */}
        <div style={{
          marginTop: "2.5rem",
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          <Link href="/" style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "13px 28px",
            borderRadius: "999px",
            backgroundColor: "#ffffff",
            color: "#0d0d0d",
            fontWeight: 700,
            fontSize: "0.9375rem",
            textDecoration: "none",
            fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
            whiteSpace: "nowrap",
          }}>
            {t.cta_home}
          </Link>
          <Link href="/discover" style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "13px 28px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.12)",
            backgroundColor: "rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.7)",
            fontWeight: 600,
            fontSize: "0.9375rem",
            textDecoration: "none",
            fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
            whiteSpace: "nowrap",
          }}>
            {t.cta_discover}
          </Link>
        </div>

      </div>
    </div>
  );
}
