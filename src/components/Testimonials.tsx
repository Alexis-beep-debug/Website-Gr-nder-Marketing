"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Seit wir mit Gründer Marketing arbeiten, bekommen wir jede Woche qualifizierte Eigentümeranfragen. Das hat unser Geschäft komplett verändert.",
    name: "Thomas M.",
    role: "Immobilienmakler",
    region: "München",
    initials: "TM",
    color: "bg-accent",
  },
  {
    quote:
      "Endlich ein Partner, der versteht wie die Immobilienbranche funktioniert. Die Kampagnen sind punktgenau und die Ergebnisse sprechen für sich.",
    name: "Sandra K.",
    role: "Maklerin & Inhaberin",
    region: "Köln",
    initials: "SK",
    color: "bg-amber-600",
  },
  {
    quote:
      "Innerhalb von 3 Monaten hatten wir mehr Alleinaufträge als im gesamten Vorjahr. Die Investition hat sich mehrfach ausgezahlt.",
    name: "Markus W.",
    role: "Immobilienmakler",
    region: "Hamburg",
    initials: "MW",
    color: "bg-sky-700",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-accent/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex flex-col items-center gap-1.5 mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/40">
              Kundenstimmen
            </span>
            <div className="w-10 h-0.5 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
            Was unsere Kunden{" "}
            <em
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
              className="text-accent"
            >
              sagen
            </em>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-6 sm:p-8 rounded-xl border transition-all duration-300 ${
                active === i
                  ? "border-accent/30 bg-white shadow-lg shadow-accent/5 scale-[1.02]"
                  : "border-primary/5 bg-white/60 hover:bg-white hover:border-primary/10"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-primary/70 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-primary/40">{t.role} · {t.region}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
