/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */
import { useEffect, useState } from "react";
import AnimatedSection from "../common/AnimatedSection";

const About = () => {
  const [stats, setStats] = useState({
    projects: 15,
    experience: 2,
  });

  useEffect(() => {
    // Load stats from localStorage
    const savedStats = localStorage.getItem("portfolioStats");
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }

    // Listen for stats updates
    const handleStorageChange = (e) => {
      if (e.key === "portfolioStats") {
        setStats(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AnimatedSection>
      <section id="about" className="section relative overflow-hidden">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 fade-in">
            <h2 className="headline-3 my-2">About</h2>
            <p className="text-zinc-200 mb-4 md:mb-8 md:text-xl ">
              I’m a Front-End Developer specializing in building fast,
              responsive, and user-friendly web applications using React,
              Next.js, and modern JavaScript technologies. Passionate about
              continuous learning and creating clean, scalable code.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              <div>
                <div className="md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {stats.projects}
                  </span>
                  <span className="text-sky-400 font-bold text-2xl md:text-4xl">
                    +
                  </span>
                  <p className="text-sm text-zinc-400">Project done</p>
                </div>
              </div>
              <div>
                <div className="md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {stats.experience}
                  </span>
                  <span className="text-sky-400 font-bold text-2xl md:text-4xl">
                    +
                  </span>
                  <p className="text-sm text-zinc-400">Years of experience</p>
                </div>
              </div>
              <img
                src="/AMlogo2.png"
                width={40}
                height={40}
                alt="Ahmed Mustafa"
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
