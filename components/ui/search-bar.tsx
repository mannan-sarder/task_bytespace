import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder: string;
  label: string;
  buttonLabel: string;
  className?: string;
}

export function SearchBar({ placeholder, label, buttonLabel, className }: SearchBarProps) {
  return (
    <form role="search" className={cn("flex w-full items-start gap-4", className)}>
      <div className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-6 py-3 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-shuttle-gray-50 lg:w-[461px] lg:flex-none">
        <Image src="/images/icons/search.svg" alt="" width={24} height={24} className="size-6 shrink-0" />
        <input
          type="search"
          name="q"
          aria-label={label}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-body-l text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400"
        />
      </div>
      <Button type="submit" className="shrink-0">
        {buttonLabel}
      </Button>
    </form>
  );
}
