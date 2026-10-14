import { Section } from "@/components/ui/section";
import {
  resourcesIntro,
  circulars,
  downloads,
  academicCalendar202627,
  publications,
  policies,
} from "@/content/resources";
import { campusPhotography } from "@/content/design-tokens";

const categoryBadgeClass = (cat: string) => {
  switch (cat) {
    case "Academic":
    case "Admissions":
      return "border-[var(--terracotta)]/40 bg-[var(--terracotta-wash)]/60 text-[var(--terracotta)]";
    case "Examination":
    case "Finance":
      return "border-[var(--forest-deep)]/30 bg-[var(--sage-wash)] text-[var(--forest-deep)]";
    case "Event":
    case "General":
      return "border-[color:rgba(47,74,60,0.25)] bg-[var(--ivory-warm)] text-[var(--forest-deep)]";
    case "Administrative":
    case "Forms":
      return "border-[var(--clay)]/40 bg-[color:rgba(168,118,90,0.12)] text-[var(--clay)]";
    case "Holiday":
    case "Transport":
    default:
      return "border-[var(--sage-deep)]/30 bg-[var(--sage-wash)]/60 text-[var(--sage-deep)]";
  }
};

const eventTypeClass = (t: string) => {
  if (t.includes("Holiday") || t.includes("Public")) return "border-[var(--terracotta)]/40 bg-[var(--terracotta-wash)]/60 text-[var(--terracotta)]";
  if (t.includes("Exam")) return "border-[var(--forest-deep)]/30 bg-[var(--sage-wash)] text-[var(--forest-deep)]";
  if (t.includes("PTA") || t.includes("Parent")) return "border-[color:rgba(47,74,60,0.25)] bg-[var(--ivory-warm)] text-[var(--forest-deep)]";
  if (t.includes("Term")) return "border-[var(--clay)]/40 bg-[color:rgba(168,118,90,0.12)] text-[var(--clay)]";
  return "border-[var(--sage-deep)]/30 bg-[var(--sage-wash)]/60 text-[var(--sage-deep)]";
};

