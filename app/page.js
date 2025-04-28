import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Spotlight } from "./components/ui/Spotlight";

export default function page() {
  return (
    <>
      <div className="min-h-screen">
        <Spotlight />
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </>
  );
}
