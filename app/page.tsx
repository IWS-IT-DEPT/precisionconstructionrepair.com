import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import About from "./components/About";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <About />
      <ServiceArea />
      <Contact />
    </>
  );
}
