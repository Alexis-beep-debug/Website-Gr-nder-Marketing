const othersItems = [
  "Große Teams, wechselnde Ansprechpartner",
  "Standardisierte Vorlagen für jede Branche",
  "Kein Verständnis für den Immobilienmarkt",
  "Manuelle Prozesse, langsame Umsetzung",
  "Fokus auf Reichweite statt Ergebnisse",
];

const usItems = [
  "Direkte Betreuung durch den Geschäftsführer",
  "Individuelle Strategien für Ihre Region",
  "Eigene Erfahrung als Makler und in der Hausverwaltung",
  "KI gestützte Systeme für maximale Effizienz",
  "Fokus auf moderne Trends und Digitalisierung",
];

export default function Comparison() {
  return (
    <section className="py-24 sm:py-32 bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
              Der Unterschied
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
            Warum{" "}
            <em
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
              className="text-accent"
            >
              Gründer Marketing?
            </em>
          </h2>
          <p className="mt-4 text-primary/50 text-lg max-w-xl mx-auto">
            Was uns von klassischen Agenturen unterscheidet.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Others */}
          <div className="bg-white rounded-md border border-primary/8 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/5 rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-primary/30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary/40">Andere Agenturen</h3>
            </div>
            <ul className="space-y-4">
              {othersItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-primary/45">
                  <svg className="w-5 h-5 text-red-400/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Us */}
          <div className="bg-accent/5 rounded-md border-2 border-accent/20 p-8 relative">
            <div className="absolute -top-3 right-6">
              <span className="bg-accent text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                Empfohlen
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md flex items-center justify-center">
                <img src="/images/logos/logo-dark.svg" alt="Gründer Marketing" className="w-8 h-auto" />
              </div>
              <h3 className="text-lg font-bold text-accent">Gründer Marketing</h3>
            </div>
            <ul className="space-y-4">
              {usItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-primary/75">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
