export const resourcesIntro = {
  eyebrow: "Parent Corner · Resources",
  headline: "Everything a Sanjivani parent needs to follow along through the academic year.",
  summary:
    "All current circulars, forms, handbooks, and dated information for parents and students. If you cannot locate a document you need, please email the school office at info@sanjivanischool.edu or call the helpdesk between 9:00 AM and 3:00 PM on any working day.",
} as const;

export type CircularItem = {
  id: string;
  date: string;
  dateISO: string;
  category: "Academic" | "Administrative" | "Event" | "Transport" | "Examination" | "Holiday";
  title: string;
  summary: string;
  audience: string;
  downloadHref?: string;
};

export type DownloadItem = {
  id: string;
  title: string;
  description: string;
  category: "Admissions" | "Forms" | "Finance" | "General" | "Examinations";
  format: "PDF" | "DOCX" | "XLSX";
  sizeLabel: string;
  updatedDateISO: string;
  downloadHref: string;
};

export type CalendarEvent = {
  id: string;
  date: string;
  dateISO: string;
  endDateISO?: string;
  eventType:
    | "Term Start/End"
    | "Holiday"
    | "Examination"
    | "PTA / Parent Meeting"
    | "School Event"
    | "Public Holiday";
  title: string;
  detail: string;
  classes: string;
};

export type PublicationItem = {
  id: string;
  title: string;
  issueLabel: string;
  date: string;
  dateISO: string;
  description: string;
  pages: string;
  downloadHref: string;
};

export type PolicyItem = {
  id: string;
  title: string;
  summary: string;
  lastReviewed: string;
  reviewedDateISO: string;
  downloadHref: string;
};

export const circulars: CircularItem[] = [
  {
    id: "cir-2026-012",
    date: "06 October 2026",
    dateISO: "2026-10-06",
    category: "Examination",
    title: "Term I Examination Schedule — Classes VI to X (2026-27)",
    summary:
      "Term I written examinations for Classes VI, VII, VIII, IX and X will commence from Thursday, 22 October 2026. Full timetable, seating plan, and reporting times are attached. Class X Pre-Board I timetable is issued separately under a student-specific communication.",
    audience: "Parents & Students, Classes VI – X",
    downloadHref: "/resources/circulars/cir-2026-012-term1-exam-schedule.pdf",
  },
  {
    id: "cir-2026-011",
    date: "28 September 2026",
    dateISO: "2026-09-28",
    category: "Event",
    title: "Annual Sports Day 2026 — Parents Invitation & Traffic Advisory",
    summary:
      "The SIS Annual Sports Day 2026 will be held on Friday, 14 October 2026 on the main campus ground from 8:00 AM to 1:30 PM. Parents are warmly invited. Busing, parking, and entry protocols are detailed in the attached notice. Class III–V students will march past; class-wise dress codes are listed.",
    audience: "All Parents & Students, Nursery – XII",
    downloadHref: "/resources/circulars/cir-2026-011-sports-day-invitation.pdf",
  },
  {
    id: "cir-2026-010",
    date: "16 September 2026",
    dateISO: "2026-09-16",
    category: "Holiday",
    title: "Revised Holiday List — Additional Local Holiday on 02 October (Eve of Gandhi Jayanti)",
    summary:
      "On the directions of the NMMC Education Department, Friday 02 October 2026 has been declared a local holiday in addition to the previously notified Gandhi Jayanti holiday on Saturday 03 October. School will resume as normal on Monday 05 October 2026.",
    audience: "All Parents & Staff",
  },
  {
    id: "cir-2026-009",
    date: "09 September 2026",
    dateISO: "2026-09-09",
    category: "Transport",
    title: "Bus Route & Timing Revision — Sector 19, 21 and Panvel Routes",
    summary:
      "Effective Monday 19 September 2026, buses on Routes 7 (Panvel East), Route 11 (Sector 21 Kharghar) and Route 14 (Sector 19 Kharghar) will run on revised pickup timings. All parents of students on these routes will receive a separate SMS and app alert with their child's exact revised pickup time. Drop timings remain unchanged.",
    audience: "Parents of students on Routes 7, 11 & 14",
    downloadHref: "/resources/circulars/cir-2026-009-bus-route-revision.pdf",
  },
  {
    id: "cir-2026-008",
    date: "22 August 2026",
    dateISO: "2026-08-22",
    category: "Academic",
    title: "Open House & PTA — Term I Progress Report Distribution, Saturday 03 September",
    summary:
      "The Term I Open House and Parent-Teacher Association meeting will be held on Saturday, 03 September 2026 between 9:00 AM and 12:30 PM. Parents may collect the Term I progress report and meet all subject teachers. A ten-minute slot per parent is requested; Class X and XII parents are requested to come in the second half (11:00 AM – 12:30 PM) owing to expected footfall.",
    audience: "All Parents, Classes Nursery – XII",
  },
  {
    id: "cir-2026-007",
    date: "01 August 2026",
    dateISO: "2026-08-01",
    category: "Administrative",
    title: "Term II Fee Payment Reminder and Online Payment Portal Details",
    summary:
      "Term II fees for the 2026-27 academic session fall due on or before Monday, 15 August 2026. Parents are requested to make payment through the SIS parent portal, UPI QR or NEFT; cash and cheque payments at the school counter will be accepted between 10 AM and 2 PM on working days only. Late payment charges of ₹100 per week apply from 22 August onwards.",
    audience: "All Parents",
    downloadHref: "/resources/circulars/cir-2026-007-term-ii-fee-reminder.pdf",
  },
];

