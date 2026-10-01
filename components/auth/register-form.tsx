"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AuthCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import { PasswordField } from "@/components/ui/password-field";
import { TextField } from "@/components/ui/text-field";
import { ROUTES } from "@/constants/routes";
import { REGISTER_CONTENT } from "@/data/auth";
import { signUp } from "@/lib/auth";
import { registerSchema, type RegisterValues } from "@/lib/validations/auth";

export function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: { fullName: "", email: "", password: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signUp(values);
      router.push(ROUTES.home);
    } catch {
      setError("root", { message: "We could not create your account. Please try again." });
    }
  });

  return (
    // The Register frame leaves 51px below the footer text instead of the Login frame's 40px.
    <AuthCard content={REGISTER_CONTENT} className="lg:pb-[51px]">
      <form onSubmit={onSubmit} noValidate aria-busy={isSubmitting} className="flex flex-col items-end gap-6">
        <TextField
          label="Full Name"
          autoComplete="name"
          placeholder="Jamie Davis"
          disabled={isSubmitting}
          error={errors.fullName?.message}
          {...register("fullName")}
        />
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          disabled={isSubmitting}
          error={errors.email?.message}
          {...register("email")}
        />
        <PasswordField
          label="Password"
          autoComplete="new-password"
          placeholder="********"
          disabled={isSubmitting}
          error={errors.password?.message}
          {...register("password")}
        />
        {errors.root?.message ? (
          <p role="alert" className="w-full text-body-s text-error">
            {errors.root.message}
          </p>
        ) : null}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-5 animate-spin" />
              {REGISTER_CONTENT.submittingLabel}
            </>
          ) : (
            REGISTER_CONTENT.submitLabel
          )}
        </Button>
      </form>
    </AuthCard>
  );
}
