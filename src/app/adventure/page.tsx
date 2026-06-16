import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Adventure — Attax Story",
  description:
    "The story behind Attax: why we built a competitive fitness app, what drives us, and where we're going.",
};

const timeline = [
  {
    year: "The Problem",
    title: "Emotionless fitness apps",
    description:
      "We looked around at fitness apps and found they all felt the same: cold trackers, step counters, and calorie logs. Nothing that made you feel anything. Nothing that made Monday exciting.",
  },
  {
    year: "The Insight",
    title: "Consistency is the superpower",
    description:
      "The best athletes aren't the most talented — they're the most consistent. We wanted to build an app that celebrates showing up, day after day, rather than obsessing over peak performance.",
  },
  {
    year: "The Vision",
    title: "Sport as social competition",
    description:
      "What if your 5K run could earn you points in a global league? What if your consistency score made you famous among your peers? We wanted to create the Transfermarkt of amateur sport.",
  },
  {
    year: "Today",
    title: "Attax is born",
    description:
      "Attax is now live in beta, tracking workouts for athletes across 50+ countries. The ranking system, global leaderboards, and competitive leagues are coming in V2.",
  },
];

const values = [
  {
    title: "Consistency over intensity",
    description: "We believe showing up regularly beats working out perfectly occasionally. Small steps compound into extraordinary results.",
    icon: "🔁",
  },
  {
    title: "Progress at your pace",
    description: "Fitness is for everyone. We don't care if you run a 4-minute mile or a 14-minute one. Your effort is what counts.",
    icon: "🌱",
  },
  {
    title: "Competition as motivation",
    description: "Healthy competition is one of the most powerful motivators in human psychology. We're harnessing that for fitness.",
    icon: "🏆",
  },
  {
    title: "Community first",
    description: "Athletes should lift each other up. Attax is built on the idea that sport is more fun when you share it.",
    icon: "🤝",
  },
];

export default function AdventurePage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">
            The Adventure
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6">
            Why we built
            <br />
            <span className="text-[#f97316]">Attax.</span>
          </h1>
          <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-xl mx-auto">
            We were tired of fitness apps that tracked everything but inspired nothing. So we built something different.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-[#27272a]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-8 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#f97316]/10 border border-[#f97316]/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#f97316]" />
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#27272a] mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-4">
                  <span className="text-xs font-semibold tracking-widest text-[#f97316] uppercase">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-3">{item.title}</h3>
                  <p className="text-[#71717a] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#18181b]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white">
              What we believe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl bg-[#18181b] border border-[#27272a] hover:border-[#f97316]/30 transition-all"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-[#71717a] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-10 md:p-16 text-center"
            style={{
              background: "radial-gradient(ellipse 120% 100% at 50% 50%, rgba(249,115,22,0.12) 0%, rgba(24,24,27,0.8) 70%)",
              border: "1px solid rgba(249,115,22,0.2)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Join the adventure
            </h2>
            <p className="text-[#a1a1aa] mb-8 max-w-md mx-auto">
              We're just getting started. V2 brings global rankings, competitive leagues, and public athlete profiles. Be part of the founding community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#f97316] text-white font-bold rounded-full hover:bg-[#ea6f00] transition-all"
              >
                Download Attax
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
