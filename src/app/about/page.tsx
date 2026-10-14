import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site-config";
import { campusPhotography } from "@/content/design-tokens";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About SIS"
        title="A school that grew up with Kharghar — and still thinks like a neighbourhood."
        description="Sanjivani International School was founded in Kharghar by families who lived here, for families who live here. Two decades on, that local root still shapes everything — from the teachers we hire to the festivals we celebrate, to the way a class teacher can name the older sibling of almost any child in her section."
        tone="ivory"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "16 / 10" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url("${campusPhotography.hero.src}")` }}
            />
            <span className="sr-only">{campusPhotography.hero.alt}</span>
          </div>
          <div className="grid gap-0 border border-[color:rgba(47,74,60,0.18)]">
            {[
              { k: "Founded", v: "2004 in Kharghar, Navi Mumbai" },
              { k: "Affiliation", v: "CBSE Permanent Affiliation · Pre-Primary to Senior Secondary" },
              { k: "Operator", v: "Sanjivani International Education Trust" },
              { k: "Campus", v: "12+ acres, green, purpose-built, fully fenced & CCTV-covered" },
            ].map((row, i) => (
              <div
                key={row.k}
                className={`grid gap-4 p-6 md:grid-cols-[10rem_1fr] ${
                  i > 0 ? "border-t border-[color:rgba(47,74,60,0.14)]" : ""
                }`}
              >
                <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  {row.k}
                </p>
                <p className="text-[0.98rem] leading-[1.7] text-[var(--ink-soft)]">
                  {row.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="01 · Our Direction"
        title="Vision, Mission & Values"
        description="Three sentences that the Principal reads aloud at the first staff meeting of every academic year — and that every class teacher is expected to be able to quote from memory."
        tone="warm"
        id="vision-mission"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              label: "Vision",
              text: siteConfig.vision,
              tone: "bg-[var(--terracotta-wash)]/50 border-[var(--terracotta)]/30",
            },
            {
              label: "Mission",
              text: siteConfig.mission,
              tone: "bg-[var(--sage-wash)]/60 border-[var(--sage-deep)]/25",
            },
            {
              label: "Motto",
              text: siteConfig.philosophy,
              tone: "bg-[var(--ivory)] border-[color:rgba(47,74,60,0.2)]",
            },
          ].map((b) => (
            <article
              key={b.label}
              className={`flex h-full flex-col border p-9 ${b.tone}`}
            >
              <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-[var(--forest-deep)] [font-variant:all-small-caps]">
                — {b.label}
              </p>
              <p className="mt-6 font-display text-[1.45rem] leading-[1.35] tracking-[-0.01em] text-[var(--forest-deep)]">
                {b.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 pt-10 border-t border-[color:rgba(47,74,60,0.16)] md:grid-cols-2 lg:grid-cols-4">
          {[
            "Every child known by first name and temperament",
            "Academics without a culture of fear or shame",
            "Sport, art, and service are not afterthoughts",
            "Rooted in Maharashtra, open to the wider world",
          ].map((v) => (
            <p
              key={v}
              className="flex items-start gap-4 border-l border-[var(--terracotta)]/40 pl-5 text-[0.95rem] leading-[1.75] text-[var(--ink-soft)]"
            >
              <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[var(--terracotta)]" />
              {v}
            </p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="02 · Leadership"
        title="Governance & Senior Leadership Team"
        description="Sanjivani is run by a local trust and a senior leadership team whose average tenure at the school exceeds eleven years — a continuity of care that parents notice and that students can rely on."
        tone="sage"
        id="leadership"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <article className="flex flex-col gap-8 border border-[color:rgba(47,74,60,0.16)] bg-[var(--ivory)] p-9">
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                Sanjivani International Education Trust
              </p>
              <h3 className="mt-4 font-display text-[1.75rem] leading-[1.1] tracking-[-0.01em] text-[var(--forest-deep)]">
                Board of Trustees & Managing Committee
              </h3>
            </div>
            <div className="space-y-5 text-[0.97rem] leading-[1.85] text-[var(--ink-soft)]">
              <p>
                The school is owned and operated by the Sanjivani International
                Education Trust, a non-profit educational trust registered under the
                Bombay Public Trusts Act and founded in 2002 by a small group of
                Kharghar-based parents and professionals who wanted a good CBSE school
                within walking distance rather than a long bus commute.
              </p>
              <p>
                The Managing Committee meets six times per calendar year and includes
                three parent representatives elected by the Parent-Teacher Association
                for a two-year rotating term. All trust and committee meetings have
                published minutes that are available for parent inspection on request
                at the school office.
              </p>
            </div>
            <ul className="grid gap-3 pt-4 border-t border-[color:rgba(47,74,60,0.14)] text-sm">
              {[
                "Chairman — Mr. Sharadchandra Patil, retired educator & founding trustee",
                "Secretary — Mrs. Anjali Deshmukh, SIS parent since 2008",
                "Treasurer — Mr. Prashant Koli, chartered accountant, Kharghar resident",
                "Parent Representatives — 3 elected members, rotating term",
              ].map((m) => (
                <li key={m} className="flex items-start gap-4">
                  <span className="mt-1.5 inline-block h-1 w-5 shrink-0 bg-[var(--sage-deep)]" />
                  <span className="text-[var(--ink-soft)]">{m}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-6">
            {[
              {
                role: "Principal",
                name: "Mrs. Sunanda Rajadhyaksha",
                detail:
                  "M.A. Education, M.Ed. (Mumbai University), 24 years in CBSE-affiliated schools. Joined SIS as Vice-Principal in 2013; appointed Principal in April 2018. Leads the Senior Leadership Team and the CBSE-compliance committee.",
                tag: "SIS since 2013",
              },
              {
                role: "Vice-Principal · Academic Coordinator",
                name: "Mr. Ravindra Mhatre",
                detail:
                  "M.Sc. Physics, B.Ed. Former HOD Science and Class XI–XII stream coordinator. Oversees teaching-learning, assessments, the CBSE practical-examination schedule, and faculty professional-development programmes.",
                tag: "SIS since 2010",
              },
              {
                role: "Administrative Head & Pastoral Coordinator",
                name: "Mrs. Meenal Kulkarni",
                detail:
                  "MBA, MSW. Former Pre-Primary wing coordinator. Manages admissions, transport, campus operations, the school counsellor team, and parent communication protocols including the grievance-redressal cell.",
                tag: "SIS since 2015",
              },
            ].map((p) => (
              <article
                key={p.name}
                className="grid gap-6 border border-[color:rgba(47,74,60,0.18)] bg-[var(--ivory)] p-7 md:grid-cols-[auto_1fr] md:items-start"
              >
                <div
                  className="flex h-28 w-28 shrink-0 items-center justify-center bg-gradient-to-br from-[var(--sage-wash)] to-[var(--terracotta-wash)]/70"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <span className="font-display text-[2.25rem] leading-none tracking-[-0.01em] text-[var(--forest-deep)]">
                    {p.name
                      .split(" ")
                      .filter((w) => w.startsWith(w[0]?.toUpperCase() ?? ""))
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-[0.66rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                    {p.tag} · {p.role}
                  </p>
                  <h4 className="mt-3 font-display text-[1.3rem] leading-[1.15] text-[var(--forest-deep)]">
                    {p.name}
                  </h4>
                  <p className="mt-3 text-[0.93rem] leading-[1.75] text-[var(--ink-soft)]">
                    {p.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="03 · From the Office"
        title="A Message from the Principal"
        tone="ivory"
        id="principals-message"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "4 / 5" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url("${campusPhotography.classroom.src}")` }}
            />
            <span className="sr-only">{campusPhotography.classroom.alt}</span>
          </div>
          <div>
            <div className="space-y-6 text-[1.05rem] leading-[1.95] text-[var(--ink-soft)]">
              <p className="font-display text-[1.55rem] leading-[1.5] tracking-[-0.005em] text-[var(--forest-deep)]">
                &ldquo;If a child comes home and only tells you what was taught, we
                haven&rsquo;t done our job. We want them to tell you whom they helped,
                what they argued about, which teacher surprised them, and what they
                are curious about tomorrow.&rdquo;
              </p>
              <p>
                Dear Parent, Welcome to Sanjivani International School, and thank you
                for considering us for the most important decision a family makes —
                where their child will spend roughly a third of their waking hours for
                the next fourteen years.
              </p>
              <p>
                When I took over as Principal in 2018, the trustees gave me one
                instruction: keep the school looking and feeling like the warm,
                slightly-chaotic neighbourhood school it started as, even as we grow
                larger, more formal, and more CBSE-compliant with every passing year.
                That is a harder brief than it sounds. It means resisting every
                corporate-school trend that prioritises appearances over people.
              </p>
              <p>
                At Sanjivani, teachers still eat lunch in the same canteen as Class V
                students. We still sing a Marathi abhang at assembly alongside the
                national anthem. We still call parents when something is going well,
                not only when there is a problem. And we still, unapologetically,
                think of every student as a child first and a candidate second.
              </p>
              <p>
                I hope you will visit us. A prospectus or a website can show you a
                building; only a walk through the corridors between 8:00 and 9:00 AM
                can show you a school.
              </p>
              <div className="pt-6 border-t border-[color:rgba(47,74,60,0.16)]">
                <p className="font-display text-[1.35rem] text-[var(--forest-deep)]">
                  Mrs. Sunanda Rajadhyaksha
                </p>
                <p className="mt-1.5 text-[0.72rem] font-semibold tracking-[0.18em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Principal · Sanjivani International School, Kharghar
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="04 · School Profile"
        title="Sanjivani at a Glance — 2026–27"
        description="A factual profile of the school, published annually in the audited Annual Report and updated each April."
        tone="warm"
        id="school-profile"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              h: "The Campus",
              items: [
                "12+ acres, fully fenced, 64+ IR CCTV cameras with 30-day backup",
                "52 smart classrooms across 4 academic wings",
                "4 science labs, 3 computer labs + STEM/robotics wing (added 2024)",
                "6,200-volume library + open-air reading garden",
                "Full-size grass ground, 3 dedicated courts, covered indoor sports hall",
                "18-bus + 6-van transport network covering 24 routes",
              ],
            },
            {
              h: "Academic Profile",
              items: [
                "CBSE Permanent Affiliation · Class Nursery to XII (10+2)",
                "2026-27 enrolment: 2,412 students across 84 sections",
                "Seven consecutive years 100% pass in Class X & XII Boards",
                "2025-26 Class X school aggregate: 84.2% (up from 82.7%)",
                "36 students scored 90%+ in 2025-26 board exams",
                "Class XI & XII streams: Science, Commerce, Humanities",
              ],
            },
            {
              h: "Faculty & Staff",
              items: [
                "182 teachers, support staff, and administrators on payroll",
                "Average teaching faculty tenure at SIS: 8.3 years",
                "119 of 134 teachers hold post-graduate degrees in their subject",
                "Full-time school counsellor + learning-support team of 3",
                "2 certified PE coaches + 4 after-school professional coaches",
                "Annual mandatory CBSE & in-house professional development",
              ],
            },
          ].map((col) => (
            <article
              key={col.h}
              className="flex h-full flex-col border border-[color:rgba(47,74,60,0.18)] bg-[var(--ivory)] p-8"
            >
              <h3 className="font-display text-[1.35rem] text-[var(--forest-deep)]">
                {col.h}
              </h3>
              <div className="mt-6 h-px w-10 bg-[var(--terracotta)]/70" />
              <ul className="mt-6 space-y-3.5">
                {col.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-4 text-[0.93rem] leading-[1.7] text-[var(--ink-soft)]"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--forest-deep)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 pt-10 border-t border-[color:rgba(47,74,60,0.16)] md:grid-cols-4">
          {[
            { k: "Current Session", v: siteConfig.academicYear.current },
            { k: "Re-opens", v: siteConfig.academicYear.sessionStart },
            { k: "Closes", v: siteConfig.academicYear.sessionEnd },
            { k: "CBSE Affiliation No.", v: siteConfig.trustMarkers.cbseAffiliationNumber },
          ].map((r) => (
            <div
              key={r.k}
              className="border-l border-[var(--terracotta)]/40 pl-6"
            >
              <p className="text-[0.66rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                {r.k}
              </p>
              <p className="mt-2.5 font-display text-[1.25rem] leading-[1.25] text-[var(--forest-deep)]">
                {r.v}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="05 · Our Philosophy"
        title="How Sanjivani Thinks About Childhood, Learning & Community"
        description="This is the section we wish every parent would read before filling out an admission form. It is less a policy than a promise."
        tone="sage"
        id="school-philosophy"
      >
        <div className="grid gap-[clamp(2.5rem,5vw,4.5rem)]">
          <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-[clamp(2rem,4vw,4rem)]">
            <div>
              <p className="eyebrow">On Childhood</p>
              <h3 className="mt-5 font-display text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.08] tracking-[-0.01em] text-[var(--forest-deep)]">
                Children are not adults in training; they are people now.
              </h3>
            </div>
            <div className="space-y-5 text-[1.01rem] leading-[1.9] text-[var(--ink-soft)]">
              <p>
                A child who is yelled at for crying in Class I does not magically
                become a confident learner by Class VI. Emotions do not &ldquo;wait&rdquo;
                until a person is old enough. For this reason, Sanjivani teachers are
                expected to respond first to the child and only then to the infraction,
                the test, or the syllabus. Tired, hungry, or scared children do not
                learn — and we will never pretend otherwise.
              </p>
              <p>
                Younger learners are given a full 45-minute unbroken recess after
                lunch. No child is kept in during break for &ldquo;incomplete homework.&rdquo;
                Homework quantities are capped per class per night, and are written in
                the diary by the teacher rather than left as oral instructions.
              </p>
            </div>
          </article>

          <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-[clamp(2rem,4vw,4rem)] lg:[&>*:first-child]:order-2">
            <div>
              <p className="eyebrow">On Learning</p>
              <h3 className="mt-5 font-display text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.08] tracking-[-0.01em] text-[var(--forest-deep)]">
                Marks matter, but not more than the will to keep reading on Sunday.
              </h3>
            </div>
            <div className="space-y-5 text-[1.01rem] leading-[1.9] text-[var(--ink-soft)]">
              <p>
                Sanjivani is not a &ldquo;results factory.&rdquo; We take CBSE
                examinations seriously and our outcomes reflect that; but we also
                believe that the habit of reading for pleasure, asking an honest
                question in class, and finishing a book you chose is a more reliable
                predictor of adult success than any Class X percentage.
              </p>
              <p>
                Every child at SIS has one full library period per week. Every class
                reads aloud for ten minutes at the start of each English period. Every
                term includes at least one project where the assessment is on process
                (research, drafts, revision) and not only on a finished board or a
                neat file. Mistakes in a lab practical are treated as part of learning,
                not a deduction from marks.
              </p>
            </div>
          </article>

          <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-[clamp(2rem,4vw,4rem)]">
            <div>
              <p className="eyebrow">On Community</p>
              <h3 className="mt-5 font-display text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.08] tracking-[-0.01em] text-[var(--forest-deep)]">
                A good school teaches its neighbourhood how to raise a child together.
              </h3>
            </div>
            <div className="space-y-5 text-[1.01rem] leading-[1.9] text-[var(--ink-soft)]">
              <p>
                SIS teachers answer parent emails within five working days. The
                Principal replies personally to anything copied to her. PTA meetings
                are not a lecture; they are a conversation, and minutes are circulated
                within 48 hours. When the school gets something wrong — and every
                school does — we apologise, correct it, and tell you.
              </p>
              <p>
                In return, we ask parents to extend the same generosity to our staff
                that they would want extended to their own child. A teacher who is
                yelled at in the morning by one parent cannot do her best work for the
                rest of the day with thirty children. A respectful parent-school
                partnership is not optional at Sanjivani; it is the premise on which
                the whole school was built.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-14 flex flex-wrap gap-4 border-t border-[color:rgba(47,74,60,0.18)] pt-10">
          <Button href="/admissions" variant="terracotta">
            Book a Campus Visit
          </Button>
          <Button href="/faculty" variant="secondary">
            Meet the Faculty
          </Button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.18em] text-[var(--forest-deep)] [font-variant:all-small-caps] hover:text-[var(--terracotta)]"
          >
            Or email the Principal&rsquo;s office →
          </Link>
        </div>
      </Section>
    </>
  );
}
