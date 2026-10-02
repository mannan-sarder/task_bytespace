import type { GlowSpec } from "@/data/home";

/**
 * Blurred radial glows that sit behind a section. Each glow is centered from the horizontal center
 * of the section, as in the 1440px Figma frame, so it stays put on wider screens.
 */
export function Glows({ items }: { items: GlowSpec[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 select-none">
      {items.map(({ id, color, radius, x, y, opacity }) => (
        <div
          key={id}
          className="absolute rounded-full blur-[20px]"
          style={{
            width: radius * 2,
            height: radius * 2,
            left: `calc(50% + ${x - 720 - radius}px)`,
            top: y - radius,
            opacity,
            background: `radial-gradient(closest-side, rgb(${color} / 1) 0%, rgb(${color} / 0.23) 53%, rgb(${color} / 0.06) 75%, rgb(${color} / 0) 100%)`,
          }}
        />
      ))}
    </div>
  );
}
