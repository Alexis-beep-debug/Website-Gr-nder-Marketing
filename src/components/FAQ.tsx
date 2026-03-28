"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Wie funktioniert die Dienstleistung?",
    answer:
      "Wir starten mit einer umfassenden Analyse Ihrer aktuellen Situation, Region und Zielgruppe. Darauf aufbauend entwickeln wir eine individuelle Strategie, die digitale Kampagnen, Landingpages und regionale Sichtbarkeit kombiniert. Sie erhalten kontinuierlich qualifizierte Kontaktanfragen von Eigentümern und Käufern.",
  },
  {
    question: "Was sind die Kosten?",
    answer:
      "Die Kosten richten sich nach Ihrem individuellen Bedarf und Ihrer Region. In einem kostenlosen Erstgespräch analysieren wir Ihre Situation und erstellen Ihnen ein maßgeschneidertes Angebot. Unsere Lösungen sind so gestaltet, dass sie sich schnell amortisieren.",
  },
  {
    question: "Was bieten Sie genau an?",
    answer:
      "Unsere drei Kernleistungen sind: Objekt-Akquise & Eigentümergewinnung durch Meta-Kampagnen und regionale Sichtbarkeit, Objektvermarktung & Käufergewinnung für schnellere Verkäufe zu besseren Preisen, sowie professionelle Maklerwebsites, die Ihre Expertenposition unterstreichen.",
  },
  {
    question: "Wer tritt in der Werbung auf?",
    answer:
      "Sie treten selbst als Experte in Ihrer Region auf. Wir erstellen die Kampagnen und Werbemittel in Ihrem Namen und mit Ihrem Branding. So stärken wir Ihre persönliche Marke und Ihren Expertenstatus in der Region.",
  },
  {
    question: "Woher kommen die Kontaktanfragen?",
    answer:
      "Die Kontaktanfragen kommen von gezielten digitalen Kampagnen auf Meta-Plattformen (Facebook & Instagram), optimierten Landingpages und Ihrer regionalen digitalen Präsenz. Alle Anfragen sind qualifiziert und stammen von Eigentümern und Kaufinteressenten aus Ihrer Region.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3">
            Häufig gestellte Fragen
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-black/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-light/50 transition-colors"
              >
                <span className="font-semibold text-primary pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
