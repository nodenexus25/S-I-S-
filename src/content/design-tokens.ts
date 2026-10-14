const campusHeroPrompt = encodeURIComponent(
  "cinematic wide photograph of an Indian international school campus in Kharghar Maharashtra, warm golden hour sunlight, red laterite soil and green mango trees, children in school uniform walking naturally along a paved pathway, academic buildings in the background, editorial composition, warm ivory and terracotta tones, documentary humanist photography, no illustration, no text overlay, subtle film grain, high detail",
);

const classroomPrompt = encodeURIComponent(
  "warm editorial photograph of a modern Indian school classroom, students collaborating, natural daylight, wooden desks, potted plants, bright but soft light, sage and terracotta classroom accents, children smiling naturally, candid teacher moment, no text overlay, documentary photography, high detail",
);

const sportsPrompt = encodeURIComponent(
  "editorial action photograph of Indian school students playing football on a green field, golden evening light, motion, joyful expression, terracotta running track border, no text overlay, documentary sports photography, high detail",
);

const libraryPrompt = encodeURIComponent(
  "warm quiet editorial photograph of school library interior, natural daylight from large windows, wooden bookshelves, sage green accents, one student reading quietly, cozy nook, warm ivory walls, no text overlay, editorial architecture photography",
);

const labPrompt = encodeURIComponent(
  "editorial photograph of Indian school science laboratory, beakers with coloured liquids, students in lab coats working with teacher, natural light, wooden lab benches, safety equipment, no text overlay, documentary photography, high detail",
);

const artsPrompt = encodeURIComponent(
  "warm editorial photograph of Indian school art classroom, children painting at easels, terracotta and sage artwork on walls, paint palettes and paper scattered, candid joyful expressions, natural daylight from side windows, no text overlay, documentary photography",
);

export const editorialTokens = {
  colors: {
    ivory: "#F8F7F2",
    ivoryWarm: "#F4F1EA",
    cream: "#EDE8DE",
    charcoal: "#1A1A1A",
    ink: "#232427",
    inkSoft: "#3A3B3E",
    terracotta: "#B8593E",
    terracottaSoft: "#D98B70",
    terracottaWash: "#F3DDD3",
    sage: "#8AA288",
    sageDeep: "#6B8368",
    sageWash: "#E4ECDF",
    forest: "#2F4A3C",
    forestDeep: "#1E3328",
    clay: "#A8765A",
    sand: "#D6C9B5",
  },
  typography: {
    display: {
      family: "Cormorant Garamond",
      usage: "Headlines, pull quotes, editorial titles",
      weights: [400, 500, 600, 700] as const,
    },
    body: {
      family: "Inter",
      usage: "Body copy, interface chrome, navigation, forms",
      weights: [300, 400, 500, 600, 700] as const,
    },
    scale: {
      eyebrow: "0.75rem",
      body: "1rem",
      lead: "1.125rem",
      h3: "1.75rem",
      h2: "clamp(2rem, 3.6vw, 2.875rem)",
      h1: "clamp(3rem, 6vw, 5rem)",
      hero: "clamp(3.5rem, 8vw, 6.25rem)",
    },
    tracking: {
      eyebrow: "0.18em",
      nav: "0.16em",
      display: "-0.015em",
      caption: "0.14em",
    },
    lineHeight: {
      compact: "1.00",
      heading: "1.05",
      body: "1.7",
      lead: "1.8",
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "3rem",
    "4xl": "5rem",
    "5xl": "7.5rem",
    editorialMarginDesktop: "4.5rem",
    editorialMarginMobile: "1.25rem",
  },
  layout: {
    columns: 12,
    maxWidth: "92rem",
    editorialSplit: ["7 / 5", "5 / 7", "8 / 4"] as const,
    sectionRule: "1px solid rgba(47, 74, 60, 0.2)",
    sectionRuleWarm: "1px solid rgba(184, 89, 62, 0.22)",
    radius: {
      button: "2px",
      image: "4px",
      card: "6px",
    },
    aspect: {
      narrativeMobile: "40 / 21",
      narrativeDesktop: "16 / 7",
      editorialCard: "4 / 3",
      square: "1 / 1",
    },
  },
  motion: {
    reveal: "fade-rise 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
    heroKenBurns: "slow-ken-burns 20s ease-in-out infinite alternate",
    duration: {
      fast: "180ms",
      base: "400ms",
      slow: "700ms",
    },
    ease: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
  signature: {
    monogram: "S",
    tagline: "A Living School on the Banks of the Godavari",
    heritageLines: [
      "Est. Two Decades in Kharghar",
      "CBSE · Pre-Primary to Senior Secondary",
      "Sanjivani International Education Trust",
    ],
  },
} as const;

export type EditorialTokens = typeof editorialTokens;

export const campusPhotography = {
  hero: {
    alt: "Cinematic campus photograph of Sanjivani International School, Kharghar at golden hour.",
    src: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${campusHeroPrompt}&image_size=landscape_16_9`,
  },
  classroom: {
    alt: "Students collaborating in a bright modern classroom at Sanjivani International School.",
    src: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${classroomPrompt}&image_size=landscape_4_3`,
  },
  sports: {
    alt: "Students playing football on the SIS campus field in golden evening light.",
    src: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${sportsPrompt}&image_size=landscape_4_3`,
  },
  library: {
    alt: "Warm quiet interior of the Sanjivani International School library.",
    src: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${libraryPrompt}&image_size=landscape_4_3`,
  },
  lab: {
    alt: "Students working with a teacher in the SIS science laboratory.",
    src: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${labPrompt}&image_size=landscape_4_3`,
  },
  arts: {
    alt: "Children painting in the art room at Sanjivani International School.",
    src: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${artsPrompt}&image_size=landscape_4_3`,
  },
} as const;
