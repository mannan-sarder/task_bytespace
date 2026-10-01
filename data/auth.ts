import { ROUTES } from "@/constants/routes";

export interface AuthIntro {
  title: string;
  description: string;
}

export interface SocialProvider {
  id: "facebook" | "google";
  label: string;
  icon: string;
}

export interface AuthPageContent {
  intro: AuthIntro;
  eyebrow: string;
  title: string;
  submitLabel: string;
  submittingLabel: string;
  prompt: string;
  promptLinkLabel: string;
  promptHref: string;
}

export const LOGIN_CONTENT: AuthPageContent = {
  intro: {
    title: "Sign in with ease",
    description:
      "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  },
  eyebrow: "Sign In",
  title: "Welcome Back",
  submitLabel: "Sign In",
  submittingLabel: "Signing in",
  prompt: "New user?",
  promptLinkLabel: "Create an account",
  promptHref: ROUTES.register,
};

export const REGISTER_CONTENT: AuthPageContent = {
  intro: {
    title: "Sign up and come in",
    description:
      "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  },
  eyebrow: "Create an Account",
  title: "Welcome to ByteSpace",
  submitLabel: "Continue",
  submittingLabel: "Creating account",
  prompt: "Already have an account?",
  promptLinkLabel: "Login",
  promptHref: ROUTES.login,
};

export const SOCIAL_PROVIDERS: SocialProvider[] = [
  { id: "facebook", label: "Continue with Facebook", icon: "/images/icons/facebook.svg" },
  { id: "google", label: "Continue with Google", icon: "/images/icons/google.svg" },
];
