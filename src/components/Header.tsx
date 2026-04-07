"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Startseite", href: "/#hero" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über", href: "/#ueber-uns" },
  { label: "Bewertungen", href: "/#bewertungen" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (href: string) => {
    if (isHome) return href.replace("/", "");
    return href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/97 backdrop-blur-md shadow-sm border-b border-black/5 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        <a href="/" className="group hover:opacity-90 transition-opacity">
          <Logo variant="dark" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getHref(link.href)}
              className="text-sm font-medium text-primary/60 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/business-gruender/analysegesprach-gruender-marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            Erstgespräch sichern
          </a>
        </nav>

        {/* Mobile: Phone + Termin + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Phone button */}
          <a
            href="tel:+491754024912"
            className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary/60 hover:text-accent hover:border-accent/30 transition-colors"
            aria-label="Anrufen"
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>

          {/* Termin button */}
          <a
            href="https://calendly.com/business-gruender/analysegesprach-gruender-marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-sm border border-primary/10 text-xs font-semibold text-primary/70 hover:border-accent hover:text-accent transition-colors"
          >
            Termin
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] p-2"
            aria-label="Menü öffnen"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-6 h-0.5 bg-primary transition-all ${
                  menuOpen && i === 0 ? "rotate-45 translate-y-[7px]" :
                  menuOpen && i === 1 ? "opacity-0" :
                  menuOpen && i === 2 ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 shadow-xl animate-fade-in">
          <nav className="flex flex-col p-6 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={getHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-primary/60 hover:text-accent transition-colors py-2 border-b border-black/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/business-gruender/analysegesprach-gruender-marketing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="bg-accent text-white px-6 py-3 rounded-sm text-center font-semibold mt-2"
            >
              Erstgespräch sichern
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
