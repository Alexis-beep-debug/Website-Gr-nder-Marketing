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

        {/* Mission – with animated marquee */}
        <div className="relative bg-primary rounded-md overflow-hidden p-6 sm:p-10 md:p-14 text-center mb-14 sm:mb-20">
          {/* Animated background words */}
          <div className="absolute inset-0 flex flex-col justify-center gap-6 opacity-[0.04] pointer-events-none overflow-hidden">
            <div className="flex gap-8 whitespace-nowrap animate-marquee text-6xl sm:text-8xl font-extrabold text-white">
              <span>ZUKUNFTSSTARK</span>
              <span>PLANBAR</span>
              <span>DIGITAL</span>
              <span>WACHSTUM</span>
              <span>ZUKUNFTSSTARK</span>
              <span>PLANBAR</span>
              <span>DIGITAL</span>
              <span>WACHSTUM</span>
            </div>
            <div className="flex gap-8 whitespace-nowrap animate-marquee-reverse text-6xl sm:text-8xl font-extrabold text-white">
              <span>SICHTBARKEIT</span>
              <span>ALLEINAUFTRÄGE</span>
              <span>ERFOLG</span>
              <span>VERTRAUEN</span>
              <span>SICHTBARKEIT</span>
              <span>ALLEINAUFTRÄGE</span>
              <span>ERFOLG</span>
              <span>VERTRAUEN</span>
            </div>
          </div>

          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "6s" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/8 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "8s", animationDelay: "3s" }} />

          <div className="relative z-10">
            <span className="inline-block bg-white/10 text-accent-light text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              Unsere Mission
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Immobilienmakler zukunftsstark.
            </h3>
            <p className="text-white/55 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg">
              Gründer Marketing wurde ins Leben gerufen, um Immobilienmakler als
              professioneller Partner an der Seite zu unterstützen. Wir helfen
              dabei, Alleinaufträge zu gewinnen, damit Ihr Geschäft planbar wächst
              und Sie sich auf Ihre Kunden konzentrieren können.
            </p>
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
