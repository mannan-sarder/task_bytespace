import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/constants/site";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

type LogoTone = "light" | "dark" | "transparent";

const wordmarkTone: Record<LogoTone, string> = {
  light: "text-shuttle-gray-50",
  dark: "text-shuttle-gray-950",
  // The Login and Register frames set the wordmark fill to transparent, so only the mark shows.
  transparent: "text-transparent",
};

interface LogoProps {
  tone?: LogoTone;
  priority?: boolean;
  className?: string;
}

export function Logo({ tone = "dark", priority = false, className }: LogoProps) {
  return (
    <Link
      href={ROUTES.home}
      aria-label={`${SITE_NAME} home`}
      className={cn("inline-flex items-start gap-[8.125px]", className)}
    >
      <Image
        src="/images/brand/logo-mark.svg"
        alt=""
        width={29}
        height={32}
        priority={priority}
        className="h-[31.5px] w-[28.875px]"
      />
      <span
        aria-hidden="true"
        className={cn("mt-[7px] font-logo text-[24px] leading-[normal] font-bold", wordmarkTone[tone])}
      >
        {SITE_NAME}
      </span>
    </Link>
  );
}
