const stats = [
  { value: "10,000+", label: "Active Athletes", desc: "Worldwide community pushing their limits" },
  { value: "50+", label: "Countries", desc: "Global competition across every continent" },
  { value: "1M+", label: "Workouts Logged", desc: "Every rep, every step, counted" },
  { value: "∞", label: "Motivation", desc: "Because consistency is the real superpower" },
];

export default function Stats() {
  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-orange-600 mb-2">{s.value}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{s.label}</div>
              <div className="text-xs text-gray-400 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
