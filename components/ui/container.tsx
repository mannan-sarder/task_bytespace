import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentPropsWithoutRef<"div">;

/**
 * Centers content within the 1200px content width used by the Figma design
 * (120px side margins on the 1440px frame). Below that width the side
 * gutters are fixed; they are inferred, since Figma only provides a desktop frame.
 */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10 xl:px-0", className)}
      {...props}
    />
  );
}
