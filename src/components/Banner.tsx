"use client";

import { useT } from "@/lib/i18n";

export default function Banner() {
  const t = useT();
  return (
    <div className="banner-root" style={{ backgroundColor: "#fff", borderBottom: "1px solid #f0f0f0", textAlign: "center", padding: "9px 16px", fontSize: "0.8125rem", fontWeight: 500, color: "#333", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", position: "relative", zIndex: 10001 }}>
      {t.banner}
      <span style={{ color: "#333333", fontWeight: 600, cursor: "pointer" }}>Learn more →</span>
    </div>
  );
}
