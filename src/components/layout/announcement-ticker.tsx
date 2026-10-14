"use client";

import { useEffect, useState } from "react";

export function AnnouncementTicker({ items }: { items: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [items]);

  return (
    <div className="relative h-5 overflow-hidden">
      {items.map((item, itemIndex) => {
        const isActive = itemIndex === index;

        return (
          <p
            key={item}
            className={`absolute inset-0 text-center text-xs font-semibold tracking-[0.2em] text-white transition duration-500 ${isActive ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
}
