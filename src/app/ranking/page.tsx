import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Ranking — Attax",
  description: "The Attax global ranking — see where athletes stand worldwide. Coming soon.",
};

export default function RankingPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-xs font-semibold tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
          Coming in V2
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
          Global<br /><span className="text-[#f97316]">Rankings</span>
        </h1>
        <p className="text-[#a1a1aa] leading-relaxed mb-8">
          The global Attax leaderboard is in development. Soon you&apos;ll be able to see how you rank against athletes worldwide, filtered by sport, city, and country.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-[#f97316] text-white font-semibold rounded-full hover:bg-[#ea6f00] transition-all"
        >
          ← Back home
        </Link>
      </div>
    </section>
  );
}
