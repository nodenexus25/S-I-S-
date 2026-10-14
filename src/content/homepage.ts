import { campusPhotography } from "./design-tokens";

export type HeroContent = {
  academicYear: string;
  eyebrow: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  mediaImage: string;
  mediaAlt: string;
};

export type StatItem = {
  value: string;
  label: string;
  caption: string;
};

export type StrengthCard = {
  eyebrow: string;
  title: string;
  detail: string;
};

export type AcademicStage = {
  label: string;
  title: string;
  classes: string;
  summary: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type LifeAtSISArea = {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type NewsItem = {
  date: string;
  dateISO: string;
  category: "News" | "Event" | "Update";
  title: string;
  summary: string;
  href: string;
};

export type AchievementItem = {
  date: string;
  category: string;
  title: string;
  detail: string;
  recipient: string;
};

export type CampusFacilityCard = {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
};

export type ImportantLink = {
  title: string;
  description: string;
  href: string;
};

export const homepageContent = {
  hero: {
    academicYear: "2026–27",
    eyebrow: "Admissions Open · Academic Session 2026–27",
    primaryCtaLabel: "Explore Admissions",
    primaryCtaHref: "/admissions",
    secondaryCtaLabel: "Book a Campus Visit",
    secondaryCtaHref: "/admissions#enquiry",
    mediaImage: campusPhotography.hero.src,
    mediaAlt: campusPhotography.hero.alt,
  } satisfies HeroContent,

  discover: {
    eyebrow: "Discover Sanjivani",
    headline: "A school rooted in Kharghar, preparing children for the world ahead.",
    lead:
      "Sanjivani International School is a CBSE-affiliated, co-educational campus serving families across Kharghar and Navi Mumbai — from Pre-Primary through Senior Secondary. We combine strong academics with a sincere commitment to sports, arts, community, and character.",
    signatureLines: [
      "Pre-Primary · Primary · Secondary · Senior Secondary",
      "CBSE curriculum with co-curricular depth",
      "A green, secure, purpose-built campus",
    ],
  },

  whyChoose: {
    eyebrow: "Why Choose SIS",
    headline: "Strengths that parents notice, and children carry forward.",
    summary:
      "Every part of the Sanjivani experience is designed around balance — rigour without burnout, activity without chaos, and tradition without stagnation.",
    strengths: [
      {
        eyebrow: "Academics",
        title: "CBSE excellence with small-class attention",
        detail:
          "A structured CBSE programme delivered in small sections, with subject specialists, formative assessment, and extra support wherever a child needs it.",
      },
      {
        eyebrow: "Campus",
        title: "A green campus built for how children learn",
        detail:
          "Smart classrooms, dedicated science and computer labs, a well-stocked library, sports courts, activity rooms, and open play spaces across a secure acreage.",
      },
      {
        eyebrow: "Faculty",
        title: "Experienced teachers who stay and care",
        detail:
          "Long-serving, qualified faculty supported by ongoing training, with a counsellor and learning support team for pastoral and academic care.",
      },
      {
        eyebrow: "Co-Curricular",
        title: "Sports, arts, clubs, and real-life learning",
        detail:
          "A full calendar of sports, visual and performing arts, clubs, field trips, competitions, and community projects — not a token afterthought.",
      },
      {
        eyebrow: "Pastoral",
        title: "Safety, counselling, and a listening culture",
        detail:
          "CCTV coverage, controlled campus access, dedicated counselling support, and age-appropriate pastoral programmes for every wing.",
      },
      {
        eyebrow: "Community",
        title: "A neighbourhood school, with a community heart",
        detail:
          "Rooted in Kharghar for more than two decades, Sanjivani is a school where parents, teachers, and students know each other by name.",
      },
    ] satisfies StrengthCard[],
  },

  learningAtSIS: {
    eyebrow: "Learning @ SIS",
    headline: "A continuous journey, from the first day of nursery to the final board exam.",
    summary:
      "Each academic stage has its own rhythm, its own teachers, and its own expectations. What stays the same is the level of care.",
    stages: [
      {
        label: "Pre-Primary",
        title: "The Early Years Wing",
        classes: "Nursery · Jr. KG · Sr. KG",
        summary:
          "Play-based discovery, warm routines, language-rich classrooms, and a gentle start to formal learning.",
        image: campusPhotography.classroom.src,
        imageAlt: campusPhotography.classroom.alt,
        href: "/academics/pre-primary",
      },
      {
        label: "Primary",
        title: "The Junior Wing",
        classes: "Classes I – V",
        summary:
          "Strong foundations in literacy and numeracy, theme-based learning, and the first steps toward independent study.",
        image: campusPhotography.library.src,
        imageAlt: campusPhotography.library.alt,
        href: "/academics/primary",
      },
      {
        label: "Secondary",
        title: "The Middle Wing",
        classes: "Classes VI – X",
        summary:
          "Conceptual depth, subject specialists, lab-based science, and steady preparation for the CBSE Class X board year.",
        image: campusPhotography.lab.src,
        imageAlt: campusPhotography.lab.alt,
        href: "/academics/secondary",
      },
      {
        label: "Senior Secondary",
        title: "The Senior Wing",
        classes: "Classes XI – XII",
        summary:
          "Stream and subject choices, career guidance, college readiness, and mentorship through the Class XII board examinations.",
        image: campusPhotography.classroom.src,
        imageAlt: campusPhotography.classroom.alt,
        href: "/academics/senior-secondary",
      },
    ] satisfies AcademicStage[],
  },

  lifeAtSIS: {
    eyebrow: "Life @ SIS",
    headline: "Beyond textbooks — a school day that children remember.",
    summary:
      "The Sanjivani campus lives in motion. Team practices, house assemblies, club meetings, festival celebrations, field trips, and the ordinary, unscripted friendships that matter most.",
    areas: [
      {
        title: "Sports & Athletics",
        summary:
          "Team sports, inter-house tournaments, athletics, and a dedicated PE programme across every age group.",
        image: campusPhotography.sports.src,
        imageAlt: campusPhotography.sports.alt,
        href: "/student-life#sports",
      },
      {
        title: "Arts & Culture",
        summary:
          "Drawing, painting, music, dance, theatre — classes, stages, exhibitions, and spaces to practise and perform.",
        image: campusPhotography.arts.src,
        imageAlt: campusPhotography.arts.alt,
        href: "/student-life#arts-culture",
      },
      {
        title: "Clubs & Competitions",
        summary:
          "Literary, STEM, eco, quiz and creative clubs — with inter-house and inter-school events throughout the year.",
        image: campusPhotography.classroom.src,
        imageAlt: campusPhotography.classroom.alt,
        href: "/student-life#clubs",
      },
      {
        title: "Field Trips & Expeditions",
        summary:
          "Learning outside the classroom — from local walks and museum visits to overnight camps and educational tours.",
        image: campusPhotography.hero.src,
        imageAlt: campusPhotography.hero.alt,
        href: "/student-life#field-trips",
      },
    ] satisfies LifeAtSISArea[],
  },

  newsAndEvents: {
    eyebrow: "News & Events",
    headline: "What is happening at SIS this term.",
    viewAllLabel: "View all News & Events",
    viewAllHref: "/news-events",
    items: [
      {
        date: "14 October 2026",
        dateISO: "2026-10-14",
        category: "Event" as const,
        title: "Annual Sports Day 2026",
        summary:
          "Track and field finals, march past, house points tally, and prize distribution on the SIS main ground. Parents welcome from 8:30 AM.",
        href: "/news-events#sports-day-2026",
      },
      {
        date: "09 October 2026",
        dateISO: "2026-10-09",
        category: "News" as const,
        title: "Pre-Primary Grandparents' Day",
        summary:
          "A morning of stories, songs, and handmade cards as our youngest learners host grandparents for a special assembly and campus walk.",
        href: "/news-events#grandparents-day",
      },
      {
        date: "04 October 2026",
        dateISO: "2026-10-04",
        category: "Update" as const,
        title: "Term I examinations begin for Classes VI–X",
        summary:
          "The first term examination schedule is live under Resources. Counsellors will hold pre-exam study skills sessions from 7 October.",
        href: "/resources#academic-calendar",
      },
      {
        date: "28 September 2026",
        dateISO: "2026-09-28",
        category: "Event" as const,
        title: "SIS Science & Robotics Exhibition",
        summary:
          "Working models from Class IV onwards on display. Open to parents 4:00–6:30 PM in the Activity Hall and STEM Wing.",
        href: "/news-events#science-exhibition",
      },
    ] satisfies NewsItem[],
  },

  ourAchievers: {
    eyebrow: "Our Achievers",
    headline: "Recognition earned in the classroom, on the field, and beyond.",
    viewAllLabel: "All Achievements",
    viewAllHref: "/achievements",
    items: [
      {
        date: "September 2026",
        category: "Olympiads",
        title: "Gold & Silver at SOF International Mathematics Olympiad",
        detail:
          "Four Sanjivani students qualify for the second level with medals at the International Mathematics Olympiad, 2026.",
        recipient: "Aarav Sharma · Class VII & 3 students",
      },
      {
        date: "August 2026",
        category: "Sports",
        title: "Zonal Champions · Under-14 Girls Basketball",
        detail:
          "The SIS U-14 girls' basketball team wins the Navi Mumbai zonal tournament with a seven-point final victory.",
        recipient: "SIS U-14 Girls Basketball Team",
      },
      {
        date: "July 2026",
        category: "Arts & Culture",
        title: "First Place · Inter-School Hindi Elocution",
        detail:
          "First position across 18 participating schools at the Kharghar Sahodaya inter-school Hindi elocution competition.",
        recipient: "Ananya Patil · Class IX",
      },
      {
        date: "June 2026",
        category: "Academic",
        title: "Class X & XII Board Results 2025–26",
        detail:
          "A 100% pass rate across both board batches, with 36 students scoring 90% and above in aggregate.",
        recipient: "Class X & XII Batches 2025–26",
      },
    ] satisfies AchievementItem[],
  },

  exploreCampus: {
    eyebrow: "Explore Our Campus",
    headline: "Spaces that support study, sport, creativity, and calm.",
    viewAllLabel: "Campus & Facilities",
    viewAllHref: "/infrastructure",
    facilities: [
      {
        title: "Smart Classrooms",
        summary:
          "Technology-enabled classrooms across every wing with digital boards, projection, and age-appropriate seating.",
        image: campusPhotography.classroom.src,
        imageAlt: campusPhotography.classroom.alt,
        href: "/infrastructure/classrooms",
      },
      {
        title: "Library & Reading",
        summary:
          "A calm, light-filled library with storybooks, reference titles, magazines, and a reading programme for every class.",
        image: campusPhotography.library.src,
        imageAlt: campusPhotography.library.alt,
        href: "/infrastructure/library",
      },
      {
        title: "Science Laboratories",
        summary:
          "Physics, Chemistry, Biology, and composite science labs with trained lab assistants and safe working practice.",
        image: campusPhotography.lab.src,
        imageAlt: campusPhotography.lab.alt,
        href: "/infrastructure/science-labs",
      },
      {
        title: "Sports Facilities",
        summary:
          "A full-sized ground, basketball and volleyball courts, indoor sports hall, and dedicated athletic track zones.",
        image: campusPhotography.sports.src,
        imageAlt: campusPhotography.sports.alt,
        href: "/infrastructure/sports",
      },
      {
        title: "Art, Music & Activity",
        summary:
          "Dedicated art, music, and dance rooms, plus multipurpose activity spaces for early years and the senior wing.",
        image: campusPhotography.arts.src,
        imageAlt: campusPhotography.arts.alt,
        href: "/infrastructure/art-music",
      },
      {
        title: "Computer & STEM Labs",
        summary:
          "ICT labs and a dedicated STEM / robotics wing with coding, tinkering, and electronics stations from Class IV onwards.",
        image: campusPhotography.lab.src,
        imageAlt: campusPhotography.lab.alt,
        href: "/infrastructure/computer-labs",
      },
    ] satisfies CampusFacilityCard[],
  },

  testimonials: {
    eyebrow: "Community Voice",
    headline: "Parents and alumni speak about Sanjivani.",
    note: "Testimonials are published only with written consent from the families concerned.",
    items: [
      {
        quote:
          "We moved our daughter to Sanjivani at the start of Class V. The shift in confidence, reading, and her willingness to ask questions in class has been extraordinary. She likes going to school.",
        name: "Parent of a Class VII student",
        role: "SIS parent since 2024",
      },
      {
        quote:
          "The teachers know each child by name and by temperament. Academics are serious, but never joyless. Our son plays two sports, acts in the annual play, and still comes home on time — somehow it all works.",
        name: "Parent of a Class IX student",
        role: "SIS parent since 2020",
      },
      {
        quote:
          "I finished Class XII at Sanjivani in 2021 and I'm now in my final year of engineering. The math, physics, and study habits I got here are the reason I could keep up in first year. I still visit whenever I am in Kharghar.",
        name: "Sanjivani Alumnus · Class of 2021",
        role: "Engineering undergraduate",
      },
      {
        quote:
          "What matters to us is that there is a counsellor we can talk to, that the school answers emails, and that the class teacher is honest and kind. That consistency is hard to find, and we value it.",
        name: "Parent of a Class III student",
        role: "SIS parent since 2022",
      },
    ] satisfies Testimonial[],
  },

  admissionsCall: {
    eyebrow: "Admissions · 2026–27",
    headline: "If you are considering Sanjivani for your child, we would love to meet you.",
    summary:
      "Admissions are currently open for Nursery through Class IX and Class XI for the 2026–27 session. The best first step is a campus visit on a working Friday or Saturday morning.",
    primaryCtaLabel: "Begin Your Enquiry",
    primaryCtaHref: "/admissions#enquiry",
    secondaryCtaLabel: "See Admission Process",
    secondaryCtaHref: "/admissions#process",
    bullets: [
      "Clear step-by-step process with no hidden stages",
      "Guided campus visit every Friday & Saturday, 9:00–11:30 AM",
      "Helpdesk by phone and email on all working days",
    ],
  },

  latestGallery: {
    eyebrow: "Latest Gallery",
    headline: "Moments from the past few weeks at SIS.",
    viewAllLabel: "Full Gallery",
    viewAllHref: "/gallery",
    items: [
      {
        title: "Annual Sports Day",
        category: "Sports",
        image: campusPhotography.sports.src,
        imageAlt: campusPhotography.sports.alt,
      },
      {
        title: "Science Exhibition",
        category: "Events",
        image: campusPhotography.lab.src,
        imageAlt: campusPhotography.lab.alt,
      },
      {
        title: "Reading Hour",
        category: "Academics",
        image: campusPhotography.library.src,
        imageAlt: campusPhotography.library.alt,
      },
      {
        title: "Art Room",
        category: "Arts",
        image: campusPhotography.arts.src,
        imageAlt: campusPhotography.arts.alt,
      },
      {
        title: "Group Assembly",
        category: "Campus Life",
        image: campusPhotography.classroom.src,
        imageAlt: campusPhotography.classroom.alt,
      },
      {
        title: "Campus Pathway",
        category: "Campus",
        image: campusPhotography.hero.src,
        imageAlt: campusPhotography.hero.alt,
      },
    ] satisfies GalleryItem[],
  },

  importantLinks: {
    eyebrow: "Important Links",
    headline: "Quick access for parents, students, and visitors.",
    items: [
      {
        title: "Academic Calendar 2026–27",
        description: "Term dates, holidays, and scheduled school events.",
        href: "/resources#academic-calendar",
      },
      {
        title: "Circulars & Notices",
        description: "Latest parent-facing circulars and school communications.",
        href: "/resources#circulars",
      },
      {
        title: "Admission FAQs",
        description: "Age criteria, documents, fees, and commonly asked questions.",
        href: "/admissions#faqs",
      },
      {
        title: "Faculty Directory",
        description: "Subject teachers, wing coordinators, and support staff.",
        href: "/faculty",
      },
      {
        title: "Downloads & Forms",
        description: "Admission forms, handbooks, and parent resources to download.",
        href: "/resources#downloads",
      },
      {
        title: "Contact & Map",
        description: "Campus address, working hours, phone, and enquiry form.",
        href: "/contact",
      },
    ] satisfies ImportantLink[],
  },
} as const;
