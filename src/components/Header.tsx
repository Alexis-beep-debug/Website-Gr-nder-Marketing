"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Startseite", href: "#hero" },
  { label: "Lösung", href: "#loesung" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="group">
          <img
            src="/images/logos/logo.png"
            alt="Gründer Marketing Logo"
            className={`h-10 w-auto group-hover:scale-105 transition-all ${
              isLight ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isLight ? "text-black/70" : "text-white/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            Erstgespräch sichern
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menü öffnen"
        >
          <span
            className={`w-6 h-0.5 transition-all ${isLight ? "bg-black" : "bg-white"} ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all ${isLight ? "bg-black" : "bg-white"} ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all ${isLight ? "bg-black" : "bg-white"} ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 shadow-xl animate-fade-in">
          <nav className="flex flex-col p-6 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-black/70 hover:text-accent transition-colors py-2 border-b border-black/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="bg-accent text-white px-6 py-3 rounded-lg text-center font-semibold mt-2 hover:bg-accent-light transition-colors"
            >
              Erstgespräch sichern
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
