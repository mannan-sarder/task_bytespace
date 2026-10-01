import type { Ornament } from "@/types";

export const HERO_CONTENT = {
  title: "Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  searchPlaceholder: "Course, topic, creator",
  searchLabel: "Search courses, topics or creators",
  searchButton: "Search",
};

export const LEARNING_PROGRESS = {
  title: "Learning Progress",
  value: "55%",
  percent: 55,
  /** Width of the filled part of the bar in Figma (112px of 200px). */
  barFill: "56%",
};

export const TOPIC_HIGHLIGHT = {
  title: "UI/UX Design",
  courses: "200 Courses",
  students: "1000+ Students",
};

/** Figma nodes 46:85, 46:90, 46:95, 46:105, 46:110 and 46:80 in the "3d ornament" group of the hero. */
export const HERO_ORNAMENTS: Ornament[] = [
  { id: "46-85", src: "/images/ornaments/hero-46-85.png", size: 330, offsetX: 407, top: 672 },
  { id: "46-90", src: "/images/ornaments/hero-46-90.png", size: 385, offsetX: -838, top: 221 },
  { id: "46-95", src: "/images/ornaments/hero-46-95.png", size: 175, offsetX: -537, top: 477 },
  { id: "46-105", src: "/images/ornaments/hero-46-105.png", size: 342, offsetX: -702, top: 682 },
  { id: "46-110", src: "/images/ornaments/hero-46-110.png", size: 370, offsetX: 511, top: 221 },
  { id: "46-80", src: "/images/ornaments/hero-46-80.png", size: 188, offsetX: 386, top: 464 },
];
