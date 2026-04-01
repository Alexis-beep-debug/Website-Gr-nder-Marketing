const advantages = [
  {
    number: "1",
    title: "Spezialisiert auf die Immobilienbranche",
    description:
      "Wir verstehen den Markt, Ihre Zielgruppe und die Sprache, die Eigentümer überzeugt – kein generisches Marketing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Direkte Betreuung durch die Geschäftsführung",
    description:
      "Kein Hin- und Herreichen zwischen Abteilungen – Sie arbeiten direkt mit der Geschäftsführung.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Individuelle Strategien statt Schablone",
    description:
      "Jede Strategie wird individuell auf Ihre Region, Ihr Angebot und Ihre Ziele zugeschnitten.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Transparente Prozesse & messbare Ergebnisse",
    description:
      "Sie sehen jederzeit, was läuft, was es kostet und was es bringt – volle Transparenz ohne Überraschungen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Advantages() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center gap-1.5 mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/40">
              Warum wir
            </span>
            <div className="w-10 h-0.5 bg-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Unsere Vorteile{" "}
            <em
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
              className="text-accent"
            >
              für Sie
            </em>
          </h2>
          <p className="mt-4 text-primary/50 text-lg max-w-xl mx-auto">
            Marketing, das den Immobilienmarkt versteht – nicht nur Werbung schaltet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv) => (
            <div
              key={adv.number}
              className="relative bg-white rounded-md p-7 border border-black/5 hover:border-accent/30 transition-all duration-300 group shadow-sm"
            >
              <div className="absolute top-5 right-5 text-3xl font-bold text-accent/8">
                {adv.number}
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {adv.icon}
              </div>
              <h3 className="font-semibold text-primary text-sm leading-snug mb-2">
                {adv.title}
              </h3>
              <p className="text-xs text-primary/45 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
