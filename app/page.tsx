import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FeaturedFilms } from "@/components/sections/FeaturedFilms";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Workflow } from "@/components/sections/Workflow";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedFilms />
      <Services />
      <About />
      <Workflow />
      <Contact />
    </>
  );
}
