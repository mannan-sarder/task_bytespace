import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { FOOTER } from "@/data/home";

export function Footer() {
  return (
    <footer className="border-t border-shuttle-gray-100 bg-white py-12 lg:h-[525px] lg:pt-[71px] lg:pb-0">
      <Container className="flex flex-col gap-16 lg:gap-[130px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[92px]">
          <div className="flex w-full flex-col gap-[45px] lg:w-[528px] lg:shrink-0">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="text-body-s text-shuttle-gray-950">{FOOTER.tagline}</p>
            </div>
            <div className="flex flex-col gap-6">
              <form className="flex flex-wrap items-center gap-6" aria-label="Newsletter">
                <label className="flex h-[52px] w-full max-w-[376px] items-center rounded-full border border-shuttle-gray-200 bg-white px-6">
                  <span className="sr-only">Email</span>
                  <input type="email" name="email" placeholder={FOOTER.emailPlaceholder} className="w-full bg-transparent text-body-m text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-950" />
                </label>
                <Button type="submit">{FOOTER.submitLabel}</Button>
              </form>
              <p className="max-w-[504px] text-body-xs text-shuttle-gray-950">{FOOTER.consent}</p>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:w-[580px] lg:self-end lg:-translate-y-3 lg:gap-y-0">
            {FOOTER.columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-6 lg:w-[167px]">
                <h2 className="sr-only lg:not-sr-only lg:h-6 lg:text-transparent lg:select-none" aria-hidden={undefined}>
                  <span className="sr-only">{column.title}</span>
                </h2>
                <ul className="flex flex-col gap-4 text-body-s text-shuttle-gray-950">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="transition-colors duration-200 hover:text-persian-blue-800">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-shuttle-gray-200 pt-3 text-body-xs text-shuttle-gray-950 sm:flex-row sm:items-center sm:justify-between lg:h-[42px] lg:-translate-y-0.5 lg:pt-[18px]">
          <p>{FOOTER.copyright}</p>
          <ul className="flex gap-6">
            {FOOTER.legal.map((item) => (
              <li key={item}>
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
