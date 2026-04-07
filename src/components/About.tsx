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

        {/* Mission – with connection diagram */}
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

            {/* Right: Connection diagram */}
            <div className="relative w-full max-w-[320px] mx-auto aspect-square">
              {/* Connection lines SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none">
                {/* Vertical line from Makler to Strategie */}
                <line x1="160" y1="70" x2="160" y2="140" stroke="#5B7D73" strokeWidth="2" strokeDasharray="200" className="animate-draw-line" />
                {/* Line from Strategie to Gründer Marketing */}
                <line x1="160" y1="180" x2="240" y2="240" stroke="#5B7D73" strokeWidth="2" strokeDasharray="200" className="animate-draw-line" style={{ animationDelay: "0.5s" }} />
                {/* Line from Strategie to Eigentümer */}
                <line x1="160" y1="180" x2="80" y2="240" stroke="#5B7D73" strokeWidth="2" strokeDasharray="200" className="animate-draw-line" style={{ animationDelay: "1s" }} />
                {/* Dots at intersections */}
                <circle cx="160" cy="110" r="4" fill="#5B7D73" opacity="0.4" />
                <circle cx="200" cy="210" r="3" fill="#5B7D73" opacity="0.3" />
                <circle cx="120" cy="210" r="3" fill="#5B7D73" opacity="0.3" />
              </svg>

              {/* Box: Makler (top) */}
              <div className="absolute top-[5%] left-1/2 -translate-x-1/2 animate-float">
                <div className="bg-white rounded-lg shadow-md border border-primary/8 px-4 py-3 text-center">
                  <svg className="w-6 h-6 text-accent mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <span className="text-[11px] font-semibold text-primary/70">Makler</span>
                </div>
              </div>

              {/* Box: Strategie (center) */}
              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: "1s" }}>
                <div className="bg-white rounded-lg shadow-md border border-primary/8 px-5 py-3 text-center">
                  <svg className="w-6 h-6 text-accent mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  <span className="text-[11px] font-semibold text-primary/70">Strategie</span>
                </div>
              </div>

              {/* Box: Eigentümer (bottom left) */}
              <div className="absolute bottom-[8%] left-[10%] animate-float" style={{ animationDelay: "2s" }}>
                <div className="bg-white rounded-lg shadow-md border border-primary/8 px-4 py-3 text-center">
                  <svg className="w-6 h-6 text-accent mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-[11px] font-semibold text-primary/70">Eigentümer</span>
                </div>
              </div>

              {/* Box: Gründer Marketing (bottom right) */}
              <div className="absolute bottom-[8%] right-[5%] animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="bg-primary rounded-lg shadow-lg px-4 py-3 text-center">
                  <img src="/images/logos/logo.png" alt="Gründer Marketing" className="w-8 h-auto mx-auto mb-1 brightness-0 invert" />
                  <span className="text-[10px] font-semibold text-white/70">Gründer Marketing</span>
                </div>
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
