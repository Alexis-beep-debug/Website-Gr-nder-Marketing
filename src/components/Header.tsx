"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Startseite", href: "#hero" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über", href: "#ueber-uns" },
  { label: "Bewertungen", href: "#bewertungen" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        <a href="#hero" className="group hover:opacity-90 transition-opacity">
          <Logo variant="dark" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 shadow-xl animate-fade-in">
          <nav className="flex flex-col p-6 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
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
