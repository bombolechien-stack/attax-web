import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Discover Attax — Features & How It Works",
  description:
    "Explore every feature of Attax: automatic activity sync, performance analytics, competitive leagues, and a global ranking system.",
};

const pillars = [
  {
    icon: "⚡",
    title: "Your Effort",
    description:
      "Steps and minutes build toward meaningful goals. Every session creates new energy — physical and mental. Attax captures it all automatically through your phone's health data.",
  },
  {
    icon: "🧠",
    title: "The Mindset",
    description:
      "Users choose their approach, method, and rhythm without pressure. There's no shame in rest days. Attax is built around long-term sustainability, not short-term bursts.",
  },
  {
    icon: "📅",
    title: "Day by Day",
    description:
      "Progress builds at your own individual pace through consistent movement. We celebrate showing up three times a week just as much as daily training.",
  },
  {
    icon: "🚀",
    title: "Growth",
    description:
      "Weekly improvements in consistency, energy, and motivation. Watch your numbers climb. Feel the compound effect of showing up, day after day.",
  },
];

const techFeatures = [
  {
    title: "Precision-driven tracking",
    description: "Attax reads your Apple Health or Google Health Connect data the moment you complete a workout. No manual logging.",
    icon: "🎯",
  },
  {
    title: "Personalized insights",
    description: "Trend analysis, recovery patterns, and performance benchmarks tailored to your sport and activity level.",
    icon: "📊",
  },
  {
    title: "Clean, fluid design",
    description: "An intuitive interface built for athletes, not engineers. Everything you need, nothing you don't.",
    icon: "✨",
  },
  {
    title: "Privacy first",
    description: "Your health data stays on your device. Attax never sells your data or shares it with third parties.",
    icon: "🔒",
  },
  {
    title: "Multilingual",
    description: "Available in English and French, with more languages coming as the community grows.",
    icon: "🌍",
  },
  {
    title: "Always improving",
    description: "Regular updates based on community feedback. The ranking system, leagues, and global leaderboard are already in development.",
    icon: "🔧",
  },
];

export default function DiscoverPage() {
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">
            Discover Attax
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6">
            Sport begins
            <br />
            <span className="text-[#f97316]">here.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-[#a1a1aa] leading-relaxed">
            Every step counts. Every session matters. Attax transforms your daily effort into visible, meaningful progress.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Built on four pillars
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-2xl bg-[#18181b] border border-[#27272a] hover:border-[#f97316]/40 transition-all"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-[#71717a] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#18181b]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">
              Technology
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Precision-driven technology
            </h2>
            <p className="mt-4 text-[#71717a] max-w-md mx-auto">
              Personalized insights, clean design, and powerful tracking — built for athletes who take performance seriously.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {techFeatures.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-[#18181b] border border-[#27272a] hover:border-[#f97316]/30 transition-all"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-[#71717a] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to move?
          </h2>
          <p className="text-[#a1a1aa] mb-8">
            Download Attax and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#f97316] text-white font-bold rounded-full hover:bg-[#ea6f00] transition-all"
            >
              Download on iOS
            </a>
            <Link
              href="/adventure"
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