export const downloads: DownloadItem[] = [
  {
    id: "dl-01",
    title: "Admission Enquiry Form 2026-27",
    description:
      "Prospective parent enquiry and campus visit booking form for Nursery through Class IX and Class XI for the 2026-27 session.",
    category: "Admissions",
    format: "PDF",
    sizeLabel: "180 KB",
    updatedDateISO: "2026-03-28",
    downloadHref: "/resources/downloads/admission-enquiry-form-2026-27.pdf",
  },
  {
    id: "dl-02",
    title: "SIS Prospectus 2026-27",
    description:
      "Full school prospectus including vision, academic structure, fee schedule, uniform code, transport overview and admissions process.",
    category: "Admissions",
    format: "PDF",
    sizeLabel: "4.8 MB",
    updatedDateISO: "2026-03-28",
    downloadHref: "/resources/downloads/sis-prospectus-2026-27.pdf",
  },
  {
    id: "dl-03",
    title: "Uniform & Dress Code List",
    description:
      "Complete uniform and dress code for Pre-Primary, Primary, Secondary and Senior Secondary — including house colours, PT days, and winter wear specifications.",
    category: "General",
    format: "PDF",
    sizeLabel: "320 KB",
    updatedDateISO: "2026-04-02",
    downloadHref: "/resources/downloads/uniform-dress-code-list.pdf",
  },
  {
    id: "dl-04",
    title: "School Transport Registration & Route Form",
    description:
      "Transport registration and route preference form for new and continuing students opting for SIS bus or van transport services in 2026-27.",
    category: "Forms",
    format: "DOCX",
    sizeLabel: "90 KB",
    updatedDateISO: "2026-04-10",
    downloadHref: "/resources/downloads/transport-registration-form-2026-27.docx",
  },
  {
    id: "dl-05",
    title: "Term Fee Challan — Term II (2026-27)",
    description:
      "Printable NEFT and counter-payment fee challan for Term II, 2026-27. Challan number and student ID fields should be filled in before submission.",
    category: "Finance",
    format: "PDF",
    sizeLabel: "150 KB",
    updatedDateISO: "2026-07-25",
    downloadHref: "/resources/downloads/fee-challan-term-ii-2026-27.pdf",
  },
  {
    id: "dl-06",
    title: "Transfer Certificate (TC) Application Form",
    description:
      "Formal application form for request of Transfer Certificate, Character Certificate and Statement of Marks on withdrawal from the school.",
    category: "Forms",
    format: "PDF",
    sizeLabel: "110 KB",
    updatedDateISO: "2026-02-15",
    downloadHref: "/resources/downloads/tc-application-form.pdf",
  },
  {
    id: "dl-07",
    title: "Student Medical Information & Consent Form",
    description:
      "Confidential medical information, allergy declaration, emergency contact and field-trip/activity parental consent form for every enrolled student.",
    category: "Forms",
    format: "PDF",
    sizeLabel: "200 KB",
    updatedDateISO: "2026-04-05",
    downloadHref: "/resources/downloads/student-medical-consent-form.pdf",
  },
  {
    id: "dl-08",
    title: "School Diary Rules & Code of Conduct",
    description:
      "Extract from the SIS Student & Parent Handbook: diary rules, homework policy, classroom discipline code, and grievance redressal process for parents and students.",
    category: "General",
    format: "PDF",
    sizeLabel: "240 KB",
    updatedDateISO: "2026-04-01",
    downloadHref: "/resources/downloads/diary-rules-code-of-conduct.pdf",
  },
];

