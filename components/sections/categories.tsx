import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CATEGORIES, CATEGORIES_INTRO } from "@/data/home";

export function Categories() {
  return (
    <section aria-labelledby="categories-title" className="py-12 lg:pb-[120px] lg:pt-0">
      <Container>
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2 id="categories-title" className="text-heading-s font-semibold text-[#040819] md:text-display-xs md:font-semibold">
            {CATEGORIES_INTRO.title}
          </h2>
          <p className="text-body-m text-shuttle-gray-400 md:text-body-l">{CATEGORIES_INTRO.description}</p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-[1202px] grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[39px] lg:grid-cols-6 lg:gap-10">
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <a
                href="#courses"
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-5xl border border-shuttle-gray-200 bg-white text-label-xl text-shuttle-gray-950 transition-colors duration-200 hover:bg-shuttle-gray-50"
              >
                <Image src={category.icon} alt="" width={60} height={60} className="size-[60px]" />
                <span>{category.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
