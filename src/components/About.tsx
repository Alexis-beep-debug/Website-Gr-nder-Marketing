const qualities = [
  {
    title: "Expertise aus zwei Welten",
    description:
      "Wir kombinieren Branchenkenntnisse im Immobilienbereich mit langjähriger Beratungs- und Marketingkompetenz.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Einsatz von KI, die Budgets schont",
    description:
      "Durch KI-basierte Technologien vervielfachen wir Werbemittel in verschiedene Varianten und senken die Kosten pro qualifizierter Anfrage deutlich.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Individuelle Arbeit für Top-Ergebnisse",
    description:
      "Wir betreuen jeden Makler persönlich. Wir schauen uns Ihre Region, Zielgruppe und aktuelle Situation an und entwickeln daraus eine maßgeschneiderte Strategie.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-24">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl aspect-[4/5] overflow-hidden">
              <img
                src="/images/team/malte-gruender.jpeg"
                alt="Malte-Valentin Gründer – Gründer & Geschäftsführer von Gründer Marketing"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Der Gründer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-2">
              Malte-Valentin Gründer
            </h2>
            <p className="text-accent font-semibold mb-6">
              Gründer & Geschäftsführer
            </p>
            <blockquote className="text-muted leading-relaxed text-base sm:text-lg border-l-4 border-accent pl-4 sm:pl-6 mb-8 italic">
              &ldquo;Ich habe selbst als Makler und in der Hausverwaltung
              gearbeitet. Ich weiß also genau, was es bedeutet, täglich
              Eigentümer zu akquirieren und gleichzeitig das laufende Geschäft am
              Leben zu halten.&rdquo;
            </blockquote>
            <p className="text-muted leading-relaxed">
              Dieses Branchenwissen kombiniert er mit Marketingwissen aus
              Erfahrung und dem Einsatz aktueller Tools. Als junger Gründer kennt
              er die neuesten Trends und wendet sie direkt für seine Kunden an.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-accent/[0.06] border border-accent/15 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center mb-14 sm:mb-20">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Unsere Mission
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mt-3 mb-6">
            Immobilienmakler zukunftsstark.
          </h3>
          <p className="text-primary/60 leading-relaxed max-w-3xl mx-auto text-lg">
            Gründer Marketing wurde ins Leben gerufen, um Immobilienmakler als
            professioneller Partner an der Seite zu unterstützen, weil der
            Objektzulauf eingebrochen ist und die aktuellen Akquisemaßnahmen
            allein nicht mehr reichen. Wir helfen ihnen dabei, Alleinaufträge zu
            bekommen, damit ihr Geschäft wieder läuft und sie sich auf ihr
            Spezialgebiet konzentrieren können: Die Betreuung ihrer Kunden.
          </p>
        </div>

        {/* Qualities */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Unsere Stärken
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3">
            Was macht uns aus?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {qualities.map((q, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {q.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{q.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {q.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
