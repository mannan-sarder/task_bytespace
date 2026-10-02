import { cn } from "@/lib/utils";

interface RevenueCardProps {
  title: string;
  period: string;
  amount: string;
  change: string;
  /** The first card also shows a progress bar. */
  withProgress?: boolean;
  className?: string;
}

export function RevenueCard({ title, period, amount, change, withProgress = false, className }: RevenueCardProps) {
  return (
    <aside className={cn("flex flex-col gap-2 rounded-2xl bg-persian-blue-800 p-4 text-shuttle-gray-50", className)}>
      <div className="flex flex-col">
        <p className="text-label-m">{title}</p>
        <p className="text-[10px] leading-[1.2]">{period}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-display text-[24px] leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
        <span className="rounded-3xl bg-electric-lime-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-shuttle-gray-950">{change}</span>
      </div>
      {withProgress ? (
        <div className="h-2 w-[200px] rounded-3xl bg-white">
          <div className="h-full w-[56%] rounded-3xl bg-electric-lime-400" />
        </div>
      ) : null}
    </aside>
  );
}
