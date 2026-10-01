import type { ReactNode } from "react";
import Link from "next/link";
import type { AuthPageContent } from "@/data/auth";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  content: AuthPageContent;
  /** The form, rendered between the heading and the footer. */
  children: ReactNode;
  /** Extra content between the form and the footer (for example social sign-in). */
  middle?: ReactNode;
  className?: string;
}

/** White card shared by the Login and Register pages (579px wide in the 1440px frame). */
export function AuthCard({ content, children, middle, className }: AuthCardProps) {
  return (
    <section
      aria-labelledby="auth-title"
      className={cn(
        "flex w-full flex-col justify-between gap-10 rounded-3xl bg-white px-6 py-10 sm:px-10 lg:min-h-[784px] lg:px-[63px] lg:pt-[61px] lg:pb-10",
        className,
      )}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start">
          <p className="text-body-l text-persian-blue-800">{content.eyebrow}</p>
          <h1 id="auth-title" className="text-heading-m text-shuttle-gray-950">
            {content.title}
          </h1>
        </div>
        {children}
      </div>
      {middle}
      <p className="flex flex-wrap justify-center gap-x-1 text-center text-body-m leading-[1.6]">
        <span className="text-black-400">{content.prompt}</span>
        <Link
          href={content.promptHref}
          className="text-persian-blue-800 underline-offset-4 hover:underline"
        >
          {content.promptLinkLabel}
        </Link>
      </p>
    </section>
  );
}
