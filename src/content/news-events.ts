export const newsIntro = {
  eyebrow: "News & Events",
  headline: "The life of the school, week by week.",
  summary:
    "Latest news, upcoming school events, and feature-length photo stories from recent SIS programmes and celebrations. Older event stories are archived by term under the Gallery page.",
} as const;

export type NewsStory = {
  id: string;
  date: string;
  dateISO: string;
  category: "News" | "Update" | "Circular";
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  classesInvolved: string;
  learningObjective: string;
  highlights: string[];
  outcome: string;
};

export type EventStory = {
  id: string;
  date: string;
  dateISO: string;
  title: string;
  classesInvolved: string;
  description: string;
  learningObjective: string;
  highlights: string[];
  outcome: string;
  image: string;
  imageAlt: string;
  gallery: {
    prompt: string;
    alt: string;
    image: string;
  }[];
};

export type UpcomingEvent = {
  id: string;
  date: string;
  dateISO: string;
  title: string;
  time: string;
  venue: string;
  targetClasses: string;
  summary: string;
  registration: {
    required: boolean;
    link?: string;
    deadlineDateISO?: string;
    note?: string;
  };
};

const prompt1 = encodeURIComponent(
  "editorial documentary photograph of Indian school SOF Math Olympiad exam classroom, students in uniform seated individually at desks working intently on answer sheet, teacher invigilating, concentration facial expressions, morning golden light through classroom window, sage green wall, OMR sheet and pencil on desk, Kharghar Navi Mumbai, no text overlay, high detail",
);
const prompt2 = encodeURIComponent(
  "editorial warm photograph of Indian school Pre-Primary children's Gratitude Week activity, Nursery Jr KG students in uniform drawing thank you cards with crayons on tiny wooden tables, teacher helping, handmade thank you cards for didis, drivers, maalis, flowers in small terracotta pots around room, warm morning light, documentary candid photography, no text overlay, high detail",
);
const prompt3 = encodeURIComponent(
  "editorial travel documentary photograph of Indian school Class VIII students on educational field trip to Elephanta Caves Mumbai, children in uniform with backpacks climbing stone steps, teacher pointing to cave sculptures, students sketching in notebooks, morning golden sun through rock pillars, Maharashtra landscape, no text overlay, high detail",
);
const prompt4 = encodeURIComponent(
  "editorial action photograph of Indian school inter-house girls football match at golden hour sunset, Kharghar campus green turf, students in navy and terracotta house uniforms in motion playing, referee blowing whistle, crowd of students on sideline cheering, long warm shadows, bougainvillea boundary wall, documentary sports photography, no text overlay, high detail",
);
const prompt5 = encodeURIComponent(
  "editorial portrait photograph of Indian school newly elected Student Council 2026-27, prefects and house captains in formal blazer and sashes in terracotta and forest green, standing on school campus steps, Head Boy Head Girl holding SIS flag, mixed group Class V to XII, confident expressions, teachers standing behind, golden hour evening light, no text overlay, high detail",
);
const prompt6 = encodeURIComponent(
  "editorial warm photography of Indian school Class IV students EVS environmental awareness workshop, children in uniform planting native saplings in terracotta pots and painted signage of 'Save Kharghar Wetlands', environmentalist guest speaking, classroom with green plants and nature posters, morning daylight, documentary workshop style, no text overlay, high detail",
);

