import type { Metadata } from "next";
import Image from "next/image";
import { CrestMark } from "@/components/brand/crest-mark";
import { Button } from "@/components/ui/button";
import { collegiateTokens, styleTilePhotography } from "@/content/design-tokens";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Style Tile",
  description: "Step 1 review surface for the collegiate redesign direction.",
};

const colorSwatches = Object.entries(collegiateTokens.colors) as Array<
  [keyof typeof collegiateTokens.colors, string]
>;

const spacingScale = Object.entries(collegiateTokens.spacing) as Array<
  [keyof typeof collegiateTokens.spacing, string]
>;

const typeSamples = [
  {
    label: "Display Hero",
    className: "font-display text-[var(--type-hero)] leading-[0.94] tracking-[-0.04em]",
    copy: "Heritage. Scholarship. Character.",
  },
  {
    label: "Section Heading",
    className: "font-display text-[var(--type-h2)] leading-[1.02]",
    copy: "A prospectus-first design language with editorial weight.",
  },
  {
    label: "Body Copy",
    className: "max-w-2xl text-[var(--type-body)] leading-8 text-[var(--color-ink-700)]",
    copy:
      "The collegiate direction favors typographic gravitas, documentary photography, and restrained brass detailing. Interfaces stay flat, legible, and quietly formal.",
  },
];

