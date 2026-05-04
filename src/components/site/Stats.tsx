import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Happy Patients" },
  { value: 4.8, suffix: "★", label: "Average Rating", decimals: 1 },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 18, suffix: "", label: "Treatments" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

function Counter({
  to,
  decimals = 0,
  suffix = "",
  active,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  active: boolean;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(eased * to);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return (
    <span className="tabular-nums">
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-ice text-ink py-24 overflow-hidden border-y border-royal/10">
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/4 size-[500px] rounded-full bg-sky/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 size-[500px] rounded-full bg-bright/10 blur-[120px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-bright font-semibold tracking-[0.2em] uppercase text-[11px]">
            By the numbers
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-light tracking-tighter text-balance max-w-3xl mx-auto">
            A decade of smiles built on{" "}
            <span className="italic text-bright">trust</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center lg:text-left p-6 rounded-3xl bg-white border border-royal/10 shadow-soft"
            >
              <div className="font-display text-5xl lg:text-6xl font-light tracking-tighter text-royal">
                <Counter
                  to={s.value}
                  decimals={s.decimals}
                  suffix={s.suffix}
                  active={inView}
                />
              </div>
              <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-bright">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
