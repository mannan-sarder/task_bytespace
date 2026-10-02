import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Glows } from "@/components/ui/glow";
import { TESTIMONIALS, TESTIMONIALS_INTRO, TESTIMONIAL_GLOWS } from "@/data/home";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="relative isolate overflow-hidden bg-[#FAFAFA] py-16 lg:h-[784px] lg:py-0 lg:pt-[74px]">
      <Glows items={TESTIMONIAL_GLOWS} />
      <Container className="flex flex-col gap-12 lg:max-w-[1204px] lg:gap-[72px] lg:px-0">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 id="testimonials-title" className="text-heading-s font-semibold text-black-950 md:text-heading-m lg:w-[577px] lg:shrink-0">
            {TESTIMONIALS_INTRO.title}
          </h2>
          <p className="text-body-m text-black-700 md:text-body-l lg:w-[580px]">{TESTIMONIALS_INTRO.description}</p>
        </div>

        <ul className="grid items-start gap-6 md:grid-cols-3 lg:gap-[41px]">
          {TESTIMONIALS.map((item) => (
            <li key={item.id}>
              <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
                <Image src={item.avatar} alt="" width={80} height={80} className="size-20 rounded-full object-cover" />
                <figcaption className="flex flex-col pt-0.5">
                  <span className="text-heading-xs text-black-950">{item.name}</span>
                  <span className="text-body-l text-persian-blue-800">{item.role}</span>
                </figcaption>
                <blockquote className="text-body-l text-black-700">{item.quote}</blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
