import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import ScrollSection from "./components/ScrollSection";

export default function page() {
  return (
    <>
      <Nav />
      <section id="hero">
        <Hero bgColor="bg-[#e3f6f5]" />
      </section>

      <ScrollSection bgColor="bg-[#fff4e4] snap-start">
        <section id="about">
          <AboutMe />
        </section>
      </ScrollSection>
      <ScrollSection bgColor="bg-[#7d98a1]">
        <section id="projects">
          <Projects />
        </section>
      </ScrollSection>
      <ScrollSection bgColor="bg-[#201c1c]">
        <section id="contact">
          <Contact />
        </section>
      </ScrollSection>
    </>
  );
}