export const latestNews: NewsStory[] = [
  {
    id: "news-001",
    date: "04 October 2026",
    dateISO: "2026-10-04",
    category: "News",
    title: "Four SIS Students Qualify for SOF IMO Second Level",
    summary:
      "Four Sanjivani students from Classes VI to IX have qualified for the Second Level of the SOF International Mathematics Olympiad on the strength of their Level 1 scores, including Aarav Sharma of Class VII who secured a zonal rank of 8. Results were declared on 30 September by the Science Olympiad Foundation, New Delhi.",
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt1}&image_size=landscape_4_3`,
    imageAlt: "SIS students seated during the SOF Math Olympiad Level 1 examination held on campus.",
    classesInvolved: "Classes VI, VII, VIII & IX",
    learningObjective:
      "To expose students to higher-order mathematical reasoning at the national and international competitive level, and to build confidence for competitive exams beyond the CBSE syllabus.",
    highlights: [
      "Aarav Sharma (Class VII) — International Rank 103, Zonal Rank 8, Gold Medal of Excellence",
      "Aditya Kale (Class VIII) — International Rank 314, qualified for Level 2",
      "Siddhi Phadke (Class IX) & Ishaan Deshmukh (Class VI) — both in top 500 nationally",
      "Level 2 exam scheduled for Sunday, 14 February 2027 at centre in Vashi, Navi Mumbai",
    ],
    outcome:
      "The four qualifiers will begin after-school Math Olympiad practice sessions with Mr. Prashant Desai (HOD Mathematics) twice weekly beginning 17 October. The school will sponsor the Level 2 registration fee, travel, and lunch for all four qualifiers on the day of the examination.",
  },
  {
    id: "news-002",
    date: "26 September 2026",
    dateISO: "2026-09-26",
    category: "Update",
    title: "Pre-Primary Wing Concludes 'Gratitude Week' Theme",
    summary:
      "The Pre-Primary wing concluded a five-day 'Gratitude Week' theme on 25 September, during which Nursery, Jr. KG and Sr. KG children made handmade thank-you cards, drew pictures, and gave small potted marigold plants to the campus support staff — bus attendants, maalis, cleaners, didis, and security guards — who look after them every day.",
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt2}&image_size=landscape_4_3`,
    imageAlt: "Nursery and Junior KG children drawing thank-you cards at tiny tables during the SIS Gratitude Week theme.",
    classesInvolved: "Nursery, Jr. KG & Sr. KG",
    learningObjective:
      "To help the youngest learners notice and name the many adults in their school day who help them, to begin practising saying 'thank you' sincerely, and to understand that kindness and work exist outside their own classroom.",
    highlights: [
      "Handmade 'Thank You Didi' / 'Thank You Bhauya' cards for bus attendants and support staff",
      "Small marigold saplings in terracotta pots planted by the children and given personally",
      "Sr. KG students visited the school office and delivered cards to the principal and office staff",
      "Story-time sessions each day on themes of kindness, helpers, and saying thank you",
    ],
    outcome:
      "The Gratitude Week tradition will now be repeated each September. A photo board of the week's activities is on display outside the Pre-Primary wing reception for parents to view during pickup hours.",
  },
  {
    id: "news-003",
    date: "19 September 2026",
    dateISO: "2026-09-19",
    category: "News",
    title: "Class VIII Educational Field Trip to Elephanta Caves",
    summary:
      "All 118 students of Class VIII travelled by BEST bus to the UNESCO World Heritage Site of Elephanta Caves on Gharapuri Island on Thursday, 17 September, as part of their History and Environmental Studies curriculum. The trip included a ferry ride from the Gateway of India, a guided cave tour, and student sketching assignments.",
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt3}&image_size=landscape_4_3`,
    imageAlt: "Class VIII SIS students walking the stone steps and sketching at the Elephanta Caves UNESCO site.",
    classesInvolved: "Class VIII — all sections",
    learningObjective:
      "To complement the Class VIII History chapter on Rashtrakuta and Chalukya rock-cut architecture with on-site observation, and to link EVS topics on coastal ecology and Western Ghats biodiversity to a tangible local site.",
    highlights: [
      "Ferry ride from Gateway of India to Gharapuri with teacher-guided commentary on Mumbai harbour",
      "ASI-certified guide for the full 2-hour cave tour covering all five Buddhist and Hindu caves",
      "Sketching assignment — each student chose one sculpture panel to draw on-site in their history notebook",
      "Return ferry with snack; back to school campus by 4:45 PM as scheduled",
    ],
    outcome:
      "The Class VIII history notebooks with on-site Elephanta sketches are currently on display on the Class VIII corridor board until 10 October. A selection of student reflections will also be featured in the October issue of the SIS Scribe monthly newsletter.",
  },
  {
    id: "news-004",
    date: "10 September 2026",
    dateISO: "2026-09-10",
    category: "News",
    title: "Inter-House Football League Begins — Girls U-14 and Boys U-16",
    summary:
      "The SIS Inter-House Football League 2026 kicked off on 08 September on the main campus ground, with 4 boys teams (U-16) and 4 girls teams (U-14) representing each of the four houses — Shivaji, Tagore, Ashoka, and Raman. Matches are scheduled every Tuesday and Thursday after school for the next four weeks.",
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt4}&image_size=landscape_4_3`,
    imageAlt: "Girls inter-house football match in progress on the SIS turf at golden hour with sideline student spectators.",
    classesInvolved: "Classes VI – X (U-14 Girls & U-16 Boys)",
    learningObjective:
      "To build consistent team practice habits, fair-play and umpire etiquette, and house-level community bonding through a month-long league structure rather than single-day knockouts.",
    highlights: [
      "Round-robin league format; every team plays every other team twice",
      "Opening match Shivaji vs Tagore (Girls U-14): Shivaji won 2-0, Meera Nair Player of the Match",
      "Boys U-16: Raman House leading the table after Round 1 with 3 points and +4 goal difference",
      "Finals scheduled for Friday, 09 October 2026 with parents invited for closing match ceremony",
    ],
    outcome:
      "Updated league standings are printed every Monday on the sports notice board outside the PE department and on the parent app. The winning house will be awarded 120 championship points towards the House Championship Trophy, and match MVPs will receive individual sports medals at the October assembly.",
  },
  {
    id: "news-005",
    date: "02 September 2026",
    dateISO: "2026-09-02",
    category: "Update",
    title: "Student Council 2026-27 Takes Oath at Investiture Ceremony",
    summary:
      "The newly elected SIS Student Council for the 2026-27 academic year took oath at the formal Investiture Ceremony held in the assembly hall on 29 August. Senior student leaders were pinned with badges by the Principal and administered the prefect pledge in front of the entire school, parent invitees, and house teachers.",
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt5}&image_size=landscape_4_3`,
    imageAlt: "The newly-elected SIS Student Council and prefects in blazers on the main campus steps after their Investiture.",
    classesInvolved: "Classes V – XII (elected council members)",
    learningObjective:
      "To model real-world parliamentary and electoral process for the student body, to formally delegate responsibility and authority to student leaders, and to visibly demonstrate that leadership means service rather than status.",
    highlights: [
      "Aryan Shetty (Class XII-Science) sworn in as Head Boy; Ananya Patil (Class XII-Commerce) as Head Girl",
      "4 House Captains + 4 Vice-Captains; 11 Club Secretaries, Sports & Cultural Secretaries",
      "Prefects' Pledge administered by Mrs. Sunita Mhatre, senior-most serving teacher of 23 years",
      "Parent invitees: parents of the Head Boy, Head Girl, and House Captains",
    ],
    outcome:
      "The Student Council will hold its first fortnightly briefing with the Principal on Monday 05 September and publish the first issue of the 2026-27 inter-house bulletin 'The House Call' on 19 September. Council term runs through to the end of the academic session March 2027.",
  },
  {
    id: "news-006",
    date: "27 August 2026",
    dateISO: "2026-08-27",
    category: "Circular",
    title: "EVS Workshop for Class IV — Kharghar Wetlands & Native Biodiversity",
    summary:
      "Class IV had a full-day Environmental Studies workshop on Saturday 22 August conducted by guest environmentalist Ms. Priya Deshpande from the Kharghar Wetlands Conservation Trust, covering native plant species, waterbirds of Sector 10, and how children can support the biodiversity in their own neighbourhood.",
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt6}&image_size=landscape_4_3`,
    imageAlt: "Class IV students planting saplings and making 'Save Wetlands' signage during their EVS biodiversity workshop.",
    classesInvolved: "Class IV — all sections",
    learningObjective:
      "To make EVS tangible by linking the textbook chapter on 'Our Environment' to the Kharghar wetlands located 1.2 km from the school campus, and to introduce students to citizen science — local birdwatching and tree mapping.",
    highlights: [
      "Slide show on flamingo migration, mangrove ecosystems, and Kharghar's native banyan, peepal, and karanj trees",
      "Hands-on: each student potted a native kadipatta sapling in a hand-painted terracotta pot to take home",
      "Class project: Class IV will adopt five trees on the SIS campus and monitor their growth monthly",
      "Handout given to every parent: '5 things your family can do for Kharghar Wetlands this year'",
    ],
    outcome:
      "The Class IV 'Adopt-a-Tree' campus project starts on 03 September, with each section responsible for five tagged trees. A joint field walk to the Kharghar Wetlands bird-watching platform is being planned for Class IV parents and students on Saturday, 24 October.",
  },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "ue-001",
    date: "Friday, 14 October 2026",
    dateISO: "2026-10-14",
    title: "Annual Sports Day 2026",
    time: "8:00 AM – 1:30 PM",
    venue: "SIS Main Campus Ground",
    targetClasses: "Nursery – XII · All Parents Invited",
    summary:
      "The SIS Annual Sports Day featuring march past, track and field finals, house points tally, and prize distribution. Parents welcome from 8:30 AM onwards; dedicated parent parking and food stalls on the west lawn.",
    registration: {
      required: false,
      note: "No pre-registration required for parents. Class III–V students march past; full dress rehearsal on 12 October.",
    },
  },
  {
    id: "ue-002",
    date: "Saturday, 22 October 2026",
    dateISO: "2026-10-22",
    title: "SIS Science & Robotics Exhibition 2026",
    time: "4:00 PM – 6:30 PM",
    venue: "Activity Hall & STEM Wing",
    targetClasses: "Classes IV – XII · Parents Invited",
    summary:
      "Working science models, robotics demonstrations, NCSC project displays, and primary level theme-based exhibits. Open to parents 4:00–6:30 PM; student judging runs 1:00–3:30 PM. Light refreshments for parents at the exit.",
    registration: {
      required: true,
      link: "/news-events/exhibition-2026/register",
      deadlineDateISO: "2026-10-19",
      note: "Exhibit registration for student teams closes 12 October; parent visit registration open until 19 October.",
    },
  },
  {
    id: "ue-003",
    date: "Wednesday, 26 October 2026",
    dateISO: "2026-10-26",
    title: "Pre-Primary Grandparents' Day — Bal Diwas Celebration",
    time: "9:30 AM – 11:30 AM",
    venue: "Pre-Primary Wing & Assembly Courtyard",
    targetClasses: "Nursery, Jr. KG, Sr. KG · Grandparents Invited",
    summary:
      "A special morning where our youngest learners host their grandparents. Children will sing, recite rhymes, give handmade gifts, and take grandparents on a tour of their classroom and activity centres. Traditional Maharashtrian snacks and chai will be served.",
    registration: {
      required: true,
      link: "/news-events/grandparents-day-2026",
      deadlineDateISO: "2026-10-21",
      note: "Each child may invite up to two grandparents. Please pre-register by 21 October for catering and seating.",
    },
  },
  {
    id: "ue-004",
    date: "Saturday, 12 November 2026",
    dateISO: "2026-11-12",
    title: "Term I Open House & PTA Meeting",
    time: "9:00 AM – 12:30 PM",
    venue: "All Classrooms",
    targetClasses: "All Parents · Nursery – XII",
    summary:
      "Term I Open House: parents collect written progress reports and meet each subject teacher individually. Class X and XII parents requested to attend the 11:00 AM – 12:30 PM slot to help distribute footfall.",
    registration: {
      required: false,
      note: "No registration. Parents may visit between 9 AM and 12:30 PM on a first-come basis; approximately 10 minutes per teacher.",
    },
  },
  {
    id: "ue-005",
    date: "Saturday, 19 November 2026",
    dateISO: "2026-11-19",
    title: "Class XI & XII Career Counselling Mela 2026",
    venue: "Assembly Hall & Senior Wing",
    time: "10:00 AM – 2:00 PM",
    targetClasses: "Classes IX – XII · Students & Parents",
    summary:
      "Career Counselling Mela in partnership with SIS alumni and visiting colleges. Breakout sessions on Engineering, Medicine, Pure Sciences, Commerce, Law, Design, Media, Defence, and Humanities streams; one-to-one 20-minute counselling slots available on booking.",
    registration: {
      required: true,
      link: "/admissions/career-mela-2026",
      deadlineDateISO: "2026-11-15",
      note: "One-to-one counselling slots bookable from 10 AM onwards on a first-come basis; general stalls open without booking.",
    },
  },
  {
    id: "ue-006",
    date: "Saturday, 12 December 2026",
    dateISO: "2026-12-12",
    title: "Annual Day & Prize Distribution 2026",
    time: "5:30 PM – 9:30 PM",
    venue: "Vishnudas Bhave Auditorium, Sector 10 Vashi",
    targetClasses: "Nursery – XII · Parents of participants by invitation",
    summary:
      "The SIS Annual Day cultural programme, prize distribution for academic, co-curricular and overall achievers, and house championship trophy presentation. Performed by students across all classes; parent seating by invitation card only.",
    registration: {
      required: true,
      link: "/news-events/annual-day-2026",
      deadlineDateISO: "2026-12-02",
      note: "Each participant family receives two invite cards. Extra seats available on limited lottery; apply before 02 December.",
    },
  },
];

