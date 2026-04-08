"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Regionale Marktpräsenz",
    description:
      "Wir bauen mit Ihnen Sichtbarkeit und Vertrauen auf digitalen Kanälen auf. Sie tauchen dort auf, wo Ihre Zielgruppe täglich unterwegs ist. So lernen Eigentümer Sie als Experten aus der Region kennen, lange bevor sie überhaupt einen Makler brauchen.",
    image: "/images/team/timeline1-neu.avif",
    imageAlt: "Regionale Marktpräsenz aufbauen",
  },
  {
    number: "02",
    title: "Qualifizierte Kontaktanfragen",
    description:
      "Über die Anzeigen sprechen wir Eigentümer in konkreten Lebenssituationen an. Wir leiten sie auf passende Landeseiten, wo sie mit ihrem Thema abgeholt werden. Dort qualifizieren wir die Anfragen vor, sodass Sie fertige Kontakte mit allen relevanten Daten erhalten.",
    image: "/images/team/timeline2.jpg",
    imageAlt: "Qualifizierte Leads generieren",
  },
  {
    number: "03",
    title: "Zulauf und Wachstum",
    description:
      "Sie erhalten jeden Monat einen planbaren Zufluss an qualifizierten Anfragen. Einige werden kurzfristig zum Auftrag, andere bauen Ihr Zukunftsnetzwerk auf. So sammeln Sie heute schon Marktanteile ein, bevor es die Konkurrenz tut.",
    image: "/images/team/timeline3.jpg",
    imageAlt: "Wachstum und Erfolg",
  },
];

export default function Solution() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const timelineHeight = timelineRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Line grows exactly in sync with scroll position
      // Start: when top of timeline hits center of viewport
      // End: when bottom of timeline hits center of viewport
      const scrollCenter = windowHeight / 2;
      const scrolledPast = scrollCenter - rect.top;
      const progress = Math.min(Math.max(scrolledPast / timelineHeight, 0), 1);

      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="loesung" className="py-24 sm:py-32 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
            Unsere Lösung
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            Ihr Weg zum planbaren{" "}
            <em
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
              className="text-accent"
            >
              Maklererfolg
            </em>
          </h2>
          <p className="text-muted leading-relaxed">
            Von der Analyse bis zum planbaren Wachstum in drei Schritten.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Desktop: Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-primary/8 -translate-x-1/2 hidden lg:block" />
          <div
            className="absolute left-1/2 top-0 w-[3px] bg-accent -translate-x-1/2 hidden lg:block"
            style={{ height: `${lineHeight}%` }}
          />

          {/* Mobile: Left line */}
          <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-primary/8 lg:hidden" />
          <div
            className="absolute left-5 top-0 w-[3px] bg-accent lg:hidden"
            style={{ height: `${lineHeight}%` }}
          />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative">
                  {/* Desktop: Timeline dot (center) */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden lg:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm border-4 border-[#f5f5f5]">
                      {step.number}
                    </div>
                  </div>

                  {/* Mobile: Timeline dot (left) */}
                  <div className="absolute left-5 top-0 -translate-x-1/2 z-10 lg:hidden flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs border-4 border-[#f5f5f5]">
                      {step.number}
                    </div>
                  </div>

                  {/* Desktop layout: alternating */}
                  <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
                    <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative overflow-hidden rounded-md shadow-xl">
                        <img
                          src={step.image}
                          alt={step.imageAlt}
                          className="w-full aspect-[4/3] object-cover"
                        />
                        <div className="absolute inset-0 bg-accent/5" />
                      </div>
                    </div>
                    <div className={`${isEven ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12 lg:text-right"}`}>
                      <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted leading-relaxed text-base sm:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile layout: all left-aligned */}
                  <div className="lg:hidden pl-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-sm sm:text-base mb-4">
                      {step.description}
                    </p>
                    <div className="relative overflow-hidden rounded-md shadow-lg">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute inset-0 bg-accent/5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
