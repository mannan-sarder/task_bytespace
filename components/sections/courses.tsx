import { CategoryTabs } from "@/components/ui/category-tabs";
import { Container } from "@/components/ui/container";
import { CourseCard } from "@/components/ui/course-card";
import { COURSES } from "@/data/courses";
import { COURSES_INTRO, COURSE_TAB_ROWS } from "@/data/home";

export function Courses() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="scroll-mt-4 pt-[72px] pb-12 lg:pb-[72px]">
      <Container>
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2 id="courses-title" className="max-w-[588px] text-display-xs font-semibold text-[#040819] md:text-heading-m">
            {COURSES_INTRO.title}
          </h2>
          <p className="text-body-m text-shuttle-gray-400 md:text-body-l">{COURSES_INTRO.description}</p>
        </div>

        <CategoryTabs rows={COURSE_TAB_ROWS} className="mx-auto mt-[42px]" />

        <ul className="mt-12 grid justify-items-center gap-6 md:grid-cols-2 lg:mt-[77px] lg:grid-cols-3 lg:gap-10">
          {COURSES.map((course) => (
            <li key={course.id} className="w-full max-w-[373px]">
              <CourseCard course={course} className="h-[384px] w-full" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
