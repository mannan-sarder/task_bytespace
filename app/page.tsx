import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Categories } from "@/components/sections/categories";
import { Courses } from "@/components/sections/courses";
import { CreatorCta } from "@/components/sections/cta";
import { Growth } from "@/components/sections/growth";
import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Partners />
        <Courses />
        <Categories />
        <Growth />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
