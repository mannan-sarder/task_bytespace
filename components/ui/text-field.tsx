"use client";

import { useId, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TextFieldProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
  /** Element rendered inside the field, at its right edge (for example a show/hide button). */
  endAdornment?: ReactNode;
}

export function TextField({
  id,
  label,
  error,
  endAdornment,
  className,
  ...props
}: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  return (
    <div className="flex w-full flex-col items-start gap-2">
      <label htmlFor={inputId} className="text-label-s text-shuttle-gray-950">
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "block h-[52px] w-full rounded-xl border bg-white px-6 py-3 text-body-l text-shuttle-gray-950 transition-colors duration-200 placeholder:text-shuttle-gray-400 focus-visible:border-persian-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-blue-800 disabled:cursor-not-allowed disabled:opacity-60",
            error ? "border-error" : "border-shuttle-gray-100",
            endAdornment ? "pr-14" : undefined,
            className,
          )}
          {...props}
        />
        {endAdornment}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="text-body-s text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
