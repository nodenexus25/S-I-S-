import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { homepageContent } from "@/content/homepage";
import { campusPhotography } from "@/content/design-tokens";
import Link from "next/link";

export default function AcademicsPage() {
  const stages = homepageContent.learningAtSIS.stages;

  return (
    <>
      <Section
        eyebrow="Academics @ SIS"
        title="A twelve-year academic journey that is serious, but never grim."
        description="Sanjivani follows the CBSE curriculum from Pre-Primary through Senior Secondary — but delivers it with a local, Maharashtrian warmth. Every academic stage below has its own rhythm, its own wing, and its own expectations."
        tone="ivory"
      >
        <div className="grid gap-0 border border-[color:rgba(47,74,60,0.16)] md:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <Link
              key={s.label}
              href={s.href}
              className={`group relative flex flex-col bg-[var(--ivory)] border-t border-l border-[color:rgba(47,74,60,0.14)] md:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+4)]:border-t-0 md:[&:nth-child(odd)]:border-l-0 lg:[&:nth-child(4n+1)]:border-l-0 ${
                i === 0 ? "border-t-0 border-l-0" : ""
              }`}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  style={{ backgroundImage: `url("${s.image}")` }}
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-[0.66rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Stage 0{i + 1} · {s.label}
                </p>
                <h3 className="mt-4 font-display text-[1.35rem] leading-[1.2] tracking-[-0.01em] text-[var(--forest-deep)] transition-colors duration-300 group-hover:text-[var(--terracotta)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.7rem] font-semibold tracking-[0.18em] text-[var(--sage-deep)] [font-variant:all-small-caps]">
                  {s.classes}
                </p>
                <p className="mt-4 text-[0.9rem] leading-[1.75] text-[var(--ink-soft)]">
                  {s.summary}
                </p>
                <span className="mt-auto pt-6 text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--forest-deep)] [font-variant:all-small-caps]">
                  Learn about this wing →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="01 · Curriculum"
        title="The CBSE Framework, Taught with a SIS Inflection"
        description="The prescribed syllabus is CBSE — but how we approach it, and the order in which we introduce topics, is shaped by twenty years of teaching children from Kharghar and Maharashtra."
        tone="warm"
        id="curriculum"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-[clamp(2rem,4vw,4rem)]">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "16 / 10" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url("${campusPhotography.library.src}")` }}
            />
            <span className="sr-only">{campusPhotography.library.alt}</span>
          </div>
          <div className="space-y-5 text-[1rem] leading-[1.88] text-[var(--ink-soft)]">
            <p>
              Sanjivani follows the National Council of Educational Research and
              Training (NCERT) textbooks and the latest CBSE curriculum circulars for
              every subject in every class. Where the CBSE framework allows teacher
              flexibility — project weighting, internal assessment, co-curricular
              linkage, second-language options — that is where SIS develops its own
              character.
            </p>
            <p>
              Marathi and Hindi are treated as equal second-language options from
              Class I onwards, with additional conversational Marathi exposure in the
              Pre-Primary wing. Environmental Studies and Science are taught through
              local examples wherever possible: the Kharghar wetlands for biology, the
              Godavari delta for geography, and the Vashi agricultural market for
              economics.
            </p>
            <p>
              For Classes XI and XII, three streams are offered — Science (PCM, PCB,
              PCMB with Computer Science, Information Practices, or Physical Education
              as the fifth subject), Commerce (with or without Maths and IP), and
              Humanities (English, History, Geography, Political Science, Economics,
              Optional Maths, Fine Arts, or Physical Education).
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 pt-10 border-t border-[color:rgba(47,74,60,0.16)] lg:grid-cols-3">
          {[
            {
              h: "Languages",
              i: ["English (1st language, all classes)", "Hindi / Marathi (2nd language, Class I+)", "Sanskrit optional (Class V–VIII)", "Marathi Abhang & Hindi Diwas assemblies"],
            },
            {
              h: "Core Subjects",
              i: ["Mathematics · Science · Social Science", "Physics, Chemistry, Biology (Class VI+)", "Computer Science / IT (Class II+)", "Environmental Studies, Life Skills, Value Ed."],
            },
            {
              h: "Beyond NCERT",
              i: ["General Knowledge & Current Affairs weekly", "Library reading period every class, per week", "11 after-school clubs with external exposure", "Annual Class VII Panchgani & Class XII Sahyadri expeditions"],
            },
          ].map((c) => (
            <article
              key={c.h}
              className="flex flex-col border border-[color:rgba(47,74,60,0.2)] bg-[var(--ivory)] p-7"
            >
              <h3 className="font-display text-[1.25rem] text-[var(--forest-deep)]">
                {c.h}
              </h3>
              <div className="mt-5 h-px w-8 bg-[var(--terracotta)]" />
              <ul className="mt-5 space-y-2.5">
                {c.i.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-[0.9rem] leading-[1.7] text-[var(--ink-soft)]"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--terracotta)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="02 · Pedagogy"
        title="Teaching & Learning — How a Classroom Actually Feels"
        description="A child spends about a thousand hours a year in the classroom. That time should feel challenging but kind, serious but varied, and always safe enough to raise your hand and say you don&rsquo;t understand."
        tone="sage"
        id="teaching-learning"
      >
        <div className="grid gap-[clamp(2.5rem,5vw,4.5rem)]">
          {[
            {
              label: "Small Sections",
              title: "A section size that lets a teacher remember the quieter child.",
              detail:
                "Maximum 32 students per section in Primary, 36 in Senior — below the CBSE ceiling. Every section has one class teacher plus subject specialists from Class VI onwards. Seating rotations every fortnight mean no child sits at the back all term.",
              img: campusPhotography.classroom.src,
              alt: campusPhotography.classroom.alt,
            },
            {
              label: "Inquiry First",
              title: "A lesson opens with a question, not a definition.",
              detail:
                "Most SIS lessons are structured in a three-part cycle: a concrete hook (a question, a live demo, a short video, or a student walk), guided inquiry with the teacher, then individual or group practice. Teacher-talk is capped at roughly a third of the period; student activity is the rest.",
              img: campusPhotography.lab.src,
              alt: campusPhotography.lab.alt,
            },
          ].map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.label}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-[clamp(2.5rem,5vw,4.5rem)] ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "16 / 10" }}
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: `url("${s.img}")` }}
                  />
                </div>
                <div>
                  <p className="eyebrow">{s.label}</p>
                  <h3 className="mt-5 font-display text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.08] tracking-[-0.01em] text-[var(--forest-deep)]">
                    {s.title}
                  </h3>
                  <p className="mt-6 text-[1.02rem] leading-[1.9] text-[var(--ink-soft)]">
                    {s.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="03 · Assessment"
        title="Assessment That Teaches Before It Judges"
        description="Children should leave an assessment knowing more than when they walked in. At SIS, formative feedback is weighted twice as heavily as a summative percentage."
        tone="ivory"
        id="assessment"
      >
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              label: "Primary Wing",
              classes: "Nursery – V",
              i: [
                "Weekly oral & classwork-based formative checks",
                "Two cycle tests + two term examinations per year",
                "Report cards use descriptive indicators, not ranks",
                "Parent-teacher meetings after each major assessment",
              ],
            },
            {
              label: "Middle Wing",
              classes: "VI – VIII",
              i: [
                "CCE pattern: 40% formative, 60% summative",
                "Unit tests, notebook checks, projects & oral marks",
                "Written term exams: Term I (October) & Term II (February)",
                "No inter-class ranking; only grade bands shared",
              ],
            },
            {
              label: "Senior Wing",
              classes: "IX – XII",
              i: [
                "Class IX & XI: two terms + two unit tests per term",
                "Class X & XII: Pre-Board I (October) + Pre-Board II (January)",
                "Full CBSE mock papers, timed exactly like board exams",
                "Cumulative revision & after-school doubt-clearing schedule",
              ],
            },
          ].map((c) => (
            <article
              key={c.label}
              className="flex h-full flex-col border border-[color:rgba(47,74,60,0.18)] bg-[var(--ivory-warm)] p-8"
            >
              <p className="text-[0.66rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                {c.label}
              </p>
              <h3 className="mt-3 font-display text-[1.4rem] leading-[1.15] text-[var(--forest-deep)]">
                {c.classes}
              </h3>
              <div className="mt-6 h-px w-10 bg-[var(--forest-deep)]/60" />
              <ul className="mt-6 space-y-3">
                {c.i.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3.5 text-[0.92rem] leading-[1.75] text-[var(--ink-soft)]"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--terracotta)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 pt-10 border-t border-[color:rgba(47,74,60,0.16)] lg:grid-cols-[1fr_1fr_1fr]">
          <div className="border border-[color:rgba(47,74,60,0.18)] bg-[var(--sage-wash)]/70 p-7">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--forest-deep)] [font-variant:all-small-caps]">
              — Marking Principle 01
            </p>
            <h4 className="mt-4 font-display text-[1.25rem] leading-[1.3] text-[var(--forest-deep)]">
              Every major test is returned within five working days, in class, with a comment.
            </h4>
          </div>
          <div className="border border-[color:rgba(47,74,60,0.18)] bg-[var(--terracotta-wash)]/60 p-7">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)] [font-variant:all-small-caps]">
              — Marking Principle 02
            </p>
            <h4 className="mt-4 font-display text-[1.25rem] leading-[1.3] text-[var(--forest-deep)]">
              A child who scores below 40% gets a mandatory re-teach and retake, not a lecture home.
            </h4>
          </div>
          <div className="border border-[color:rgba(47,74,60,0.18)] bg-[var(--ivory-warm)] p-7">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--sage-deep)] [font-variant:all-small-caps]">
              — Marking Principle 03
            </p>
            <h4 className="mt-4 font-display text-[1.25rem] leading-[1.3] text-[var(--forest-deep)]">
              Class ranks are never called out or written on the board. Ever.
            </h4>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="04 · Counselling"
        title="Academic, Career & Personal Counselling"
        description="A trained school counsellor is on campus five days a week. Sessions are confidential, optional, and available to every student — and to parents, on request."
        tone="warm"
        id="counselling"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "4 / 3" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url("${campusPhotography.arts.src}")` }}
            />
          </div>
          <div className="grid gap-0 border border-[color:rgba(47,74,60,0.18)] bg-[var(--ivory)]">
            {[
              {
                t: "Academic & Exam Counselling",
                d: "Pre-exam anxiety talks, study-skill workshops, and one-to-one help with planning Class X and XII board schedules. The counsellor visits every Class IX–XII classroom once a month.",
              },
              {
                t: "Career & Stream Guidance",
                d: "Aptitude testing for Class X before stream selection, alumni career panels in Class XI, one-to-one 30-minute counselling slots in Class XII, and a November Career Mela with visiting colleges.",
              },
              {
                t: "Personal & Pastoral",
                d: "Confidential drop-in sessions every lunch break, circle-time work in Primary classes, anti-bullying and safe-touch assemblies, and referrals to external specialists with parental consent.",
              },
              {
                t: "Parent Counselling",
                d: "Individual parent sessions booked through the front office (confidential), and quarterly parent-facing well-being talks on topics such as screen time, adolescence, and exam pressure at home.",
              },
            ].map((r, i) => (
              <div
                key={r.t}
                className={`grid gap-4 p-7 md:grid-cols-[auto_1fr] md:items-start ${
                  i > 0 ? "border-t border-[color:rgba(47,74,60,0.14)]" : ""
                }`}
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--terracotta)]/40 text-[0.7rem] font-semibold tracking-[0.18em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="font-display text-[1.15rem] leading-[1.25] text-[var(--forest-deep)]">
                    {r.t}
                  </h4>
                  <p className="mt-2.5 text-[0.92rem] leading-[1.75] text-[var(--ink-soft)]">
                    {r.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="05 · Inclusion"
        title="Learning Support & Differentiated Instruction"
        description="Every child learns at a different pace. Sanjivani&rsquo;s learning-support team works inside regular classrooms so that no child feels singled out by needing help."
        tone="sage"
        id="learning-support"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5 text-[1rem] leading-[1.9] text-[var(--ink-soft)]">
            <p>
              The SIS Learning Support team consists of three resource teachers — one
              each for reading/literacy, numeracy, and general academic support — and
              the school counsellor. Children with a documented specific learning
              difficulty (dyslexia, dysgraphia, dyscalculia, ADHD) from a certified
              clinical psychologist receive an Individualised Education Plan (IEP) and
              may avail CBSE-approved exam concessions such as extra time, a reader or
              writer, or calculator use, in line with the latest CBSE circulars.
            </p>
            <p>
              Support is not a separate classroom. Resource teachers co-teach within
              regular lessons, pull small groups for 20-minute focus sessions during
              the free period, and do not pull children from art, music, or PE — the
              very classes that often keep a struggling learner coming happily to
              school.
            </p>
          </div>
          <div className="grid gap-5">
            {[
              { k: "Who gets support", v: "Students with formal diagnosis, plus any child class-teacher flagged for in-class support without formal label." },
              { k: "Concessions process", v: "School coordinates CBSE concession applications; parent provides clinical certificate; process completed by Class V for smooth Class X transition." },
              { k: "Teacher training", v: "All class teachers attend two-day inclusive-education workshop at the start of every academic year." },
              { k: "Limits of support", v: "SIS is not a full special-needs school; children requiring 1:1 support or severe needs are referred to specialist partner institutions." },
            ].map((r, i) => (
              <div
                key={r.k}
                className="flex flex-col gap-3 border border-[color:rgba(47,74,60,0.2)] bg-[var(--ivory)] p-6"
              >
                <p className="text-[0.66rem] font-semibold tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  Note 0{i + 1} · {r.k}
                </p>
                <p className="text-[0.93rem] leading-[1.75] text-[var(--ink-soft)]">
                  {r.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section
        className="bg-[var(--forest-deep)] text-[var(--ivory)]"
        id="faculty-cta"
      >
        <div className="editorial-shell py-[clamp(3.5rem,7vw,6rem)]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="eyebrow !text-[var(--terracotta-soft)]">
                — Meet the teachers behind this programme
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] tracking-[-0.015em]">
                The people who actually teach your child: 134 qualified, long-serving subject specialists.
              </h2>
              <p className="mt-6 max-w-xl text-[1.03rem] leading-[1.9] text-[var(--ivory)]/82">
                The SIS faculty directory lists every wing coordinator, head of
                department, class teacher, and subject specialist — with
                qualifications, subjects they teach, and a short personal teaching
                philosophy.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  href="/faculty"
                  className="!border-[var(--terracotta)] !bg-[var(--terracotta)] !text-[var(--ivory)] hover:!bg-transparent hover:!text-[var(--ivory)]"
                >
                  Browse Faculty Directory →
                </Button>
                <Button
                  href="/admissions"
                  className="!border-[var(--ivory)]/80 !bg-transparent !text-[var(--ivory)] hover:!bg-[var(--ivory)] hover:!text-[var(--forest-deep)]"
                >
                  Talk to Admissions
                </Button>
              </div>
            </div>
            <div className="grid gap-0 border border-[color:rgba(248,247,242,0.14)]">
              {[
                "HOD English · Mrs. Prachi Deshpande — CBSE Awardee 2026",
                "HOD Mathematics · Mr. Prashant Desai — M.Sc. B.Ed, 14 years at SIS",
                "HOD Science · Mrs. Archana Patil — M.Sc. B.Ed, former Homi Bhabha evaluator",
                "Counsellor · Ms. Aparna Joshi — M.Phil Clinical Psychology, RCI registered",
                "Librarian · Mrs. Supriya Kadam — M.Lib, 11 years at SIS, Reading Programme lead",
              ].map((t, i) => (
                <p
                  key={t}
                  className={`flex items-start gap-4 p-5 text-[0.93rem] leading-[1.6] text-[var(--ivory)]/85 ${
                    i > 0 ? "border-t border-[color:rgba(248,247,242,0.12)]" : ""
                  }`}
                >
                  <span className="mt-1 inline-block h-1.5 w-5 shrink-0 bg-[var(--terracotta-soft)]" />
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
