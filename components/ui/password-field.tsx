"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { TextField, type TextFieldProps } from "@/components/ui/text-field";

type PasswordFieldProps = Omit<TextFieldProps, "type" | "endAdornment">;

export function PasswordField(props: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const Icon = visible ? EyeOff : Eye;

  return (
    <TextField
      {...props}
      type={visible ? "text" : "password"}
      endAdornment={
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          disabled={props.disabled}
          className="absolute top-1/2 right-3 grid size-8 -translate-y-1/2 place-items-center rounded-full text-shuttle-gray-400 transition-colors duration-200 hover:text-shuttle-gray-950 focus-visible:text-shuttle-gray-950 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Icon aria-hidden="true" className="size-5" />
        </button>
      }
    />
  );
}