export default function ResourcesPage() {
  return (
    <>
      <Section
        eyebrow={resourcesIntro.eyebrow}
        title={resourcesIntro.headline}
        description={resourcesIntro.summary}
        tone="ivory"
      />

      <Section
        eyebrow="01 · Circulars & Notices"
        title="The Six Most Recent Parent-Facing Communications"
        description="Circulars are also sent by email and parent app broadcast on the day of publication. The full 2026-27 circular archive is available on the SIS parent login portal."
        tone="warm"
        id="circulars"
      >
        <div className="grid gap-0 border border-[color:rgba(47,74,60,0.18)]">
          {circulars.map((c, i) => (
            <a
              key={c.id}
              href={c.downloadHref ?? "#"}
              className={`group grid gap-5 border-t border-[color:rgba(47,74,60,0.14)] bg-[var(--ivory)] p-6 transition-colors hover:bg-[var(--terracotta-wash)]/50 md:grid-cols-[8rem_9rem_1fr_auto] md:items-center first:border-t-0`}
            >
              <time
                dateTime={c.dateISO}
                className="text-[0.7rem] font-semibold tracking-[0.18em] text-[var(--ink-soft)] [font-variant:all-small-caps]"
              >
                {c.date}
              </time>
              <span
                className={`inline-flex w-fit items-center border px-3 py-1.5 text-[0.64rem] font-semibold tracking-[0.2em] [font-variant:all-small-caps] ${categoryBadgeClass(
                  c.category,
                )}`}
              >
                {c.category}
              </span>
              <div>
                <h3 className="font-display text-[1.2rem] leading-[1.3] tracking-[-0.01em] text-[var(--forest-deep)] transition-colors duration-300 group-hover:text-[var(--terracotta)]">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-[1.7] text-[var(--ink-soft)]">
                  {c.summary}
                </p>
                <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--sage-deep)] [font-variant:all-small-caps]">
                  Audience · {c.audience}
                </p>
              </div>
              {c.downloadHref ? (
                <span className="hidden text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps] md:inline-flex">
                  Download →
                </span>
              ) : (
                <span className="hidden text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--ink-soft)]/70 [font-variant:all-small-caps] md:inline-flex">
                  Notice only
                </span>
              )}
            </a>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="02 · Downloads"
        title="Forms, Handbooks & Documents to Download"
        description="All downloads are in PDF or DOCX format and updated on or before the date noted. If a link is stale, please email the school office for a fresh copy."
        tone="sage"
        id="downloads"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {downloads.map((d) => (
            <a
              key={d.id}
              href={d.downloadHref}
              className="group flex h-full gap-5 border border-[color:rgba(47,74,60,0.2)] bg-[var(--ivory)] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-[var(--terracotta)]/50"
            >
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center border border-[color:rgba(47,74,60,0.2)] bg-[var(--ivory-warm)]">
                <span className="font-display text-[1.1rem] tracking-[-0.01em] text-[var(--forest-deep)]">
                  {d.format}
                </span>
                <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.18em] text-[var(--ink-soft)]/70 [font-variant:all-small-caps]">
                  {d.sizeLabel}
                </span>
              </div>
              <div className="flex flex-1 flex-col">
                <span
                  className={`inline-flex w-fit items-center border px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.2em] [font-variant:all-small-caps] ${categoryBadgeClass(
                    d.category,
                  )}`}
                >
                  {d.category}
                </span>
                <h3 className="mt-3.5 font-display text-[1.15rem] leading-[1.25] text-[var(--forest-deep)] transition-colors duration-300 group-hover:text-[var(--terracotta)]">
                  {d.title}
                </h3>
                <p className="mt-2.5 text-[0.88rem] leading-[1.7] text-[var(--ink-soft)]">
                  {d.description}
                </p>
                <span className="mt-auto pt-4 text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Download PDF →
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="03 · Academic Calendar"
        title="Academic Session 2026–27 · Dated Vertical Timeline"
        description="Term dates, holidays, examinations, and scheduled school events. Subject to change only on government or CBSE direction; any change is notified by circular at least seven working days in advance."
        tone="ivory"
        id="academic-calendar"
      >
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--terracotta)]/40 md:left-[180px]" />
          <ul className="space-y-6">
            {academicCalendar202627.map((ev, i) => (
              <li
                key={ev.id}
                className="relative grid gap-4 md:grid-cols-[180px_1fr] pl-7 md:pl-0"
              >
                <span className="absolute left-0 top-2 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--forest-deep)] ring-4 ring-[var(--terracotta-wash)] md:left-[173px]" />
                <div className="md:pr-6 md:text-right">
                  <time
                    dateTime={ev.dateISO}
                    className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]"
                  >
                    {ev.date}
                  </time>
                  <span
                    className={`mt-2.5 inline-flex w-fit items-center border px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.2em] [font-variant:all-small-caps] ${eventTypeClass(
                      ev.eventType,
                    )}`}
                  >
                    {ev.eventType}
                  </span>
                </div>
                <div className="border border-[color:rgba(47,74,60,0.18)] bg-[var(--ivory)] p-6">
                  <h4 className="font-display text-[1.15rem] leading-[1.25] text-[var(--forest-deep)]">
                    {ev.title}
                  </h4>
                  <p className="mt-3 text-[0.9rem] leading-[1.75] text-[var(--ink-soft)]">
                    {ev.detail}
                  </p>
                  <p className="mt-3 text-[0.66rem] font-semibold tracking-[0.18em] text-[var(--sage-deep)] [font-variant:all-small-caps]">
                    Classes · {ev.classes}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="04 · Publications"
        title="School Magazine, Newsletters & the Annual Audited Report"
        description="The four most recent SIS publications. The full magazine archive back to Volume I (2007) is available for physical consultation at the school library reception desk."
        tone="warm"
        id="publications"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {publications.map((p, i) => (
            <a
              key={p.id}
              href={p.downloadHref}
              className="group relative flex h-full flex-col border border-[color:rgba(47,74,60,0.2)] bg-[var(--ivory)] transition-all duration-400 hover:-translate-y-1"
            >
              <div
                className="relative w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[var(--sage-wash)] via-[var(--ivory-warm)] to-[var(--terracotta-wash)]/70"
                style={{ aspectRatio: "3 / 4" }}
              >
                <div className="absolute inset-6 border border-[color:rgba(47,74,60,0.2)] bg-[color:rgba(248,247,242,0.35)] flex flex-col items-center justify-center p-5 text-center">
                  <p className="text-[0.6rem] font-semibold tracking-[0.24em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                    Sanjivani · Vol {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-display text-[1.1rem] leading-[1.25] tracking-[-0.01em] text-[var(--forest-deep)]">
                    {p.title}
                  </p>
                  <div className="mt-5 h-px w-10 bg-[var(--forest-deep)]/50" />
                  <p className="mt-4 text-[0.64rem] font-semibold tracking-[0.18em] text-[var(--ink-soft)] [font-variant:all-small-caps]">
                    {p.issueLabel}
                  </p>
                  <p className="mt-2 text-[0.64rem] tracking-[0.12em] text-[var(--ink-soft)]/80 [font-variant:all-small-caps]">
                    {p.pages}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Issue date · {p.date}
                </p>
                <p className="mt-3 text-[0.88rem] leading-[1.7] text-[var(--ink-soft)]">
                  {p.description}
                </p>
                <span className="mt-auto pt-5 text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--forest-deep)] [font-variant:all-small-caps] transition-colors duration-300 group-hover:text-[var(--terracotta)]">
                  Download PDF →
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="05 · Policies"
        title="Six Approved School Policies & Institutional Documents"
        description="All policies are reviewed every 12-24 months by the Managing Committee and the Parent-Teacher Association subcommittee. Full policy documents are available as signed PDFs."
        tone="sage"
        id="policies"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((p) => (
            <a
              key={p.id}
              href={p.downloadHref}
              className="group flex h-full flex-col border border-[color:rgba(47,74,60,0.22)] bg-[var(--ivory)] p-7 transition-all duration-400 hover:-translate-y-1 hover:border-[var(--terracotta)]/50"
            >
              <div className="flex items-center justify-between">
                <p className="text-[0.64rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Policy
                </p>
                <span
                  aria-hidden="true"
                  className="text-[var(--forest-deep)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--terracotta)]"
                >
                  →
                </span>
              </div>
              <h3 className="mt-5 font-display text-[1.2rem] leading-[1.25] tracking-[-0.01em] text-[var(--forest-deep)] transition-colors duration-300 group-hover:text-[var(--terracotta)]">
                {p.title}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-[1.75] text-[var(--ink-soft)]">
                {p.summary}
              </p>
              <div className="mt-auto pt-6 border-t border-[color:rgba(47,74,60,0.14)]">
                <p className="text-[0.64rem] font-semibold tracking-[0.22em] text-[var(--sage-deep)] [font-variant:all-small-caps]">
                  Last reviewed · {p.lastReviewed}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