export const academicCalendar202627: CalendarEvent[] = [
  {
    id: "cal-01",
    date: "Monday, 06 April 2026",
    dateISO: "2026-04-06",
    eventType: "Term Start/End",
    title: "Academic Session 2026-27 Commences",
    detail:
      "Reopening day for Classes I to XII. New students report at 8:00 AM; continuing students report at 7:45 AM as per normal timetable. Pre-Primary wing starts on 08 April 2026 with a phased orientation week.",
    classes: "Nursery – XII",
  },
  {
    id: "cal-02",
    date: "Saturday, 02 May 2026",
    dateISO: "2026-05-02",
    eventType: "PTA / Parent Meeting",
    title: "Beginning-of-Year PTA & Class Teacher Meetings",
    detail:
      "Class teacher introduction meetings and beginning-of-year curriculum presentations, held class-wise between 9:00 AM and 12:30 PM. All parents requested to attend; each session is approximately 40 minutes with Q&A.",
    classes: "All Parents, Nursery – XII",
  },
  {
    id: "cal-03",
    date: "Saturday, 23 May 2026",
    dateISO: "2026-05-23",
    endDateISO: "2026-06-01",
    eventType: "Holiday",
    title: "Summer Vacation",
    detail:
      "Nine-day summer break including weekends. School reopens on Tuesday, 02 June 2026. Home assignments for the vacation period are uploaded on the parent portal by 18 May.",
    classes: "Nursery – XII",
  },
  {
    id: "cal-04",
    date: "Saturday, 11 July 2026",
    dateISO: "2026-07-11",
    eventType: "Examination",
    title: "Unit Test I — Classes III to XII",
    detail:
      "First formative unit test cycle. Syllabus coverage notified class-wise through class teachers on 24 June. Class X and XII have a slightly extended schedule ending on 14 July.",
    classes: "III – XII",
  },
  {
    id: "cal-05",
    date: "Saturday, 15 August 2026",
    dateISO: "2026-08-15",
    eventType: "Public Holiday",
    title: "Independence Day Holiday",
    detail:
      "Public holiday. Independence Day flag-hoisting and student programme for Class V–VIII representatives will be held on campus from 8:00 AM to 9:30 AM; all other students stay at home.",
    classes: "Nursery – XII",
  },
  {
    id: "cal-06",
    date: "Saturday, 03 September 2026",
    dateISO: "2026-09-03",
    eventType: "PTA / Parent Meeting",
    title: "Open House & Term I Report Distribution",
    detail:
      "Term I Open House, parent-teacher consultations and progress report collection between 9:00 AM and 12:30 PM. Class X and XII parents requested to attend the 11:00 AM – 12:30 PM slot.",
    classes: "All Parents, Nursery – XII",
  },
  {
    id: "cal-07",
    date: "Thursday, 22 October 2026",
    dateISO: "2026-10-22",
    endDateISO: "2026-11-04",
    eventType: "Examination",
    title: "Term I Written Examinations — Classes VI to X",
    detail:
      "Term I summative written examinations. Class-wise timetable under separate cover. Class X Pre-Board I runs concurrently for a subset of subjects; Class XI exams begin on 27 October.",
    classes: "VI – XII",
  },
  {
    id: "cal-08",
    date: "Monday, 09 November 2026",
    dateISO: "2026-11-09",
    endDateISO: "2026-11-14",
    eventType: "Holiday",
    title: "Diwali & Dhanteras Mid-Term Break",
    detail:
      "Six-day mid-term festive break including Dhanteras, Narak Chaturdashi, Diwali, Govardhan Puja and Bhai Dooj. School reopens on Monday, 16 November 2026.",
    classes: "Nursery – XII",
  },
  {
    id: "cal-09",
    date: "Saturday, 12 December 2026",
    dateISO: "2026-12-12",
    eventType: "School Event",
    title: "Annual Day & Prize Distribution 2026",
    detail:
      "SIS Annual Day cultural programme and prize distribution at the Vishnudas Bhave Auditorium, Vashi. Student call time 5:30 PM; parent seating from 6:15 PM. Invitation cards will be issued to families of participants from 02 December onwards.",
    classes: "Nursery – XII",
  },
  {
    id: "cal-10",
    date: "Monday, 28 December 2026",
    dateISO: "2026-12-28",
    endDateISO: "2027-01-04",
    eventType: "Holiday",
    title: "Christmas & Year-End Winter Break",
    detail:
      "Eight-day year-end break. School reopens on Tuesday, 05 January 2027. Class X and XII students will have optional revision/coaching sessions on 03 and 04 January; attendance is voluntary and notified separately.",
    classes: "Nursery – XII",
  },
  {
    id: "cal-11",
    date: "Monday, 15 February 2027",
    dateISO: "2027-02-15",
    endDateISO: "2027-02-28",
    eventType: "Examination",
    title: "Term II / Final Examinations — Classes I to IX & XI",
    detail:
      "Final summative Term II examinations for all classes except X and XII. Class X and XII Pre-Board II concludes on 12 February, followed by revision and leave for board candidates.",
    classes: "I – IX, XI",
  },
  {
    id: "cal-12",
    date: "Saturday, 27 March 2027",
    dateISO: "2027-03-27",
    eventType: "Term Start/End",
    title: "Academic Session 2026-27 Closes · Founders' Day",
    detail:
      "Last working day of the 2026-27 session. Founders' Day assembly, prize distribution, and House Championship trophy presentation will be held in the morning. Report cards for all non-board classes are given to parents between 9:00 AM and 12:30 PM.",
    classes: "Nursery – XII",
  },
];

