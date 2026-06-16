import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact — Attax",
  description: "Get in touch with the Attax team. Questions, feedback, partnerships — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">
            Contact
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Let&apos;s talk
          </h1>
          <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-lg mx-auto">
            Have a question, feedback, or a partnership idea? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-10 pb-28 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: "💬", title: "General", desc: "Questions about the app or how Attax works", email: "hello@attax.app" },
              { icon: "🤝", title: "Partnership", desc: "Brand deals, events, sport organizations", email: "partners@attax.app" },
              { icon: "🐛", title: "Support", desc: "Bug reports or account issues", email: "support@attax.app" },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-2xl bg-[#18181b] border border-[#27272a] text-center">
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="text-sm font-bold text-white mb-1">{c.title}</div>
                <div className="text-xs text-[#71717a] mb-3">{c.desc}</div>
                <a
                  href={`mailto:${c.email}`}
                  className="text-xs text-[#f97316] hover:underline"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#a1a1aa] mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder:text-[#52525b] text-sm focus:outline-none focus:border-[#f97316]/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#a1a1aa] mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder:text-[#52525b] text-sm focus:outline-none focus:border-[#f97316]/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#a1a1aa] mb-2 uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder:text-[#52525b] text-sm focus:outline-none focus:border-[#f97316]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#a1a1aa] mb-2 uppercase tracking-wide">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell us more..."
                className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder:text-[#52525b] text-sm focus:outline-none focus:border-[#f97316]/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#f97316] text-white font-bold rounded-full hover:bg-[#ea6f00] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Send message
            </button>

            <p className="text-xs text-[#52525b] text-center">
              We typically respond within 48 hours.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
