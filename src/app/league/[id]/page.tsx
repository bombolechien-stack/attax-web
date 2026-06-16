import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `League #${id} — Attax`,
    description: `Join or view this Attax league: participants, scores, and rankings.`,
  };
}

export default async function LeaguePage({ params }: Props) {
  const { id } = await params;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-xs font-semibold tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
          Coming in V2
        </div>
        <h1 className="text-5xl font-black text-white mb-2">
          League <span className="text-[#f97316]">#{id}</span>
        </h1>
        <p className="text-[#a1a1aa] leading-relaxed mb-8">
          Public league pages are coming in Attax V2. Each league will have its own shareable page with participants, live scores, and a countdown to the end date.
        </p>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-6 py-3 bg-[#f97316] text-white font-semibold rounded-full hover:bg-[#ea6f00] transition-all"
        >
          Download Attax
        </a>
      </div>
    </section>
  );
}
