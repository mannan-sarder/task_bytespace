import type { Ornament } from "@/types";

/** Ornament placed from the 1440px Figma frame: x and y are the top-left corner inside that frame. */
function orn(id: string, name: string, size: number, x: number, y: number): Ornament {
  return { id, src: `/images/ornaments/${name}.png`, size, offsetX: x - 720, top: y };
}

export const PARTNER_LOGOS = [
  { id: 1, width: 168 },
  { id: 2, width: 168 },
  { id: 3, width: 170 },
  { id: 4, width: 170 },
  { id: 5, width: 170 },
].map(({ id, width }) => ({ id, src: `/images/partners/logo-${id}.svg`, width, height: 42 }));

export const COURSES_INTRO = {
  title: "Discover Your Passion, Build Your Skills",
  description:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
};

/** The three rows of category tabs in the Figma frame. */
export const COURSE_TAB_ROWS: string[][] = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export const CATEGORIES_INTRO = {
  title: "Explore Diverse Learning Paths at Bytespace",
  description:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there\u2019s something for everyone. Unleash your potential and explore our carefully curated categories.",
};

export const CATEGORIES = [
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
  { id: "it-software", label: "IT & Software" },
  { id: "business", label: "Business" },
  { id: "marketing", label: "Marketing" },
  { id: "photography", label: "Photography" },
].map((c) => ({ ...c, icon: `/images/categories/${c.id}.svg` }));

export const GROWTH_LEARNERS = {
  title: "Your Path to Professional Growth Starts Here!",
  description:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  stats: [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ],
};

export const GROWTH_CREATORS = {
  title: "Create & Manage Courses Easily.",
  brand: "ByteSpace",
  description: "supports individuals or entities in the creation, publication, and administration of educational courses.",
  benefits: ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"],
};

export const REVENUE_CARDS = {
  total: { title: "Total Revenue", period: "July 1-28", amount: "$120.29", change: "+12$" },
  yearly: { title: "Year to Date", period: "2023", amount: "$1,200.38", change: "+12$" },
};

/** Blurred radial glows behind sections. center is measured inside the 1440px frame, from the top of the section. */
export interface GlowSpec {
  id: string;
  color: string;
  radius: number;
  x: number;
  y: number;
  opacity: number;
}

export const GROWTH_GLOWS: GlowSpec[] = [
  { id: "g1", color: "0 59 226", radius: 568.5, x: 1290.5, y: 1356.5, opacity: 0.24 },
  { id: "g2", color: "203 252 1", radius: 568.5, x: 416.5, y: 102.5, opacity: 0.4 },
  { id: "g3", color: "0 59 226", radius: 568.5, x: 60.5, y: 751.5, opacity: 0.16 },
  { id: "g4", color: "0 59 226", radius: 568.5, x: 1379.5, y: 110.5, opacity: 0.08 },
  { id: "g5", color: "203 252 1", radius: 336, x: 49, y: 1282, opacity: 0.6 },
];

export const TESTIMONIAL_GLOWS: GlowSpec[] = [
  { id: "t1", color: "203 252 1", radius: 568.5, x: 1410.5, y: 327.5, opacity: 0.4 },
  { id: "t2", color: "203 252 1", radius: 336, x: 731, y: 198, opacity: 0.6 },
  { id: "t3", color: "0 59 226", radius: 568.5, x: 126.5, y: 717.5, opacity: 0.24 },
];

/** Ornaments of the growth section, y measured from the top of the section (page y 3120). */
export const GROWTH_ORNAMENTS: Ornament[] = [
  orn("growth-squiggle", "lime-squiggle", 216, 1162, 187),
  orn("growth-spring", "lime-spring", 216, 424, 858),
];

/** Ornaments of the creator call to action, y measured from the top of the section (page y 4580). */
export const CTA_ORNAMENTS: Ornament[] = [
  orn("cta-pyramid", "lime-pyramid", 189, 1078, 0),
  orn("cta-squiggle", "lime-squiggle", 332, 1107, 289),
  orn("cta-spring", "cta-spring", 387, -122, -162),
  orn("cta-spring-mirrored", "hero-46-95", 176, 179, 5),
  orn("cta-cone", "cta-cone", 189, -50, 225),
  orn("cta-ring", "lime-ring", 344, 16, 298),
  orn("cta-cylinder", "white-cylinder", 372, 1222, 5),
];

export const CTA_CONTENT = {
  title: "Unlock Your Potential as a Creator with ByteSpace",
  description:
    "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  buttonLabel: "Join as Creator",
};

export const TESTIMONIALS_INTRO = {
  title: "Discover What Our Community Is Saying",
  description:
    "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
};

export const TESTIMONIALS = [
  {
    id: "sarah",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatars/testimonial-1.png",
    quote:
      "\u201CByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\u201D",
  },
  {
    id: "james",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatars/testimonial-2.png",
    quote:
      "\u201CI\u2019ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\u201D",
  },
  {
    id: "alex",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatars/testimonial-3.png",
    quote:
      "\u201CAs a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\u2019s fulfilling to see my courses making a positive impact on learners globally.\u201D",
  },
];

export const FOOTER = {
  tagline: "Stay Up to date with our latest features and releases by joining our newsletter.",
  emailPlaceholder: "Enter your email",
  submitLabel: "Search",
  consent: "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
  columns: [
    { title: "Browse", links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"] },
    { title: "Browse (continued)", links: ["Development", "Marketing", "Photography", "Finance", "Sport"] },
    { title: "Platform", links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"] },
  ],
  copyright: "@ 2023 ByteSpace. All rights reserved.",
  legal: ["Privacy Policy", "Terms of Service", "Cookies Settings"],
};