const annualDayPrompt = encodeURIComponent(
  "editorial wide stage photograph of Indian school Annual Day function at Vishnudas Bhave Auditorium, students in traditional Bharatanatyam Lavani costume performing on lit stage, marigold garlands, audience silhouettes, forest green and terracotta stage lighting, students on stage in mid dance pose, documentary event photography, golden hour, no text overlay, high detail",
);
const sportsDayPrompt = encodeURIComponent(
  "editorial wide sports photograph of Indian school Annual Sports Day, morning golden light on ground, students in four house colours running relay race baton passing, grandstand with student parents crowd cheering, marigold torans on finish gate, prize ceremony on stage with medals, SIS Kharghar, no text overlay, high detail",
);
const scienceExhibitionPrompt = encodeURIComponent(
  "editorial documentary photograph of Indian school science exhibition in activity hall, Class VII student explaining working volcano model and robotics to parents, colourful charts, solar powered fan, beakers with liquids, child explaining confidently with hand gestures, other students at stalls, warm overhead light, no text overlay, high detail",
);
const grandparentsDayPrompt = encodeURIComponent(
  "emotional editorial documentary photograph of Indian school Pre-Primary Grandparents Day, Nursery child in uniform giving handmade paper card to smiling grandmother with teeka on forehead, Sr KG student singing on stage, grandfather holding granddaughter in lap during classroom tour, warm morning light in courtyard, traditional Maharashtrian snack thali, tears of joy, no text overlay, high detail",
);

