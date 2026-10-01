import type { ReactNode } from "react";
import { AuthShowcase } from "@/components/auth/auth-showcase";
import { Container } from "@/components/ui/container";
import { GridBackground } from "@/components/ui/grid-background";
import { Logo } from "@/components/ui/logo";
import type { AuthIntro } from "@/data/auth";

interface AuthShellProps {
  intro: AuthIntro;
  children: ReactNode;
}

/** Blue page frame shared by Login and Register: logo, intro text, card slot and decoration. */
export function AuthShell({ intro, children }: AuthShellProps) {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-persian-blue-800">
      <GridBackground className="-z-10" />
      <header className="h-[120px] shrink-0">
        <Container className="pt-[35px] xl:pl-0.5">
          <Logo tone="transparent" priority />
        </Container>
      </header>
      <main className="flex-1 pb-10 xl:pb-[120px]">
        <Container className="flex flex-col gap-10 xl:grid xl:grid-cols-[minmax(0,1fr)_579px] xl:gap-0">
          <div className="relative xl:pl-0.5">
            <div className="flex flex-col gap-4 text-shuttle-gray-50 xl:w-[475px]">
              <p className="text-heading-xs">{intro.title}</p>
              <p className="text-body-l">{intro.description}</p>
            </div>
            <AuthShowcase className="hidden xl:block" />
          </div>
          <div className="mx-auto w-full max-w-[579px] xl:mx-0">{children}</div>
        </Container>
      </main>
    </div>
  );
}
