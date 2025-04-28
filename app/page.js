import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Layout from "./components/ui/Layout";
import Projects from "./components/Projects";

export default function page() {
  return (
    <>
      <div className="min-h-screen">
        <Layout>
          <Navbar />
          <Hero />
          <Projects />
        </Layout>
      </div>
    </>
  );
}
