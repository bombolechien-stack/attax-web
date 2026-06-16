const features = [
  {
    icon: "⚡",
    title: "Automatic Sync",
    description:
      "Connects to Apple Health and Google Health Connect. Your workouts are recorded the moment you finish them — no manual logging.",
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
      "Weekly insights, trend analysis, and recovery patterns. Understand your body and optimize your training over time.",
    badge: "Performance",
  },
  {
    icon: "🏅",
    title: "Competitive Leagues",
    description:
      "Join leagues with athletes at your level. Compete weekly, earn points, and climb the global leaderboard.",
    badge: "Coming in V2",
    comingSoon: true,
  },
  {
    icon: "🌍",
    title: "Global Ranking",
    description:
      "See where you stand against athletes worldwide. Rankings by sport, city, country, and overall performance.",
    badge: "Coming in V2",
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
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Not just an app.
            <br />
            A source of motivation.
          </h2>
          <p className="mt-5 text-gray-500 max-w-md mx-auto leading-relaxed">
            Attax is built for athletes who want more than a step counter — they want to compete, improve, and belong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`p-7 rounded-2xl border transition-all ${
                f.comingSoon
                  ? "bg-white border-gray-100 opacity-60"
                  : "bg-white border-gray-100 hover:border-orange-200 hover:shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl">{f.icon}</div>
                <span
                  className={`text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full ${
                    f.comingSoon
                      ? "bg-gray-100 text-gray-400"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  {f.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
