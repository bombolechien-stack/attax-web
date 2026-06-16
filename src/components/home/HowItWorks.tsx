const steps = [
  {
    number: "01",
    title: "Do your sport",
    description:
      "Walk, run, cycle, lift — any physical activity counts. Attax connects to your health data automatically.",
    icon: "🏃",
  },
  {
    number: "02",
    title: "Move regularly",
    description:
      "Build your streak. Daily motivation keeps you consistent without pressure or guilt.",
    icon: "🔥",
  },
  {
    number: "03",
    title: "Track your progress",
    description:
      "See your weekly growth, analyze performance trends, and celebrate every milestone.",
    icon: "📈",
  },
  {
    number: "04",
    title: "Climb the ranks",
    description:
      "Compete in leagues, earn your spot on the global leaderboard, become the best version of yourself.",
    icon: "🏆",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase mb-4">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Four steps to transform
            <br />
            your fitness journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all group"
            >
              <div className="text-3xl mb-5">{step.icon}</div>
              <div className="text-xs font-black tracking-widest text-orange-500 mb-2">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
