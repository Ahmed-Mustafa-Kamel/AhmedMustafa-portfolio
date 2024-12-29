import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";

// react lenis
import { ReactLenis } from "lenis/react";
// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register gsap plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            scrub: true,
          },
        }
      );
    });

    // Cleanup function to kill ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
