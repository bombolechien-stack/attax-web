"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

export default function InView({
  children,
  className = "",
  style = {},
  delay = 0,
  blur = true,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  blur?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        filter: visible ? "blur(0px)" : blur ? "blur(4px)" : "none",
        transition: [
          `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          `transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          blur ? `filter 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms` : "",
        ].filter(Boolean).join(", "),
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
