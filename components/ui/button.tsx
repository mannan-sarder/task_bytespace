import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonSize = "md" | "sm";

const baseStyles =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap bg-electric-lime-400 text-shuttle-gray-950 transition-colors duration-200 hover:bg-electric-lime-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-electric-lime-400";

const sizeStyles: Record<ButtonSize, string> = {
  md: "rounded-3xl px-6 py-3 text-label-l",
  sm: "rounded-3xl px-4 py-2 text-label-m",
};

interface ButtonStyleOptions {
  size?: ButtonSize;
  className?: string;
}

function buttonStyles({ size = "md", className }: ButtonStyleOptions): string {
  return cn(baseStyles, sizeStyles[size], className);
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  size?: ButtonSize;
}

export function Button({ size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles({ size, className })} {...props} />;
}

interface ButtonLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  size?: ButtonSize;
}

export function ButtonLink({ size, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonStyles({ size, className })} {...props} />;
}
