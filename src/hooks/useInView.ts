"use client";
import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element = HTMLDivElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function fadeUp(visible: boolean, delay = 0): React.CSSProperties {
  return {
    display: "block",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.95s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.95s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    willChange: "opacity, transform",
  };
}

export function fadeIn(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    willChange: "opacity",
  };
}

export function scaleIn(visible: boolean, delay = 0, from = 0.94): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "scale(1)" : `scale(${from})`,
    transition: `opacity 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    willChange: "opacity, transform",
  };
}
