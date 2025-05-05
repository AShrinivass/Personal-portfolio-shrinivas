import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function page() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
