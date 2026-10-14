import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/content/homepage";

function highlightHeadline(headline: string, highlight: string) {
  const parts = headline.split(highlight);

  if (parts.length < 2) {
    return headline;
  }

  return (
    <>
      {parts[0]}
      <span className="relative inline-block">
        <span className="relative z-10">{highlight}</span>
        <span className="absolute inset-x-0 bottom-2 z-0 h-3 rounded-full bg-[var(--color-energy)]/30" />
      </span>
      {parts.slice(1).join(highlight)}
    </>
  );
}

export function HeroSection({ hero }: { hero: HeroContent }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-8 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-18">
      <div className="flex flex-col justify-center">
        <p className="animate-[fade-up_0.6s_ease-out_both] text-sm font-semibold tracking-[0.24em] text-[var(--color-primary)]">
          {hero.eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl animate-[fade-up_0.7s_ease-out_both] font-display text-5xl leading-[0.92] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
          {highlightHeadline(hero.headline, hero.highlight)}
        </h1>
        <p
          className="mt-6 max-w-2xl animate-[fade-up_0.8s_ease-out_both] text-lg leading-8 text-[var(--color-ink)]/72"
          style={{ animationDelay: "80ms" }}
        >
          {hero.subheadline}
        </p>
        <div
          className="mt-8 flex animate-[fade-up_0.9s_ease-out_both] flex-wrap gap-4"
          style={{ animationDelay: "160ms" }}
        >
          <Button href="/admissions">{hero.ctaPrimary}</Button>
          <Button href="/contact" variant="ghost">
            {hero.ctaSecondary}
          </Button>
        </div>
      </div>

      <div
        className="animate-[fade-up_0.9s_ease-out_both]"
        style={{ animationDelay: "240ms" }}
      >
        <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-bright))] p-3 shadow-[0_28px_70px_rgba(59,47,212,0.24)]">
          <div
            className="relative min-h-[440px] overflow-hidden rounded-[26px] bg-cover bg-center"
            style={{ backgroundImage: `url("${hero.mediaImage}")` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,47,212,0.72),rgba(108,92,231,0.58))]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="inline-flex rounded-full border border-white/22 bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                Campus Life / Learning Today
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/88">
                A brighter, youth-resonant identity starts by showing real student energy,
                not abstract luxury cues.
              </p>
            </div>
            <span className="sr-only">{hero.mediaAlt}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
