import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://instagram.com/attax.app" },
  { label: "TikTok", href: "https://tiktok.com/@attax.app" },
  { label: "X / Twitter", href: "https://x.com/attax_app" },
  { label: "YouTube", href: "https://youtube.com/@attax" },
];

const cols = [
  {
    title: "App",
    links: [
      { label: "Home", href: "/" },
      { label: "Discover", href: "/discover" },
      { label: "The Adventure", href: "/adventure" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Rankings", href: "/ranking" },
      { label: "Leagues", href: "/ranking" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Legal Notices", href: "/legal" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-black tracking-tight text-gray-900">ATTAX</span>
              <span className="text-[10px] font-semibold tracking-[0.15em] text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full uppercase">beta</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The competitive fitness app where every workout fuels your rank. Move, progress, compete.
            </p>
            <p className="mt-4 text-sm font-semibold text-orange-600">#gowithattax</p>
            <div className="flex flex-wrap gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Attax. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Made with 🧡 for athletes everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
