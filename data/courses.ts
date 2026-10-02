import type { Course, CourseChip, ImageAsset } from "@/types";

const COURSE_CHIPS: CourseChip[] = [
  { id: "lessons", label: "17 Lessons" },
  { id: "duration", label: "2 hours 16 mins" },
  { id: "comments", label: "59 Comments" },
];

/** The four enrolled-student avatars shown on every course card. */
const COURSE_STUDENTS = [1, 2, 3, 4].map((index) => ({
  id: `student-${index}`,
  avatar: {
    src: `/images/avatars/course-${index}.png`,
    width: 32,
    height: 32,
    alt: "",
  } satisfies ImageAsset,
}));

interface CourseSeed {
  id: string;
  title: string;
  thumbnail: string;
}

const COURSE_SEEDS: CourseSeed[] = [
  { id: "learn-figma-from-basic", title: "Learn Figma from Basic", thumbnail: "learn-figma-from-basic" },
  { id: "build-digital-asset", title: "Build Digital Asset", thumbnail: "build-digital-asset" },
  { id: "power-of-big-data", title: "the Power of Big Data", thumbnail: "power-of-big-data" },
  {
    id: "balancing-productivity",
    title: "Balancing Productivity and Self-Care",
    thumbnail: "balancing-productivity",
  },
  { id: "mastering-money", title: "Mastering Money Management", thumbnail: "mastering-money" },
  { id: "idea-to-startup", title: "From Idea to Startup Success", thumbnail: "idea-to-startup" },
];

export const COURSES: Course[] = COURSE_SEEDS.map((seed) => ({
  id: seed.id,
  title: seed.title,
  author: "purepearl studio",
  level: "Beginner",
  rating: "4.5",
  price: "$25",
  priceSuffix: "/lifetime",
  thumbnail: {
    src: `/images/courses/${seed.thumbnail}.jpg`,
    width: 341,
    height: 195,
    alt: "",
  },
  students: COURSE_STUDENTS,
  studentsExtra: "26+",
  chips: COURSE_CHIPS,
}));

function requireCourse(id: string): Course {
  const course = COURSES.find((candidate) => candidate.id === id);
  if (!course) throw new Error(`Unknown course: ${id}`);
  return course;
}

/** The two course cards drawn beside the Login and Register forms. */
export const AUTH_SHOWCASE_COURSES = {
  back: requireCourse("build-digital-asset"),
  front: requireCourse("power-of-big-data"),
};

/** The course card drawn in the "Your Path to Professional Growth" section of the Home page. */
export const FEATURED_COURSE = requireCourse("learn-figma-from-basic");
