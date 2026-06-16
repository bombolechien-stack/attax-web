"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 80% 60%, rgba(249,115,22,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 text-center w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-xs font-semibold tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
          Now in Beta — Join the movement
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-6">
          Keep moving
          <br />
          <span className="text-[#f97316]">with Attax</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg sm:text-xl text-[#a1a1aa] leading-relaxed mb-10">
          Move, progress, and stay motivated every day. Every step counts. Every effort brings you closer to your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3.5 bg-[#f97316] text-white font-semibold rounded-full hover:bg-[#ea6f00] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.3)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on iOS
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.76-11.67L13 8.4 3.18 23.76zm16.56-9.29L16.6 12l3.14-2.47L5.27.28C4.98.1 4.65.03 4.33.06L16.98 12l2.76 2.47zM21.4 10.6L18.96 12l2.44 1.4c.68.39.68 1.02 0 1.41l-1.97 1.13-2.76-2.47-2.91 2.66 2.76 2.47-1.65.95c-.68.39-1.78.39-2.46 0l-12.7-7.34C.02 12 0 11.52 0 11.52s.02-.48.35-.67l2.83-1.63L16.6 12l2.84-2.47 1.97 1.13c.68.39.68 1.02 0 1.41l-.01-.07z"/>
            </svg>
            Get on Android
          </a>
          <Link
            href="/discover"
            className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors underline underline-offset-4"
          >
            Learn more →
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "10K+", label: "Athletes" },
            { value: "50+", label: "Countries" },
            { value: "1M+", label: "Workouts tracked" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">{s.value}</div>
              <div className="text-xs text-[#71717a] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none bg-gradient-to-t from-[#09090b] to-transparent" />
    </section>
  );
}
