"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Wir starten mit einem kostenlosen Analysegespräch, in dem wir Ihre aktuelle Situation, Region und Ziele besprechen. Darauf aufbauend entwickeln wir eine individuelle Strategie und setzen diese operativ um. Sie erhalten regelmäßige Updates und haben jederzeit einen direkten Draht zur Geschäftsführung.",
  },
  {
    question: "Was kostet die Zusammenarbeit?",
    answer:
      "Die Investition richtet sich nach Ihrem individuellen Bedarf und dem Umfang der Maßnahmen. In einem unverbindlichen Erstgespräch analysieren wir Ihre Situation und erstellen ein transparentes Angebot. Unsere Lösungen sind so konzipiert, dass sie sich über die gewonnenen Aufträge schnell refinanzieren.",
  },
  {
    question: "Wie schnell sehe ich erste Ergebnisse?",
    answer:
      "In der Regel erhalten Sie bereits in den ersten Wochen nach Kampagnenstart erste qualifizierte Anfragen. Die volle Wirkung entfaltet sich typischerweise nach 4 bis 8 Wochen, wenn das System optimiert ist und Ihre regionale Sichtbarkeit stetig wächst.",
  },
  {
    question: "Was unterscheidet euch von anderen Marketing-Agenturen?",
    answer:
      "Wir kommen selbst aus der Immobilienbranche und verstehen Ihr Geschäft aus erster Hand. Statt generischer Kampagnen entwickeln wir individuelle Strategien für Ihre Region. Dazu kommt: Sie arbeiten direkt mit der Geschäftsführung, nicht mit wechselnden Ansprechpartnern.",
  },
  {
    question: "Welche Plattformen nutzt ihr für die Kampagnen?",
    answer:
      "Wir setzen primär auf Meta-Plattformen (Facebook & Instagram), da hier Eigentümer und Kaufinteressenten gezielt in relevanten Lebenssituationen angesprochen werden können. Ergänzend arbeiten wir mit optimierten Landingpages und regionalem SEO.",
  },
  {
    question: "Muss ich selbst in der Werbung auftreten?",
    answer:
      "Nein, das ist keine Voraussetzung. Wir erstellen die Kampagnen und Werbemittel in Ihrem Namen und mit Ihrem Branding. Falls gewünscht, können wir Sie aber gezielt als Experte in Ihrer Region positionieren, was die Wirkung zusätzlich verstärkt.",
  },
  {
    question: "Was passiert, wenn die vereinbarten Ziele nicht erreicht werden?",
    answer:
      "Wenn eine Garantie vertraglich vereinbart wurde, arbeiten wir ohne zusätzliches Honorar weiter, bis das definierte Ziel erreicht ist. Das Werbebudget trägt weiterhin der Kunde. Unser Ziel ist es, langfristige Partnerschaften aufzubauen, keine kurzfristigen Verträge.",
  },
  {
    question: "Arbeitet ihr mit Maklern in jeder Region?",
    answer:
      "Ja, wir arbeiten bundesweit mit Immobilienmaklern zusammen. Unsere Strategien werden individuell auf Ihre Region zugeschnitten. Um Interessenkonflikte zu vermeiden, betreuen wir pro Region nur eine begrenzte Anzahl an Maklern.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#f5f5f5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
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
              className="border border-black/5 rounded-md overflow-hidden bg-white"
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
