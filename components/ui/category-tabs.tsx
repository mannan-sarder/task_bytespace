"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  rows: string[][];
  className?: string;
}

/** Pill tabs in the rows drawn in Figma. Only the selected state is interactive; the course list is the same for every tab. */
export function CategoryTabs({ rows, className }: CategoryTabsProps) {
  const [active, setActive] = useState(rows[0]?.[0] ?? "");
  const lastRow = rows.length - 1;

  return (
    <div role="tablist" aria-label="Course categories" className={cn("flex flex-col items-center gap-[21px]", className)}>
      {rows.map((row, rowIndex) => (
        <div key={row.join("-")} className="flex flex-wrap items-center justify-center gap-4 xl:flex-nowrap">
          {row.map((label) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={active === label}
              onClick={() => setActive(label)}
              className={cn(
                "rounded-3xl px-4 py-3 text-label-m whitespace-nowrap transition-colors duration-200",
                active === label
                  ? "bg-electric-lime-400 text-shuttle-gray-950"
                  : "bg-shuttle-gray-50 text-shuttle-gray-900 hover:bg-shuttle-gray-100",
              )}
            >
              {label}
            </button>
          ))}
          {rowIndex === lastRow ? (
            <button type="button" className="py-3 text-label-m whitespace-nowrap text-persian-blue-800">
              + More
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
}
