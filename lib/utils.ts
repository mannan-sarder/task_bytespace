type ClassValue = string | false | null | undefined | ClassValue[];

/**
 * Joins class names, skipping falsy values.
 * It does not resolve conflicting Tailwind utilities; use it for composition only.
 */
export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) classes.push(nested);
    } else if (input) {
      classes.push(input);
    }
  }

  return classes.join(" ");
}
