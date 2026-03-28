const challenges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Zu wenig Verkaufsobjekte",
    description:
      "Sie verlieren Aufträge an die Konkurrenz? Es fehlt an einem kontinuierlichen Zulauf lukrativer Verkaufsobjekte. Ohne ein solides Akquise-Fundament ist stabiles und planbares Wachstum unmöglich.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Fehlende Kaufinteressenten",
    description:
      "Ihre Objekte stehen zu lange in der Vermarktung? Qualifizierte Interessenten fehlen, Finanzierungen platzen und Käufer springen ab. Herkömmliche Kanäle reichen nicht mehr aus.",
  },
];

export default function Challenges() {
  return (
    <section className="py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Herausforderungen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            Kennen Sie diese Probleme im Immobiliengeschäft?
          </h2>
          <p className="text-muted leading-relaxed">
            Viele Makler stehen vor den gleichen Herausforderungen. Wir kennen
            diese Probleme – und haben die Lösung.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {challenges.map((challenge, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {challenge.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
