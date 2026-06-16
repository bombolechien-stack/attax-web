"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Gradient blobs — style superpower.com */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(234,88,12,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(234,88,12,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Now in Beta — Join the movement
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-[0.95] mb-6">
            Move, progress,
            <br />
            <span className="text-orange-600">stay motivated.</span>
          </h1>

          <p className="max-w-xl text-lg sm:text-xl text-gray-500 leading-relaxed mb-10">
            Every step counts. Every effort brings you closer to your goals. Attax transforms your daily workouts into a competitive sport.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 hover:shadow-orange-200 hover:scale-105 active:scale-95"
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
              className="flex items-center gap-3 px-6 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.76-11.67L13 8.4 3.18 23.76zm16.56-9.29L16.6 12l3.14-2.47L5.27.28C4.98.1 4.65.03 4.33.06L16.98 12l2.76 2.47zM21.4 10.6L18.96 12l2.44 1.4c.68.39.68 1.02 0 1.41l-1.97 1.13-2.76-2.47-2.91 2.66 2.76 2.47-1.65.95c-.68.39-1.78.39-2.46 0l-12.7-7.34C.02 12 0 11.52 0 11.52s.02-.48.35-.67l2.83-1.63L16.6 12l2.84-2.47 1.97 1.13c.68.39.68 1.02 0 1.41l-.01-.07z"/>
              </svg>
              Get on Android
            </a>
            <Link
              href="/discover"
              className="flex items-center gap-1 px-2 py-3.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Learn more →
            </Link>
          </div>
        </div>

        {/* Social proof numbers */}
        <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-3 gap-8 max-w-md">
          {[
            { value: "10K+", label: "Athletes worldwide" },
            { value: "50+", label: "Countries" },
            { value: "1M+", label: "Workouts tracked" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-black text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
