"use client";

import Logo from "@/components/Logo";

const pillars = [
  {
    label: "Growth",
    sublabel: "Sichtbarkeit",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    label: "Impact",
    sublabel: "Performance",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "DNA",
    sublabel: "Kreativität",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
];

export default function OrbitShowcase() {
  return (
    <section className="relative bg-[#0d1f1a] py-24 sm:py-32 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-col items-center gap-1.5 mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent/70">
              Unsere Ergebnisse
            </span>
            <div className="w-10 h-0.5 bg-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Projekte die{" "}
            <em
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
              className="text-accent"
            >
              wirken
            </em>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
            Ein Blick auf unsere Arbeiten – von Webseiten über Kampagnen bis hin zu kompletten Funnels.
          </p>
        </div>

        {/* Pillar layout */}
        <div className="relative flex flex-col items-center">
          {/* Top pillar */}
          <div className="flex flex-col items-center mb-12 sm:mb-16">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 shadow-lg shadow-accent/10">
              {pillars[0].icon}
            </div>
            <h3 className="text-white font-semibold text-lg">{pillars[0].label}</h3>
            <p className="text-accent/60 text-sm">{`{${pillars[0].sublabel}}`}</p>
          </div>

          {/* Center logo with glow ring */}
          <div className="relative mb-12 sm:mb-16">
            <div className="absolute inset-0 rounded-full border border-accent/20 animate-pulse" style={{ margin: "-8px" }} />
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#1a2f28] border-2 border-accent/30 flex items-center justify-center shadow-2xl shadow-accent/20">
              <Logo variant="light" size="small" />
            </div>
            {/* Connecting lines - visible on larger screens */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-px h-12 sm:h-16 bg-gradient-to-t from-accent/30 to-transparent hidden sm:block" />
            <div className="absolute bottom-0 left-0 translate-y-full -translate-x-8 w-px h-12 sm:h-16 bg-gradient-to-b from-accent/30 to-transparent hidden sm:block rotate-[30deg] origin-top" />
            <div className="absolute bottom-0 right-0 translate-y-full translate-x-8 w-px h-12 sm:h-16 bg-gradient-to-b from-accent/30 to-transparent hidden sm:block -rotate-[30deg] origin-top" />
          </div>

          {/* Bottom two pillars */}
          <div className="flex gap-16 sm:gap-32">
            {pillars.slice(1).map((pillar, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 shadow-lg shadow-accent/10">
                  {pillar.icon}
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg">{pillar.label}</h3>
                <p className="text-accent/60 text-sm">{`{${pillar.sublabel}}`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-white/20 text-sm mt-16">
          Unsere Projekte – individuell für jeden Kunden umgesetzt.
        </p>
      </div>
    </section>
  );
}
