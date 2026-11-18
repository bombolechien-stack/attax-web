"use client";

import { Fragment } from "react";
import { useLang } from "@/lib/i18n";

export default function LangSwitcher({ light = false }: { light?: boolean } = {}) {
  const { lang, setLang } = useLang();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {(["en", "fr"] as const).map((l, i) => (
        <Fragment key={l}>
          {i > 0 && (
            <span key={`sep-${l}`} style={{ fontSize: "0.6875rem", color: light ? "rgba(11,17,22,0.2)" : "rgba(255,255,255,0.2)", userSelect: "none" }}>·</span>
          )}
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              background: "none",
              border: "none",
              cursor: lang === l ? "default" : "pointer",
              padding: "4px 6px",
              fontSize: "0.75rem",
              fontWeight: lang === l ? 700 : 500,
              letterSpacing: "0.08em",
              color: lang === l ? (light ? "#0B1116" : "#ffffff") : (light ? "rgba(11,17,22,0.4)" : "rgba(255,255,255,0.38)"),
              textTransform: "uppercase",
              transition: "color 0.2s",
              lineHeight: 1,
            }}
            aria-label={`Switch to ${l === "en" ? "English" : "Français"}`}
          >
            {l}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
