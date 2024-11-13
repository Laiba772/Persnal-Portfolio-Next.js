import Hero from "@/components/herosection/page";
import About from "@/components/about/page";
import Skills from "@/components/skills/page";
import Project from "@/components/project/page";
import ContactMe from "@/components/contact/page";

export default function Home() {

  return (
    <div>

      <Hero />
      <About />
      <Skills />
      <Project />
      <ContactMe />

    </div>
  );
}