export const publications: PublicationItem[] = [
  {
    id: "pub-01",
    title: "Sanjivani — The School Magazine, Volume XIX",
    issueLabel: "Annual Volume 2025-26",
    date: "June 2026",
    dateISO: "2026-06-12",
    description:
      "The 19th annual hardbound school magazine featuring student creative writing, art, poetry, reports from the year's events, sports summaries, class photographs, a farewell section for the outgoing Class XII batch, and guest columns from SIS alumni.",
    pages: "148 pages",
    downloadHref: "/resources/publications/sis-magazine-vol-xix-2025-26.pdf",
  },
  {
    id: "pub-02",
    title: "Annual Report — Academic Year 2025-26",
    issueLabel: "Official Report 2025-26",
    date: "May 2026",
    dateISO: "2026-05-25",
    description:
      "The formal audited annual report of the Sanjivani International Education Trust: academic, co-curricular, and infrastructure highlights for 2025-26, Class X and XII board results summary, financial overview, and governance disclosures as required under CBSE affiliation norms.",
    pages: "56 pages",
    downloadHref: "/resources/publications/annual-report-2025-26.pdf",
  },
  {
    id: "pub-03",
    title: "The Sanjivani Scribe — September 2026",
    issueLabel: "Monthly Newsletter · Issue 06",
    date: "01 October 2026",
    dateISO: "2026-10-01",
    description:
      "Monthly parent newsletter covering September events including Ganesh Utsav, Hindi Diwas celebrations, Term I exam prep schedules, the U-17 cricket zonal victory, and a calendar preview for the month of October.",
    pages: "8 pages",
    downloadHref: "/resources/publications/scribe-september-2026.pdf",
  },
  {
    id: "pub-04",
    title: "The Sanjivani Scribe — October 2026",
    issueLabel: "Monthly Newsletter · Issue 07",
    date: "01 November 2026",
    dateISO: "2026-11-01",
    description:
      "October round-up newsletter with Annual Sports Day photo story, Science Exhibition highlights, Term I exam result snapshot, upcoming Diwali break advisory, a feature on the Student Council community service drive, and the November calendar preview.",
    pages: "8 pages",
    downloadHref: "/resources/publications/scribe-october-2026.pdf",
  },
];

