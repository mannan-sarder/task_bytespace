import Image from "next/image";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

type AvatarStackSize = "sm" | "lg";
type AvatarStackTone = "lime" | "dark";

interface AvatarStackProps {
  avatars: ImageAsset[];
  /** Text inside the last circle, for example "26+". */
  extra: string;
  /** Screen reader text for the whole stack. */
  label: string;
  size?: AvatarStackSize;
  tone?: AvatarStackTone;
  className?: string;
}

const sizeStyles: Record<AvatarStackSize, { circle: string; overlap: string; extraText: string }> = {
  sm: { circle: "size-8", overlap: "-ml-2", extraText: "text-label-xs" },
  lg: { circle: "size-[43px]", overlap: "-ml-4", extraText: "text-body-xs leading-[1.5] font-bold" },
};

const toneStyles: Record<AvatarStackTone, string> = {
  lime: "bg-electric-lime-400 text-shuttle-gray-950",
  dark: "bg-black-950 text-shuttle-gray-50",
};

/** Overlapping round avatars followed by a count circle. */
export function AvatarStack({
  avatars,
  extra,
  label,
  size = "sm",
  tone = "lime",
  className,
}: AvatarStackProps) {
  const { circle, overlap, extraText } = sizeStyles[size];

  return (
    <div className={cn("flex items-start", className)}>
      <span className="sr-only">{label}</span>
      <ul aria-hidden="true" className="flex items-start">
        {avatars.map((avatar, index) => (
          <li key={avatar.src} className={cn("shrink-0", index > 0 && overlap)}>
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={avatar.width}
              height={avatar.height}
              className={cn("rounded-full", circle)}
            />
          </li>
        ))}
        <li
          className={cn(
            "grid shrink-0 place-items-center rounded-full",
            overlap,
            circle,
            extraText,
            toneStyles[tone],
          )}
        >
          {extra}
        </li>
      </ul>
    </div>
  );
}
