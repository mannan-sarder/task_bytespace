import Image from "next/image";
import { Container } from "@/components/ui/container";
import { GridBackground } from "@/components/ui/grid-background";
import { HappyStudentsCard } from "@/components/ui/happy-students-card";
import { Ornaments } from "@/components/ui/ornaments";
import { SearchBar } from "@/components/ui/search-bar";
import { cn } from "@/lib/utils";
import { HERO_CONTENT, HERO_ORNAMENTS, LEARNING_PROGRESS, TOPIC_HIGHLIGHT } from "@/data/hero";

const floatingCard = "rounded-2xl bg-white p-4 backdrop-blur-[10px]";

function LearningProgressCard({ className }: { className?: string }) {
  return (
    <div className={cn(floatingCard, "flex flex-col items-start gap-2", className)}>
      <p className="text-label-s text-shuttle-gray-950">{LEARNING_PROGRESS.title}</p>
      <p className="w-[200px] font-display text-[48px] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-950">
        {LEARNING_PROGRESS.value}
      </p>
      <div
        role="progressbar"
        aria-label={LEARNING_PROGRESS.title}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={LEARNING_PROGRESS.percent}
        className="h-2 w-[200px] rounded-3xl bg-[#F6F6F6]"
      >
        <div
          className="h-full rounded-3xl bg-electric-lime-400"
          style={{ width: LEARNING_PROGRESS.barFill }}
        />
      </div>
    </div>
  );
}

function TopicCard({ className }: { className?: string }) {
  return (
    <div className={cn(floatingCard, className)}>
      <p className="text-label-m whitespace-nowrap text-shuttle-gray-950">{TOPIC_HIGHLIGHT.title}</p>
      <p className="flex items-start gap-2 whitespace-nowrap text-body-xs text-shuttle-gray-400">
        <span>{TOPIC_HIGHLIGHT.courses}</span>
        <span aria-hidden="true" className="text-[10px] leading-[1.5]">
          •
        </span>
        <span>{TOPIC_HIGHLIGHT.students}</span>
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-persian-blue-800 pt-[152px] pb-16 lg:h-[1024px] lg:pt-[169px] lg:pb-0"
    >
      <GridBackground className="-z-20" />
      <Image
        src="/images/hero/hero-dome.svg"
        alt=""
        width={1149}
        height={1149}
        aria-hidden="true"
        className="absolute top-[calc(100%-360px)] left-1/2 -z-10 size-[1149px] max-w-none -translate-x-1/2 lg:top-[582px]"
      />

      <Container className="relative flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1
            id="hero-title"
            className="max-w-[935px] text-display-xs font-semibold text-white md:text-heading-m lg:text-heading-l"
          >
            {HERO_CONTENT.title}
          </h1>
          <p className="text-body-l text-shuttle-gray-100 lg:whitespace-nowrap">
            {HERO_CONTENT.description}
          </p>
        </div>
        <SearchBar
          placeholder={HERO_CONTENT.searchPlaceholder}
          label={HERO_CONTENT.searchLabel}
          buttonLabel={HERO_CONTENT.searchButton}
          className="max-w-[581px]"
        />
      </Container>

      {/* Below lg: the photo with the three cards underneath it. */}
      <Container className="relative mt-14 flex flex-col items-center gap-6 lg:hidden">
        <Image
          src="/images/hero/hero-person.png"
          alt="A smiling student with headphones holding a laptop"
          width={578}
          height={541}
          priority
          sizes="(min-width: 640px) 578px, 100vw"
          className="h-auto w-full max-w-[578px] drop-shadow-photo"
        />
        <div className="flex flex-wrap items-start justify-center gap-4">
          <LearningProgressCard />
          <HappyStudentsCard />
          <TopicCard />
        </div>
      </Container>

      {/* lg and up: the composition as laid out in the 1440px frame, centered on the page. */}
      <div className="hidden lg:block">
        <Image
          src="/images/hero/hero-person.png"
          alt="A smiling student with headphones holding a laptop"
          width={578}
          height={541}
          priority
          sizes="578px"
          className="absolute top-[512px] left-1/2 h-[541px] w-[578px] max-w-none -translate-x-1/2 drop-shadow-photo"
        />
        <LearningProgressCard className="absolute top-[651px] left-[calc(50%+122px)]" />
        <HappyStudentsCard className="absolute top-[837px] left-[calc(50%-392px)]" />
        <Ornaments items={HERO_ORNAMENTS} />
        <TopicCard className="absolute top-[639px] left-[calc(50%-316px)]" />
      </div>
    </section>
  );
}
