export interface NavLink {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Student {
  id: string;
  avatar: ImageAsset;
}

export interface CourseChip {
  id: string;
  label: string;
}

export interface Course {
  id: string;
  title: string;
  author: string;
  level: string;
  rating: string;
  price: string;
  priceSuffix: string;
  thumbnail: ImageAsset;
  /** Avatars shown in the enrolled-students stack. */
  students: Student[];
  /** Label of the last, dark circle in the stack (for example "26+"). */
  studentsExtra: string;
  /** Glass chips laid over the thumbnail (used by the auth pages only). */
  chips?: CourseChip[];
}

/** A 3D decoration placed relative to the horizontal center of its section. */
export interface Ornament {
  id: string;
  src: string;
  /** Width and height in px (the shapes are square). */
  size: number;
  /** Distance in px from the horizontal center of the section to the left edge of the shape. */
  offsetX: number;
  /** Distance in px from the top of the section. */
  top: number;
}
