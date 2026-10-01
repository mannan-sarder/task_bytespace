import type { LoginValues, RegisterValues } from "@/lib/validations/auth";

/**
 * The brief has no backend, so these functions only simulate a network request.
 * Replace the body with a real API call when one exists; the forms need no change.
 */
const SIMULATED_LATENCY_MS = 1200;

function simulateRequest(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, SIMULATED_LATENCY_MS);
  });
}

export async function signIn(values: LoginValues): Promise<void> {
  void values;
  await simulateRequest();
}

export async function signUp(values: RegisterValues): Promise<void> {
  void values;
  await simulateRequest();
}
