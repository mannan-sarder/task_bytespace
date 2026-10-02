import { cn } from "@/lib/utils";

interface LearningProgressCardProps {
  className?: string;
}

/** White "Learning Progress" card used beside the person photo in the growth section. */
export function LearningProgressCard({ className }: LearningProgressCardProps) {
  return (
    <aside className={cn("flex flex-col items-start gap-2 rounded-2xl bg-white p-4", className)}>
      <p className="text-label-s text-shuttle-gray-950">Learning Progress</p>
      <p className="w-[200px] font-display text-[48px] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-950">55%</p>
      <div
        role="progressbar"
        aria-label="Learning Progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={55}
        className="h-2 w-[200px] rounded-3xl bg-[#F6F6F6]"
      >
        <div className="h-full w-[56%] rounded-3xl bg-electric-lime-400" />
      </div>
    </aside>
  );
}
