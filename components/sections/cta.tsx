import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridBackground } from "@/components/ui/grid-background";
import { Ornaments } from "@/components/ui/ornaments";
import { ROUTES } from "@/constants/routes";
import { CTA_CONTENT, CTA_ORNAMENTS } from "@/data/home";

export function CreatorCta() {
  return (
    <section id="creators" aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-persian-blue-800 py-16 lg:h-[488px] lg:py-0">
      <GridBackground className="-z-20" />
      <div className="hidden lg:block">
        <Ornaments items={CTA_ORNAMENTS} />
      </div>
      <Container className="relative flex max-w-[964px] flex-col items-center gap-8 text-center lg:pt-[85px]">
        <h2 id="cta-title" className="max-w-[710px] text-display-xs font-semibold text-shuttle-gray-50 md:text-heading-m">
          {CTA_CONTENT.title}
        </h2>
        <p className="mx-auto max-w-[942px] text-body-m text-shuttle-gray-50 md:text-body-l">{CTA_CONTENT.description}</p>
        <ButtonLink href={ROUTES.register} className="mt-4">
          {CTA_CONTENT.buttonLabel}
        </ButtonLink>
      </Container>
    </section>
  );
}
