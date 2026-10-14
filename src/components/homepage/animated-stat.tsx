"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function parseValue(value: string) {
  const numeric = Number.parseInt(value.replace(/[^\d]/g, ""), 10);
  const prefix = value.match(/^[^\d]*/)?.[0] ?? "";
  const suffix = value.replace(/^[^\d]*/, "").replace(/[\d,]+/, "");

  return {
    raw: value,
    numeric: Number.isNaN(numeric) ? null : numeric,
    prefix,
    suffix,
  };
}

export function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const parsed = useMemo(() => parseValue(value), [value]);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) return;

        setHasAnimated(true);

        if (parsed.numeric === null) {
          setDisplayValue(parsed.raw);
          observer.disconnect();
          return;
        }

        const finalValue = parsed.numeric;
        const duration = 1200;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const next = Math.round(finalValue * progress).toLocaleString("en-IN");
          setDisplayValue(`${parsed.prefix}${next}${parsed.suffix}`);

          if (progress < 1) {
            window.requestAnimationFrame(tick);
          }
        };

        window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasAnimated, parsed]);

  return (
    <div ref={ref}>
      <p className="font-mono text-4xl font-semibold text-[var(--color-energy)] sm:text-5xl">
        {displayValue}
      </p>
      <p className="mt-3 text-sm font-medium text-[var(--color-ink)]/70">{label}</p>
    </div>
  );
}
