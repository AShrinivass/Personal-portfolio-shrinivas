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
      <Hero />
      <ScrollSection bgColor="bg-[#fff4e4] snap-start">
        <AboutMe />
      </ScrollSection>
      <ScrollSection bgColor="bg-[#7d98a1]">
        <Projects />
      </ScrollSection>
      <ScrollSection bgColor="bg-[#201c1c]">
        <Contact />
      </ScrollSection>
    </>
  );
}
