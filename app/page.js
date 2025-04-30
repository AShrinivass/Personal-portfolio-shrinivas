import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function page() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        {/* <Navbar /> */}
        <section className="h-screen snap-start">
          <Hero />
        </section>

        <section className="h-screen snap-start">
          <Card />
        </section>
      </div>
    </>
  );
}
