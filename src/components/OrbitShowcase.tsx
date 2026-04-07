"use client";

import { useEffect, useRef } from "react";

const orbitItems = [
  { label: "Performance Marketing", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
  { label: "Emotionale Ansprache", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
  { label: "Vertrauensaufbau", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { label: "Conversion Steigerung", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" },
  { label: "Zielgruppenverständnis", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { label: "Qualifizierte Anfragen", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
];

export default function OrbitShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use JS to position items on the outer ring and animate
    const container = containerRef.current;
    if (!container) return;

    let angle = 0;
    let animId: number;
    const speed = 0.08; // degrees per frame – moderate, elegant rotation

    const items = container.querySelectorAll<HTMLElement>(".orbit-el");
    const count = items.length;

    function animate() {
      angle += speed;
      const size = container!.offsetWidth;
      const r = size / 2;
      items.forEach((item, i) => {
        const itemAngle = angle + (i * 360) / count;
        const rad = (itemAngle * Math.PI) / 180;
        // Place exactly on the outer ring (radius = half container)
        item.style.left = `${r + r * Math.cos(rad)}px`;
        item.style.top = `${r + r * Math.sin(rad)}px`;
      });
      animId = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
              Unsere Methode
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
            So{" "}
            <em style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }} className="text-accent">
              arbeiten
            </em>{" "}wir
          </h2>
          <p className="mt-4 text-primary/50 text-lg max-w-xl mx-auto">
            Sechs Faktoren für Ihren digitalen Erfolg.
          </p>
        </div>

        {/* Orbit with JS animation for pixel-perfect ring placement */}
        <div
          ref={containerRef}
          className="relative mx-auto w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px]"
        >
          {/* Green gradient background */}
          <div className="absolute inset-0 rounded-full" style={{
            background: "radial-gradient(circle, rgba(91,125,115,0.22) 0%, rgba(91,125,115,0.12) 20%, rgba(91,125,115,0.05) 45%, rgba(91,125,115,0.01) 70%, transparent 100%)"
          }} />

          {/* Rings */}
          <div className="absolute inset-0 rounded-full border border-accent/15" />
          <div className="absolute inset-[20%] rounded-full border border-accent/10" />
          <div className="absolute inset-[36%] rounded-full border border-accent/6" />

          {/* Orbiting elements – positioned by JS */}
          {orbitItems.map((item, i) => (
            <div
              key={i}
              className="orbit-el absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: 0, top: 0 }}
            >
              {/* Desktop: card */}
              <div className="hidden sm:flex items-center gap-2 bg-white shadow-md border border-accent/12 rounded-xl px-3 py-2 whitespace-nowrap">
                <div className="w-7 h-7 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-primary/55">{item.label}</span>
              </div>
              {/* Mobile: dot */}
              <div className="sm:hidden w-10 h-10 bg-white shadow-md border border-accent/12 rounded-full flex items-center justify-center text-accent">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
            </div>
          ))}

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-2 border-accent/20 flex items-center justify-center" style={{
              background: "radial-gradient(circle, rgba(91,125,115,0.18), rgba(91,125,115,0.06) 60%, transparent)"
            }}>
              <img src="/images/logos/logo-dark.svg" alt="Gründer Marketing" className="w-12 sm:w-20 lg:w-24 h-auto" />
            </div>
          </div>
        </div>

        {/* Mobile labels */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 sm:hidden">
          {orbitItems.map((item, i) => (
            <span key={i} className="bg-accent/10 text-accent text-[10px] font-semibold px-3 py-1.5 rounded-full">
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
