"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AuthCard } from "@/components/auth/auth-card";
import { SocialSignIn } from "@/components/auth/social-sign-in";
import { Button } from "@/components/ui/button";
import { PasswordField } from "@/components/ui/password-field";
import { TextField } from "@/components/ui/text-field";
import { ROUTES } from "@/constants/routes";
import { LOGIN_CONTENT } from "@/data/auth";
import { signIn } from "@/lib/auth";
import { loginSchema, type LoginValues } from "@/lib/validations/auth";

export function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signIn(values);
      router.push(ROUTES.home);
    } catch {
      setError("root", { message: "We could not sign you in. Please try again." });
    }
  });

  return (
    <AuthCard content={LOGIN_CONTENT} middle={<SocialSignIn disabled={isSubmitting} />}>
      <form onSubmit={onSubmit} noValidate aria-busy={isSubmitting} className="flex flex-col items-end gap-6">
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
          autoComplete="current-password"
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
              {LOGIN_CONTENT.submittingLabel}
            </>
          ) : (
            LOGIN_CONTENT.submitLabel
          )}
        </Button>
      </form>
    </AuthCard>
  );
}
