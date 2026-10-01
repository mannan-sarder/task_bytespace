import type { ImageAsset } from "@/types";

function avatar(index: number): ImageAsset {
  return { src: `/images/avatars/student-${index}.png`, width: 43, height: 43, alt: "" };
}

/** Content of the "Happy Students" card. */
export const HAPPY_STUDENTS = {
  title: "Happy Students",
  rating: "4.5",
  reviews: "(240)",
  avatars: [1, 2, 3, 4, 5, 6, 7].map(avatar),
  extra: "2K+",
};
