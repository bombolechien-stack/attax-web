"use client";

import { useT } from "@/lib/i18n";

export default function Banner() {
  const t = useT();
  return (
    <div className="banner-root" style={{ width: "100%", backgroundColor: "#fff", height: "38px", fontSize: "0.8125rem", fontWeight: 500, color: "#333", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 10001 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
        <span>{t.banner}</span>
        <a href="/download" style={{ color: "#333333", fontWeight: 700, textDecoration: "none" }}>{t.banner_cta} →</a>
      </div>
    </div>
  );
}
