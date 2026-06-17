"use client";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

interface UseInViewOptions {
  oneShot?: boolean;
}

export function useInView<T extends Element = HTMLDivElement>(
  threshold = 0.1,
  options: UseInViewOptions = {}
) {
  const { oneShot = false } = options;
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          if (oneShot) obs.disconnect();
        } else {
          if (!oneShot) setVisible(false);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, oneShot]);

  return { ref, visible };
}

const SPRING = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
const EXPO   = "cubic-bezier(0.16, 1, 0.3, 1)";

export function fadeUp(visible: boolean, delay = 0): CSSProperties {
  return {
    display: "block",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.55s ${EXPO} ${delay}ms, transform 0.55s ${EXPO} ${delay}ms`,
    willChange: "opacity, transform",
  };
}

export function fadeIn(visible: boolean, delay = 0): CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transition: `opacity 0.45s ${EXPO} ${delay}ms`,
    willChange: "opacity",
  };
}

export function scaleIn(visible: boolean, delay = 0, from = 0.94): CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "scale(1)" : `scale(${from})`,
    transition: `opacity 0.7s ${EXPO} ${delay}ms, transform 0.7s ${EXPO} ${delay}ms`,
    willChange: "opacity, transform",
  };
}

export function slideLeft(visible: boolean, delay = 0): CSSProperties {
  return {
    display: "block",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(-40px)",
    transition: `opacity 0.6s ${SPRING} ${delay}ms, transform 0.6s ${SPRING} ${delay}ms`,
    willChange: "opacity, transform",
  };
}

export function slideRight(visible: boolean, delay = 0): CSSProperties {
  return {
    display: "block",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(40px)",
    transition: `opacity 0.6s ${SPRING} ${delay}ms, transform 0.6s ${SPRING} ${delay}ms`,
    willChange: "opacity, transform",
  };
}

export function clipReveal(visible: boolean, delay = 0): CSSProperties {
  return {
    display: "block",
    clipPath: visible ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
    transform: visible ? "translateY(0)" : "translateY(10px)",
    transition: `clip-path 0.6s ${SPRING} ${delay}ms, transform 0.6s ${SPRING} ${delay}ms`,
    willChange: "clip-path, transform",
  };
}
