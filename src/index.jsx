import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}