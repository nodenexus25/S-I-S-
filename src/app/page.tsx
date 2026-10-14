import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { homepageContent } from "@/content/homepage";
import { siteConfig } from "@/content/site-config";

export default function Home() {
  const h = homepageContent;

  return (
    <>
      {/* 1. HERO — Full-screen visual banner (no text overlay per user preference) */}
      <section
        aria-label="Sanjivani International School campus hero"
        className="relative h-[100svh] w-full overflow-hidden bg-[var(--ivory)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url("${h.hero.mediaImage}")`,
            animation:
              "slow-ken-burns 24s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,247,242,0)_40%,rgba(248,247,242,0)_65%,rgba(248,247,242,1)_100%)]" />
        <div className="absolute left-1/2 bottom-8 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[0.68rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
            {h.hero.eyebrow}
          </span>
          <div className="h-9 w-px bg-[var(--terracotta)]/60" />
        </div>
        <span className="sr-only">{h.hero.mediaAlt}</span>
      </section>

      {/* Hero editorial strip — academic year + primary CTAs, below the visual */}
      <section className="bg-[var(--ivory)]">
        <div className="editorial-shell py-[clamp(3rem,6vw,5rem)]">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">{h.discover.eyebrow}</p>
              <h1 className="mt-5 text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.02] tracking-[-0.015em] text-[var(--forest-deep)]">
                {h.discover.headline}
              </h1>
            </div>
            <div className="flex flex-col gap-5 lg:items-end lg:text-right">
              <p className="max-w-lg text-[1.0625rem] leading-[1.85] text-[var(--ink-soft)]">
                {h.discover.lead}
              </p>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Button href={h.hero.primaryCtaHref} variant="terracotta">
                  {h.hero.primaryCtaLabel}
                </Button>
                <Button href={h.hero.secondaryCtaHref} variant="secondary">
                  {h.hero.secondaryCtaLabel}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid gap-6 border-t border-[color:rgba(47,74,60,0.14)] pt-[clamp(2.5rem,5vw,4.5rem)] md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.quickStats.map((s) => (
              <div
                key={s.label}
                className="border-l border-[color:rgba(184,89,62,0.35)] pl-6"
              >
                <p className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-[1] tracking-[-0.01em] text-[var(--forest-deep)]">
                  {s.value}
                </p>
                <p className="mt-3 text-[0.7rem] font-semibold tracking-[0.18em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  {s.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]/80">
                  {s.caption}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid gap-3 border-t border-[color:rgba(47,74,60,0.14)] pt-[clamp(2.5rem,5vw,4.5rem)] text-sm text-[var(--ink-soft)]/85 md:grid-cols-3">
            {h.discover.signatureLines.map((line) => (
              <p
                key={line}
                className="flex items-center gap-3 border-t border-[color:rgba(184,89,62,0.25)] pt-3"
              >
                <span className="inline-block h-1 w-6 shrink-0 bg-[var(--terracotta)]/80" />
                <span className="tracking-[0.02em]">{line}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SIS */}
      <Section
        eyebrow={h.whyChoose.eyebrow}
        title={h.whyChoose.headline}
        description={h.whyChoose.summary}
        tone="warm"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {h.whyChoose.strengths.map((s, i) => (
            <article
              key={s.title}
              className="group relative flex h-full flex-col border border-[color:rgba(47,74,60,0.15)] bg-[var(--ivory)] p-8 transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[var(--terracotta)]/40"
            >
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                0{i + 1} · {s.eyebrow}
              </p>
              <h3 className="mt-5 font-display text-[1.55rem] leading-[1.15] tracking-[-0.01em] text-[var(--forest-deep)]">
                {s.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.8] text-[var(--ink-soft)]">
                {s.detail}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-[var(--terracotta)] transition-[width] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
              />
            </article>
          ))}
        </div>
      </Section>

      {/* 4. LEARNING @ SIS — alternating text/image editorial layout */}
      <Section
        eyebrow={h.learningAtSIS.eyebrow}
        title={h.learningAtSIS.headline}
        description={h.learningAtSIS.summary}
      >
        <div className="grid gap-[clamp(3rem,6vw,5.5rem)]">
          {h.learningAtSIS.stages.map((stage, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={stage.label}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-[clamp(2.5rem,5vw,4.5rem)] ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "16 / 10" }}
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                    style={{ backgroundImage: `url("${stage.image}")` }}
                  />
                  <span className="sr-only">{stage.imageAlt}</span>
                </div>
                <div>
                  <p className="eyebrow">{stage.label}</p>
                  <h3 className="mt-5 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.08] tracking-[-0.01em] text-[var(--forest-deep)]">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-[0.72rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                    {stage.classes}
                  </p>
                  <p className="mt-5 text-[1.02rem] leading-[1.9] text-[var(--ink-soft)]">
                    {stage.summary}
                  </p>
                  <div className="mt-7">
                    <Button href={stage.href} variant="ghost">
                      Explore this stage →
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* 5. LIFE @ SIS — 4-up editorial grid */}
      <Section
        eyebrow={h.lifeAtSIS.eyebrow}
        title={h.lifeAtSIS.headline}
        description={h.lifeAtSIS.summary}
        tone="sage"
      >
        <div className="grid gap-0 lg:grid-cols-2">
          {h.lifeAtSIS.areas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="group relative flex flex-col border border-[color:rgba(47,74,60,0.15)] bg-[var(--ivory)] lg:border-l-0 lg:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(odd)]:border-l"
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url("${area.image}")` }}
                />
                <span className="sr-only">{area.imageAlt}</span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-[1.5rem] leading-[1.15] tracking-[-0.01em] text-[var(--forest-deep)] transition-colors duration-300 group-hover:text-[var(--terracotta)]">
                  {area.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-[1.8] text-[var(--ink-soft)]">
                  {area.summary}
                </p>
                <span className="mt-auto pt-7 text-[0.7rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 6. LATEST NEWS & EVENTS — dated feed */}
      <Section
        eyebrow={h.newsAndEvents.eyebrow}
        title={h.newsAndEvents.headline}
      >
        <div className="grid gap-0 border border-[color:rgba(47,74,60,0.15)]">
          {h.newsAndEvents.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group grid gap-6 border-t border-[color:rgba(47,74,60,0.14)] p-[clamp(1.5rem,3vw,2.5rem)] transition-colors duration-400 first:border-t-0 hover:bg-[var(--terracotta-wash)]/50 md:grid-cols-[12rem_9rem_1fr_auto] md:items-center"
            >
              <time
                dateTime={item.dateISO}
                className="text-[0.72rem] font-semibold tracking-[0.2em] text-[var(--ink-soft)] [font-variant:all-small-caps]"
              >
                {item.date}
              </time>
              <span
                className={`inline-flex w-fit items-center border px-3 py-1.5 text-[0.66rem] font-semibold tracking-[0.2em] [font-variant:all-small-caps] ${
                  item.category === "Event"
                    ? "border-[var(--terracotta)]/40 bg-[var(--terracotta-wash)]/60 text-[var(--terracotta)]"
                    : item.category === "News"
                      ? "border-[var(--sage-deep)]/30 bg-[var(--sage-wash)] text-[var(--forest-deep)]"
                      : "border-[color:rgba(47,74,60,0.25)] bg-[var(--ivory-warm)] text-[var(--forest-deep)]"
                }`}
              >
                {item.category}
              </span>
              <div>
                <h3 className="font-display text-[1.4rem] leading-[1.2] tracking-[-0.01em] text-[var(--forest-deep)] transition-colors duration-300 group-hover:text-[var(--terracotta)]">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-2xl text-[0.95rem] leading-[1.75] text-[var(--ink-soft)]/90">
                  {item.summary}
                </p>
              </div>
              <span className="hidden text-[0.7rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps] md:inline-flex">
                Read story →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex">
          <Button href={h.newsAndEvents.viewAllHref} variant="secondary">
            {h.newsAndEvents.viewAllLabel}
          </Button>
        </div>
      </Section>

      {/* 7. OUR ACHIEVERS */}
      <Section
        eyebrow={h.ourAchievers.eyebrow}
        title={h.ourAchievers.headline}
        tone="warm"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {h.ourAchievers.items.map((a) => (
            <article
              key={a.title}
              className="relative flex h-full flex-col border border-[color:rgba(47,74,60,0.15)] bg-[var(--ivory)] p-8"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--terracotta)]" />
                <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  {a.date}
                </p>
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--sage-deep)] [font-variant:all-small-caps]">
                  · {a.category}
                </p>
              </div>
              <h3 className="mt-5 font-display text-[1.5rem] leading-[1.2] tracking-[-0.01em] text-[var(--forest-deep)]">
                {a.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.8] text-[var(--ink-soft)]">
                {a.detail}
              </p>
              <p className="mt-auto pt-6 text-[0.72rem] font-semibold tracking-[0.18em] text-[var(--ink-soft)]/80 [font-variant:all-small-caps]">
                {a.recipient}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex">
          <Button href={h.ourAchievers.viewAllHref} variant="forest">
            {h.ourAchievers.viewAllLabel}
          </Button>
        </div>
      </Section>

      {/* 8. EXPLORE OUR CAMPUS — visual-first grid */}
      <Section
        eyebrow={h.exploreCampus.eyebrow}
        title={h.exploreCampus.headline}
      >
        <div className="grid gap-0 border border-[color:rgba(47,74,60,0.15)] md:grid-cols-2 lg:grid-cols-3">
          {h.exploreCampus.facilities.map((f, i) => (
            <Link
              key={f.title}
              href={f.href}
              className={`group relative flex flex-col bg-[var(--ivory)] border-t border-l border-[color:rgba(47,74,60,0.14)] md:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+3)]:border-t-0 md:[&:nth-child(odd)]:border-l-0 lg:[&:nth-child(3n+1)]:border-l-0 ${
                i === 0 ? "border-t-0 border-l-0" : ""
              }`}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url("${f.image}")` }}
                />
                <span className="sr-only">{f.imageAlt}</span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-[1.35rem] leading-[1.2] tracking-[-0.01em] text-[var(--forest-deep)] transition-colors duration-300 group-hover:text-[var(--terracotta)]">
                  {f.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-[1.75] text-[var(--ink-soft)]/90">
                  {f.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex">
          <Button href={h.exploreCampus.viewAllHref} variant="secondary">
            {h.exploreCampus.viewAllLabel}
          </Button>
        </div>
      </Section>

      {/* 9. COMMUNITY TESTIMONIALS */}
      <Section
        eyebrow={h.testimonials.eyebrow}
        title={h.testimonials.headline}
        tone="sage"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {h.testimonials.items.map((t, i) => (
            <figure
              key={i}
              className="relative flex h-full flex-col border border-[color:rgba(47,74,60,0.18)] bg-[var(--ivory)] p-10"
            >
              <span
                aria-hidden="true"
                className="absolute left-8 top-6 font-display text-[6rem] leading-none text-[var(--terracotta)]/30"
              >
                “
              </span>
              <blockquote className="relative z-10">
                <p className="font-display text-[1.35rem] leading-[1.5] tracking-[-0.005em] text-[var(--forest-deep)]">
                  {t.quote}
                </p>
              </blockquote>
              <figcaption className="mt-auto pt-8 border-t border-[color:rgba(47,74,60,0.14)]">
                <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-[var(--forest-deep)] [font-variant:all-small-caps]">
                  {t.name}
                </p>
                <p className="mt-1.5 text-sm text-[var(--ink-soft)]/80">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-[var(--ink-soft)]/75">
          {h.testimonials.note}
        </p>
      </Section>

      {/* 10. ADMISSIONS CTA */}
      <section className="bg-[var(--forest-deep)] text-[var(--ivory)]">
        <div className="editorial-shell py-[clamp(4rem,8vw,7rem)]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="flex items-center gap-4 text-[0.72rem] font-semibold tracking-[0.2em] text-[var(--terracotta-soft)] [font-variant:all-small-caps]">
                <span className="inline-block h-px w-10 bg-[var(--terracotta-soft)]/60" />
                {h.admissionsCall.eyebrow}
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-[var(--ivory)]">
                {h.admissionsCall.headline}
              </h2>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.9] text-[var(--ivory)]/80">
                {h.admissionsCall.summary}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  href={h.admissionsCall.primaryCtaHref}
                  className="!border-[var(--terracotta)] !bg-[var(--terracotta)] !text-[var(--ivory)] hover:!bg-transparent hover:!text-[var(--ivory)]"
                >
                  {h.admissionsCall.primaryCtaLabel}
                </Button>
                <Button
                  href={h.admissionsCall.secondaryCtaHref}
                  className="!border-[var(--ivory)]/80 !bg-transparent !text-[var(--ivory)] hover:!bg-[var(--ivory)] hover:!text-[var(--forest-deep)]"
                >
                  {h.admissionsCall.secondaryCtaLabel}
                </Button>
              </div>
            </div>
            <div className="relative">
              <ul className="grid gap-0 border border-[color:rgba(248,247,242,0.15)]">
                {h.admissionsCall.bullets.map((b, i) => (
                  <li
                    key={b}
                    className="flex items-start gap-5 border-t border-[color:rgba(248,247,242,0.12)] p-6 first:border-t-0"
                  >
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--terracotta-soft)]/50 text-[0.72rem] font-semibold tracking-[0.14em] text-[var(--terracotta-soft)] [font-variant:all-small-caps]">
                      0{i + 1}
                    </span>
                    <p className="text-[0.98rem] leading-[1.75] text-[var(--ivory)]/88">
                      {b}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. LATEST GALLERY — 6-up asymmetric grid */}
      <Section
        eyebrow={h.latestGallery.eyebrow}
        title={h.latestGallery.headline}
      >
        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {h.latestGallery.items.map((g, i) => {
            const spanClass =
              i === 0
                ? "md:col-span-2 md:row-span-2"
                : i === 5
                  ? "md:col-span-2"
                  : "";
            return (
              <Link
                key={g.title}
                href={h.latestGallery.viewAllHref}
                className={`group relative block overflow-hidden ${spanClass}`}
                style={{ aspectRatio: i === 0 ? "1 / 1" : i === 5 ? "16 / 9" : "4 / 3" }}
              >
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  style={{ backgroundImage: `url("${g.image}")` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(30,51,40,0.72)_100%)] opacity-70 transition-opacity duration-400 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-[var(--ivory)]">
                  <div>
                    <p className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta-soft)] [font-variant:all-small-caps]">
                      {g.category}
                    </p>
                    <p className="mt-1.5 font-display text-[1.15rem] leading-[1.15] tracking-[-0.005em]">
                      {g.title}
                    </p>
                  </div>
                </div>
                <span className="sr-only">{g.imageAlt}</span>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 flex">
          <Button href={h.latestGallery.viewAllHref} variant="secondary">
            {h.latestGallery.viewAllLabel}
          </Button>
        </div>
      </Section>

      {/* 12. IMPORTANT LINKS */}
      <Section
        eyebrow={h.importantLinks.eyebrow}
        title={h.importantLinks.headline}
        tone="warm"
      >
        <div className="grid gap-0 border border-[color:rgba(47,74,60,0.14)] md:grid-cols-2 lg:grid-cols-3">
          {h.importantLinks.items.map((l, i) => (
            <Link
              key={l.title}
              href={l.href}
              className={`group relative flex flex-col bg-[var(--ivory)] border-t border-l border-[color:rgba(47,74,60,0.12)] p-7 transition-colors duration-400 hover:bg-[var(--sage-wash)]/60 md:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+3)]:border-t-0 md:[&:nth-child(odd)]:border-l-0 lg:[&:nth-child(3n+1)]:border-l-0 ${
                i === 0 ? "border-t-0 border-l-0" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  0{i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className="text-[var(--forest-deep)] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-[var(--terracotta)]"
                >
                  →
                </span>
              </div>
              <h3 className="mt-5 font-display text-[1.35rem] leading-[1.2] tracking-[-0.01em] text-[var(--forest-deep)] transition-colors duration-300 group-hover:text-[var(--terracotta)]">
                {l.title}
              </h3>
              <p className="mt-3 text-[0.9rem] leading-[1.7] text-[var(--ink-soft)]/88">
                {l.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
