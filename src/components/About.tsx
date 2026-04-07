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
    <section id="ueber-uns" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-24">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-md aspect-[4/5] overflow-hidden">
              <img
                src="/images/team/malte-ueber-uns.png"
                alt="Malte-Valentin Gründer, Gründer & Geschäftsführer von Gründer Marketing"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-md -z-10" />
          </div>

          {/* Text */}
          <div>
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
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

        {/* Mission – Flow: Makler → Gründer Marketing → Ergebnisse */}
        <div className="relative bg-[#f5f5f5] rounded-md overflow-hidden p-6 sm:p-10 md:p-14 mb-14 sm:mb-20">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              Unsere Mission
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Immobilienmakler zukunftsstark.
            </h3>
            <p className="text-primary/50 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
              Wir unterstützen Immobilienmakler als professioneller Partner, damit
              Ihr Geschäft planbar wächst und Sie sich auf Ihre Kunden konzentrieren können.
            </p>
          </div>

          {/* Flow diagram – centered */}
          <div className="max-w-md mx-auto">
            {/* Step 1: Makler */}
            <div className="flex justify-center mb-3">
              <div className="bg-white rounded-xl shadow-md border border-primary/8 px-8 py-5 text-center">
                <svg className="w-8 h-8 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-base font-bold text-primary">Makler</span>
              </div>
            </div>

            {/* Dashed line + arrow */}
            <div className="flex justify-center py-1">
              <div className="flex flex-col items-center gap-0">
                <div className="w-px h-6 border-l-2 border-dashed border-accent/30" />
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>

            {/* Step 2: Gründer Marketing */}
            <div className="flex justify-center mb-3">
              <div className="bg-accent rounded-xl shadow-lg px-8 py-5 text-center">
                <img src="/images/logos/logo-white.svg" alt="Gründer Marketing" className="h-8 w-auto mx-auto mb-2" />
                <span className="text-base font-bold text-white">Gründer Marketing</span>
              </div>
            </div>

            {/* Branching lines down – SVG "arms" */}
            <div className="flex justify-center py-1">
              <svg width="280" height="40" viewBox="0 0 280 40" fill="none" className="max-w-full">
                {/* Center line down */}
                <line x1="140" y1="0" x2="140" y2="12" stroke="#5B7D73" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
                {/* Left branch */}
                <path d="M140 12 Q140 24 50 36" stroke="#5B7D73" strokeWidth="2" strokeDasharray="4 3" fill="none" opacity="0.4" />
                {/* Center branch */}
                <line x1="140" y1="12" x2="140" y2="36" stroke="#5B7D73" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
                {/* Right branch */}
                <path d="M140 12 Q140 24 230 36" stroke="#5B7D73" strokeWidth="2" strokeDasharray="4 3" fill="none" opacity="0.4" />
                {/* Dots at branch ends */}
                <circle cx="50" cy="36" r="3" fill="#5B7D73" opacity="0.3" />
                <circle cx="140" cy="36" r="3" fill="#5B7D73" opacity="0.3" />
                <circle cx="230" cy="36" r="3" fill="#5B7D73" opacity="0.3" />
              </svg>
            </div>

            {/* Step 3: Three results */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { text: "Planbare Aufträge", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { text: "Keine Auftragsnot", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { text: "Mehr Zeit fürs Kerngeschäft", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((result, i) => (
                <div key={i} className="bg-white border border-accent/15 rounded-xl p-4 text-center shadow-sm animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  <svg className="w-6 h-6 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={result.icon} />
                  </svg>
                  <span className="text-[11px] sm:text-xs font-semibold text-primary/60 leading-tight block">{result.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Qualities */}
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
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
              className="bg-card rounded-md p-8 shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
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
