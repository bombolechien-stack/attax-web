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
      "Compete in leagues, earn your spot on the global leaderboard, and become the best version of yourself.",
    icon: "🏆",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Four steps to transform
            <br />
            <span className="text-[#f97316]">your fitness journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-[#18181b] border border-[#27272a] hover:border-[#f97316]/40 transition-all group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 w-6 h-px bg-[#27272a] group-hover:bg-[#f97316]/30 transition-colors z-10" />
              )}
              <div className="text-3xl mb-4">{step.icon}</div>
              <div className="text-xs font-black tracking-widest text-[#f97316] mb-2">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-[#71717a] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
