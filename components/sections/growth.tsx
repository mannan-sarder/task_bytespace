import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CourseCard } from "@/components/ui/course-card";
import { Glows } from "@/components/ui/glow";
import { HappyStudentsCard } from "@/components/ui/happy-students-card";
import { LearningProgressCard } from "@/components/ui/learning-progress-card";
import { Ornaments } from "@/components/ui/ornaments";
import { RevenueCard } from "@/components/ui/revenue-card";
import { FEATURED_COURSE } from "@/data/courses";
import { GROWTH_CREATORS, GROWTH_GLOWS, GROWTH_LEARNERS, GROWTH_ORNAMENTS, REVENUE_CARDS } from "@/data/home";

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0 text-persian-blue-800" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function LearnersText() {
  return (
    <div className="flex w-full max-w-[574px] flex-col gap-10">
      <h2 className="max-w-[577px] text-heading-s font-semibold text-shuttle-gray-950 md:text-heading-m">{GROWTH_LEARNERS.title}</h2>
      <p className="max-w-[477px] text-body-m text-shuttle-gray-700 md:text-body-l">{GROWTH_LEARNERS.description}</p>
      <dl className="flex items-end gap-14">
        {GROWTH_LEARNERS.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <dd className="order-1 font-display text-[36px] leading-[44px] font-medium tracking-[-0.01em] text-persian-blue-800">{stat.value}</dd>
            <dt className="order-2 text-body-l text-shuttle-gray-700">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CreatorsText() {
  return (
    <div className="flex w-full max-w-[580px] flex-col gap-10">
      <h2 className="max-w-[420px] text-heading-s font-semibold text-shuttle-gray-950 md:text-heading-m">{GROWTH_CREATORS.title}</h2>
      <p className="text-body-m text-shuttle-gray-700 md:text-body-l">
        <strong className="font-bold text-shuttle-gray-950">{GROWTH_CREATORS.brand}</strong> {GROWTH_CREATORS.description}
      </p>
      <ul className="flex flex-col gap-4">
        {GROWTH_CREATORS.benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-2 text-label-l text-shuttle-gray-950">
            <CheckIcon />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Growth() {
  const { total, yearly } = REVENUE_CARDS;

  return (
    <section aria-label="Why ByteSpace" className="relative isolate overflow-hidden bg-[#FAFAFA] py-16 lg:h-[1460px] lg:py-0">
      <Glows items={GROWTH_GLOWS} />

      {/* Below lg: text with the photos underneath, without the floating cards. */}
      <Container className="flex flex-col gap-16 lg:hidden">
        <LearnersText />
        <Image src="/images/hero/hero-person.png" alt="A smiling student with headphones holding a laptop" width={578} height={541} sizes="(min-width: 640px) 578px, 100vw" className="mx-auto h-auto w-full max-w-[578px] drop-shadow-photo" />
        <CreatorsText />
      </Container>

      {/* lg and up: the composition as laid out in the 1440px frame. */}
      <div className="hidden lg:block">
        <div className="absolute top-[120px] left-[calc(50%-599px)] flex w-[1258px] flex-col gap-[72px]">
          <div className="flex items-center gap-[63px]">
            <LearnersText />
            <div className="relative h-[552px] w-[621px] shrink-0">
              <CourseCard course={FEATURED_COURSE} className="absolute top-0 left-0 h-[384px] w-[373px]" />
              <Image src="/images/hero/hero-person.png" alt="A smiling student with headphones holding a laptop" width={578} height={541} className="absolute top-[12px] left-0 h-[540px] w-[577px] max-w-none drop-shadow-photo" />
              <LearningProgressCard className="absolute top-[213px] left-[345px] w-[232px]" />
            </div>
          </div>

          <div className="flex items-center gap-[79px]">
            <div className="relative h-[596px] w-[541px] shrink-0">
              <RevenueCard {...total} withProgress className="absolute top-[44px] left-0 w-[232px]" />
              <RevenueCard {...yearly} className="absolute top-[194px] left-0 w-[134px]" />
              <div className="absolute top-0 left-[28px] h-[596px] w-[435px] overflow-hidden drop-shadow-photo">
                <Image src="/images/home/creator.png" alt="A smiling creator with headphones holding a tablet" width={500} height={500} className="absolute top-0 left-[-28.51%] h-[114.6%] w-[157.01%] max-w-none" />
              </div>
              <HappyStudentsCard className="absolute top-[413px] left-[283px]" />
            </div>
            <CreatorsText />
          </div>
        </div>
        <Ornaments items={GROWTH_ORNAMENTS} />
      </div>
    </section>
  );
}
