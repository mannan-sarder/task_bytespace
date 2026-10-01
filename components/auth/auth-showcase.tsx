import Image from "next/image";
import { CourseCard } from "@/components/ui/course-card";
import { HappyStudentsCard } from "@/components/ui/happy-students-card";
import { AUTH_SHOWCASE_COURSES } from "@/data/courses";
import { cn } from "@/lib/utils";

/**
 * Decorative composition on the left of the Login and Register frames: two course cards,
 * the "Happy Students" card and three 3D shapes. Offsets are measured from the left edge of
 * the 1200px content area and from the top of the page content (120px below the page top).
 */
export function AuthShowcase({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 select-none", className)}>
      <CourseCard
        course={AUTH_SHOWCASE_COURSES.back}
        variant="showcase"
        className="absolute top-[274px] left-0.5 h-[384px] w-[373px]"
      />
      <CourseCard
        course={AUTH_SHOWCASE_COURSES.front}
        variant="showcase"
        className="absolute top-[185px] left-[113px] h-[384px] w-[373px]"
      />
      <HappyStudentsCard variant="lime" className="absolute top-[620px] left-[228px]" />
      <Image
        src="/images/ornaments/auth-squiggle.png"
        alt=""
        width={175}
        height={175}
        className="absolute top-[506px] left-[350px] size-[175px]"
      />
      <Image
        src="/images/ornaments/auth-ring.png"
        alt=""
        width={146}
        height={146}
        className="absolute top-[200px] left-[31px] size-[146px]"
      />
      <Image
        src="/images/ornaments/auth-cone.png"
        alt=""
        width={188}
        height={188}
        className="absolute top-[582px] -left-[23px] size-[188px]"
      />
    </div>
  );
}
