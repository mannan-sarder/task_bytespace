import Image from "next/image";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { HAPPY_STUDENTS } from "@/data/students";
import { cn } from "@/lib/utils";

type HappyStudentsVariant = "hero" | "lime";

interface HappyStudentsCardProps {
  /**
   * "hero" is the white card over the Home hero.
   * "lime" is the lime card beside the Login and Register forms.
   */
  variant?: HappyStudentsVariant;
  className?: string;
}

export function HappyStudentsCard({ variant = "hero", className }: HappyStudentsCardProps) {
  const { title, rating, reviews, avatars, extra } = HAPPY_STUDENTS;
  const isHero = variant === "hero";

  return (
    <aside
      className={cn(
        "flex w-[258px] flex-col justify-center gap-2 rounded-2xl p-4 backdrop-blur-[10px]",
        isHero ? "bg-white" : "bg-electric-lime-400",
        className,
      )}
    >
      <div className="flex flex-col items-start">
        <p
          className={cn(
            "text-label-m whitespace-nowrap text-shuttle-gray-950",
            isHero ? "leading-[1.2]" : "leading-6",
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "flex items-center whitespace-nowrap text-shuttle-gray-400",
            isHero ? "text-body-xs" : "text-[10px] leading-[1.5]",
          )}
        >
          <span className={cn("text-shuttle-gray-950", !isHero && "font-bold")}>{rating}&nbsp;</span>
          <span>{reviews}</span>
          <Image
            src={isHero ? "/images/icons/star-lime.svg" : "/images/icons/star-blue.svg"}
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
        </p>
      </div>
      <AvatarStack
        avatars={avatars}
        extra={extra}
        label={`${extra} happy students`}
        size="lg"
        tone={isHero ? "lime" : "dark"}
      />
    </aside>
  );
}
