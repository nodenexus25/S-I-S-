export type LifeArea = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  detailed: string;
  keyPrograms: string[];
  image: string;
  imageAlt: string;
  href: string;
};

export const lifeAtSISIntro = {
  eyebrow: "Life @ SIS",
  headline: "A full, breathing school day — not just lessons on a timetable.",
  summary:
    "At Sanjivani International School, the hours between the first bell and the last are filled with more than syllabi. Children run, paint, sing, debate, volunteer, lead, lose, win, and grow up together. Every student is encouraged to try something unfamiliar, to find a corner of the campus where they feel at home, and to contribute to life around them — whether that means captaining a house, organising a food drive, or simply making a younger classmate feel welcome.",
} as const;

const sportsPrompt = encodeURIComponent(
  "editorial action photograph of Indian school students playing kabaddi and football on green turf field at golden hour sunset, Kharghar Navi Mumbai campus, students in navy blue and terracotta sports uniform, motion blur on athletes, joyful shouting, boundary wall with bougainvillea, warm evening light long shadows, documentary sports photography style, sage green outfield, no text overlay, high detail",
);
const artsPrompt = encodeURIComponent(
  "warm editorial photograph of Indian school children in art studio at golden hour, making Warli painting and paper mache Ganesh idols for Ganesh Chaturthi, sunlight streaming through large windows onto wooden tables, paintbrushes, terracotta earthen colours, sage green accent walls, students smiling candid, art display on wall, documentary humanist photography, no text overlay, high detail",
);
const musicDancePrompt = encodeURIComponent(
  "editorial photograph of Indian school music and dance room at late afternoon golden light, students in salwar kameez and school uniform practicing Bharatanatyam mudras with teacher, tabla and harmonium instruments on wooden stand, another group singing Marathi abhang chorus, large mirrors, warm ivory walls, sage green curtains, candid concentration expressions, documentary performance photography style, no text overlay, high detail",
);
const clubsPrompt = encodeURIComponent(
  "editorial photograph of Indian school student club meeting on campus lawn at golden hour, mixed group of teenagers and younger students in school uniform, Eco Club planting saplings in terracotta pots, Debate Club students huddled discussing notes, Quiz Club flashcards spread on blanket, mango tree canopy overhead, Kharghar residential skyline distance, warm documentary lifestyle photography, no text overlay, high detail",
);
const competitionsPrompt = encodeURIComponent(
  "editorial action photograph of Indian school inter-house competition assembly hall at golden hour, students standing at desks hands raised for quiz buzzer round, house banners in terracotta and forest green draped on walls, teachers judging, audience in uniform cheering, chandeliers warm light, wooden stage with marigold garlands for decoration, Kharghar school interior, documentary event photography style, no text overlay, high detail",
);
const fieldTripsPrompt = encodeURIComponent(
  "editorial travel photograph of Indian school students on educational field trip to Elephanta Caves near Navi Mumbai at morning golden hour, children in uniform with backpacks climbing stone steps, teacher explaining cave carvings, guide with flag, group of students sketching on notepads, warm sunlight through rock pillars, Maharashtra landscape, documentary expedition photography, no text overlay, high detail",
);
const celebrationsPrompt = encodeURIComponent(
  "editorial festive photograph of Indian school celebration assembly at golden hour afternoon light, students in traditional Maharashtrian and Indian attire celebrating Ganesh Utsav with modak distribution, girls in lehengas doing Garba for Navratri, rangoli in terracotta and sage green colours on floor, marigold torans on doorways, teachers distributing tilak, children smiling authentically, documentary cultural photography, no text overlay, high detail",
);
const leadershipPrompt = encodeURIComponent(
  "editorial portrait photograph of Indian school student council and prefect body on campus steps at golden hour, Head Boy and Head Girl standing with house captains wearing blazers and sashes in terracotta and forest green, holding school flag, mixed group from Class V to XII, serious confident expressions, teachers standing behind with pride, SIS school building facade, documentary editorial portrait, no text overlay, high detail",
);
const communityPrompt = encodeURIComponent(
  "editorial documentary photograph of Indian school students doing community service at nearby Kharghar municipal garden on weekend golden hour morning, students in uniform planting saplings, teaching underprivileged neighbourhood children under a banyan tree, distributing notebooks and biscuits, elderly community women from Maharashtra village watching smiling, warm terracotta path, green foliage, compassionate humanistic photography style, no text overlay, high detail",
);

