"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? el.scrollTop / total : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div aria-hidden="true" style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 9999, pointerEvents: "none" }}>
      <div style={{
        height: "100%",
        width: `${progress * 100}%`,
        background: "linear-gradient(90deg, rgba(96,165,250,0.9), rgba(255,255,255,0.7))",
        transition: "width 0.08s linear",
      }} />
    </div>
  );
}
