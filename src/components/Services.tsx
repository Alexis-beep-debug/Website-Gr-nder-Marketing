const services = [
  {
    title: "Objekt-Akquise & Eigentümergewinnung",
    description:
      "Wir etablieren eine permanente digitale Präsenz für Ihre Marke. Eigentümer begegnen Ihnen jederzeit, bauen Vertrauen auf und kommen aktiv auf Sie zu.",
    features: [
      "Meta-Kampagnen, die Eigentümer in Lebenssituationen abholen",
      "Regionale Sichtbarkeit rund um die Uhr",
      "Konstanter Zulauf an exklusive Anfragen",
    ],
    accent: "bg-accent",
    accentLight: "bg-accent/10 text-accent",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: "Objektvermarktung & Käufergewinnung",
    description:
      "Ihre Objekte schneller und zu besseren Preisen verkaufen. Datenbasierte Anzeigen erreichen aktive Käufer und passive Interessenten.",
    features: [
      "Meta-Kampagnen, die Käufer ansprechen und emotionalisieren",
      "Kürzere Vermarktungszeiten, weniger Preisabschläge",
      "Schnelle Umsätze dank effektiver Vermarktung",
    ],
    accent: "bg-accent",
    accentLight: "bg-accent/10 text-accent",
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
      "Wir erstellen eine Website, die Ihre Expertenposition klar unterstreicht und Vertrauen schafft, lange bevor der erste Kontakt stattfindet.",
    features: [
      "Expertenstatus in Ihrer Region",
      "Modern, professionell und kompatibel mit Ihrer Software",
      "SEO-optimiert für die ersten Plätze bei Google",
    ],
    accent: "bg-accent",
    accentLight: "bg-accent/10 text-accent",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
              Leistungen
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Mit unseren Leistungen sichern wir{" "}
            <em
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
              className="text-accent"
            >
              Zulauf
            </em>
          </h2>
          <p className="text-muted leading-relaxed">
            Endlich den richtigen Hebel im Maklergeschäft.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-md overflow-hidden shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Colored top bar */}
              <div className={`h-1.5 ${service.accent}`} />

              <div className="p-6 sm:p-8">
                {/* Icon */}
                <div className={`w-14 h-14 ${service.accentLight} rounded-md flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold text-primary leading-snug mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-primary/75"
                    >
                      <svg
                        className="w-4 h-4 text-accent shrink-0 mt-0.5"
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
