import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { ACCOUNT_NAV, PRIMARY_NAV } from "@/data/navigation";
import { cn } from "@/lib/utils";

/** Header drawn over the top 120px of the hero, as in the Figma frame. */
export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 h-[120px] text-shuttle-gray-50">
      <Container className="relative flex h-full items-start justify-between xl:pl-0.5">
        <Logo tone="light" priority className="mt-[35px]" />

        <nav
          aria-label="Main"
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        >
          <ul className="flex items-start gap-6 whitespace-nowrap">
            {PRIMARY_NAV.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={link.current ? "page" : undefined}
                  className={cn(
                    "transition-colors duration-200 hover:text-white",
                    link.current ? "text-label-m" : "text-body-m leading-[1.6]",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 hidden items-start gap-6 lg:flex">
          <nav aria-label="Account">
            <ul className="flex items-start gap-6 whitespace-nowrap">
              {ACCOUNT_NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-m transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button type="button" aria-label="Shopping bag" className="size-6 shrink-0">
            <Image src="/images/icons/bag.svg" alt="" width={24} height={24} className="size-6" />
          </button>
        </div>

        <div className="mt-[33px] lg:hidden">
          <MobileMenu primary={PRIMARY_NAV} account={ACCOUNT_NAV} />
        </div>
      </Container>
    </header>
  );
}
