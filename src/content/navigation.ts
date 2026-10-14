export type NavigationItem = {
  title: string;
  href: string;
  children?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
};

export const navigationItems: NavigationItem[] = [
  { title: "Home", href: "/" },
  {
    title: "About SIS",
    href: "/about",
    children: [
      {
        title: "Vision & Mission",
        href: "/about#vision-mission",
        description: "The vision, mission, and values that guide Sanjivani International School.",
      },
      {
        title: "Leadership",
        href: "/about#leadership",
        description: "Chairman, Managing Committee, and senior school leadership.",
      },
      {
        title: "Principal's Message",
        href: "/about#principals-message",
        description: "A welcome note from the Principal of Sanjivani International School.",
      },
      {
        title: "School Profile",
        href: "/about#school-profile",
        description: "Affiliation, history, enrolment, and the SIS story at a glance.",
      },
      {
        title: "School Philosophy",
        href: "/about#school-philosophy",
        description: "Our approach to learning, childhood, and community at SIS.",
      },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    children: [
      {
        title: "Pre-Primary",
        href: "/academics/pre-primary",
        description: "Nursery, Jr. KG, Sr. KG — a warm early-years foundation.",
      },
      {
        title: "Primary",
        href: "/academics/primary",
        description: "Classes I–V — building strong literacy, numeracy, and curiosity.",
      },
      {
        title: "Secondary",
        href: "/academics/secondary",
        description: "Classes VI–X — CBSE preparation with inquiry and mentorship.",
      },
      {
        title: "Senior Secondary",
        href: "/academics/senior-secondary",
        description: "Classes XI–XII — streams, subject choices, and career readiness.",
      },
      {
        title: "Curriculum",
        href: "/academics#curriculum",
        description: "CBSE curriculum framework, teaching methodology, and assessment.",
      },
      {
        title: "Teaching & Learning",
        href: "/academics#teaching-learning",
        description: "Pedagogy, classroom practice, and support for every learner.",
      },
      {
        title: "Assessment",
        href: "/academics#assessment",
        description: "Formative and summative assessment, exams, and results.",
      },
      {
        title: "Faculty",
        href: "/faculty",
        description: "Meet the teachers, mentors, and academic leadership at SIS.",
      },
      {
        title: "Counselling",
        href: "/academics#counselling",
        description: "Academic, career, and personal counselling for students.",
      },
      {
        title: "Learning Support",
        href: "/academics#learning-support",
        description: "Inclusive learning, individual support, and differentiated instruction.",
      },
    ],
  },
  {
    title: "Admissions",
    href: "/admissions",
    children: [
      {
        title: "Why SIS?",
        href: "/admissions#why-sis",
        description: "What makes Sanjivani International School the right choice.",
      },
      {
        title: "Admission Process",
        href: "/admissions#process",
        description: "Step-by-step admission journey from enquiry to enrolment.",
      },
      {
        title: "Eligibility",
        href: "/admissions#eligibility",
        description: "Age criteria, entry points, and grade-wise eligibility.",
      },
      {
        title: "Required Documents",
        href: "/admissions#documents",
        description: "Checklist of documents needed at the time of admission.",
      },
      {
        title: "Important Dates",
        href: "/admissions#important-dates",
        description: "Key dates, deadlines, and schedule for 2026–27 admissions.",
      },
      {
        title: "FAQs",
        href: "/admissions#faqs",
        description: "Frequently asked questions answered for parents and guardians.",
      },
      {
        title: "Enquiry / Apply Now",
        href: "/admissions#enquiry",
        description: "Submit an admission enquiry or begin your application online.",
      },
    ],
  },
  {
    title: "Life @ SIS",
    href: "/student-life",
    children: [
      {
        title: "Sports",
        href: "/student-life#sports",
        description: "Team sports, athletics, fitness, and SIS on the field.",
      },
      {
        title: "Arts & Culture",
        href: "/student-life#arts-culture",
        description: "Visual arts, performing arts, music, dance, and cultural expression.",
      },
      {
        title: "Clubs & Houses",
        href: "/student-life#clubs",
        description: "Clubs, societies, house system, and student-led activities.",
      },
      {
        title: "Competitions",
        href: "/student-life#competitions",
        description: "Inter-house, inter-school, and competitive learning at SIS.",
      },
      {
        title: "Field Trips & Expeditions",
        href: "/student-life#field-trips",
        description: "Learning outside the classroom through excursions and field visits.",
      },
      {
        title: "Celebrations",
        href: "/student-life#celebrations",
        description: "Festivals, traditions, and school-wide celebrations throughout the year.",
      },
      {
        title: "Student Leadership",
        href: "/student-life#student-leadership",
        description: "Student council, prefects, mentors, and leadership programmes.",
      },
      {
        title: "Community Service",
        href: "/student-life#community-service",
        description: "Outreach, social projects, and responsible citizenship at SIS.",
      },
    ],
  },
  {
    title: "Achievements",
    href: "/achievements",
    children: [
      {
        title: "Academic",
        href: "/achievements#academic",
        description: "Board results, toppers, subject awards, and academic excellence.",
      },
      {
        title: "Sports",
        href: "/achievements#sports",
        description: "Zonal, district, and state-level sporting achievements.",
      },
      {
        title: "Olympiads & Examinations",
        href: "/achievements#olympiads",
        description: "SOF, NTSE, and external competitive examination results.",
      },
      {
        title: "Inter-School Competitions",
        href: "/achievements#inter-school",
        description: "Wins and recognitions at inter-school events and tournaments.",
      },
      {
        title: "State & National",
        href: "/achievements#state-national",
        description: "State and national level recognitions and selections.",
      },
      {
        title: "Arts & Cultural",
        href: "/achievements#arts-culture",
        description: "Music, dance, art, theatre, and cultural competition honours.",
      },
      {
        title: "School & Teacher Recognition",
        href: "/achievements#teacher",
        description: "Awards and recognitions earned by the school and our faculty.",
      },
    ],
  },
  {
    title: "News & Events",
    href: "/news-events",
    children: [
      {
        title: "Latest News",
        href: "/news-events#latest-news",
        description: "Recent school updates, announcements, and press items.",
      },
      {
        title: "Upcoming Events",
        href: "/news-events#upcoming-events",
        description: "Events, programmes, and activities scheduled in the coming weeks.",
      },
      {
        title: "School Updates",
        href: "/news-events#school-updates",
        description: "General updates from across the school for parents and students.",
      },
      {
        title: "Event Stories",
        href: "/news-events#event-stories",
        description: "Photographed stories and summaries of past SIS events.",
      },
    ],
  },
  {
    title: "Campus",
    href: "/infrastructure",
    children: [
      {
        title: "Smart Classrooms",
        href: "/infrastructure/classrooms",
        description: "Technology-enabled learning spaces across every wing.",
      },
      {
        title: "Computer Laboratories",
        href: "/infrastructure/computer-labs",
        description: "ICT labs, coding stations, and digital learning infrastructure.",
      },
      {
        title: "Science Laboratories",
        href: "/infrastructure/science-labs",
        description: "Physics, Chemistry, Biology, and Composite Science laboratories.",
      },
      {
        title: "Library",
        href: "/infrastructure/library",
        description: "Reading, reference, and digital resources at the SIS library.",
      },
      {
        title: "Sports Facilities",
        href: "/infrastructure/sports",
        description: "Playgrounds, courts, indoor sports, and fitness amenities.",
      },
      {
        title: "Art & Music Spaces",
        href: "/infrastructure/art-music",
        description: "Dedicated spaces for visual art, music, dance, and performance.",
      },
      {
        title: "Activity Rooms",
        href: "/infrastructure/activity-rooms",
        description: "Early-years, STEM, robotics, and multi-purpose activity spaces.",
      },
      {
        title: "Safety & Security",
        href: "/infrastructure#safety",
        description: "Campus safety, CCTV, access control, and emergency protocols.",
      },
      {
        title: "Transport Facilities",
        href: "/infrastructure#transport",
        description: "Bus fleet information, routes, and transport assistance.",
      },
    ],
  },
  { title: "Gallery", href: "/gallery" },
  {
    title: "Resources",
    href: "/resources",
    children: [
      {
        title: "Circulars & Notices",
        href: "/resources#circulars",
        description: "Latest parent-facing circulars, notices, and school communications.",
      },
      {
        title: "Downloads",
        href: "/resources#downloads",
        description: "Forms, handbooks, worksheets, and downloadable documents.",
      },
      {
        title: "Academic Calendar",
        href: "/resources#academic-calendar",
        description: "Academic calendar, term dates, holidays, and scheduled events.",
      },
      {
        title: "Publications",
        href: "/resources#publications",
        description: "School magazine, newsletters, annual reports, and publications.",
      },
      {
        title: "Policies",
        href: "/resources#policies",
        description: "Approved school policies and institutional documents.",
      },
    ],
  },
  { title: "Careers", href: "/careers" },
  { title: "Contact Us", href: "/contact" },
];

export const utilityNavigationItems: NavigationItem[] = [
  { title: "Enquiry", href: "/admissions#enquiry" },
  { title: "Pay Fee", href: "/pay-fee" },
  { title: "Parent Login", href: "/parent-login" },
];
