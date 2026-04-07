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
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                Unsere Mission
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Immobilienmakler zukunftsstark.
              </h3>
              <p className="text-primary/50 leading-relaxed text-base sm:text-lg">
                Gründer Marketing wurde ins Leben gerufen, um Immobilienmakler als
                professioneller Partner an der Seite zu unterstützen. Wir helfen
                dabei, Alleinaufträge zu gewinnen, damit Ihr Geschäft planbar wächst
                und Sie sich auf Ihre Kunden konzentrieren können.
              </p>
            </div>

            {/* Right: Vertical flow diagram */}
            <div className="relative w-full max-w-[280px] mx-auto">
              {/* SVG flow lines */}
              <svg className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 z-0" viewBox="0 0 16 400" fill="none" preserveAspectRatio="none">
                <line x1="8" y1="60" x2="8" y2="150" stroke="#5B7D73" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                <line x1="8" y1="210" x2="8" y2="290" stroke="#5B7D73" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                {/* Animated pulse dot going down */}
                <circle r="4" fill="#5B7D73" opacity="0.6">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 8,60 L 8,290" />
                </circle>
              </svg>

              {/* Step 1: Makler (top) */}
              <div className="relative z-10 flex justify-center mb-6">
                <div className="bg-white rounded-lg shadow-md border border-primary/8 px-6 py-4 text-center">
                  <svg className="w-7 h-7 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm font-semibold text-primary">Makler</span>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center mb-6">
                <svg className="w-5 h-5 text-accent animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ animationDuration: "2s" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>

              {/* Step 2: Gründer Marketing (center) */}
              <div className="relative z-10 flex justify-center mb-6">
                <div className="bg-primary rounded-lg shadow-lg px-6 py-4 text-center">
                  <img src="/images/logos/logo-white.svg" alt="Gründer Marketing" className="w-10 h-auto mx-auto mb-2 brightness-0 invert" />
                  <span className="text-sm font-semibold text-white">Gründer Marketing</span>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center mb-6">
                <svg className="w-5 h-5 text-accent animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ animationDuration: "2s", animationDelay: "0.5s" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>

              {/* Step 3: Ergebnisse (bottom) */}
              <div className="relative z-10 space-y-3">
                {[
                  { text: "Planbare Aufträge", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { text: "Keine Auftragsnot", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { text: "Mehr Zeit fürs Kerngeschäft", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                ].map((result, i) => (
                  <div key={i} className="flex items-center gap-3 bg-accent/8 border border-accent/15 rounded-lg px-4 py-3 animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={result.icon} />
                    </svg>
                    <span className="text-sm font-medium text-primary/70">{result.text}</span>
                  </div>
                ))}
              </div>
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
