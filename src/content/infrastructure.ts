export type CampusFacility = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  href: string;
};

export const campusIntro = {
  eyebrow: "Campus & Infrastructure",
  headline: "Twelve acres built around how children actually learn, move, and grow.",
  summary:
    "Sanjivani International School sits on a planned, green, purpose-built campus in central Kharghar. Every facility — from the youngest child's activity room to the senior science laboratories — has been designed for safety, comfort, daylight, and ease of movement. The campus is fully fenced and CCTV-covered with controlled entry and exit gates, but it still feels open, green, and welcoming because children should never feel like they are spending their days inside a secured box.",
} as const;

const classroomsPrompt = encodeURIComponent(
  "editorial architectural photograph of modern Indian school smart classroom interior at Kharghar Navi Mumbai, morning golden hour daylight, students seated in groups at wooden desks, interactive smart board on wall, potted areca palm plants, sage green accent wall, terracotta fabric notice boards, classroom library shelf with Marathi and English children's books, children in uniform smiling at teacher, ivory walls, wooden floor, editorial warm tones, no text overlay, high detail",
);
const computerLabPrompt = encodeURIComponent(
  "editorial photograph of Indian school computer lab interior, afternoon warm light through large windows, modern desktop PCs on light wooden desks, cable management clean, sage green ergonomic chairs, students in navy blue uniform learning coding with female teacher, projector screen, motivational quotes on ivory walls, terracotta colour table mats, Kharghar school campus, documentary editorial photography, no text overlay, high detail",
);
const scienceLabPrompt = encodeURIComponent(
  "editorial photograph of Indian school chemistry and biology science laboratory, warm golden side light, wooden lab benches with sinks and gas taps, beakers with colourful liquids, microscope station, Indian teacher in lab coat helping student, safety goggles hanging, fire extinguisher visible, chart of periodic table and botanical diagrams on sage green walls, lab coats on hooks, no text overlay, documentary photography, high detail",
);
const libraryPrompt = encodeURIComponent(
  "warm quiet editorial photograph of Indian school library interior at morning golden hour, natural daylight from large arched windows overlooking green campus, floor to ceiling wooden bookshelves, sage green reading sofa, round wooden tables, one Indian girl student reading alone, cosy reading nook with cushion, section for Marathi literature, soft warm ivory walls, wooden flooring, documentary architecture photography, no text overlay, high detail",
);
const sportsPrompt = encodeURIComponent(
  "wide editorial photograph of Indian school sports facilities at golden hour sunset, Kharghar campus, full-size cricket pitch with net practice area, green artificial turf football field, terracotta running track surrounding ground, basketball and volleyball courts, students in uniform playing football and doing warm ups, mango tree shade on boundary, warm long shadows, documentary sports campus photography, no text overlay, high detail",
);
const artMusicPrompt = encodeURIComponent(
  "editorial warm photograph of Indian school art and music wing interior, late afternoon light, two connected rooms — one art room with students painting Warli art at easels with watercolour palettes, next room students practicing tabla and harmonium, sage green walls, terracotta display shelves with completed sculptures, musical instruments on stands, Indian art teacher walking between students, documentary humanist photography, no text overlay, high detail",
);
const activityPrompt = encodeURIComponent(
  "editorial photograph of Indian school early years activity room interior at morning light, Pre-Primary children playing with wooden blocks, puppets, and building sets, soft sage foam flooring, terracotta and ivory plastic free toys, climbing frame, reading corner with canopy, Marathi alphabet wall frieze, teacher sitting on floor with children, plants by window, Kharghar school, documentary kindergarten photography, no text overlay, high detail",
);
const safetyPrompt = encodeURIComponent(
  "editorial photograph of Indian school safety and security infrastructure, main entrance gate with female security guard in uniform checking parent visitor book, CCTV monitors in school office screen wall, fire extinguisher and first aid station in corridor, female school nurse in medical room with height weight and bed, visitor desk, ID card scanners, warm reception area, sage and ivory interiors, documentary institutional photography, no text overlay, high detail",
);
const transportPrompt = encodeURIComponent(
  "editorial photograph of Indian school transport facilities, golden hour morning, yellow and navy school buses parked in line at SIS campus Kharghar, female bus attendant helping Pre-Primary girl student with bag step off bus, bus driver standing beside vehicle, CCTV camera visible inside bus window, transport coordinator with walkie talkie, attendance register at bus bay, bougainvillea hedge around parking, documentary campus photography, no text overlay, high detail",
);

