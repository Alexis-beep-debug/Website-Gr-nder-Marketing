const challenges = [
  {
    title: "Zu wenig Verkaufsobjekte",
    description:
      "Sie verlieren Aufträge an die Konkurrenz? Es fehlt an einem kontinuierlichen Zulauf lukrativer Verkaufsobjekte. Ohne ein solides Akquise-Fundament ist stabiles und planbares Wachstum unmöglich.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Fehlende Kaufinteressenten",
    description:
      "Ihre Objekte stehen zu lange in der Vermarktung? Qualifizierte Interessenten fehlen, Finanzierungen platzen und Käufer springen ab. Herkömmliche Kanäle reichen nicht mehr aus.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export default function Challenges() {
  return (
    <section className="py-24 sm:py-32 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
            Herausforderungen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            Kennen Sie diese Probleme im Immobiliengeschäft?
          </h2>
          <p className="text-muted leading-relaxed">
            Wir kennen diese Probleme aus erster Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {challenges.map((challenge, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl p-8 sm:p-10 border border-red-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle red gradient corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full opacity-60" />

              {/* X icon – prominent */}
              <div className="relative flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>

              <h3 className="relative text-xl sm:text-2xl font-bold text-primary mb-3">
                {challenge.title}
              </h3>
              <p className="relative text-primary/50 leading-relaxed">
                {challenge.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
