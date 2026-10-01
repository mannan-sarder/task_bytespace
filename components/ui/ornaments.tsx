import Image from "next/image";
import type { Ornament } from "@/types";

/**
 * Decorative 3D shapes. Each one is positioned from the horizontal center of the section,
 * which is how they are laid out in the 1440px Figma frames, so they stay put on wider screens
 * and are cropped by the section on narrower ones.
 */
export function Ornaments({ items }: { items: Ornament[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
      {items.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt=""
          width={item.size}
          height={item.size}
          className="absolute max-w-none"
          style={{
            left: `calc(50% + ${item.offsetX}px)`,
            top: item.top,
            width: item.size,
            height: item.size,
          }}
        />
      ))}
    </div>
  );
}
