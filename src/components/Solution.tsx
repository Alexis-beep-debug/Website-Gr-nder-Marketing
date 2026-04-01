const steps = [
  {
    number: "01",
    title: "Regionale Marktpräsenz",
    description:
      "Etablierung Ihrer Immobilienkompetenz in der Marktregion. Wir gewährleisten eine durchgängige Sichtbarkeit bei den relevanten Eigentümern und Interessenten auf digitalen Kanälen.",
    image: "/images/team/malte-gruender.jpeg",
    imageAlt: "Regionale Marktpräsenz aufbauen",
  },
  {
    number: "02",
    title: "Qualifizierte Kontaktanfragen",
    description:
      "Entwicklung spezifischer Angebote zur Generierung qualifizierter Kontaktanfragen von den richtigen Kundenavataren. Die Konvertierung erfolgt auf speziell optimierten Landeseiten.",
    image: "/images/team/malte-gruender.jpeg",
    imageAlt: "Qualifizierte Leads generieren",
  },
  {
    number: "03",
    title: "Zulauf und Wachstum",
    description:
      "Die gewonnenen qualifizierten Kontaktanfragen überführen Sie in Geschäftsabschlüsse. Dies sichert langfristigen Zulauf, messbares Wachstum und ein starkes Netzwerk an interessanten Kontakten.",
    image: "/images/team/malte-gruender.jpeg",
    imageAlt: "Wachstum und Erfolg",
  },
];

export default function Solution() {
  return (
    <section id="loesung" className="py-24 sm:py-32 bg-[#f0f5f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
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

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden lg:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm border-4 border-[#f0f5f3]">
                      {step.number}
                    </div>
                  </div>

                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                    {/* Image */}
                    <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative overflow-hidden rounded-md shadow-xl">
                        <img
                          src={step.image}
                          alt={step.imageAlt}
                          className="w-full aspect-[4/3] object-cover"
                        />
                        {/* Subtle accent overlay */}
                        <div className="absolute inset-0 bg-accent/5" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className={`${isEven ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12 lg:text-right"}`}>
                      {/* Mobile number badge */}
                      <div className={`lg:hidden mb-4 ${!isEven ? "flex justify-end" : ""}`}>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold text-sm">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted leading-relaxed text-base sm:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
