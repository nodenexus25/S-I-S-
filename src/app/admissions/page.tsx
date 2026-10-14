import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import {
  admissionsIntro,
  whySISpoints,
  admissionSteps,
  eligibilityCriteria,
  requiredDocuments,
  importantDates202627,
  admissionFAQs,
  contactInfo,
} from "@/content/admissions";
import { campusPhotography } from "@/content/design-tokens";

export default function AdmissionsPage() {
  return (
    <>
      <section className="bg-[var(--forest-deep)] text-[var(--ivory)]">
        <div className="editorial-shell py-[clamp(2.5rem,5vw,4rem)]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <p className="flex items-center gap-4 text-[0.7rem] font-semibold tracking-[0.2em] text-[var(--terracotta-soft)] [font-variant:all-small-caps]">
                <span className="inline-block h-px w-10 bg-[var(--terracotta-soft)]/60" />
                {admissionsIntro.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
                {admissionsIntro.headline}
              </h1>
            </div>
            <div className="flex flex-wrap gap-3 lg:flex-nowrap">
              <Button
                href="#enquiry"
                className="!border-[var(--terracotta)] !bg-[var(--terracotta)] !text-[var(--ivory)] hover:!bg-transparent hover:!text-[var(--ivory)]"
              >
                Book a Visit
              </Button>
              <Button
                href="#process"
                className="!border-[var(--ivory)]/80 !bg-transparent !text-[var(--ivory)] hover:!bg-[var(--ivory)] hover:!text-[var(--forest-deep)]"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Before You Apply"
        title={admissionsIntro.headline}
        description={admissionsIntro.summary}
        tone="ivory"
      >
        <div className="grid gap-6 pt-2 md:grid-cols-3">
          {[
            { k: "Helpdesk Email", v: contactInfo.helpdesk.email, tag: "Written replies within 5 working days" },
            { k: "Helpdesk Phone", v: contactInfo.helpdesk.phone, tag: contactInfo.helpdesk.hours },
            { k: "Campus Tours", v: "Every Friday & Saturday · 9:00 – 11:30 AM", tag: "By appointment only · ~45 minutes" },
          ].map((c) => (
            <div
              key={c.k}
              className="flex flex-col gap-2 border border-[color:rgba(47,74,60,0.18)] bg-[var(--ivory-warm)] p-6"
            >
              <p className="text-[0.66rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                {c.k}
              </p>
              <p className="font-display text-[1.15rem] leading-[1.3] text-[var(--forest-deep)]">
                {c.v}
              </p>
              <p className="pt-2 text-sm text-[var(--ink-soft)]/85 border-t border-[color:rgba(47,74,60,0.12)] mt-2">
                {c.tag}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="01 · Why SIS"
        title="Eight reasons parents choose Sanjivani — and tell their neighbours about."
        description="These are the points we hear back most often at the campus tour. If after reading them SIS still sounds like a good fit, the next step is a visit."
        tone="warm"
        id="why-sis"
      >
        <div className="grid gap-0 border border-[color:rgba(47,74,60,0.18)] md:grid-cols-2 lg:grid-cols-4">
          {whySISpoints.map((p, i) => (
            <article
              key={p.title}
              className={`relative flex h-full flex-col bg-[var(--ivory)] border-t border-l border-[color:rgba(47,74,60,0.14)] p-7 ${
                i === 0
                  ? "border-t-0 border-l-0"
                  : i < 4
                    ? ""
                    : ""
              } md:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+4)]:border-t-0 md:[&:nth-child(odd)]:border-l-0 lg:[&:nth-child(4n+1)]:border-l-0`}
            >
              <p className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                0{i + 1}
              </p>
              <h3 className="mt-4 font-display text-[1.15rem] leading-[1.25] tracking-[-0.01em] text-[var(--forest-deep)]">
                {p.title}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-[1.75] text-[var(--ink-soft)]">
                {p.detail}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="02 · Admission Process"
        title="Five clear steps. No hidden stages. No capitation."
        description="From first enquiry to first day at SIS. Every step has a published timeline and a named person of contact."
        tone="sage"
        id="process"
      >
        <div className="grid gap-6">
          {admissionSteps.map((s, i) => {
            const reverse = i % 2 === 1;
            const isAltBg = i % 2 === 1;
            return (
              <article
                key={s.stepNumber}
                className={`grid items-center gap-8 border border-[color:rgba(47,74,60,0.2)] p-7 lg:grid-cols-[auto_1fr_auto] lg:gap-8 ${
                  isAltBg ? "bg-[var(--ivory-warm)]" : "bg-[var(--ivory)]"
                }`}
              >
                <div
                  className={`flex h-20 w-20 shrink-0 items-center justify-center border-2 ${
                    i % 2 === 1
                      ? "border-[var(--sage-deep)]/40 bg-[var(--sage-wash)]"
                      : "border-[var(--terracotta)]/40 bg-[var(--terracotta-wash)]/60"
                  }`}
                >
                  <span className="font-display text-[2.5rem] leading-none tracking-[-0.01em] text-[var(--forest-deep)]">
                    0{s.stepNumber}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-[1.5rem] leading-[1.2] tracking-[-0.01em] text-[var(--forest-deep)]">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.85] text-[var(--ink-soft)]">
                    {s.description}
                  </p>
                </div>
                <div className="text-left lg:text-right">
                  <p className="text-[0.66rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                    Timing
                  </p>
                  <p className="mt-2 font-display text-[1.05rem] leading-[1.35] text-[var(--forest-deep)]">
                    {s.duration}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="03 · Eligibility"
        title="Age Criteria & Grade-Wise Entry Rules · 2026–27"
        description="Cut-off date for all classes is 31 March 2026, in line with CBSE and Government of Maharashtra norms. No age relaxations are granted under any circumstances."
        tone="ivory"
        id="eligibility"
      >
        <div className="overflow-hidden border border-[color:rgba(47,74,60,0.18)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse">
              <thead>
                <tr className="bg-[var(--forest-deep)] text-[var(--ivory)]">
                  <th className="border-r border-[color:rgba(248,247,242,0.15)] px-6 py-4 text-left text-[0.68rem] font-semibold tracking-[0.2em] [font-variant:all-small-caps]">
                    Grade Applying For
                  </th>
                  <th className="border-r border-[color:rgba(248,247,242,0.15)] px-6 py-4 text-left text-[0.68rem] font-semibold tracking-[0.2em] [font-variant:all-small-caps]">
                    Age as of 31 March 2026
                  </th>
                  <th className="px-6 py-4 text-left text-[0.68rem] font-semibold tracking-[0.2em] [font-variant:all-small-caps]">
                    Notes & Required Prior Documents
                  </th>
                </tr>
              </thead>
              <tbody>
                {eligibilityCriteria.map((c, i) => (
                  <tr
                    key={c.class}
                    className={`${
                      i % 2 === 0 ? "bg-[var(--ivory)]" : "bg-[var(--ivory-warm)]"
                    }`}
                  >
                    <td className="border-t border-r border-[color:rgba(47,74,60,0.14)] px-6 py-4 align-top">
                      <p className="font-display text-[1.1rem] leading-[1.2] text-[var(--forest-deep)]">
                        {c.class}
                      </p>
                    </td>
                    <td className="border-t border-r border-[color:rgba(47,74,60,0.14)] px-6 py-4 align-top text-[0.93rem] leading-[1.7] text-[var(--ink-soft)]">
                      {c.ageOn31Mar}
                    </td>
                    <td className="border-t border-[color:rgba(47,74,60,0.14)] px-6 py-4 align-top text-[0.9rem] leading-[1.75] text-[var(--ink-soft)]">
                      {c.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="04 · Required Documents"
        title="Document Checklist at the Time of Admission"
        description="Please have these documents ready when submitting the completed application form. Originals are required only for sighting at the counter; self-attested photocopies are retained by the school."
        tone="warm"
        id="documents"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {requiredDocuments.map((d, i) => (
            <label
              key={d}
              className="flex items-start gap-4 border border-[color:rgba(47,74,60,0.18)] bg-[var(--ivory)] p-6 text-[0.93rem] leading-[1.75] text-[var(--ink-soft)] cursor-pointer transition-colors hover:bg-[var(--sage-wash)]/40"
            >
              <input
                type="checkbox"
                className="mt-1.5 h-4 w-4 shrink-0 accent-[var(--terracotta)]"
              />
              <span className="flex gap-2">
                <span className="text-[0.66rem] font-semibold tracking-[0.18em] text-[var(--terracotta)] [font-variant:all-small-caps] shrink-0">
                  0{i + 1}
                </span>
                <span>{d}</span>
              </span>
            </label>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="05 · Key Dates"
        title="Admissions Timeline · 2026–27 Session"
        description="Published annually in March. Dates are subject to change only on CBSE or Maharashtra government direction; any changes are notified by email and on the school notice board."
        tone="sage"
        id="important-dates"
      >
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--terracotta)]/40 md:left-[140px]" />
          <ul className="space-y-8">
            {importantDates202627.map((d) => (
              <li key={d.id} className="relative grid gap-4 md:grid-cols-[140px_1fr] md:gap-10 pl-7 md:pl-0">
                <span className="absolute left-0 top-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--forest-deep)] ring-4 ring-[var(--terracotta-wash)] md:left-[133px]" />
                <time
                  dateTime={d.dateISO}
                  className="md:text-right text-[0.7rem] font-semibold tracking-[0.18em] text-[var(--terracotta)] [font-variant:all-small-caps] md:pr-6"
                >
                  {d.date}
                </time>
                <div className="border border-[color:rgba(47,74,60,0.18)] bg-[var(--ivory)] p-6">
                  <h4 className="font-display text-[1.2rem] leading-[1.25] text-[var(--forest-deep)]">
                    {d.title}
                  </h4>
                  <p className="mt-3 text-[0.92rem] leading-[1.75] text-[var(--ink-soft)]">
                    {d.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="06 · FAQs"
        title="Frequently Asked Questions from Parents"
        description="Twelve questions the admissions office answers more than any other. If yours is not here, please write directly to admissions@sanjivanischool.edu or call the helpdesk."
        tone="ivory"
        id="faqs"
      >
        <div className="grid gap-0 border border-[color:rgba(47,74,60,0.18)]">
          {admissionFAQs.map((f, i) => (
            <details
              key={f.question}
              className={`group border-t border-[color:rgba(47,74,60,0.14)] bg-[var(--ivory)] ${
                i === 0 ? "border-t-0" : ""
              }`}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 pr-8 transition-colors hover:bg-[var(--ivory-warm)]">
                <span className="flex items-start gap-5">
                  <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps] mt-1 shrink-0">
                    Q 0{i + 1}
                  </span>
                  <span className="font-display text-[1.1rem] leading-[1.35] text-[var(--forest-deep)]">
                    {f.question}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="mt-2 flex h-7 w-7 shrink-0 items-center justify-center border border-[color:rgba(47,74,60,0.3)] text-[var(--terracotta)] transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-7 pl-[4.75rem] md:pl-[5.25rem]">
                <p className="text-[0.95rem] leading-[1.9] text-[var(--ink-soft)]">
                  {f.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="07 · Enquiry"
        title="Begin Your Enquiry or Book a Campus Visit"
        description="Use the form below. The admissions office will respond within five working days with available tour slots and next steps. This is a static layout only — for a working application please use the SIS parent portal."
        tone="warm"
        id="enquiry"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "16 / 10" }}
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage: `url("${campusPhotography.hero.src}")`,
                }}
              />
              <span className="sr-only">{campusPhotography.hero.alt}</span>
            </div>
            <div className="grid gap-4">
              {[
                { k: "Admissions Email", v: contactInfo.helpdesk.email },
                { k: "Phone & WhatsApp", v: `${contactInfo.helpdesk.phone} · ${contactInfo.helpdesk.mobile}` },
                { k: "Office Hours", v: contactInfo.helpdesk.hours },
              ].map((r) => (
                <div
                  key={r.k}
                  className="flex flex-col gap-2 border-l border-[var(--terracotta)]/40 pl-6"
                >
                  <p className="text-[0.66rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                    {r.k}
                  </p>
                  <p className="font-display text-[1.05rem] leading-[1.35] text-[var(--forest-deep)]">
                    {r.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <form className="grid gap-5 border border-[color:rgba(47,74,60,0.2)] bg-[var(--ivory)] p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Parent / Guardian Name
                </span>
                <input
                  type="text"
                  className="w-full border border-[color:rgba(47,74,60,0.25)] bg-transparent px-4 py-3 text-[0.95rem] text-[var(--ink-soft)] outline-none transition-colors focus:border-[var(--terracotta)]"
                  placeholder="e.g. Mrs. Manasi Naik"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Email Address
                </span>
                <input
                  type="email"
                  className="w-full border border-[color:rgba(47,74,60,0.25)] bg-transparent px-4 py-3 text-[0.95rem] text-[var(--ink-soft)] outline-none transition-colors focus:border-[var(--terracotta)]"
                  placeholder="parent@email.com"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Phone / Mobile
                </span>
                <input
                  type="tel"
                  className="w-full border border-[color:rgba(47,74,60,0.25)] bg-transparent px-4 py-3 text-[0.95rem] text-[var(--ink-soft)] outline-none transition-colors focus:border-[var(--terracotta)]"
                  placeholder="+91 98xxx xxxxx"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Student Name
                </span>
                <input
                  type="text"
                  className="w-full border border-[color:rgba(47,74,60,0.25)] bg-transparent px-4 py-3 text-[0.95rem] text-[var(--ink-soft)] outline-none transition-colors focus:border-[var(--terracotta)]"
                  placeholder="e.g. Saanvi Naik"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                Grade Applying For
              </span>
              <select className="w-full border border-[color:rgba(47,74,60,0.25)] bg-[var(--ivory)] px-4 py-3 text-[0.95rem] text-[var(--ink-soft)] outline-none transition-colors focus:border-[var(--terracotta)]">
                <option>Nursery</option>
                <option>Junior KG</option>
                <option>Senior KG</option>
                <option>Class I</option>
                <option>Class II</option>
                <option>Classes III – V</option>
                <option>Classes VI – VIII</option>
                <option>Class IX</option>
                <option>Class XI</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[0.66rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                Message (Optional)
              </span>
              <textarea
                rows={5}
                className="w-full resize-none border border-[color:rgba(47,74,60,0.25)] bg-transparent px-4 py-3 text-[0.95rem] leading-[1.7] text-[var(--ink-soft)] outline-none transition-colors focus:border-[var(--terracotta)]"
                placeholder="Any specific questions, preferred campus visit date, or details about the child we should know…"
              />
            </label>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="terracotta">Submit Enquiry</Button>
              <p className="text-sm text-[var(--ink-soft)]/80">
                or email directly to {contactInfo.helpdesk.email}
              </p>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
