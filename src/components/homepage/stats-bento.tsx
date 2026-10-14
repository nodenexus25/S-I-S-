import { AnimatedStat } from "@/components/homepage/animated-stat";
import type { StatItem } from "@/content/homepage";

export function StatsBento({
  stats,
  missionSnapshot,
  mediaImage,
}: {
  stats: readonly StatItem[];
  missionSnapshot: string;
  mediaImage: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-elevated)] sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-paper)] p-6">
            <div className="h-1.5 w-20 rounded-full bg-[var(--color-energy)]" />
            <div className="mt-6">
              <AnimatedStat value={stats[0]?.value ?? ""} label={stats[0]?.label ?? ""} />
            </div>
          </div>

          <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-paper)] p-6">
            <div className="h-1.5 w-20 rounded-full bg-[var(--color-mint)]" />
            <div className="mt-6">
              <AnimatedStat value={stats[1]?.value ?? ""} label={stats[1]?.label ?? ""} />
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-[var(--color-border)]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${mediaImage}")` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,28,0.08),rgba(18,18,28,0.5))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/72">
                Campus Snapshot
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/90">
                {missionSnapshot}
              </p>
            </div>
          </div>

          <div className="grid gap-4 rounded-[24px] border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-mist),white)] p-6 sm:grid-cols-2">
            <div className="rounded-[20px] bg-white p-5 shadow-[var(--shadow-soft)]">
              <div className="h-1.5 w-16 rounded-full bg-[var(--color-primary)]" />
              <div className="mt-5">
                <AnimatedStat value={stats[2]?.value ?? ""} label={stats[2]?.label ?? ""} />
              </div>
            </div>
            <div className="rounded-[20px] bg-white p-5 shadow-[var(--shadow-soft)]">
              <div className="h-1.5 w-16 rounded-full bg-[var(--color-primary-bright)]" />
              <div className="mt-5">
                <AnimatedStat value={stats[3]?.value ?? ""} label={stats[3]?.label ?? ""} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
                Why this section matters
              </p>
              <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--color-ink)]/72">
                The numbers still carry credibility, but the media cell gives the grid a face,
                which makes the brand feel current, human, and campus-led.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
