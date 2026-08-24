import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import SafetyQuality from "./components/SafetyQuality";
import About from "./components/About";
import ServiceArea from "./components/ServiceArea";
import CareersCta from "./components/CareersCta";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <SafetyQuality />
      <About />
      <ServiceArea />
      <CareersCta />
      <Contact />
    </>
  );
}
