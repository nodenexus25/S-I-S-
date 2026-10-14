import { Section } from "@/components/ui/section";
import {
  achievementIntro,
  achievementsByCategory,
} from "@/content/achievements";

const tones: Array<"ivory" | "warm" | "sage"> = ["ivory", "warm", "sage"];
const categoryIds = [
  "academic",
  "sports",
  "olympiads",
  "inter-school",
  "state-national",
  "arts-cultural",
  "school-teacher",
];

export default function AchievementsPage() {
  return (
    <>
      <Section
        eyebrow={achievementIntro.eyebrow}
        title={achievementIntro.headline}
        description={achievementIntro.summary}
        tone="ivory"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categoryIds.map((cid, i) => (
            <a
              key={cid}
              href={`#${cid}`}
              className="flex items-center justify-between gap-4 border border-[color:rgba(47,74,60,0.2)] bg-[var(--ivory-warm)] px-5 py-4 text-sm transition-colors hover:bg-[var(--terracotta-wash)]/60 hover:border-[var(--terracotta)]/50"
            >
              <div>
                <p className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Category 0{i + 1}
                </p>
                <p className="mt-1.5 font-display text-[1.05rem] leading-[1.3] text-[var(--forest-deep)]">
                  {achievementsByCategory[cid].headline}
                </p>
              </div>
              <span className="text-[var(--forest-deep)]">→</span>
            </a>
          ))}
        </div>
      </Section>

      {categoryIds.map((cid, idx) => {
        const cat = achievementsByCategory[cid];
        const tone = tones[(idx + 1) % 3];
        return (
          <Section
            key={cid}
            eyebrow={`0${idx + 1} · ${cid.split("-").map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" ")}`}
            title={cat.headline}
            tone={tone}
            id={cid}
          >
            <div className="grid gap-6 lg:grid-cols-2">
              {cat.records.map((r) => (
                <article
                  key={r.id}
                  className="relative flex h-full flex-col border border-[color:rgba(47,74,60,0.2)] bg-[var(--ivory)] p-8 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <time
                      dateTime={r.dateISO}
                      className="text-[0.68rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]"
                    >
                      {r.date}
                    </time>
                    <span className="h-1 w-1 rounded-full bg-[color:rgba(47,74,60,0.35)]" />
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--sage-deep)] [font-variant:all-small-caps]">
                      {r.level} Level
                    </p>
                  </div>
                  <h3 className="mt-5 font-display text-[1.45rem] leading-[1.22] tracking-[-0.01em] text-[var(--forest-deep)]">
                    {r.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.85] text-[var(--ink-soft)]">
                    {r.detail}
                  </p>
                  <div className="mt-auto pt-6 border-t border-[color:rgba(47,74,60,0.14)]">
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--ink-soft)]/85 [font-variant:all-small-caps]">
                      — {r.recipient}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
