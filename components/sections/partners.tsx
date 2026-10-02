import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PARTNER_LOGOS } from "@/data/home";

export function Partners() {
  return (
    <section aria-label="Partners" className="bg-shuttle-gray-50 py-12 lg:h-[202px] lg:py-20">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:max-w-[1132px] lg:flex-nowrap lg:justify-between">
        {PARTNER_LOGOS.map((logo) => (
          <Image key={logo.id} src={logo.src} alt="Logoipsum" width={logo.width} height={logo.height} className="h-[42px] w-auto" />
        ))}
      </Container>
    </section>
  );
}
