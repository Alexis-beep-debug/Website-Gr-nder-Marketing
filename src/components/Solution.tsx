const steps = [
  {
    number: "01",
    title: "Regionale Marktpräsenz",
    description:
      "Etablierung Ihrer Immobilienkompetenz in der Marktregion. Wir gewährleisten eine durchgängige Sichtbarkeit bei den relevanten Eigentümern und Interessenten auf digitalen Kanälen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Qualifizierte Kontaktanfragen",
    description:
      "Entwicklung spezifischer Angebote zur Generierung qualifizierter Kontaktanfragen von den richtigen Kundenavataren. Die Konvertierung erfolgt auf speziell optimierten Landeseiten.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Zulauf und Wachstum",
    description:
      "Die gewonnenen qualifizierten Kontaktanfragen überführen Sie in Geschäftsabschlüsse. Dies sichert langfristigen Zulauf, messbares Wachstum und ein starkes Netzwerk an interessanten Kontakten.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Solution() {
  return (
    <section id="loesung" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Unsere Lösung
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            Ihr Weg zum planbaren Maklererfolg
          </h2>
          <p className="text-muted leading-relaxed">
            Wir analysieren Ihre aktuelle Akquise- und Vermarktungssituation und
            entwickeln eine individuelle Strategie, die Empfehlungsgeschäft und
            unrentable Marketing-Maßnahmen ablöst.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-light rounded-2xl p-8 h-full border border-black/5 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                {/* Number */}
                <span className="text-5xl font-extrabold text-accent/15 absolute top-6 right-6">
                  {step.number}
                </span>
                {/* Icon */}
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
