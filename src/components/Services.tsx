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
    mockup: "phone",
    mockupLabel: "Facebook Ad",
    accent: "from-accent to-accent-light",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    mockup: "dashboard",
    mockupLabel: "Kampagnen-Dashboard",
    accent: "from-sky-600 to-sky-400",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    mockup: "laptop",
    mockupLabel: "Makler Website",
    accent: "from-amber-600 to-amber-400",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function DeviceMockup({ type, accent }: { type: string; label: string; accent: string }) {
  return (
    <div className="w-full flex items-end justify-center mb-6 h-44">
      {type === "phone" && (
        <div className="relative w-28 h-44 bg-primary/90 rounded-xl shadow-lg overflow-hidden border-2 border-primary/20">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full" />
          <div className={`absolute inset-2 top-4 rounded-md bg-gradient-to-br ${accent} flex flex-col items-center justify-center p-2`}>
            <div className="w-full h-8 bg-white/20 rounded-sm mb-2" />
            <div className="w-3/4 h-2 bg-white/30 rounded-full mb-1" />
            <div className="w-1/2 h-2 bg-white/20 rounded-full mb-3" />
            <div className="w-full h-14 bg-white/15 rounded-sm" />
            <div className="mt-2 w-16 h-4 bg-white/30 rounded-sm" />
          </div>
        </div>
      )}

      {type === "dashboard" && (
        <div className="relative w-full max-w-[220px] h-36 bg-primary/90 rounded-lg shadow-lg overflow-hidden border-2 border-primary/20">
          <div className={`absolute inset-1.5 rounded-md bg-gradient-to-br ${accent} p-2`}>
            <div className="flex gap-1 mb-2">
              <div className="w-1/3 h-3 bg-white/25 rounded-sm" />
              <div className="w-1/3 h-3 bg-white/15 rounded-sm" />
              <div className="w-1/3 h-3 bg-white/20 rounded-sm" />
            </div>
            <div className="flex gap-1 h-16">
              <div className="w-1/2 bg-white/15 rounded-sm flex items-end p-1 gap-0.5">
                <div className="w-1/4 h-4 bg-white/30 rounded-sm" />
                <div className="w-1/4 h-8 bg-white/40 rounded-sm" />
                <div className="w-1/4 h-5 bg-white/30 rounded-sm" />
                <div className="w-1/4 h-10 bg-white/50 rounded-sm" />
              </div>
              <div className="w-1/2 bg-white/10 rounded-sm p-1 space-y-1">
                <div className="w-full h-2 bg-white/20 rounded-full" />
                <div className="w-3/4 h-2 bg-white/15 rounded-full" />
                <div className="w-full h-2 bg-white/20 rounded-full" />
                <div className="w-1/2 h-2 bg-white/15 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}

      {type === "laptop" && (
        <div className="relative">
          <div className="w-[210px] h-32 bg-primary/90 rounded-t-lg shadow-lg overflow-hidden border-2 border-b-0 border-primary/20">
            <div className={`absolute inset-1.5 bottom-0 rounded-t-md bg-gradient-to-br ${accent} p-2`}>
              <div className="w-full h-4 bg-white/20 rounded-sm mb-1.5" />
              <div className="flex gap-1">
                <div className="w-1/3 h-14 bg-white/15 rounded-sm" />
                <div className="w-2/3 space-y-1">
                  <div className="h-2 bg-white/20 rounded-full" />
                  <div className="h-2 w-3/4 bg-white/15 rounded-full" />
                  <div className="h-6 bg-white/10 rounded-sm mt-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[230px] h-2 bg-primary/20 rounded-b-lg mx-auto" />
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="leistungen" className="py-24 sm:py-32 bg-gradient-to-b from-section-alt to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex flex-col items-center gap-1.5 mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/40">
              Leistungen
            </span>
            <div className="w-10 h-0.5 bg-accent" />
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
              className="bg-white rounded-xl overflow-hidden shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Device Mockup */}
              <div className="pt-6 px-6">
                <DeviceMockup type={service.mockup} label={service.mockupLabel} accent={service.accent} />
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary leading-snug">
                    {service.title}
                  </h3>
                </div>
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
