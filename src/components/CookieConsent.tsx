"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const KEY = "attax_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("attax_preview_unlocked") !== "1") return;
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const { lang } = useLang();

  function accept() {
    localStorage.setItem(KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "1.5rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 99999,
      width: "calc(100% - 3rem)",
      maxWidth: "640px",
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 8px 40px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.06)",
      padding: "1.5rem 1.75rem",
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      flexWrap: "wrap",
      fontFamily: "var(--font-jakarta), -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <p style={{
        flex: 1,
        margin: 0,
        fontSize: "0.875rem",
        color: "#444",
        lineHeight: 1.6,
        minWidth: "200px",
      }}>
        {lang === "fr" ? "Zéro pub, zéro pistage : ce site ne retient que ta langue et tes préférences." : "No ads, no tracking: this site only stores your language and preferences."}{" "}
        <a href="/cookie-policy" style={{ color: "#0d0d0d", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "2px" }}>
          {lang === "fr" ? "En savoir plus" : "Learn more"}
        </a>
      </p>
      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        <button
          onClick={accept}
          style={{
            padding: "9px 20px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#0d0d0d",
            color: "#ffffff",
            fontSize: "0.875rem",
            fontWeight: 700,
            fontFamily: "inherit",
            cursor: "pointer",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          OK
        </button>
      </div>
    </div>
  );
}
