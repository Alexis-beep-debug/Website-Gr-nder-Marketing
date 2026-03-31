"use client";

const reviews = [
  {
    quote:
      "Seit wir mit Gründer Marketing arbeiten, bekommen wir jede Woche qualifizierte Eigentümeranfragen. Das hat unser Geschäft komplett verändert.",
    name: "Thomas M.",
    time: "vor 2 Monaten",
    stars: 5,
  },
  {
    quote:
      "Endlich ein Partner, der versteht wie die Immobilienbranche funktioniert. Die Kampagnen sind punktgenau und die Ergebnisse sprechen für sich.",
    name: "Sandra K.",
    time: "vor 3 Monaten",
    stars: 5,
  },
  {
    quote:
      "Innerhalb von 3 Monaten hatten wir mehr Alleinaufträge als im gesamten Vorjahr. Die Investition hat sich mehrfach ausgezahlt.",
    name: "Markus W.",
    time: "vor 1 Monat",
    stars: 5,
  },
];

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex flex-col items-center gap-1.5 mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/40">
              Bewertungen
            </span>
            <div className="w-10 h-0.5 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
            Das sagen unsere{" "}
            <em
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
              className="text-accent"
            >
              Kunden
            </em>
          </h2>

          {/* Google rating badge */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <GoogleIcon />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">5,0</span>
              <Stars count={5} />
            </div>
            <span className="text-sm text-primary/40">auf Google</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-primary/5 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{r.name}</p>
                    <p className="text-xs text-primary/35">{r.time}</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              {/* Stars */}
              <Stars count={r.stars} />

              {/* Quote */}
              <p className="text-sm text-primary/65 leading-relaxed mt-3">
                {r.quote}
              </p>
            </div>
          ))}
        </div>

        {/* Link to Google */}
        <div className="text-center mt-10">
          <a
            href="https://maps.app.goo.gl/8sYBb5gEUKHqZ4DX9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light font-medium transition-colors"
          >
            Alle Bewertungen auf Google ansehen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
