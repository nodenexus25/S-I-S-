export const admissionsIntro = {
  eyebrow: "Admissions · 2026-27",
  headline: "Begin your family into Sanjivani starts with a conversation, not a form.",
  summary:
    "Admissions at Sanjivani International School are built around fit — academic, and between the child, the parents, and the school. Every application short-list; we speak with us first. The best starting point is a campus visit on a working Friday or Saturday morning, where you will walk the grounds, meet a wing coordinator, and see for yourself whether SIS feels like the kind of place your child would be happy growing up in. Applications are reviewed individually, and no child is ever admitted or turned away on the basis of a single 45-minute written paper. Nursery to Class IX and Class XI for the 2026-27 session are currently open.",
} as const;

export type WhySISPoint = {
  title: string;
  detail: string;
};

export const whySISpoints: WhySISPoint[] = [
  {
    title: "Small sections with attention each child has the first-name basis",
    detail:
      "Maximum 32 children per section in the Primary wing and 36 in the Senior wing — well below the CBSE ceiling of 40. Class teachers are expected to know every child by learning style, not just by roll number, and no student is quietly pulled along at the back of a crowded class.",
  },
  {
    title: "Seven consecutive years of 100% Class X & XII results",
    detail:
      "SIS has maintained at 100% pass outcome in both Class X and Class XII CBSE board examinations for seven running academic sessions, with an average school aggregate of 84.2% in Class X in 2025-26. 36 students scored 90% and above this year alone.",
  },
  {
    title: "CBSE curriculum with real co-curricular depth",
    detail:
      "Sports, arts, music, dance, eleven student-led clubs, annual field trips, community service and a full performing arts programme — all timetabled and taught by qualified teachers, not squeezed into one afternoons a month as an afterthought.",
  },
  {
    title: "A green, safe, purpose-built campus",
    detail:
      "Twelve fully-fenced, CCTV-covered acres in central Kharghar. Playgrounds, gardens, a separate Pre-Primary wing with its own outdoor play area, and classroom windows that open rather than looking onto a concrete wall.",
  },
  {
    title: "Experienced teachers stay, turnover",
    detail:
      "The average tenure of a Sanjivani teacher is more than 8 years. Faculty members are hired for subject mastery and temperament, trained annually, and supported by a school counsellor and a learning-support team for children who need extra help.",
  },
  {
    title: "Pastoral care not catchphrase, practice",
    detail:
      "Five days full-time counsellor on campus, a zero-tolerance anti-bullying policy with restorative resolution, child-protection trained teachers, and Class X and XII board-year mentoring programmes with regular one-on-one check-ins from April onwards.",
  },
  {
    title: "Rooted in Kharghar for two decades",
    detail:
      "Sanjivani International was started in Kharghar, by Kharghar-based trustees, and most of our families walk or live within a bus of the campus. We are not a corporate-run national brand — we are a neighbourhood school that has grown with its community.",
  },
  {
    title: "Transparent admissions and parent communication",
    detail:
      "No hidden donation. No capitation. No management quota with undisclosed fees. Clear fee schedule published in the prospectus and the website. A written parent app, email and a WhatsApp broadcast list, five working-days response time for any parent email.",
  },
];

export type AdmissionStep = {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
};

export const admissionSteps: AdmissionStep[] = [
  {
    stepNumber: 1,
    title: "Enquiry & Campus Visit",
    description:
      "Submit an online enquiry or call the admissions helpdesk to book a guided campus tour. Tours are conducted every Friday and Saturday, 9:00 AM – 11:30 AM, and take around 45 minutes. You will be shown the relevant academic wing, meet a coordinator, and receive a printed prospectus and fee schedule on the day. We strongly encourage both parents to attend the campus.",
    duration: "By appointment · ~ 45 minutes",
  },
  {
    stepNumber: 2,
    title: "Form Submission",
    description:
      "After your campus, if SIS feels like a good fit, submit the completed application form — available both online through the parent portal and as a hardcopy counter at the school admissions office. All required documents (listed separately) must also be uploaded or submitted in person along with a non-refundable processing fee of ₹1,500 for Pre-Primary and ₹2,000 for Classes I–X & XI. Applications are reviewed on a rolling basis as they come in.",
    duration: "Within 15 working days of campus visit",
  },
  {
    stepNumber: 3,
    title: "Interaction / Assessment",
    description:
      "Shortlisted candidates are invited for an age-appropriate interaction. For Nursery and Jr. KG, this is a 20-minute play-based observation with both parents present — no formal test. For Sr. KG and Class I a simple conversation and basic readiness check. For Classes II–IX a short 45-minute paper in English, Maths, and Mathematics basics. For Class XI: stream-wise assessment and review of Class X pre-board and mid-year transcripts.",
    duration: "By invitation only · 30 – 75 minutes",
  },
  {
    stepNumber: 4,
    title: "Offer & Confirmation",
    description:
      "The admissions office communicates the outcome of the interaction within 7 working days of the assessment date. Successful candidates receive a formal offer letter valid for 10 calendar days. To confirm, pay the non-refundable admission fee and the first term's tuition and deposit. If the offer lapses after 10 days, the seat is released to the next candidate on the waiting list.",
    duration: "Offer valid 10 calendar days",
  },
  {
    stepNumber: 5,
    title: "Admission & Orientation",
    description:
      "Once the admission fee and first term deposit are paid, your child is formally enrolled. New student orientation is held on the Saturday before the academic session begins, with the class teacher introduction, stationery and book list, uniform fitting, bus route allotment, and a morning tea for parents and students. Class Pre-Primary children have a phased first week.",
    duration: "Orientation: Saturday before session start · ~ 2 hours",
  },
];

