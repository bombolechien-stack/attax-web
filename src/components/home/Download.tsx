export default function Download() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="relative rounded-3xl overflow-hidden p-12 md:p-20"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 50% 50%, rgba(249,115,22,0.15) 0%, rgba(24,24,27,0.8) 60%)",
            border: "1px solid rgba(249,115,22,0.2)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 70%)"
            }}
          />
          <div className="relative">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">
              Join the adventure
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
              Sport begins
              <br />
              <span className="text-[#f97316]">now.</span>
            </h2>
            <p className="text-[#a1a1aa] max-w-md mx-auto mb-10 leading-relaxed">
              Every step counts. Every effort brings you closer to your goals. Become the best version of yourself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-[#f97316] text-white font-bold rounded-full hover:bg-[#ea6f00] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(249,115,22,0.4)]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/15 transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.76-11.67L13 8.4 3.18 23.76zm16.56-9.29L16.6 12l3.14-2.47L5.27.28C4.98.1 4.65.03 4.33.06L16.98 12l2.76 2.47zM21.4 10.6L18.96 12l2.44 1.4c.68.39.68 1.02 0 1.41l-1.97 1.13-2.76-2.47-2.91 2.66 2.76 2.47-1.65.95c-.68.39-1.78.39-2.46 0l-12.7-7.34C.02 12 0 11.52 0 11.52s.02-.48.35-.67l2.83-1.63L16.6 12l2.84-2.47 1.97 1.13c.68.39.68 1.02 0 1.41l-.01-.07z"/>
                </svg>
                Google Play
              </a>
            </div>

            <p className="mt-8 text-xs text-[#52525b]">
              Free to download · iOS 15+ · Android 8.0+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
