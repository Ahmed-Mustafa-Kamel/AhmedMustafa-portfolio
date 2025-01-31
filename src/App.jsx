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
      // Set initial styles to prevent layout shifts
      gsap.set(element, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        transform: "translateY(100px)",
        opacity: 1, // Keep opacity at 1 to prevent layout shifts
      });

      gsap.to(element, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        transform: "translateY(0)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          end: "top center",
          scrub: 1,
        },
      });
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