export type EligibilityCriterion = {
  class: string;
  ageOn31Mar: string;
  note?: string;
};

export const eligibilityCriteria: EligibilityCriterion[] = [
  {
    class: "Nursery",
    ageOn31Mar: "3 years completed on or before 31 March 2026",
    note: "Child must have completed 3 full years as on 31 March 2026 (born on or before 31 December 2023). No upper age limit for Nursery admission. Birth certificate issued by the Municipal Corporation is mandatory.",
  },
  {
    class: "Junior KG",
    ageOn31Mar: "4 years completed on or before 31 March 2026",
    note: "Child born on or before 31 December 2022. Preference is given to children with a prior year of formal nursery schooling, but this is not a strict requirement.",
  },
  {
    class: "Senior KG",
    ageOn31Mar: "5 years completed on or before 31 March 2026",
    note: "Child born on or before 31 December 2021. An attendance-attested Nursery / Jr. KG progress report from the previous school is required.",
  },
  {
    class: "Class I",
    ageOn31Mar: "6 years completed on or before 31 March 2026",
    note: "Child born on or before 31 December 2020. Sr. KG / UKG leaving certificate from a recognised school or anganwadi is required.",
  },
  {
    class: "Class II",
    ageOn31Mar: "7 years on or before 31 March 2026",
    note: "Class I progress report and leaving certificate from previous school mandatory. Born on or before 31 December 2019.",
  },
  {
    class: "Classes III – V",
    ageOn31Mar: "8 – 10 years completed on or before 31 March 2026",
    note: "Previous class progress report and Transfer Certificate from previous CBSE / ICSE / State Board school. TC counter-attestation required for students migrating from outside Maharashtra state.",
  },
  {
    class: "Classes VI – VIII",
    ageOn31Mar: "11 – 13 years completed on or before 31 March 2026",
    note: "Previous-year report card and Transfer Certificate attested by the previous school's education board. Counter-signed TC mandatory for students moving from boards other than CBSE.",
  },
  {
    class: "Class IX",
    ageOn31Mar: "14 years completed on or before 31 March 2026",
    note: "Class VIII passing certificate and attested TC. Mid-year admissions to Class IX are not permitted under CBSE affiliation rules. Only April intake.",
  },
  {
    class: "Class X",
    ageOn31Mar: "15 years completed on or before 31 March 2026",
    note: "Admissions to Class X are NOT ordinarily permitted in line with CBSE Bye-Laws. Only applicants migrating into Navi Mumbai from a transferable government or defence posting may apply, subject to CBSE regional office prior approval.",
  },
  {
    class: "Class XI",
    ageOn31Mar: "16 years completed on or before 31 March 2026",
    note: "Stream options: Science (PCM, PCB, PCMB with optional CS/IP/PE), Commerce (with or without Maths, IP), Humanities (English + 5 optionals). Minimum 60% in Class X Board/Pre-Board aggregate. Admission test conducted for shortlisted candidates.",
  },
  {
    class: "Class XII",
    ageOn31Mar: "17 years completed on or before 31 March 2026",
    note: "Admissions to Class XII are NOT permitted under any circumstances as per CBSE Affiliation Bye-Laws, except in cases of transfer of a parent with a central government posting, and with explicit prior written CBSE Regional Office approval.",
  },
];

