import { cn } from "@/lib/utils";

/**
 * The 120px line grid behind the hero, CTA and auth pages.
 * Figma draws it as 1px lines every 120px; it is tiled here so it fills any width and height.
 */
export function GridBackground({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 bg-grid", className)} />;
}
