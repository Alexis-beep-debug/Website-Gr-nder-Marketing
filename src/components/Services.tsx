const services = [
  {
    title: "Objekt-Akquise & Eigentümergewinnung",
    description:
      "Wir etablieren eine permanente digitale Präsenz für Ihre Marke. Eigentümer begegnen Ihnen jederzeit, bauen Vertrauen auf und kommen aktiv auf Sie zu. So bekommen Sie einen konstanten Zulauf an qualifizierten Verkaufsaufträgen.",
    features: [
      "Meta-Kampagnen, die Eigentümer in Lebenssituationen abholen",
      "Regionale Sichtbarkeit rund um die Uhr",
      "Konstanter Zulauf an exklusive Anfragen",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: "Objektvermarktung & Käufergewinnung",
    description:
      "Ihre Objekte schneller und zu besseren Preisen verkaufen. Datenbasierte Anzeigen erreichen aktive Käufer und passive Interessenten. Wir verschaffen Ihnen eine starke Verhandlungsposition und einen konstanten Zufluss an Käuferanfragen.",
    features: [
      "Meta-Kampagnen, die Käufer ansprechen und emotionalisieren",
      "Kürzere Vermarktungszeiten, weniger Preisabschläge",
      "Schnelle Umsätze dank effektiver Vermarktung",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "Maklerwebsite",
    description:
      "Wir erstellen eine Website, die Ihre Expertenposition klar unterstreicht und Vertrauen schafft, lange bevor der erste Kontakt stattfindet. Das Zentrum Ihrer digitalen Präsenz wandelt Besucher in Interessenten um.",
    features: [
      "Expertenstatus in Ihrer Region",
      "Modern, professionell und kompatibel mit Ihrer Software",
      "SEO-optimiert für die ersten Plätze bei Google",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Leistungen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            Mit unseren Leistungen sichern wir Zulauf
          </h2>
          <p className="text-muted leading-relaxed">
            Endlich den richtigen Hebel im Maklergeschäft.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-accent to-accent-light" />
              <div className="p-8">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-primary/80"
                    >
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
