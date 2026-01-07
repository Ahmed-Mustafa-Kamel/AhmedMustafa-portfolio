/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */
// import { TypeAnimation } from "react-type-animation";
import AnimatedSection from "../common/AnimatedSection";
import { ButtonPrimary, ButtonOutLine } from "@components/common/Button";

const Hero = () => {
  return (
    <AnimatedSection>
      <section id="home" className="pt-28 md:pt-36 relative overflow-hidden">
        <div className="container md:grid md:grid-cols-2 items-center md:gap-10">
          {/* text */}
          <div>
            <div className=" flex items-center gap-3">
              {/* figure */}
              <figure className="img-box w-9 h-10 rounded-lg">
                <img
                  src="/ahmed.jpg"
                  width={25}
                  height={25}
                  alt="Ahmed Mustafa"
                  className="img-cover"
                />
              </figure>
              {/* end figure */}

              {/* avilable for work */}
              <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for work
              </div>
              {/* end available */}
            </div>

            <h1 className="headline-2 my-8">
              Hello,
              <br /> I&apos;m Ahmed Mustafa
            </h1>
            <h2 className="headline-3 my-8">
              {/* {"I Build"}
              <br />
              <TypeAnimation
                sequence={["Scalable", 1500, "Modern", 1500]}
                speed={10}
                repeat={Infinity}
                className="text-sky-300 "
              />
              <br />
              {"Websites"} */}
              I build fast, responsive React &amp; Next.js apps
            </h2>
            <div className="flex items-center gap-3">
              <ButtonPrimary label={"Download CV"} icon="download" href="/Ahmed-Mustafa-Resume.pdf" />
              <div className="hidden md:block">
                <ButtonOutLine
                  href={"#contact"}
                  label={"Hire Me"}
                  icon="mail"
                />
              </div>
              <div className="block md:hidden">
                <ButtonOutLine
                  href={"#contact"}
                  label={"Contact Me"}
                  icon="mail"
                />
              </div>
            </div>
          </div>
          {/* end text */}

          {/* image  */}
          <div className="">
            <div className="w-full max-w-[300px] mx-auto md:ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] mt-10 overflow-hidden  ">
              <img
                src="/hero.png"
                width={240}
                className="drop-shadow-[0_-1px_2px_#36befa] mx-auto "
                alt="Ahmed Mustafa"
              />
            </div>
          </div>
          {/*end image  */}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Hero;
