import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { AuthShell } from "@/components/layout/auth-shell";
import { LOGIN_CONTENT } from "@/data/auth";

export const metadata: Metadata = {
  title: "Sign In",
  description: LOGIN_CONTENT.intro.description,
};

export default function LoginPage() {
  return (
    <AuthShell intro={LOGIN_CONTENT.intro}>
      <LoginForm />
    </AuthShell>
  );
}
