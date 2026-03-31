"use client";

import { useRegion } from "@/hooks/useRegion";

export default function Hero() {
  const region = useRegion();
  const regionText = region ? `in ${region}` : "";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/team/malte-gruender.jpeg"
          alt="Gründer Marketing Team"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Left gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-50% to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Accent badge */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-block bg-accent text-white text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded">
              Marketing für Immobilienmakler
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl font-medium text-primary/80 leading-[1.12] mb-6 animate-fade-in-up">
            Vertrauensvolles und professionelles Marketing für Immobilienmakler{regionText ? ` ${regionText}` : ""}.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-primary/50 leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-200">
            Wir sorgen dafür, dass Eigentümer und Käufer auf Sie zukommen – planbar, digital und ohne Kaltakquise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="https://calendly.com/business-gruender/analysegesprach-gruender-marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/85 text-white px-7 py-4 rounded-lg text-base font-semibold transition-all hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-0.5"
            >
              {/* Calendar icon */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              Beratungsgespräch buchen
            </a>
            <a
              href="#loesung"
              className="inline-flex items-center justify-center gap-2 border border-primary/15 text-primary/60 hover:border-accent hover:text-accent px-7 py-4 rounded-lg text-base font-semibold transition-all"
            >
              Mehr erfahren
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