export const eventStories: EventStory[] = [
  {
    id: "es-001",
    date: "10 December 2025",
    dateISO: "2025-12-10",
    title: "Annual Day & Prize Distribution 2025 — 'Shivneri te Shaniwarwada'",
    classesInvolved: "Nursery – XII · All Classes",
    description:
      "The 23rd SIS Annual Day was staged on 10 December 2025 at the Vishnudas Bhave Rangmandir, Vashi before a full audience of 900 parents, guests, and alumni. The cultural programme titled 'Shivneri te Shaniwarwada' narrated the life of Chhatrapati Shivaji Maharaj through music, dance, and drama across a two-hour show performed entirely by 320 SIS students from Nursery through Class XII. The evening concluded with the annual house championship trophy presentation and 214 individual subject and co-curricular prizes awarded by the chief guest, Retired Principal of Ruia College, Dr. Mrs. Mangala Joshi.",
    learningObjective:
      "To use a large-scale public stage production to build speaking, movement, team coordination, and performance confidence in every class, while introducing students to a locally rooted cultural narrative through research, script reading, and character work.",
    highlights: [
      "Opening procession — Class IV students as the famous Mawala cavalry with wooden toy swords and shields",
      "Bharatanatyam segment on Jijabai and young Shivaji — performed by the SIS Classical Dance Troupe (Classes VII–X)",
      "Lavani finale 'Shivrayanchi Shaan' — 34 girls from Classes V–VIII choreographed by Mrs. Ashwini Koli",
      "Raman House won the Overall House Championship Trophy 2024-25 with 1,824 points, beating runners-up Shivaji by 46 points",
    ],
    outcome:
      "A full edited highlights video of the Annual Day was shared with parents via the school YouTube channel and private parent drive. All participants received a certificate of participation and a group photo print. The script, research materials, and rehearsal timeline have been archived for reuse in future cultural programmes.",
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${annualDayPrompt}&image_size=landscape_4_3`,
    imageAlt: "SIS students in traditional costume performing the Lavani finale on the brightly lit Annual Day stage at Vashi.",
    gallery: [
      {
        prompt: encodeURIComponent(
          "editorial backstage candid photograph Indian school Annual Day, girls in Bharatanatyam costume adjusting jewellery and makeup before going on, teacher helping with hairpins, excited nervous smiling faces, documentary backstage photography, warm makeup room lighting, no text overlay",
        ),
        alt: "SIS students backstage adjusting Bharatanatyam jewellery moments before their Annual Day performance.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school Annual Day prize distribution, chief guest handing gold medal and certificate to Class X topper student on stage, parents standing ovation in audience background, wooden stage, warm spotlights, documentary ceremony photography, no text overlay",
        ),
        alt: "Chief guest presenting the gold medal to the Class X topper during the SIS Annual Day prize ceremony.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school Pre-Primary Annual Day segment, tiny Nursery students in yellow and red costume performing stick dance on large stage, teacher crouched at side of stage giving hand signals, warm stage lighting, audience out of focus in background, no text overlay",
        ),
        alt: "Nursery children performing the opening stick dance at SIS Annual Day 2025.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school Annual Day Raman House students lifting Overall Championship Trophy, house captains cheering, teachers smiling in background, confetti falling on stage, golden celebration moment, documentary candid, no text overlay",
        ),
        alt: "Raman House captains lifting the Overall House Championship Trophy on the Annual Day 2025 stage.",
        image: "",
      },
    ].map((g) => ({ ...g, image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${g.prompt}&image_size=landscape_4_3` })),
  },
  {
    id: "es-002",
    date: "13 October 2025",
    dateISO: "2025-10-13",
    title: "Annual Sports Day 2025 — a Marathon, a March Past, and a Mother's Race",
    classesInvolved: "Nursery – XII · All Classes",
    description:
      "The SIS Annual Sports Day 2025 began at 7:45 AM with the lighting of the ceremonial torch by the retiring sports captains, followed by a march past of all four houses and the entire Primary wing. Over the course of the morning, 38 track and field events were completed, including a nursery spoon-and-race, a parent-child sack race, a mother's 100-metre event, the 4 x 100 open relay, and a new exhibition match of para-athletics led by special guest athletes from the Navi Mumbai Paralympics Association.",
    learningObjective:
      "To make Sports Day genuinely inclusive rather than focused only on the fastest students — by including every child in at least one event, adding parent and staff races, and demonstrating parasports so that all students understand that sports belong to everyone.",
    highlights: [
      "New event: Pre-Primary 50-metre friendly race — every Nursery and KG child ran and received a finisher's medal, no ranking",
      "Boys Open 100m: Yash Koli (Class XI, Raman House) broke the 6-year school record with a time of 11.8 seconds",
      "Parents' events: Mothers 100m won by Mrs. Manasi Naik (parent of Saanvi, Class III) and Fathers 4x100 relay won by the Tagore House parent team",
      "Chief guest District-level athlete Ms. Rutuja Bhosale felicitated and ran an exhibition 100 metres with the girls relay team",
    ],
    outcome:
      "A photo album of over 600 images from Sports Day was shared with the parent body via a secure photo gallery. The spoon-and-race format from this year will be retained as a permanent event, and Sports Day 2026 will add an additional senior citizens' race for grandparents following repeated parent requests.",
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${sportsDayPrompt}&image_size=landscape_4_3`,
    imageAlt: "Students in house-coloured uniforms crossing the finish line during the relay at the SIS Annual Sports Day 2025.",
    gallery: [
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school Pre-Primary spoon and potato race, tiny Nursery children in house t-shirts running slowly, teacher clapping in background, focused faces, some dropping potato and laughing, warm morning golden light on ground, no text overlay",
        ),
        alt: "Nursery children competing in the friendly spoon-and-potato race during the Sports Day 2025 opening events.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school mothers 100 metre race during Sports Day, Indian mothers in track pants running on cinder track, children in uniform cheering from sidelines, one mother running while adjusting her saree, joyful expressions, documentary candid, no text overlay",
        ),
        alt: "SIS parents competing in the Mothers' 100-metre race with children cheering from the boundary.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school four houses marching past during opening ceremony Sports Day, students in house uniforms (terracotta, sage, forest green, ivory) marching with flags, band playing, principal saluting from dais, long shadows morning golden hour, no text overlay",
        ),
        alt: "The four SIS houses marching past the dais at the opening of the Annual Sports Day 2025.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school Annual Sports Day prize ceremony, young Class V girl on podium receiving bronze medal and garland, mother in audience taking phone photograph wiping happy tear, documentary emotional candid, warm golden light, no text overlay",
        ),
        alt: "A Class V student receiving her bronze medal with her mother watching proudly from the Sports Day stands.",
        image: "",
      },
    ].map((g) => ({ ...g, image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${g.prompt}&image_size=landscape_4_3` })),
  },
  {
    id: "es-003",
    date: "29 September 2025",
    dateISO: "2025-09-29",
    title: "Science & Robotics Exhibition 2025 — 112 Working Models on Display",
    classesInvolved: "Classes IV – XII",
    description:
      "The 2025 SIS Science & Robotics Exhibition ran from 2:00 PM to 6:30 PM on Monday, 29 September, featuring 112 working and still models developed by students across every class from IV to XII. Judging was completed between 2:00 and 3:30 PM by a panel of three external judges: a former IIT Bombay professor, a practising paediatrician, and a software engineer from TCS Navi Mumbai. Parents and community members visited in the evening and student exhibitors were required to explain their model in English, Hindi or Marathi to at least five visiting adults.",
    learningObjective:
      "To teach students the complete cycle of research, planning, prototyping, and public explanation — not just assembling a model — and to expose them to questioning and feedback from working science and technology professionals outside the school.",
    highlights: [
      "Best Overall Model (Classes IX–XII): Solar-powered automatic drip irrigation system with soil-moisture sensor, Class X team of 4 students",
      "Best Primary Model: Class IV working model of the Kharghar wetland food-web, using hand-sculpted clay flamingos, fish and crabs",
      "Robotics wing: 18 students from the SIS Coding & Robotics Club demonstrated a line-following warehouse robot and an Arduino-based automatic classroom attendance system",
      "Judge's Special Mention: Class VIII team, 'Water ATM using laterite neem filtration' — low-cost community drinking water filter using only local materials",
    ],
    outcome:
      "The three top-prize winners from Classes VIII–X were selected by the judges to represent SIS at the NCSC (National Children's Science Congress) Raigad district level event. The Class VIII water filter prototype is currently being tested for real-world use at the Kharghar Municipal garden chai stall, sponsored by the Eco Club.",
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${scienceExhibitionPrompt}&image_size=landscape_4_3`,
    imageAlt: "A Class VII student explaining a working volcano and robotics model to visiting parents at the SIS Science Exhibition 2025.",
    gallery: [
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school science exhibition, Class XII student demonstrating Arduino robotics arm that picks up blocks, two external judges with clipboards taking notes and nodding, warm activity hall lighting, no text overlay",
        ),
        alt: "Class XII student demonstrating his Arduino robotic arm to external judges at the SIS Science Exhibition.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school science exhibition, Class IV student and teacher near clay model of wetland food web with hand painted flamingos crabs fish, proud child pointing, parent listening, colourful posters around, no text overlay",
        ),
        alt: "A Class IV student explaining her clay wetland food-web model to a parent visitor at the exhibition.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school science exhibition Chemistry stall, colourful beakers with red blue yellow liquids, student mixing chemicals for volcano demonstration, crowd watching, fumes gently rising, girl with safety goggles smiling, no text overlay",
        ),
        alt: "A Class VI student demonstrating the classic baking-soda volcano reaction at the Chemistry exhibition stall.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school science exhibition closing prize ceremony, winning team of 4 students holding trophy at stage, judges and teachers shaking hands, parents clapping in background, warm celebration moment, no text overlay",
        ),
        alt: "The Best Overall Model team from Class X receiving their trophy at the 2025 Science Exhibition closing ceremony.",
        image: "",
      },
    ].map((g) => ({ ...g, image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${g.prompt}&image_size=landscape_4_3` })),
  },
  {
    id: "es-004",
    date: "27 October 2025",
    dateISO: "2025-10-27",
    title: "Pre-Primary Grandparents' Day — Tea, Songs, and 'Dadu-Mee Kasa Hota'",
    classesInvolved: "Nursery, Jr. KG, Sr. KG",
    description:
      "The SIS Pre-Primary Grandparents' Day 2025 was held on 27 October from 9:30 AM to 11:30 AM in the Pre-Primary wing assembly courtyard. 284 grandparents attended across the three classes. The programme opened with a short assembly in which each class performed a rhyme or a song — Sr. KG sang the Marathi abhang 'Dadu-Mee Kasa Hota' (Grandpa, What Was I Like?) — followed by classroom tours, a 'Tea with Grandparent' snack break, an inter-grandparent lemon-and-spoon race, and the presentation of a handmade paper card and potted marigold from each child to their grandparents.",
    learningObjective:
      "To help our youngest learners begin to articulate relationships across generations, to include grandparents in a school day that usually happens only between parent and child, and to give grandparents a small, tangible memory of their grandchild's earliest school years.",
    highlights: [
      "Sr. KG sang Marathi abhang with actions — many grandparents were visibly emotional and joined in the singing",
      "Each child personally escorted their grandparent(s) on a 10-minute tour of their classroom, showing their desk, their notebook, and the class pet rabbit, 'Moti'",
      "Grandparents Lemon & Spoon Race won by Mr. Shankar Deshpande (grandfather of Aarya Deshpande, Jr. KG B); he ran despite a visibly stiff leg and received a standing ovation",
      "Handmade keepsake: each child made a 'Reasons I Love My Ajji/Ajoba' card with drawings, a pressed flower, and the child's coloured handprint",
    ],
    outcome:
      "Grandparents were given a printed group photograph of their grandchild's class as they left, and the school received 137 handwritten 'Thank You' notes from grandparents in the following week. Ajji-Ajoba Diwas is now permanently scheduled for the last Monday of October every academic year.",
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${grandparentsDayPrompt}&image_size=landscape_4_3`,
    imageAlt: "A Nursery student giving her handmade teeka and card to her smiling grandmother during the SIS Grandparents' Day courtyard tea.",
    gallery: [
      {
        prompt: encodeURIComponent(
          "editorial emotional candid photograph of Indian school Grandparents Day, Sr KG girl on classroom lap of grandmother wearing saree with bindi, grandmother wiping tear from cheek while granddaughter hugs her, teacher in background smiling, warm classroom morning light, no text overlay",
        ),
        alt: "A Sr. KG student hugging her tearful grandmother during the classroom visit segment of Grandparents' Day.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school Grandparents Day assembly stage, Nursery students singing rhyme together, Ajji Ajoba sitting in audience folding hands, smiling, taking photos with mobile phones, courtyard under tent, warm daylight, no text overlay",
        ),
        alt: "Grandparents watching proudly as the Nursery class performs a rhyme on stage during Grandparents' Day 2025.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial documentary photograph of Indian school Grandparents Day snack break, grandfather and Nursery child eating vada pav together from small paper plate at courtyard table, chai in steel cup, grandson giving grandpa a bite, happy expressions, courtyard setting, no text overlay",
        ),
        alt: "A grandfather sharing a vada pav snack with his Nursery grandson at the courtyard tea break.",
        image: "",
      },
      {
        prompt: encodeURIComponent(
          "editorial photograph of Indian school Grandparents Day lemon and spoon race, elderly saree-clad grandmother balancing lemon on spoon walking slowly, other grandparents cheering from sidelines, little KG grandchild clapping and running alongside at a distance, warm golden hour, no text overlay",
        ),
        alt: "A grandmother balancing lemon-and-spoon during the fun race as her little KG grandchild cheers her on beside the track.",
        image: "",
      },
    ].map((g) => ({ ...g, image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${g.prompt}&image_size=landscape_4_3` })),
  },
];
