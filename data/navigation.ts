import { ROUTES } from "@/constants/routes";
import type { NavLink } from "@/types";

export interface HeaderLink extends NavLink {
  current?: boolean;
}

export const PRIMARY_NAV: HeaderLink[] = [
  { label: "Home", href: ROUTES.home, current: true },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const ACCOUNT_NAV: NavLink[] = [
  { label: "Sign In", href: ROUTES.login },
  { label: "Join Us", href: ROUTES.register },
];
