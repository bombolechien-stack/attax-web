"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-tight text-white group-hover:text-[#f97316] transition-colors">
            ATTAX
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#f97316] uppercase mt-0.5">
            beta
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold bg-[#f97316] text-white rounded-full hover:bg-[#ea6f00] transition-colors"
          >
            Download App
          </a>
        </div>

        <button
          className="md:hidden text-[#a1a1aa] hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-md border-b border-[#27272a]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors py-2"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold bg-[#f97316] text-white rounded-full text-center hover:bg-[#ea6f00] transition-colors"
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