export const requiredDocuments: string[] = [
  "Child's Municipal / BMC issued Birth Certificate (original for verification + 2 self-attested photocopies).",
  "Previous school Transfer Certificate / Leaving Certificate, duly countersigned by the previous school's education board (for Class I and above).",
  "Previous-year / most recent progress report of the child, attested by the previous school principal.",
  "Aadhaar Card of the child and both parents (original for sighting + self-attested copies).",
  "4 recent passport-size colour photographs of the child, and 1 each of both parents.",
  "Caste / Category certificate (if applicable — SC / ST / OBC / EWS / EBC certificate issued by a Maharashtra State competent authority).",
  "Medical fitness certificate from any registered MBBS practitioner, including height, weight, blood group, and declared allergies / ongoing medical conditions.",
  "Proof of local residential address in Kharghar / Navi Mumbai — any one of: Electricity Bill, Society Maintenance Receipt, Index-II Registered Rental Agreement, Ration Card.",
  "Two identity / ID proof of both parents — PAN Card, Voter ID, or Passport.",
  "For Defence / Government transfer cases: official parent transfer order, relieving letter and posting confirmation to Navi Mumbai / MMR region.",
];

export type ImportantMilestone = {
  id: string;
  date: string;
  dateISO: string;
  title: string;
  note: string;
};

export const importantDates202627: ImportantMilestone[] = [
  {
    id: "adm-01",
    date: "Saturday, 14 March 2026",
    dateISO: "2026-03-14",
    title: "Admissions Open — Prospectus & Forms Issued",
    note: "Admission forms and printed prospectus made available at the school counter and online. First round of campus tours begins from this date onwards, every Friday & Saturday.",
  },
  {
    id: "adm-02",
    date: "Saturday, 04 April 2026",
    dateISO: "2026-04-04",
    title: "Last Date for Submission of Nursery & KG Forms (Round I)",
    note: "Round I application deadline for Nursery, Junior KG and Senior KG. Applications received after this date will be considered in Round II, subject to availability of seats.",
  },
  {
    id: "adm-03",
    date: "Monday, 13 April 2026",
    dateISO: "2026-04-13",
    title: "Nursery & KG — Round I Interactions Begin",
    note: "Play-based interactions for Nursery and KG shortlisted candidates. Scheduled slot times are communicated individually via email and SMS by the admissions office.",
  },
  {
    id: "adm-04",
    date: "Saturday, 25 April 2026",
    dateISO: "2026-04-25",
    title: "Classes I – IX & XI — Assessment Day",
    note: "Age-appropriate assessment and interaction for all shortlisted applicants to Classes I through IX and Class XI. Timetable for each class is notified on 18 April 2026.",
  },
  {
    id: "adm-05",
    date: "Saturday, 02 May 2026",
    dateISO: "2026-05-02",
    title: "First List of Offers Released",
    note: "First round of admission offers for all classes is published on the notice board and emailed individually. Waiting list is also communicated. Offer valid for 10 calendar days.",
  },
  {
    id: "adm-06",
    date: "Saturday, 23 May 2026",
    dateISO: "2026-05-23",
    title: "New Student & Parent Orientation Day",
    note: "Orientation for all newly admitted students and parents. Class teacher introduction, book list, stationery kit distribution, uniform fitting, transport route allotment, and Q&A with the Principal and wing coordinators.",
  },
];

export type AdmissionFAQ = {
  question: string;
  answer: string;
};