export const campusFacilities: CampusFacility[] = [
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    eyebrow: "Teaching Spaces",
    summary:
      "52 technology-enabled classrooms across all four wings, designed with child-sized furniture, acoustic treatment, and plenty of natural daylight.",
    description:
      "Every standard classroom at SIS is equipped with an interactive smart board, high-lumen projector, and in-ceiling speaker system, synced to a central content server loaded with CBSE-aligned digital lesson modules from Class I onwards. But the technology never overwhelms the room: each classroom has an average depth of 32 feet, windows on two sides for cross-ventilation and daylight, matte-finish wooden desks, potted plants, and a soft-classroom library corner with 40-80 age-appropriate books. Maximum section size is capped at 32 students in the primary wing and 36 in the senior wing. Teachers rotate their seating arrangements so no child spends an entire term at the back or the front.",
    highlights: [
      "52 ICT-enabled smart classrooms across four academic wings",
      "Daylight from a minimum of two sides in every standard room",
      "Cap of 32 students per section (primary) & 36 (senior)",
      "In-class library corner, plants & soft notice-board in every room",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${classroomsPrompt}&image_size=landscape_4_3`,
    imageAlt: "A sunlit SIS smart classroom with students collaborating at desks and a teacher at the interactive board.",
    href: "/infrastructure/smart-classrooms",
  },
  {
    id: "computer-labs",
    title: "Computer Labs & STEM Wing",
    eyebrow: "Digital Learning",
    summary:
      "Three fully networked computer labs and a dedicated STEM robotics wing serving Class II onwards, with licensed software, coding platforms, and a 1:2 student-to-machine ratio.",
    description:
      "Sanjivani's digital learning infrastructure consists of two senior computer labs (for Classes VI–XII), one junior lab (Classes II–V), and a separate STEM & Robotics Wing added in 2024. All machines run on licensed Windows and Linux operating systems with MS Office, Adobe Creative Suite, Scratch, Python, Tinkercad, Arduino IDE, and additional CBSE-recommended software pre-installed. The STEM Wing houses an electronics workstation, 3D printer, VEX IQ robotics kit, and a small drone-building station used exclusively by the Coding & Robotics Club after school hours. Internet access is routed through a firewall and content filter with category-based whitelisting, and no student lab has unrestricted unmonitored web access.",
    highlights: [
      "130+ networked workstations across 3 labs and STEM wing",
      "STEM Wing with 3D printer, Arduino, robotics & drone stations",
      "Filtered internet with content whitelists & no unrestricted browsing",
      "Classes II & III — keyboard & Scratch; IV–V — Python basics; VI–XII — full CBSE CS/IP",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${computerLabPrompt}&image_size=landscape_4_3`,
    imageAlt: "Students working at the SIS senior computer lab with their ICT teacher during a coding class.",
    href: "/infrastructure/computer-labs",
  },
  {
    id: "science-labs",
    title: "Science Laboratories",
    eyebrow: "Practical Learning",
    summary:
      "Four separate labs — Physics, Chemistry, Biology, and a Composite Junior Science lab — with trained lab assistants, full safety compliance, and enough working stations for every child to participate.",
    description:
      "Sanitised, well-ventilated, and stocked for every prescribed CBSE practical from Class VI onwards, the four science laboratories at SIS are designed with working capacity for a full section of 36 students conducting experiments simultaneously without pairing up. The Chemistry lab features fume hoods, an acid-wash sink, and a fire-suppression system; the Physics lab houses optics, mechanics, and electrical experiment kits with calibrated instruments; and the Biology lab maintains compound microscopes, dissection facilities, permanent slides, and a small live-plant greenhouse for botany practicals. A qualified laboratory assistant is present during every practical session, and all Class X and XII practical records are verified and signed by external examiners as per CBSE norms.",
    highlights: [
      "Physics, Chemistry, Biology & Composite Junior Lab (4 labs)",
      "Full-section capacity (36 stations) — no experiment sharing",
      "Fume hoods, safety showers, eye-wash & fire-suppression systems",
      "CBSE practical-ready for all Classes VI–X & XI–XII streams",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${scienceLabPrompt}&image_size=landscape_4_3`,
    imageAlt: "Students and teacher working with beakers and microscopes in the SIS Chemistry and Biology laboratory.",
    href: "/infrastructure/science-labs",
  },
  {
    id: "library",
    title: "Library & Reading Programme",
    eyebrow: "Reading & Research",
    summary:
      "A 6,200-volume library, a dedicated reading garden, and a structured borrowing programme — with one mandatory library period per class per week.",
    description:
      "The SIS Library occupies a double-height air-conditioned space in the central academic block, with a separate Junior Library (Pre-Primary to Class II) and an adjoining Senior Reference & Reading area (Classes III–XII) on a mezzanine level. The collection includes around 6,200 physical volumes in English, Hindi, and Marathi — children's fiction, illustrated classics, Indian mythology, reference books, competitive exam materials, teaching resources, and approximately 28 periodical and newspaper subscriptions. Every class has one scheduled library period per week, during which students may borrow books, take Accelerated Reader quizzes, or simply read for pleasure. The open-air Reading Garden, just outside the library doors, is available for independent reading during lunch break and after-school hours.",
    highlights: [
      "6,200+ physical volumes in English, Hindi & Marathi",
      "Separate Junior Library, Senior Reference Mezzanine & open-air Reading Garden",
      "28 periodicals & newspapers plus competitive exam reference section",
      "1 mandatory library period per class per week with checked-out borrowing",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${libraryPrompt}&image_size=landscape_4_3`,
    imageAlt: "Warm sunlit interior of the SIS library with bookshelves, reading nooks and a student reading quietly.",
    href: "/infrastructure/library",
  },
  {
    id: "sports-facilities",
    title: "Sports Facilities",
    eyebrow: "Play & Fitness",
    summary:
      "A full-size multipurpose ground, indoor sports hall, three dedicated courts, athletic track zones, and two shaded practice nets — usable before, during, and after the school day.",
    description:
      "The SIS sports zone occupies the western third of the campus. At its centre is a full-size grass multipurpose ground laid out for football, cricket, hockey, and athletics, with a 200-metre six-lane cinder running track on its perimeter. Separate fenced courts exist for basketball, volleyball, and badminton. Cricket practice takes place on two dedicated shaded turf nets (open from 6:30 AM onwards for serious players) and on the main ground during games periods. A covered indoor sports hall houses table tennis tables, carrom, chess, and floor badminton, and is used for PE on rainy days and after-school indoor practice. Equipment is issued free of charge to all students during PE periods and after-school coaching sessions, and students are not required to bring their own kit apart from sports shoes and an optional personal racquet.",
    highlights: [
      "Full-size grass multipurpose ground with 200m cinder athletic track",
      "Basketball, volleyball, badminton courts & 2 shaded cricket nets",
      "Covered indoor sports hall with TT, carrom, chess & floor badminton",
      "Open before-school (6:30 AM) and after-school (till 5:30 PM) every working day",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${sportsPrompt}&image_size=landscape_4_3`,
    imageAlt: "Overview of the SIS campus sports facilities with ground, courts, running track and students practising at golden hour.",
    href: "/infrastructure/sports-facilities",
  },
  {
    id: "art-music",
    title: "Art, Music & Dance Spaces",
    eyebrow: "Creative Arts Wing",
    summary:
      "A dedicated two-room art studio, a sound-treated music room with instruments, and a full-length dance hall with mirrors and sprung flooring — all used during timetabled classes and after-school.",
    description:
      "The Creative Arts Wing at SIS houses three connected spaces. The Art Studio is a double-ventilated, natural-light room with standing easels for Classes III–XII, separate wash-up areas, drying racks, a pottery and clay-work station, and a wall of display shelves for completed student work. The Music Room is sound-treated and holds a permanent stock of instruments including two harmoniums, two sets of tabla, sitar, flute, dholak, tasha, three keyboards, an acoustic guitar, and a violin — plus a junior section of percussive instruments for Pre-Primary and Primary use. The Bharatanatyam and Folk Dance Hall has a full wall of floor-to-ceiling mirrors, a wooden sprung dance floor, barres, and a sound system. All three spaces are used for timetable classes five days a week and are open for after-school club practice until 5:15 PM.",
    highlights: [
      "Natural-light Art Studio with pottery/clay station and display shelves",
      "Sound-treated Music Room with 20+ Indian & Western instruments",
      "Sprung-floor mirror-wall Dance Hall for Bharatanatyam, Kathak & folk",
      "All spaces open after school for club & exam practice until 5:15 PM",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${artMusicPrompt}&image_size=landscape_4_3`,
    imageAlt: "Connected SIS art and music rooms with students painting Warli artwork and practicing tabla and harmonium.",
    href: "/infrastructure/art-music",
  },
  {
    id: "activity-rooms",
    title: "Early Years & Activity Rooms",
    eyebrow: "Foundational Spaces",
    summary:
      "Four dedicated Pre-Primary activity rooms, a junior assembly area, a multipurpose senior activity hall, and a medical first-aid room — designed for the children who need the most space to move.",
    description:
      "The Early Years Wing (Nursery, Jr. KG, Sr. KG) occupies the ground-floor east block of the campus and is separated from the senior wings with a gated entry and its own play area. It features four homerooms, a dedicated story-and-rhyme room, a building-blocks station, a soft-floor activity room, and a medical first-aid room with a nursing station and bed for the youngest learners. The furniture is rounded-corner and child-sized, and all flooring below knee level is padded. For the senior school, a 3,200-square-foot multipurpose Activity Hall serves as rehearsal space for the annual play, venue for indoor exhibitions, exam seating for Class X and XII boards, and as a lunch hall for students who bring home-cooked meals. The Activity Hall is fitted with a sound system, three-phase power for exhibition displays, and modular seating that can be rearranged depending on the event.",
    highlights: [
      "4 Early Years homerooms + soft-floor activity room + story room",
      "First-aid medical room within the Pre-Primary wing itself",
      "Rounded-corner child-sized furniture & floor padding in all EY areas",
      "3,200 sq ft multipurpose Activity Hall for rehearsals, exams & exhibitions",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${activityPrompt}&image_size=landscape_4_3`,
    imageAlt: "Pre-Primary children playing with wooden toys and blocks in the softly furnished SIS Early Years activity room.",
    href: "/infrastructure/activity-rooms",
  },
  {
    id: "safety-security",
    title: "Safety, Security & Medical Care",
    eyebrow: "Pastoral Care",
    summary:
      "CCTv-covered perimeter and corridors, two registered female security personnel at the main gate, a full-time school nurse, a 4-bed sick room, and a counsellor on campus five days a week.",
    description:
      "Safety at SIS is multi-layered. The campus perimeter is a seven-foot compound wall topped with concertina wire and continuously monitored by 64+ IR CCTV cameras covering gates, corridors, staircases, parking, sports areas, and the bus bay. Entry is through one controlled main gate staffed by two registered female security personnel, with a sign-in register, visitor badges, and a video intercom to the academic office. No child is released from the gate to anyone who is not listed on the parent-authorised pickup list and carrying a valid SIS parent ID card. The school runs a sick room with a 4-bed capacity, staffed by a full-time registered nurse and with a signed protocol agreement with Apollo Hospitals, Navi Mumbai within 12 minutes driving distance. A trained school counsellor is available on campus five days a week for one-on-one sessions, group circle time, and parent consultations, with referrals to outside specialists made with written parental consent.",
    highlights: [
      "64+ IR CCTV cameras with 30-day footage backup covering all public areas",
      "Gate security with sign-in, parent ID card checks & authorised-pickup list",
      "4-bed sick room + full-time registered nurse + Apollo tie-up",
      "Full-time school counsellor on campus 5 days; crisis & bullying protocols in place",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${safetyPrompt}&image_size=landscape_4_3`,
    imageAlt: "SIS main entrance security, CCTV monitoring station and the campus sick room with nurse and student bed.",
    href: "/infrastructure/safety-security",
  },
  {
    id: "transport",
    title: "Transport Facilities",
    eyebrow: "Bus & Commute",
    summary:
      "An 18-route school bus network covering Kharghar, Panvel, Nerul, Belapur, and CBD Belapur, with female attendants on every bus, GPS tracking, and parent SMS alerts at pickup and drop.",
    description:
      "The SIS transport fleet consists of 18 school-owned buses contracted to a registered transport vendor, all fitted with speed governors (60 km/h cap), first-aid kits, fire extinguishers, onboard CCTV, and GPS trackers linked to the parent SIS Live mobile app. Each bus has a dedicated female bus attendant in addition to the driver, and no child under Class V travels without at least one attendant per 15 children. Routes are designed so that the maximum one-way travel time for any student is 65 minutes. Bus fees are charged termly and billed separately from tuition; transport seats are allotted on a first-come first-served basis at the start of the academic year, and mid-year route or stop change requests are processed through the transport coordinator with at least five working days' notice. The school also operates a separate van fleet for small residential pockets within Kharghar where full-size buses cannot access.",
    highlights: [
      "18 school-owned buses + 6 vans covering 24 routes across Kharghar & Navi Mumbai",
      "GPS tracked + speed governors; parent app alerts at every child pickup/drop",
      "Female bus attendant on every bus; no Pre-Primer ever first or last stop",
      "Max 65-minute one-way travel time; termly separate billing with no refunds on usage",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${transportPrompt}&image_size=landscape_4_3`,
    imageAlt: "Morning golden hour at the SIS bus bay with school buses, bus attendant helping a young student alight.",
    href: "/infrastructure/transport",
  },
] as const;
