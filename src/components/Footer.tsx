import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://instagram.com/attax.app" },
  { label: "TikTok", href: "https://tiktok.com/@attax.app" },
  { label: "X", href: "https://x.com/attax_app" },
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
    <footer className="border-t border-[#27272a] bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-black tracking-tight text-white">ATTAX</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#f97316] uppercase">beta</span>
            </div>
            <p className="text-[#71717a] text-sm leading-relaxed max-w-xs">
              The competitive fitness app where every workout fuels your rank. Move, progress, compete.
            </p>
            <p className="mt-4 text-xs text-[#f97316] font-semibold tracking-wide">#gowithattax</p>
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#71717a] hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold tracking-widest text-[#71717a] uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#52525b]">
            © {new Date().getFullYear()} Attax. All rights reserved.
          </p>
          <p className="text-xs text-[#52525b]">
            Made with 🧡 for athletes everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
