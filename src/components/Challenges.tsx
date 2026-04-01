const challenges = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FEE2E2" />
        <path d="M15 9L9 15M9 9l6 6" stroke="#EF4444" strokeWidth={2.5} strokeLinecap="round" />
      </svg>
    ),
    title: "Zu wenig Verkaufsobjekte",
    description:
      "Sie verlieren Aufträge an die Konkurrenz? Es fehlt an einem kontinuierlichen Zulauf lukrativer Verkaufsobjekte. Ohne ein solides Akquise-Fundament ist stabiles und planbares Wachstum unmöglich.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FEE2E2" />
        <path d="M15 9L9 15M9 9l6 6" stroke="#EF4444" strokeWidth={2.5} strokeLinecap="round" />
      </svg>
    ),
    title: "Fehlende Kaufinteressenten",
    description:
      "Ihre Objekte stehen zu lange in der Vermarktung? Qualifizierte Interessenten fehlen, Finanzierungen platzen und Käufer springen ab. Herkömmliche Kanäle reichen nicht mehr aus.",
  },
];

export default function Challenges() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-[#faf8f5] to-white">
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
              className="bg-white rounded-md p-8 shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-5">
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