export const policies: PolicyItem[] = [
  {
    id: "pol-01",
    title: "Attendance & Leave Policy",
    summary:
      "Minimum 80% attendance required for term examinations; leave application process for short and long absence; medical leave documentation; prolonged-absence and detention-in-class guidelines as per CBSE norms.",
    lastReviewed: "March 2026",
    reviewedDateISO: "2026-03-21",
    downloadHref: "/resources/policies/attendance-leave-policy.pdf",
  },
  {
    id: "pol-02",
    title: "Assessment & Promotion Policy",
    summary:
      "Term-wise and unit-test weightages for Classes Nursery to XII; CBSE-prescribed CCE pattern for Classes VI–VIII; Class IX & XI promotion criteria; Compartment and Supplementary examination rules for Class X and XII.",
    lastReviewed: "April 2026",
    reviewedDateISO: "2026-04-08",
    downloadHref: "/resources/policies/assessment-promotion-policy.pdf",
  },
  {
    id: "pol-03",
    title: "Student Discipline, Behaviour & Uniform Code",
    summary:
      "Classroom and campus behaviour expectations; late-coming and dress-code protocols; progressive disciplinary ladder; suspension and expulsion due process; anti-harassment and equal-treatment commitments.",
    lastReviewed: "February 2026",
    reviewedDateISO: "2026-02-14",
    downloadHref: "/resources/policies/discipline-uniform-code.pdf",
  },
  {
    id: "pol-04",
    title: "Transport & Bus Code of Conduct",
    summary:
      "Student behaviour on SIS buses, van pickup/drop protocols, unauthorised stop change policy, complaint redressal procedure, bus attendant and driver conduct expectations, and emergency contact chain.",
    lastReviewed: "April 2026",
    reviewedDateISO: "2026-04-16",
    downloadHref: "/resources/policies/transport-code-of-conduct.pdf",
  },
  {
    id: "pol-05",
    title: "Fee Payment, Refund & Withdrawal Policy",
    summary:
      "Term-wise fee schedule; accepted payment modes; late-payment penalty structure; advance payment and sibling-discount rules; refund policy in case of mid-year withdrawal; TC issuance timelines.",
    lastReviewed: "March 2026",
    reviewedDateISO: "2026-03-26",
    downloadHref: "/resources/policies/fee-payment-refund-policy.pdf",
  },
  {
    id: "pol-06",
    title: "Anti-Bullying, Wellbeing & Child Protection Policy",
    summary:
      "Zero-tolerance anti-bullying statement; definition of physical, verbal, relational and cyber bullying; mandatory reporting by all staff and students; investigation and restorative-resolution process; role of the school counsellor; child protection and POCSO-aligned protocols.",
    lastReviewed: "May 2026",
    reviewedDateISO: "2026-05-12",
    downloadHref: "/resources/policies/anti-bullying-child-protection-policy.pdf",
  },
];
