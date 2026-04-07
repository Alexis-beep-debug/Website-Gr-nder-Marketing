"use client";

import { useState } from "react";

const targets = [
  {
    id: "makler",
    label: "Immobilienmakler",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    situation: [
      "Abhängig von Empfehlungen und Netzwerk",
      "Schwankende Auftragslage ohne Planbarkeit",
      "Kaltakquise kostet Zeit und bringt wenig",
      "Schwer, sich regional von der Konkurrenz abzuheben",
    ],
    wishes: [
      "Planbar neue Alleinaufträge jeden Monat",
      "Als regionaler Experte sichtbar werden",
      "Digitale Eigentümerakquise auf Autopilot",
      "Mehr Zeit für Kunden statt für Akquise",
    ],
  },
  {
    id: "bautraeger",
    label: "Bauträger",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    situation: [
      "Projekte verkaufen sich langsamer als geplant",
      "Klassische Vermarktung erreicht die falsche Zielgruppe",
      "Kein digitaler Vertriebskanal etabliert",
      "Hohe Marketingkosten bei geringem Rücklauf",
    ],
    wishes: [
      "Gezielte Ansprache kaufkräftiger Interessenten",
      "Schnellerer Abverkauf neuer Bauprojekte",
      "Messbare Ergebnisse statt Streuverluste",
      "Professioneller digitaler Auftritt",
    ],
  },
  {
    id: "verwaltungen",
    label: "Verwaltungen",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    situation: [
      "Schwierig, neue Eigentümer als Kunden zu gewinnen",
      "Wenig Online-Sichtbarkeit in der Region",
      "Bestehende Website generiert keine Anfragen",
      "Kein klarer digitaler Auftritt oder Positionierung",
    ],
    wishes: [
      "Stetiger Zuwachs an Verwaltungsobjekten",
      "Professionelle Online-Präsenz als Vertrauensfaktor",
      "Automatisierte Anfragen über die eigene Website",
      "Klare Positionierung gegenüber dem Wettbewerb",
    ],
  },
];

export default function TargetGroup() {
  const [openId, setOpenId] = useState<string | null>("makler");

  return (
    <section className="py-24 sm:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
              Zielgruppen
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Wem helfen{" "}
            <em
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
              className="text-accent"
            >
              wir?
            </em>
          </h2>
          <p className="mt-4 text-primary/50 text-lg max-w-xl mx-auto">
            Spezialisiert auf die Immobilienbranche. Zugeschnitten auf Ihre Situation.
          </p>
        </div>

        {/* Accordion cards */}
        <div className="max-w-3xl mx-auto space-y-4">
          {targets.map((target) => {
            const isOpen = openId === target.id;
            return (
              <div
                key={target.id}
                className={`border rounded-md transition-all duration-300 ${
                  isOpen
                    ? "border-accent/30 bg-accent/[0.02] shadow-lg shadow-accent/5"
                    : "border-primary/8 bg-white hover:border-primary/15"
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => setOpenId(isOpen ? null : target.id)}
                  className="w-full flex items-center gap-4 px-6 py-5 sm:px-8 sm:py-6 text-left"
                >
                  <div
                    className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-accent text-white"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {target.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary flex-1">
                    {target.label}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-primary/30 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Accordion body */}
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                      {/* Ausgangssituation */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary/50 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                          Ausgangssituation
                        </h4>
                        <ul className="space-y-3">
                          {target.situation.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-primary/60 leading-relaxed">
                              <svg className="w-4 h-4 text-primary/20 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Wünsche */}
                      <div>
                        <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          Wünsche & Ziele
                        </h4>
                        <ul className="space-y-3">
                          {target.wishes.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-primary/70 leading-relaxed">
                              <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
