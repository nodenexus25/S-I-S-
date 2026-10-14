import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { studentLifeContent, lifeAtSISIntro } from "@/content/student-life";
import { campusPhotography } from "@/content/design-tokens";

const sectionTones: Array<"ivory" | "warm" | "sage"> = ["ivory", "warm", "sage"];

export default function StudentLifePage() {
  return (
    <>
      <Section
        eyebrow={lifeAtSISIntro.eyebrow}
        title={lifeAtSISIntro.headline}
        description={lifeAtSISIntro.summary}
        tone="ivory"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Timetabled PE for every class, every day of the week",
            "Eleven student-led clubs + four house teams",
            "Annual field trips for every class, Nursery to XII",
          ].map((l) => (
            <p
              key={l}
              className="flex items-start gap-4 border-l border-[var(--terracotta)]/40 pl-6 text-[0.95rem] leading-[1.75] text-[var(--ink-soft)]"
            >
              <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-[var(--terracotta)]" />
              {l}
            </p>
          ))}
        </div>
      </Section>

      {studentLifeContent.map((area, i) => {
        const reverse = i % 2 === 1;
        const tone = sectionTones[(i + 1) % 3];
        return (
          <Section
            key={area.id}
            eyebrow={`Area ${String(i + 1).padStart(2, "0")} · ${area.eyebrow}`}
            title={area.title}
            description={area.summary}
            tone={tone}
            id={area.id}
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
                  style={{ backgroundImage: `url("${area.image}")` }}
                />
                <span className="sr-only">{area.imageAlt}</span>
              </div>
              <div>
                <p className="mt-2 text-[1.02rem] leading-[1.9] text-[var(--ink-soft)]">
                  {area.detailed}
                </p>
                <div className="mt-8 border-t border-[color:rgba(47,74,60,0.18)] pt-7">
                  <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                    — Key Programmes & Events
                  </p>
                  <ul className="mt-5 grid gap-3">
                    {area.keyPrograms.map((k) => (
                      <li
                        key={k}
                        className="flex items-start gap-4 text-[0.93rem] leading-[1.7] text-[var(--ink-soft)]"
                      >
                        <span className="mt-1.5 inline-block h-1 w-6 shrink-0 bg-[var(--forest-deep)]" />
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Section>
        );
      })}

      <section className="bg-[var(--forest-deep)] text-[var(--ivory)]">
        <div className="editorial-shell py-[clamp(4rem,8vw,7rem)]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow !text-[var(--terracotta-soft)]">
                — See it for yourself
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em]">
                Stories, photo galleries, and behind-the-scenes from every part of life at SIS.
              </h2>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.9] text-[var(--ivory)]/82">
                The full Event Stories archive — Annual Day, Sports Day, Science
                Exhibition, Grandparents&rsquo; Day, and more — lives under News &
                Events, with photo galleries from every major event of the last two
                academic years.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  href="/news-events#event-stories"
                  className="!border-[var(--terracotta)] !bg-[var(--terracotta)] !text-[var(--ivory)] hover:!bg-transparent hover:!text-[var(--ivory)]"
                >
                  Browse Event Stories →
                </Button>
                <Button
                  href="/gallery"
                  className="!border-[var(--ivory)]/80 !bg-transparent !text-[var(--ivory)] hover:!bg-[var(--ivory)] hover:!text-[var(--forest-deep)]"
                >
                  Full Photo Gallery
                </Button>
              </div>
            </div>
            <div className="grid gap-3">
              {[
                { t: "Annual Day 2025 · 320 students on stage", cat: "Event Stories" },
                { t: "Sports Day 2025 · 38 events, 900+ finishers", cat: "Event Stories" },
                { t: "Science Exhibition · 112 working models", cat: "Event Stories" },
                { t: "Grandparents&rsquo; Day · 284 Ajji-Ajobas on campus", cat: "Event Stories" },
              ].map((r, i) => (
                <div
                  key={r.t}
                  className={`flex items-center justify-between gap-6 border border-[color:rgba(248,247,242,0.14)] bg-[color:rgba(248,247,242,0.04)] p-5 ${
                    i > 0 ? "mt-0" : ""
                  }`}
                >
                  <div>
                    <p className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta-soft)] [font-variant:all-small-caps]">
                      {r.cat}
                    </p>
                    <p
                      className="mt-2 font-display text-[1.05rem] leading-[1.3] text-[var(--ivory)]"
                      dangerouslySetInnerHTML={{ __html: r.t }}
                    />
                  </div>
                  <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-[var(--ivory)]/70 [font-variant:all-small-caps]">
                    Read →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
