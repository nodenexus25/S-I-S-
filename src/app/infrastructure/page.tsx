import { Section } from "@/components/ui/section";
import { campusIntro, campusFacilities } from "@/content/infrastructure";

const sectionTones: Array<"ivory" | "warm" | "sage"> = ["ivory", "warm", "sage"];

export default function InfrastructurePage() {
  return (
    <>
      <Section
        eyebrow={campusIntro.eyebrow}
        title={campusIntro.headline}
        description={campusIntro.summary}
        tone="ivory"
      >
        <div className="grid gap-6 pt-2 md:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Campus Size", v: "12+ acres · green, fenced, purpose-built" },
            { k: "Academic Wings", v: "4 wings · Pre-Primary, Primary, Middle, Senior" },
            { k: "CCTV Coverage", v: "64+ IR cameras · 30-day rolling backup" },
            { k: "Green Cover", v: "80+ native trees · rainwater harvesting · composting" },
          ].map((c) => (
            <div
              key={c.k}
              className="border-l border-[var(--terracotta)]/40 pl-6"
            >
              <p className="text-[0.66rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                {c.k}
              </p>
              <p className="mt-2.5 font-display text-[1.1rem] leading-[1.35] text-[var(--forest-deep)]">
                {c.v}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {campusFacilities.map((f, i) => {
        const reverse = i % 2 === 1;
        const tone = sectionTones[(i + 1) % 3];
        const secondary = f.id === "safety-security" || f.id === "transport";
        return (
          <Section
            key={f.id}
            eyebrow={`Facility ${String(i + 1).padStart(2, "0")} · ${
              secondary ? "Campus Support · " : ""
            }${f.eyebrow}`}
            title={f.title}
            description={f.summary}
            tone={tone}
            id={f.id === "safety-security" ? "safety" : f.id === "transport" ? "transport" : f.id}
          >
            <article
              className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-[clamp(2.5rem,5vw,4.5rem)] ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "16 / 10" }}
              >
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url("${f.image}")` }}
                />
                <span className="sr-only">{f.imageAlt}</span>
              </div>
              <div>
                <p className="mt-2 text-[1.02rem] leading-[1.9] text-[var(--ink-soft)]">
                  {f.description}
                </p>
                <div className="mt-8 border-t border-[color:rgba(47,74,60,0.18)] pt-7">
                  <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                    — Facility Highlights
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {f.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 border border-[color:rgba(47,74,60,0.15)] bg-[var(--ivory)] px-4 py-3 text-[0.88rem] leading-[1.65] text-[var(--ink-soft)]"
                      >
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--forest-deep)]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Section>
        );
      })}
    </>
  );
}
