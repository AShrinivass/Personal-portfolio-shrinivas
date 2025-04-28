import BentoGrid from "./components/BentoGrid";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Layout from "./components/ui/Layout";

export default function page() {
  return (
    <>
      <div className="min-h-screen">
        <Layout>
          <Navbar />
          <Hero />
          <BentoGrid />
          <main>Home</main>
        </Layout>
      </div>
    </>
  );
}