export default function StyleTilePage() {
  return (
    <div className="bg-[var(--parchment)] pb-24">
      <section className="editorial-shell py-14 sm:py-16 lg:py-24">
        <div className="editorial-grid items-end border-b border-[color:rgba(176,141,70,0.3)] pb-12">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow">Step 1 Design System</p>
            <h1 className="mt-6 max-w-4xl font-display text-[var(--type-h1)] leading-[0.94] text-[var(--ink)]">
              Sanjivani re-framed in an Oxbridge-inspired collegiate voice.
            </h1>
            <p className="mt-6 max-w-2xl text-[var(--type-lead)] leading-9 text-[var(--color-ink-700)]">
              This review page is the token foundation only: six flat color tokens,
              a serif-led type system, brass hairline dividers, a restrained crest,
              and an ink duotone photography treatment.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:justify-self-end">
            <div className="flex max-w-md items-start gap-4 border border-[color:rgba(176,141,70,0.28)] bg-[color:rgba(232,226,210,0.45)] p-6">
              <CrestMark className="h-20 w-16 shrink-0" />
              <div>
                <p className="eyebrow">Signature Element</p>
                <p className="mt-3 font-display text-3xl text-[var(--ink)]">
                  {siteConfig.shortName}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-ink-700)]">
                  {siteConfig.latinMotto.text}
                  {siteConfig.latinMotto.isPlaceholder ? " (placeholder pending school approval)." : "."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-shell py-10">
        <div className="editorial-grid gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow">Color Palette</p>
            <h2 className="mt-5 font-display text-[var(--type-h2)]">Six authoritative tokens.</h2>
            <p className="mt-5 max-w-xl text-[var(--type-body)] leading-8 text-[var(--color-ink-700)]">
              No gradients, no tertiary accents, and no extra bright utility colors.
              Every relationship is built from flat pairings of ink, parchment, brass,
              forest, charcoal, and stone.
            </p>
          </div>
          <div className="col-span-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {colorSwatches.map(([name, value]) => (
              <div
                key={name}
                className="border border-[color:rgba(176,141,70,0.28)] bg-[var(--parchment)] p-4"
              >
                <div
                  className="h-28 w-full"
                  style={{ backgroundColor: value }}
                />
                <div className="mt-4 border-t border-[color:rgba(176,141,70,0.24)] pt-4">
                  <p className="text-[0.76rem] font-semibold tracking-[0.1em] text-[var(--brass)] [font-variant:all-small-caps]">
                    {name}
                  </p>
                  <p className="mt-2 font-display text-2xl text-[var(--ink)]">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-shell py-10">
        <div className="editorial-grid gap-y-12 border-t border-[color:rgba(176,141,70,0.3)] pt-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow">Typography</p>
            <h2 className="mt-5 font-display text-[var(--type-h2)]">Source Serif 4 and Public Sans.</h2>
            <p className="mt-5 max-w-xl text-[var(--type-body)] leading-8 text-[var(--color-ink-700)]">
              Source Serif 4 carries the academic gravitas in display moments, while
              Public Sans keeps interface language calm and readable. Eyebrows stay in
              small caps with brass detailing across every major section.
            </p>
          </div>
          <div className="col-span-12 space-y-10">
            <div className="border border-[color:rgba(176,141,70,0.28)] bg-[var(--parchment)] p-6 sm:p-8">
              <p className="eyebrow">Admissions 2026-27</p>
              <div className="mt-8 space-y-8">
                {typeSamples.map((sample) => (
                  <div key={sample.label}>
                    <p className="text-[0.76rem] font-semibold tracking-[0.1em] text-[var(--brass)] [font-variant:all-small-caps]">
                      {sample.label}
                    </p>
                    <p className={`mt-3 ${sample.className}`}>{sample.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border border-[color:rgba(176,141,70,0.28)] bg-[var(--parchment)] p-6 sm:p-8">
                <p className="eyebrow">Buttons and Rules</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/admissions">Request Prospectus</Button>
                  <Button href="/contact" variant="secondary">
                    Arrange a Visit
                  </Button>
                </div>
                <div className="mt-10 space-y-4">
                  <div className="hairline-rule" />
                  <div className="hairline-rule opacity-60" />
                  <div className="hairline-rule opacity-35" />
                </div>
              </div>
              <div className="border border-[color:rgba(176,141,70,0.28)] bg-[color:rgba(232,226,210,0.35)] p-6 sm:p-8">
                <p className="eyebrow">Spacing Scale</p>
                <div className="mt-8 space-y-4">
                  {spacingScale.map(([name, value]) => (
                    <div key={name} className="grid grid-cols-[9rem_1fr] items-center gap-4">
                      <div>
                        <p className="text-[0.76rem] font-semibold tracking-[0.1em] text-[var(--brass)] [font-variant:all-small-caps]">
                          {name}
                        </p>
                        <p className="mt-1 text-sm text-[var(--color-ink-700)]">{value}</p>
                      </div>
                      <div className="border-t border-[color:rgba(176,141,70,0.28)] py-4">
                        <div
                          className="bg-[var(--ink)]"
                          style={{ width: value, height: "0.35rem" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-shell py-10">
        <div className="editorial-grid gap-y-12 border-t border-[color:rgba(176,141,70,0.3)] pt-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow">Photography Direction</p>
            <h2 className="mt-5 font-display text-[var(--type-h2)]">
              Documentary imagery with a flat ink duotone.
            </h2>
            <p className="mt-5 max-w-xl text-[var(--type-body)] leading-8 text-[var(--color-ink-700)]">
              Until commissioned campus photography is available, the system calls for
              documentary-style placeholder imagery with a consistent ink overlay rather
              than gradients, color washes, or illustrations.
            </p>
          </div>
          <div className="col-span-12">
            <div className="relative overflow-hidden border border-[color:rgba(176,141,70,0.28)]">
              <Image
                src={styleTilePhotography.src}
                alt={styleTilePhotography.alt}
                width={1600}
                height={900}
                className="h-[28rem] w-full object-cover [animation:slow-pan_7s_ease-out_forwards]"
              />
              <div className="absolute inset-0 bg-[color:rgba(11,35,64,0.34)]" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <p className="eyebrow">
                  Duotone Placeholder
                </p>
                <p className="mt-4 max-w-2xl font-display text-4xl text-[var(--parchment)] sm:text-5xl">
                  Real people, real buildings, editorial restraint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-shell py-10">
        <div className="border-t border-[color:rgba(176,141,70,0.3)] pt-12">
          <p className="eyebrow">Implementation Notes</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="border border-[color:rgba(176,141,70,0.28)] p-6">
              <p className="font-display text-3xl text-[var(--ink)]">Grid</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                12 columns, generous outer margins, and asymmetric editorial splits
                such as 7/5 and 5/7.
              </p>
            </div>
            <div className="border border-[color:rgba(176,141,70,0.28)] p-6">
              <p className="font-display text-3xl text-[var(--ink)]">Motion</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                Fade-rise reveals at 500ms and a slow 105% to 100% hero image zoom.
                No bounce, no hover-scale, no animated counters.
              </p>
            </div>
            <div className="border border-[color:rgba(176,141,70,0.28)] p-6">
              <p className="font-display text-3xl text-[var(--ink)]">Radius</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                Buttons sit at 2px, imagery at 4px, and everything else stays as crisp
                and square as the printed-prospectus reference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
