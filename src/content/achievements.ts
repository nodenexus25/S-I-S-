export type AchievementRecord = {
  id: string;
  date: string;
  dateISO: string;
  category: string;
  title: string;
  detail: string;
  recipient: string;
  level: "School" | "Cluster" | "Zonal" | "City" | "State" | "National" | "International";
};

export const achievementIntro = {
  eyebrow: "Our Achievers",
  headline: "Recognition earned quietly, steadily, and across every part of school life.",
  summary:
    "Every achievement listed here began in an ordinary classroom, on a regular practice field, or during a lunchtime club meeting. Sanjivani celebrates effort as much as prizes, but we also believe that when children put in the work, their success deserves to be recorded, recognised, and shared with the community that helped raise them.",
} as const;

export type AchievementCategory = {
  headline: string;
  records: AchievementRecord[];
};

export const achievementsByCategory: Record<string, AchievementCategory> = {
  academic: {
    headline: "Academic Excellence",
    records: [
      {
        id: "acad-001",
        date: "22 May 2026",
        dateISO: "2026-05-22",
        category: "Academic",
        title: "Class XII Board Results — 100% Pass, 21 Students above 90%",
        detail:
          "The Class XII 2025-26 batch recorded a 100% pass rate across Science, Commerce, and Humanities streams. Anika Joshi from the Science stream secured 96.4% aggregate, while Rishab Mahajan topped Commerce with 94.8% and Samruddhi Patil led Humanities with 92.6%. 21 of 84 students scored 90% and above, and 67 students crossed the 75% distinction threshold.",
        recipient: "Class XII Batch 2025-26",
        level: "School",
      },
      {
        id: "acad-002",
        date: "20 May 2026",
        dateISO: "2026-05-20",
        category: "Academic",
        title: "Class X Board Results — 100% Pass, School Average 84.2%",
        detail:
          "The Class X 2025-26 batch registered a 100% pass outcome for the seventh consecutive year. The school aggregate stood at 84.2%, up from 82.7% the previous year. 15 students scored above 95% in individual subjects — Mathematics (6 students), Science (4 students), Sanskrit (3 students), and Social Science (2 students). Vedant Deshmukh topped the batch with 95.6% aggregate.",
        recipient: "Class X Batch 2025-26",
        level: "School",
      },
      {
        id: "acad-003",
        date: "10 March 2026",
        dateISO: "2026-03-10",
        category: "Academic",
        title: "Hindi Rashtrabhasha Prachar Samiti — 8 Students Awarded Shiksha Visharad",
        detail:
          "Eight students from Classes VIII and IX successfully cleared the Rashtrabhasha Visharad examination conducted by the Hindi Rashtrabhasha Prachar Samiti, Varanasi. All eight scored distinction grade. Aarohi Kulkarni of Class IX secured the first rank in the Navi Mumbai centre. The school offers voluntary after-school coaching for Hindi Visharad and Sanskrit Pratham examinations each academic year.",
        recipient: "Aarohi Kulkarni & 7 students, Classes VIII–IX",
        level: "City",
      },
      {
        id: "acad-004",
        date: "27 February 2026",
        dateISO: "2026-02-27",
        category: "Academic",
        title: "Marathi State Level Scholarship Exam — 3 Students in Top 50 (Navi Mumbai)",
        detail:
          "Three SIS students appearing for the Maharashtra State Government Upper Primary Scholarship Examination (Std VIII) secured ranks within the first 50 in the Navi Mumbai division. Aditi Gaikwad secured 18th rank, Pranav Jadhav secured 31st, and Ishwari Tandel secured 47th. The scholarship includes a three-year cash grant and eligibility for the state-level higher studies merit scheme.",
        recipient: "Aditi Gaikwad, Pranav Jadhav, Ishwari Tandel — Class VIII",
        level: "State",
      },
    ],
  },
  sports: {
    headline: "Sports & Athletics",
    records: [
      {
        id: "sports-001",
        date: "07 September 2026",
        dateISO: "2026-09-07",
        category: "Sports",
        title: "Under-17 Boys Cricket Team — Navi Mumbai Zonal Champions",
        detail:
          "The SIS Under-17 boys' cricket team won the CBSE Cluster VII Zonal Cricket Tournament held at Nerul, beating DPS Navi Mumbai by 32 runs in the final. Captain Aryan Shetty scored an unbeaten 78 off 58 balls and was named Player of the Tournament for scoring 284 runs across five innings. Left-arm spinner Dhruv Khatri took 13 wickets in the series, including a five-wicket haul against Sacred Heart, Vashi.",
        recipient: "SIS U-17 Boys Cricket Team",
        level: "Zonal",
      },
      {
        id: "sports-002",
        date: "24 August 2026",
        dateISO: "2026-08-24",
        category: "Sports",
        title: "Under-14 Girls Basketball — Kharghar Sahodaya Winners",
        detail:
          "The Under-14 girls' basketball team claimed first place at the 2026 Kharghar Sahodaya Inter-School Basketball Meet, defeating Amity International Kharghar 28-21 in a closely contested final. Centre Meera Nair was named Most Valuable Player of the tournament. The team qualified for the Navi Mumbai city-level meet held in September.",
        recipient: "SIS U-14 Girls Basketball Team",
        level: "Cluster",
      },
      {
        id: "sports-003",
        date: "11 July 2026",
        dateISO: "2026-07-11",
        category: "Sports",
        title: "State-Level Athletics — Anshika Rao, Bronze in 400m Hurdles",
        detail:
          "Anshika Rao of Class XI won the bronze medal in the Under-19 Girls 400-metre hurdles at the Maharashtra State CBSE Athletics Meet held in Pune, clocking a personal best of 1:08.14. She is the first SIS student since 2019 to qualify for and place at the CBSE State Athletics finals. Anshika has been training at the SIS athletics camp under Coach Mahesh Patil for the past four years.",
        recipient: "Anshika Rao — Class XI",
        level: "State",
      },
      {
        id: "sports-004",
        date: "03 June 2026",
        dateISO: "2026-06-03",
        category: "Sports",
        title: "Kabaddi — Under-16 Boys, Runners-Up at Raigad District Level",
        detail:
          "The Under-16 boys' kabaddi team finished runners-up at the Raigad District Under-16 Kabaddi Championship, losing the final 31-29 to a strong JNPT School side in extra time. The team won four matches on the trot to reach the final, including a one-point semi-final victory over Bal Bharti Public School, Kharghar. All eight team members received district-level certificates from the Raigad District Sports Office.",
        recipient: "SIS U-16 Boys Kabaddi Team",
        level: "Zonal",
      },
    ],
  },
  olympiads: {
    headline: "Olympiads & Competitive Examinations",
    records: [
      {
        id: "olym-001",
        date: "15 September 2026",
        dateISO: "2026-09-15",
        category: "Olympiads",
        title: "SOF International Mathematics Olympiad — 4 Students Qualify for Level 2",
        detail:
          "Four Sanjivani students from Classes VI to IX qualified for the Second Level of the SOF International Mathematics Olympiad on the basis of their Level 1 scores. Aarav Sharma of Class VII secured the International Rank 103 and Zonal Rank 8, receiving a gold medal of excellence. Aditya Kale (Class VIII), Siddhi Phadke (Class IX), and Ishaan Deshmukh (Class VI) all scored within the top 500 ranks nationally.",
        recipient: "Aarav Sharma, Aditya Kale, Siddhi Phadke, Ishaan Deshmukh",
        level: "International",
      },
      {
        id: "olym-002",
        date: "29 August 2026",
        dateISO: "2026-08-29",
        category: "Olympiads",
        title: "National Science Olympiad — Zonal Gold & Silver for Class V & VII",
        detail:
          "Saanvi Shinde of Class V won the Zonal Gold Medal at the SOF National Science Olympiad (Level 1) with a perfect score of 60/60, becoming only the second SIS student in a decade to achieve a full score. Arjun Deshpande of Class VII received the Zonal Silver Medal, and 17 additional students received medals of distinction across Classes II–X.",
        recipient: "Saanvi Shinde (Class V), Arjun Deshpande (Class VII), and 17 students",
        level: "National",
      },
      {
        id: "olym-003",
        date: "12 July 2026",
        dateISO: "2026-07-12",
        category: "Olympiads",
        title: "Silverzone International Olympiad of English Language — 3 Rank Holders",
        detail:
          "Three Sanjivani students secured state-level ranks at the Silverzone IOEL 2025-26. Myra Kothari of Class III secured State Rank 3 and a cash prize of ₹5,000. Anvi Kadam of Class VI and Devansh Mehta of Class VIII secured State Rank 8 and 11 respectively in their categories. All three have also qualified for the final level to be held in January 2027.",
        recipient: "Myra Kothari, Anvi Kadam, Devansh Mehta — Classes III, VI & VIII",
        level: "International",
      },
      {
        id: "olym-004",
        date: "06 June 2026",
        dateISO: "2026-06-06",
        category: "Olympiads",
        title: "Unified Council NSTSE — 22 Medal Winners Across Classes II–X",
        detail:
          "Twenty-two SIS students were awarded medals in the Unified Council National Level Science Talent Search Examination (NSTSE) 2026. Achievers included 5 gold, 7 silver, and 10 bronze medallists. Rishita Agarwal of Class X secured an All-India Rank of 327, making her the highest-ranked SIS candidate this year. The school recorded a 38% improvement in the number of national top-1000 ranks compared to 2025.",
        recipient: "22 students across Classes II–X",
        level: "National",
      },
    ],
  },
  "inter-school": {
    headline: "Inter-School Competitions",
    records: [
      {
        id: "inter-001",
        date: "03 October 2026",
        dateISO: "2026-10-03",
        category: "Inter-School Competitions",
        title: "Kharghar Sahodaya Hindi Elocution — First Place, Class VIII–IX Category",
        detail:
          "Ananya Patil of Class IX won first prize in the Class VIII–IX category at the annual Kharghar Sahodaya Inter-School Hindi Elocution Competition, hosted this year by DAV Public School, Kharghar. Ananya spoke on the topic 'Samaj mein Mahilaon ki Bhoomika' (The Role of Women in Society) and received the rolling trophy and a citation from chief guest Prof. Savita Shukla of Mumbai University's Hindi Department. 18 schools from the Kharghar cluster participated.",
        recipient: "Ananya Patil — Class IX",
        level: "Cluster",
      },
      {
        id: "inter-002",
        date: "20 September 2026",
        dateISO: "2026-09-20",
        category: "Inter-School Competitions",
        title: "Navi Mumbai Inter-School Quiz — Runners-Up, Senior Category",
        detail:
          "The SIS Senior Quiz team of Aryan Das (X), Vrishank Menon (XI), and Riya Bhattacharya (XII) finished runners-up at the Navi Mumbai Inter-School General Knowledge Quiz held at NMSA Vashi, losing the final tiebreaker to the eventual champions, DPYA School. The team topped the preliminary round among 42 participating schools with a score of 28/30.",
        recipient: "Aryan Das, Vrishank Menon, Riya Bhattacharya",
        level: "City",
      },
      {
        id: "inter-003",
        date: "14 August 2026",
        dateISO: "2026-08-14",
        category: "Inter-School Competitions",
        title: "Inter-School Patriotic Singing Competition — Rolling Trophy Winners",
        detail:
          "The SIS senior choir (Classes VIII–XII) was awarded the overall Rolling Trophy at the Independence Day Inter-School Patriotic Singing Competition organised by the Kharghar Residents' Association. The choir, conducted by Music Teacher Mr. Santosh Mhatre, presented a three-song set in Marathi, Hindi, and Sanskrit including 'Vande Mataram' and 'Sare Jahan Se Achha.'",
        recipient: "SIS Senior Choir — Classes VIII–XII",
        level: "Cluster",
      },
      {
        id: "inter-004",
        date: "02 July 2026",
        dateISO: "2026-07-02",
        category: "Inter-School Competitions",
        title: "Panvel Taluka Street Play Competition — First Prize & Best Script",
        detail:
          "The SIS Dramatics Club won first prize and the Best Script award at the Panvel Taluka Inter-School Street Play Competition with their Marathi-Hindi production 'Badalta Swar' on the theme of menstrual hygiene awareness in rural Maharashtra. The 14-member cast was selected from Classes IX and X. The play was performed publicly twice at Kharghar's Central Park as part of the winning team's civic engagement commitment.",
        recipient: "SIS Dramatics Club — Classes IX & X",
        level: "Zonal",
      },
    ],
  },
  "state-national": {
    headline: "State & National Level Recognition",
    records: [
      {
        id: "sn-001",
        date: "28 September 2026",
        dateISO: "2026-09-28",
        category: "State & National",
        title: "CBSE National Group Dance Festival — Selected for Maharashtra State Finals",
        detail:
          "The SIS Classical Dance Troupe (12 students from Classes VII–X) was selected to represent the CBSE Raigad Cluster at the CBSE National Group Dance Festival state finals in Pune. Their presentation, 'Shivkalin Nritya — A tribute to Chhatrapati Shivaji Maharaj,' earned them the cluster selection at the CBSE Cluster VII cultural meet in August. The team has been invited to perform at the National Centre for Performing Arts, Mumbai in November.",
        recipient: "SIS Classical Dance Troupe — Classes VII–X",
        level: "State",
      },
      {
        id: "sn-002",
        date: "18 July 2026",
        dateISO: "2026-07-18",
        category: "State & National",
        title: "Maharashtra Rajya Chhatra Sansad — Yashasvi Koli Selected as Youth MLA",
        detail:
          "Yashasvi Koli of Class XI was selected as a Youth MLA representing the Panvel constituency at the 2026 Maharashtra Rajya Chhatra Sansad (State Students' Parliament) held at the Vidhan Bhavan, Mumbai in July. Chosen from over 1,200 applicants across the state, Yashasvi participated in a three-day legislative simulation and chaired a committee session on school mental health policy. She is the first SIS student ever to be selected.",
        recipient: "Yashasvi Koli — Class XI",
        level: "State",
      },
      {
        id: "sn-003",
        date: "09 June 2026",
        dateISO: "2026-06-09",
        category: "State & National",
        title: "National Children's Science Congress — 3 Projects Selected for District Level",
        detail:
          "Three SIS projects were selected at the school-level screening of the National Children's Science Congress (NCSC) 2026. Topics include a solar-powered automatic plant irrigation system (Class VII), a low-cost water purification device using laterite and neem (Class VIII), and a study of bird migration patterns at the Kharghar wetlands (Class X). All three teams will present at the Raigad district-level NCSC event in November.",
        recipient: "Team Solar Irrigation, Team Water Filter, Team Wetland Study",
        level: "National",
      },
      {
        id: "sn-004",
        date: "22 May 2026",
        dateISO: "2026-05-22",
        category: "State & National",
        title: "MHT-CET & NEET Entrance Results — 42 Students Above 90 Percentile",
        detail:
          "Forty-two students from the Class XII Science 2025-26 batch scored above the 90th percentile in either MHT-CET or NEET entrance examinations. Tanmay Joshi secured a 97.8 percentile in MHT-CET (PCM group) and is expected to secure admission at VJTI, Mumbai. Ameya Kulkarni secured an All-India NEET rank of 14,872, qualifying for MBBS admission at a government medical college in Maharashtra. 18 SIS alumni currently study at state medical and engineering colleges.",
        recipient: "Class XII Science Batch — MHT-CET & NEET Achievers",
        level: "State",
      },
    ],
  },
  "arts-cultural": {
    headline: "Arts & Cultural Achievements",
    records: [
      {
        id: "arts-001",
        date: "01 October 2026",
        dateISO: "2026-10-01",
        category: "Arts & Cultural",
        title: "Kala Mahotsav Painting Competition — First Prize, Senior Category",
        detail:
          "Ritika Menon of Class XII won the first prize in the Senior Category (Classes XI–XII) of the Navi Mumbai Kala Mahotsav 2026 All-India Painting Competition, held at CIDCO Exhibition Centre, Vashi. Her acrylic-on-canvas entry, 'Warkari — Pandharpurchi Vari,' was selected from 540 entries and will be exhibited at the Bal Gandharva Rang Mandir, Pune as part of the travelling Kala Mahotsav gallery in November.",
        recipient: "Ritika Menon — Class XII",
        level: "National",
      },
      {
        id: "arts-002",
        date: "19 August 2026",
        dateISO: "2026-08-19",
        category: "Arts & Cultural",
        title: "Gandharva Mahavidyalaya Sangeet Visharad — 4 Students Pass with Distinction",
        detail:
          "Four SIS students successfully completed the Akhil Bharatiya Gandharva Mahavidyalaya Mandal Sangeet Visharad examinations in Hindustani vocal music, all with distinction grade. Srushti Phatak (Class X) and Janhavi Joshi (Class VIII) received the highest possible grade of 'A Plus'. The school's music department offers after-school classes aligned with the Gandharva syllabus for interested students.",
        recipient: "Srushti Phatak, Janhavi Joshi, Ananya Date, Priya Kambli",
        level: "National",
      },
      {
        id: "arts-003",
        date: "30 June 2026",
        dateISO: "2026-06-30",
        category: "Arts & Cultural",
        title: "Bharatanatyam Arangetram of Pranavi Kulkarni — Class X",
        detail:
          "Pranavi Kulkarni of Class X performed her Bharatanatyam arangetram (debut solo recital) at the Vishnudas Bhave Auditorium, Vashi on 28 June 2026, becoming the fifth SIS student to do so while still in school. Pranavi, a student of Guru Mrs. Lakshmi Subramanian at the SIS Bharatanatyam stream, presented a two-hour margam repertoire to a packed auditorium. She was felicitated on stage by the school Principal the following week.",
        recipient: "Pranavi Kulkarni — Class X",
        level: "School",
      },
      {
        id: "arts-004",
        date: "05 June 2026",
        dateISO: "2026-06-05",
        category: "Arts & Cultural",
        title: "Navi Mumbai Municipal Corporation — World Environment Day Rangoli First Prize",
        detail:
          "The SIS Primary Rangoli Team of 12 students from Classes IV and V won first prize at the NMMC World Environment Day Inter-School Rangoli Competition held at Kharghar Central Park. Their rangoli, themed 'Vasundhara — Save the Western Ghats,' used only natural materials: turmeric, kumkum, rice flour, powdered flower petals, and laterite soil. The NMMC has requested to reproduce the design on a permanent mural near the Kharghar Wetlands Interpretation Centre.",
        recipient: "SIS Primary Rangoli Team — Classes IV & V",
        level: "City",
      },
    ],
  },
  "school-teacher": {
    headline: "School & Teacher Recognition",
    records: [
      {
        id: "st-001",
        date: "05 September 2026",
        dateISO: "2026-09-05",
        category: "School & Teacher Recognition",
        title: "Mrs. Prachi Deshpande — CBSE Teachers' Award 2026 (English, Senior Wing)",
        detail:
          "Mrs. Prachi Deshpande, Head of English and Class XII teacher, was awarded the CBSE Teachers' Award 2026 in the Secondary and Senior Secondary category, in recognition of 16 years of service and her work on innovative English language teaching methodologies for first-generation learners. The award was presented by the CBSE Regional Director, Pune at a ceremony held on Teachers' Day. Mrs. Deshpande joined SIS in 2010 and has mentored three batches of Class XII toppers.",
        recipient: "Mrs. Prachi Deshpande — HOD English",
        level: "National",
      },
      {
        id: "st-002",
        date: "15 August 2026",
        dateISO: "2026-08-15",
        category: "School & Teacher Recognition",
        title: "CIDCO Kharghar — Swachh Vidyalaya Puraskar for Green Campus",
        detail:
          "Sanjivani International School was conferred the CIDCO Kharghar Swachh Vidyalaya Puraskar 2026 in the 'Green Campus & Waste Management' category, in recognition of the school's zero-single-use-plastic policy, on-campus composting system, rainwater harvesting infrastructure, and student-led Eco Club drives. The award includes a cash grant of ₹50,000, which will be used to install additional solar-powered outdoor lighting across the campus walkways.",
        recipient: "Sanjivani International School — Campus & Eco Club",
        level: "City",
      },
      {
        id: "st-003",
        date: "18 July 2026",
        dateISO: "2026-07-18",
        category: "School & Teacher Recognition",
        title: "Mr. Mahesh Patil — Maharashtra State Best Physical Education Teacher",
        detail:
          "Mr. Mahesh Patil, Head of Physical Education at SIS since 2011, received the Maharashtra State Government's 'Best Physical Education Teacher — Raigad District' award from the District Collector at a ceremony in Alibaug. Mr. Patil coaches the SIS athletics, cricket, and kabaddi programmes and is credited with building the district-level athletics programme that produced 14 district-level athletes from SIS in the last five years.",
        recipient: "Mr. Mahesh Patil — HOD Physical Education",
        level: "State",
      },
      {
        id: "st-004",
        date: "30 April 2026",
        dateISO: "2026-04-30",
        category: "School & Teacher Recognition",
        title: "Sahodaya Accreditation — Academic Excellence Award for Class X & XII Results",
        detail:
          "Sanjivani International School received the Kharghar Sahodaya Schools Complex Academic Excellence Award for the 2025-26 academic session, in recognition of seven consecutive years of 100% pass results in both Class X and Class XII CBSE board examinations. The school also received a special citation for value-based co-curricular education and community engagement programmes among member schools of the 22-institution Sahodaya cluster.",
        recipient: "Sanjivani International School — Academics Wing",
        level: "Cluster",
      },
    ],
  },
} as const;
