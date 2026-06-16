import type { Metadata } from "next";

type Props = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username} — Attax Athlete Profile`,
    description: `View ${username}'s public Attax profile: ranking, stats, and sports activity.`,
  };
}

export default async function PlayerProfilePage({ params }: Props) {
  const { username } = await params;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-full bg-[#18181b] border-2 border-[#27272a] flex items-center justify-center text-3xl mx-auto mb-6">
          🏃
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-xs font-semibold tracking-wide mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
          Coming in V2
        </div>
        <h1 className="text-4xl font-black text-white mb-2">
          @{username}
        </h1>
        <p className="text-[#a1a1aa] leading-relaxed mb-8">
          Public athlete profiles are coming in Attax V2. You&apos;ll be able to see rankings, stats, badges, and full activity history for any Attax athlete.
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