export const studentLifeContent: LifeArea[] = [
  {
    id: "sports",
    title: "Sports & Athletics",
    eyebrow: "Physical Education",
    summary:
      "A structured PE programme and competitive sports calendar designed for every age group — from foundational movement in Nursery to inter-zonal tournaments in the senior wing.",
    detailed:
      "At SIS, sports are not reserved for naturally gifted athletes. Every child has a 45-minute dedicated games period, and every student from Class III onwards represents their house in at least one team sport each academic year. The campus ground hosts morning athletics practice before school, after-school coaching in football, basketball, cricket, kabaddi, and badminton, and an annual Sports Day that brings the entire parent community to the stands. Coaching staff include former district-level players and certified physical education teachers with training in adaptive PE for students with special needs.",
    keyPrograms: [
      "Daily PE period for all classes Pre-Primary to XII",
      "Inter-House tournaments in Football, Basketball, Cricket, Volleyball & Kabaddi",
      "Athletics training — sprint, long jump, discus, relay & shot-put",
      "After-school professional coaching (Football, Badminton, Table Tennis, Chess)",
      "Annual Sports Day with track finals, march past & parent-child events",
      "Zonal & Sahodaya inter-school teams with outstation fixture support",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${sportsPrompt}&image_size=landscape_4_3`,
    imageAlt: "Sanjivani students playing a competitive kabaddi match on the campus turf field at golden hour.",
    href: "/student-life#sports",
  },
  {
    id: "arts-culture",
    title: "Arts & Culture",
    eyebrow: "Visual Arts & Crafts",
    summary:
      "Drawing, painting, sculpture, and traditional Indian craft forms taught as a core subject — with student exhibitions, rangoli contests, and an annual arts week each January.",
    detailed:
      "The visual arts programme at SIS builds technical skill alongside creative confidence. Younger learners work with crayons, clay, and collage; middle school students are introduced to perspective drawing, watercolour, acrylics, Warli and Madhubani folk forms; and senior students may opt for Fine Arts as a Class XI–XII elective. Every child's artwork is displayed at least once per term on corridor bulletin boards and the annual Art Walk evening, which invites parents to view the full year's portfolio. The school also hosts inter-school rangoli, poster-design, and clay-modelling competitions as part of the Kharghar Sahodaya circuit.",
    keyPrograms: [
      "Weekly art classes across all classes Pre-Primary to VIII",
      "Warli painting, Madhubani art & paper mache — traditional Maharashtra craft rotation",
      "Annual SIS Art Walk — student exhibition with gallery-style display",
      "Clay modelling, best-out-of-waste, and rangoli inter-house competitions",
      "Fine Arts elective available for Classes XI–XII CBSE stream",
      "Exhibition participation at inter-school and Navi Mumbai municipal levels",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${artsPrompt}&image_size=landscape_4_3`,
    imageAlt: "SIS students painting traditional Warli artwork and working on clay Ganesh idols in the school art studio.",
    href: "/student-life#arts-culture",
  },
  {
    id: "music-dance",
    title: "Music & Dance",
    eyebrow: "Performing Arts",
    summary:
      "Indian classical, Western instrumental, group vocals, Bharatanatyam, Kathak, folk dance and Marathi Lavani — with a dedicated music wing and two large stage productions each year.",
    detailed:
      "Music and dance are woven into the SIS timetable, morning assemblies, and festival celebrations. Every student from Classes I to VIII attends two periods of performing arts per week, with choice of stream from Class V onwards. The school choir performs at every major assembly; the senior school orchestra includes tabla, harmonium, keyboard, guitar and violin; and dance troupes present Lavani, Bharatanatyam and contemporary pieces at Annual Day, Independence Day, and inter-school youth festivals. Students preparing for graded music or dance examinations outside school are granted flexible practice slots and leave for external assessments.",
    keyPrograms: [
      "Indian classical vocal & instrumental music (Tabla, Harmonium, Sitar, Flute)",
      "Western music — Keyboard, Guitar, Violin, and choir training",
      "Bharatanatyam, Kathak, Lavani & contemporary dance streams",
      "Annual Day full-length stage production with all classes participating",
      "House music & dance competitions judged by external artistes",
      "Sahodaya Youth Festival and Navi Mumbai Kala Mahotsav participation",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${musicDancePrompt}&image_size=landscape_4_3`,
    imageAlt: "Students practicing Bharatanatyam mudras and singing alongside a harmonium in the SIS music and dance wing.",
    href: "/student-life#music-dance",
  },
  {
    id: "clubs-houses",
    title: "Clubs & Houses",
    eyebrow: "Community & Belonging",
    summary:
      "Four house teams and eleven student-led clubs create natural communities across age groups — from Eco Club and Debating to Robotics, Literary, and Astronomy Club.",
    detailed:
      "Every student and teacher at SIS belongs to one of four Houses — Shivaji (Terracotta), Tagore (Sage), Ashoka (Forest), and Raman (Ivory). Houses compete for the annual Overall House Trophy across sports, academics, arts, attendance, and community service points. Beyond the house system, eleven student clubs meet every Friday afternoon. Clubs are student-initiated with teacher patrons, and each organises at least one whole-school event per year. Membership is open to all students, and Class XI–XII students may apply for Club Secretary roles to build portfolio and leadership experience.",
    keyPrograms: [
      "Four Houses — Shivaji, Tagore, Ashoka, Raman — with weekly assemblies and points system",
      "Eco, Literary, Debate & Quiz, Robotics, Astronomy, Art & Craft, Music",
      "Cookery, First Aid, MUN, and Dramatics clubs for Classes IV–XII",
      "Club Secretary & House Prefect leadership roles for senior students",
      "Annual House Championship trophy awarded on Founders' Day",
      "Inter-house weekly bulletin published by the Editorial Club",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${clubsPrompt}&image_size=landscape_4_3`,
    imageAlt: "SIS club students planting saplings and studying together on the campus lawn at golden hour.",
    href: "/student-life#clubs-houses",
  },
  {
    id: "competitions",
    title: "Competitions",
    eyebrow: "Healthy Rivalry",
    summary:
      "A year-round calendar of inter-house, inter-school, zonal, and Olympiad-level competitions — with preparation support and celebration of effort as much as prizes.",
    detailed:
      "Competitions at SIS are designed to stretch students without overwhelming them. Teachers identify potential during regular classes, offer voluntary after-school practice sessions, and only enter students who themselves express interest. The school maintains a balanced roster of academic Olympiads (SOF, Unified Council), competitive sports at zonal and Sahodaya level, literary and elocution contests across three languages — English, Hindi, and Marathi — and cultural competitions including singing, dance, rangoli, and street play. Every participant receives a certificate at the end of term assembly; winners are profiled in the school newsletter and on the campus Achievers' Board.",
    keyPrograms: [
      "SOF Olympiad cycle — NSO, IMO, NCO, IEO, IGKO with school-level training",
      "Inter-House weekly competitions — GK quiz, spelling bee, extempore, group song",
      "Sahodaya inter-school — elocution, debate, dance, music, drama, basketball",
      "Navi Mumbai Zonal Sports & Athletics tournament circuit",
      "Internal class-level show-and-tell, story-telling & recitation for Pre-Primary & Primary",
      "Annual SIS Championship Week — inter-house finals across all categories",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${competitionsPrompt}&image_size=landscape_4_3`,
    imageAlt: "Students raising hands to answer during an inter-house quiz competition in the SIS assembly hall.",
    href: "/student-life#competitions",
  },
  {
    id: "field-trips",
    title: "Field Trips & Expeditions",
    eyebrow: "Learning Outside Classrooms",
    summary:
      "Curriculum-linked day trips for every class and overnight camps from Class V onwards — including the annual Class XII outgoing expedition to the Sahyadri ranges.",
    detailed:
      "No academic term at SIS passes without at least one opportunity to learn on location. Pre-Primary children visit neighbourhood markets, post offices, fire stations, and the local Kharghar botanical garden to match classroom themes. Primary classes take curriculum-linked trips to the Nehru Science Centre, Elephanta Caves, Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, and urban organic farms. From Class V onwards, overnight camps introduce students to trekking, tent pitching, campfire routines and group living — including a three-night Class VII camp to Panchgani, a Class IX adventure camp to Matheran, and a traditional Class XII farewell hike in the Sahyadri range near Lonavala. Parent volunteers are invited to accompany younger class trips whenever logistics allow.",
    keyPrograms: [
      "Monthly local walks for Pre-Primary linked to EVS themes",
      "Term-wise curriculum-linked day trips for Classes I–VIII across Mumbai & Navi Mumbai",
      "Class V overnight camp — 2 nights at Matheran nature camp",
      "Class VII Panchgani expedition — 3 nights trekking and environmental study",
      "Class IX Matheran adventure camp — rappelling, forest trail & birdwatching",
      "Class XII Sahyadri outgoing trek — 2 nights with alumni-faculty interaction",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${fieldTripsPrompt}&image_size=landscape_4_3`,
    imageAlt: "Sanjivani students on a field trip exploring the Elephanta Caves with their teacher and guide.",
    href: "/student-life#field-trips",
  },
  {
    id: "celebrations",
    title: "Celebrations",
    eyebrow: "Festivals & Traditions",
    summary:
      "Maharashtrian and all-Indian festivals, school traditions, and national days are observed with equal warmth — including Ganesh Utsav, Gudhi Padwa, Diwali, and the SIS Founders' Day.",
    detailed:
      "Celebrations are a core part of how Sanjivani remembers where it comes from. Gudhi Padwa marks the beginning of the Marathi new year with a traditional procession and purna kumbh welcome. Ganesh Chaturthi is celebrated over five days with a clay eco-Ganesh crafted by Class V students, daily evening aarti performed by rotating classes, and a visarjan in the school water garden on Anant Chaturdashi. Diwali week sees rangoli, lantern-making competitions, and a guided cracker-free celebration emphasising lights, sweets, and shared stories. National days — Independence Day, Republic Day, and Gandhi Jayanti — are marked by assemblies, march pasts, patriotic songs, and talks by invited parents and community members. The school year closes with Founders' Day each March, which includes the house trophy presentation, teacher felicitations, and a student-led cultural programme.",
    keyPrograms: [
      "Ganesh Utsav — five-day eco-Ganesh celebration with clay idol made by students",
      "Gudhi Padwa traditional procession and purna kumbh welcome assembly",
      "Diwali Week — rangoli, diya decoration, lantern-making, sweets distribution",
      "Navratri & Garba evening for parents and students (Class IV onwards)",
      "Independence Day, Republic Day, Gandhi Jayanti national ceremonies",
      "Founders' Day — March, annual closing, prizes & house trophy presentation",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${celebrationsPrompt}&image_size=landscape_4_3`,
    imageAlt: "Students and teachers celebrating Ganesh Utsav with rangoli and traditional attire in the SIS assembly hall.",
    href: "/student-life#celebrations",
  },
  {
    id: "student-leadership",
    title: "Student Leadership",
    eyebrow: "Leadership & Voice",
    summary:
      "A formal Student Council and prefect body for Classes V–XII, with real responsibilities — from organising events to mentoring junior classes and representing student voice to the school leadership.",
    detailed:
      "Student leadership at SIS is more than a badge and a speech. The annual Student Council election process begins in April, with written manifestos, classroom speeches, and secret ballot voting supervised by the Social Science department. Elected positions include Head Boy, Head Girl, four House Captains and Vice-Captains, Sports Secretary, Cultural Secretary, Literary Editor, Club Coordinator, and Community Service Coordinator. Council members attend a fortnightly briefing with the Principal, lead assemblies, run the school complaint and suggestion box system, manage the lost-and-found, mentor Pre-Primary children during breaks, and sit on the school Discipline Committee alongside teachers. A leadership training camp is held in May for all incoming prefects, and outgoing XII standard council members leave a handover document for the next cohort.",
    keyPrograms: [
      "Student Council election — April, manifesto, speech, secret ballot for Classes V–XII",
      "Head Boy / Head Girl, House Captains, Sports, Cultural, Literary & Editorial Secretaries",
      "Fortnightly Principal-Council briefing with minutes shared with parent body",
      "Prefect mentorship programme — each senior prefect paired with a Pre-Primary class",
      "May Prefect Training Camp — team building, first aid, public speaking, event management",
      "Student representation on Discipline, Events, and Anti-Bullying Committees",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${leadershipPrompt}&image_size=landscape_4_3`,
    imageAlt: "The SIS Student Council and prefect body in formal blazers on the main campus steps at golden hour.",
    href: "/student-life#student-leadership",
  },
  {
    id: "community-service",
    title: "Community Service",
    eyebrow: "Citizenship in Action",
    summary:
      "Mandatory community engagement from Class VI onwards, with annual drives for food, books, clothing, and regular visits to local government schools, old age homes and animal shelters.",
    detailed:
      "Sanjivani believes that a school is part of its neighbourhood. Community service is recorded as a graded component of the Life Skills curriculum from Class VI onwards, with every student required to complete a minimum of fifteen documented hours per year. Projects are chosen by students themselves with teacher guidance, and range from weekly teaching support at the nearby Kharghar Municipal Urdu School to maintenance drives at the Kharghar Biodiversity Park. Annual school-wide campaigns include the December Winter Wear Collection Drive, the April Book Bank for under-resourced local schools, the August Independence Day Food Drive for street families, and the September Animal Welfare donation camp in partnership with Navi Mumbai SPCA. Senior students also run a peer tutoring programme for classmates needing extra academic support after school hours.",
    keyPrograms: [
      "Weekly peer tutoring within SIS — Class X tutors support Classes VI–VIII",
      "Winter Wear Collection — December, blankets and sweaters for local street families",
      "Book Bank drive — April, old textbooks donated to Kharghar municipal schools",
      "Old age home monthly visits — to Kharghar & Panvel senior citizen centres",
      "Animal welfare donation & volunteering with Navi Mumbai SPCA",
      "Biodiversity Park maintenance & tree plantation drives (Sector 10 Kharghar park)",
    ],
    image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${communityPrompt}&image_size=landscape_4_3`,
    imageAlt: "Sanjivani students planting saplings and teaching neighbourhood children at a community garden in Kharghar.",
    href: "/student-life#community-service",
  },
] as const;
