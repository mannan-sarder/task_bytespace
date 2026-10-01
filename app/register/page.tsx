import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";
import { AuthShell } from "@/components/layout/auth-shell";
import { REGISTER_CONTENT } from "@/data/auth";

export const metadata: Metadata = {
  title: "Create an Account",
  description: REGISTER_CONTENT.intro.description,
};

export default function RegisterPage() {
  return (
    <AuthShell intro={REGISTER_CONTENT.intro}>
      <RegisterForm />
    </AuthShell>
  );
}
