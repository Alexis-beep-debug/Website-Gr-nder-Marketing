"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 4, suffix: "", label: "Aktive Kampagnen", icon: "campaigns" },
  { value: 30, suffix: "+", label: "Anfragen pro Monat", icon: "requests" },
  { value: 100, suffix: "%", label: "Kundenzufriedenheit", icon: "satisfaction" },
  { value: 15, suffix: "", label: "Partnermakler", icon: "partners" },
];

export default function AnimatedCounter() {
  return (
    <section className="py-16 sm:py-20 bg-[#2a3f37]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm text-white/50 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
