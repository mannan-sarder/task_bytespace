import Image from "next/image";
import { AvatarStack } from "@/components/ui/avatar-stack";
import type { Course } from "@/types";
import { cn } from "@/lib/utils";

type CourseCardVariant = "catalog" | "showcase";

interface CourseCardProps {
  course: Course;
  /**
   * "catalog" is the card in the course grid on the Home page.
   * "showcase" is the same card as drawn beside the Login and Register forms, where Figma
   * uses slightly different line heights and a dark count circle.
   */
  variant?: CourseCardVariant;
  className?: string;
}

export function CourseCard({ course, variant = "catalog", className }: CourseCardProps) {
  const isShowcase = variant === "showcase";
  const currency = course.price.charAt(0);
  const amount = course.price.slice(1);

  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-3xl border border-shuttle-gray-200 bg-white p-[15px] pb-5",
        className,
      )}
    >
      <div className="relative aspect-[341/195.145] w-full shrink-0 overflow-hidden rounded-xl">
        <Image
          src={course.thumbnail.src}
          alt={course.thumbnail.alt}
          fill
          sizes="(min-width: 1280px) 341px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {course.chips ? (
          <ul
            className={cn(
              "absolute right-3 bottom-[13px] flex flex-wrap gap-x-3 gap-y-2",
              isShowcase ? "left-3" : "left-[13px]",
            )}
          >
            {course.chips.map((chip) => (
              <li
                key={chip.id}
                className={cn(
                  "rounded-3xl bg-shuttle-gray-50/60 px-3 py-1.5 text-label-xs whitespace-nowrap text-black-700 backdrop-blur-[4px]",
                  !isShowcase && "leading-[1.2]",
                )}
              >
                {chip.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-[21px] flex min-w-0 flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 flex-col items-start">
            <h3
              className={cn(
                "max-w-full truncate text-heading-xs text-black-950",
                isShowcase ? "leading-7" : "leading-[1.2]",
              )}
            >
              {course.title}
            </h3>
            <p className={cn("text-body-xs text-black-700", isShowcase && "leading-5")}>
              by <span className="text-persian-blue-800">{course.author}</span>
            </p>
          </div>
          <p
            className={cn(
              "flex shrink-0 items-center text-body-l whitespace-nowrap text-black-700",
              isShowcase ? "leading-7 font-medium" : "leading-[1.6]",
            )}
          >
            <span className="sr-only">Rating: </span>
            <span>{course.rating}&nbsp;</span>
            <Image
              src={isShowcase ? "/images/icons/star-lime.svg" : "/images/icons/star-gray.svg"}
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
          </p>
        </div>

        <div className="flex items-center gap-3">
          <p className="flex items-center gap-1 rounded-3xl bg-shuttle-gray-50 px-3 py-1.5 text-label-xs text-shuttle-gray-700">
            <Image
              src="/images/icons/signal-cellular-alt.svg"
              alt=""
              width={20}
              height={20}
              className="size-5"
            />
            {course.level}
          </p>
          <AvatarStack
            avatars={course.students.map((student) => student.avatar)}
            extra={course.studentsExtra}
            label={`${course.studentsExtra} students enrolled`}
            tone={isShowcase ? "dark" : "lime"}
          />
        </div>

        <p className="flex items-end whitespace-nowrap">
          <span
            className={cn(
              "text-heading-xs text-persian-blue-800",
              isShowcase ? "leading-7" : "h-6 leading-[1.2]",
            )}
          >
            {isShowcase ? <span className="font-medium">{currency}</span> : currency}
            {amount}
          </span>
          <span className={cn("text-body-xs text-black-700", isShowcase && "leading-5")}>
            {course.priceSuffix}
          </span>
        </p>
      </div>
    </article>
  );
}