export const admissionFAQs: AdmissionFAQ[] = [
  {
    question: "What are the age cut-off dates for admission to each class?",
    answer:
      "The cut-off date for all classes is 31 March 2026, in line with CBSE and Maharashtra state government norms. A child seeking admission to Nursery must be 3 years completed on or before 31 March 2026; Junior KG 4 years, Senior KG 5 years, and Class I 6 years as on that same date. A full table with precise age limits for every class is printed in the prospectus and available on the Admissions page above. The school does not grant age relaxations under any circumstances.",
  },
  {
    question: "Is a Transfer Certificate (TC) always required?",
    answer:
      "A Transfer Certificate or Leaving Certificate is mandatory for admission to Class I and above. For students transferring from outside the state of Maharashtra, the TC must be countersigned by the education board of the previous state. For admissions to Classes IX and XI, an additional counter-attestation by CBSE is required as per CBSE Bye-Law. Children entering Nursery or KG do not need a TC but must present an attendance record or progress report from their previous preschool if they have attended one.",
  },
  {
    question: "What is the fee structure, and are there any hidden charges?",
    answer:
      "The full fee structure — including tuition, development, lab, and IT, and one-time admission charges for new entrants — is printed in the prospectus handed to every parent at the campus tour and available on request from the accounts office. There are no hidden capitation, management quota, or donation charges; SIS does not and will not accept any cash payments above the published fee schedule. Sibling discounts (second and third child) of currently enrolled students are available. All fees are payable termly; three terms of approximately, or annually at parent option.",
  },
  {
    question: "Does the school provide transport, and what routes are covered?",
    answer:
      "Yes. SIS operates an 18-bus and 6-van transport network across Kharghar, Panvel (East & West), Nerul, Seawoods, Belapur, and CBD Belapur. A complete list of current routes, stops, and fees is available from the transport coordinator at the time of campus visit. Transport is billed termly and not included in the base tuition fee. Seat allotment is on a first-come basis and confirmed at the time of admission. The school cannot guarantee bus seat availability if the enrol after the first list.",
  },
  {
    question: "Do you take mid-year admissions in the middle of the academic session?",
    answer:
      "Mid-year admissions after the start of the academic session are only considered in Nursery, Junior KG, and Classes I–VIII — and only if there is a vacant seat in the section. Applications for mid-year entry ordinarily, and each request is considered case by case, subject to the child producing a valid reason for the mid-year transfer (parent transfer, etc.). As per CBSE rules, Class X and Class XII NO mid-year admissions under any circumstances.",
  },
  {
    question: "Is the school CBSE-affiliated, and up to which class?",
    answer:
      "Yes, Sanjivani International School is a permanent CBSE-affiliated senior secondary (10+2) institution, offering classes from Nursery through Class XII in Science, Commerce, and Humanities streams for Classes XI and XII. The CBSE affiliation number and school code are printed on the back cover of the prospectus, displayed on the main school gate, and available for physical inspection at the reception office. The affiliation is renewed on the regular cycle.",
  },
  {
    question: "Are books, notebooks, uniform available through the school?",
    answer:
      "Yes. The school issues a prescribed book list and a list of approved notebooks and stationery for every class before the start of each academic session. Parents may purchase books and stationery either retail from any vendor of their choice, or place an order through the authorised book vendor who operates a counter on campus during orientation week. The school does not operate its own bookstore but maintains the approved vendor. Uniform: the school has one authorised uniform vendor; details are given with orientation. Parents free buy direct buy from outside only approved school authorised vendor; mandatory approved supplier as long as the colour, fabric, and style approved vendor.",
  },
  {
    question: "Does the school provide a canteen or meals? Are hot meals available?",
    answer:
      "The school operates a hygienic canteen that serves filtered drinking water, fresh snacks, and limited hot lunch options (rice plate, chole bht, sandwiches, fresh fruit, and biscuits) on a cashless prepaid card system through SIS student ID card. The canteen does not serve soft drinks, chips, chocolates, or heavily processed food. The canteen menu is reviewed once each term by a committee of teachers and two parent representatives. Parents of children with specific dietary allergies can file an allergy form; the school nurse and canteen staff maintain an allergy register. Children may also bring a home-cooked tiffin.",
  },
  {
    question: "What are the daily school hours?",
    answer:
      "Regular school hours are: Nursery & Jr. KG: 8:30 AM – 11:45 AM, Monday to Friday only. Senior KG & Classes I – IV: 7:50 AM – 1:30 PM. Classes V – XII: 7:45 AM – 2:15 PM. Saturday working days: two Saturdays a month are working for Classes III and above, for co-curricular and events. The first and third Saturday of every month are holidays for all classes. Office hours: Monday to Saturday 8:00 AM – 4:00 PM.",
  },
  {
    question: "What is the nature of the assessment or interaction round?",
    answer:
      "For Nursery and KG, the interaction is purely play-based: children spend around 20 minutes in a room with toys, picture books, and teachers, while both parents are present for a short conversation with the admission committee. No writing or reading aloud test. For Sr. KG and Class I: a short one-to-one chat, basic colour, number, and picture recognition. For Classes II to VIII: a 45-minute paper in English, Maths, and Mental Ability at the level of the class BELOW the one applied for — not the class being entered. For Class XI: stream-specific short paper in three core subjects and a stream-fit interview.",
  },
  {
    question: "Does the school provide counselling and learning support for children who struggle?",
    answer:
      "Yes. A full-time trained school counsellor is available five days on campus for one-to-one confidential sessions with students and parents. A small learning-support team works with children who have documented specific learning difficulties (dyslexia, dysgraphia, dyscalculia) and can arrange for CBSE-approved concessions and reader/writer accommodations where applicable. SIS does not currently have a full special needs unit but does its best within its capacity for every. Please disclose any such needs at the time of so appropriate support is.",
  },
  {
    question: "What is the process and notice period for withdrawal from the school?",
    answer:
      "A written application for a Transfer Certificate (TC) should be submitted to the school office at least one full calendar month before the intended last working day. No TC is issued on the same day of application. All outstanding dues, if, must be cleared in full before the TC and character certificate are released. For mid-year term withdrawal, term fee for the current term is non-refundable in its entirety even if the child leaves within the first week. Refund, if any, of the following term advance deposit is governed by the published Fee Refund & Withdrawal Policy document available under Resources.",
  },
];

export const contactInfo = {
  helpdesk: {
    email: "admissions@sanjivanischool.edu",
    phone: "+91 22 0000 0000",
    mobile: "+91 98765 43210",
    whatsapp: "https://wa.me/919876543210",
    hours: "Monday to Saturday · 9:00 AM – 3:00 PM",
  },
} as const;
