const quotes = [
  {
    text: "I've tried every fitness app out there. Attax is the first one that made me actually look forward to Monday.",
    author: "Lucas M.",
    location: "Paris, France",
    sport: "Running",
  },
  {
    text: "The league system is addictive. I started running more just to stay competitive. That's the point, right?",
    author: "Sarah K.",
    location: "London, UK",
    sport: "CrossFit",
  },
  {
    text: "My mindset shifted from 'I have to work out' to 'I want to earn my points today'. Big difference.",
    author: "Thomas R.",
    location: "Bordeaux, France",
    sport: "Cycling",
  },
];

const values = [
  { icon: "💪", title: "Your Effort", desc: "Every step and every minute builds toward your goals." },
  { icon: "🧠", title: "The Mindset", desc: "Your pace, your method, your rhythm — no pressure." },
  { icon: "📅", title: "Day by Day", desc: "Progress builds through consistent, daily movement." },
  { icon: "🚀", title: "Growth", desc: "Weekly improvements in energy, consistency, and motivation." },
];

export default function Community() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase mb-4">
            Community
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            A community that lifts you up
          </h2>
          <p className="mt-5 text-gray-500 max-w-md mx-auto leading-relaxed">
            Thousands of athletes sharing the same mindset: progress, persistence, and positivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {quotes.map((q) => (
            <div
              key={q.author}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-100 transition-all"
            >
              <div className="text-orange-400 text-3xl font-serif mb-4">"</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">{q.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">{q.author}</div>
                  <div className="text-xs text-gray-400">{q.location}</div>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-orange-600">
                  {q.sport}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">{v.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
