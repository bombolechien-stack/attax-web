const features = [
  {
    icon: "⚡",
    title: "Automatic Sync",
    description:
      "Connects to Apple Health and Google Health Connect. Your workouts are recorded the moment you finish them.",
    badge: "iOS & Android",
  },
  {
    icon: "🎯",
    title: "Smart Consistency",
    description:
      "Focus on the habit, not perfection. Attax celebrates consistency over intensity — because showing up is what matters.",
    badge: "Daily motivation",
  },
  {
    icon: "📊",
    title: "Deep Analytics",
    description:
      "Weekly insights, trend analysis, and recovery patterns. Understand your body and optimize your training.",
    badge: "Performance",
  },
  {
    icon: "🏅",
    title: "Competitive Leagues",
    description:
      "Join leagues with athletes at your level. Compete weekly, earn points, and climb the global leaderboard.",
    badge: "Coming V2",
    comingSoon: true,
  },
  {
    icon: "🌍",
    title: "Global Ranking",
    description:
      "See where you stand against athletes worldwide. Rankings by sport, city, country, and overall.",
    badge: "Coming V2",
    comingSoon: true,
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "A community that lifts you up. Shared energy among thousands of athletes moving toward their goals.",
    badge: "Social",
  },
];

export default function Features() {
  return (
    <section className="py-28 px-6 bg-[#18181b]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Not just an app.
            <br />
            <span className="text-[#f97316]">A source of motivation.</span>
          </h2>
          <p className="mt-4 text-[#71717a] max-w-md mx-auto">
            Attax is built for athletes who want more than a step counter — they want to compete, improve, and belong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`p-6 rounded-2xl border transition-all group ${
                f.comingSoon
                  ? "bg-[#18181b]/50 border-[#27272a]/50 opacity-75"
                  : "bg-[#18181b] border-[#27272a] hover:border-[#f97316]/40 hover:bg-[#1f1f23]"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl">{f.icon}</div>
                <span
                  className={`text-[10px] font-semibold tracking-wide px-2 py-1 rounded-full ${
                    f.comingSoon
                      ? "bg-[#27272a] text-[#71717a]"
                      : "bg-[#f97316]/10 text-[#f97316]"
                  }`}
                >
                  {f.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-[#71717a] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
