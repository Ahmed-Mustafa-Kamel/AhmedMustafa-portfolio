/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/Ahmed Mustafa Kamel1.pdf";

import { ButtonPrimary, ButtonOutLine } from "./Button";

const Hero = () => {
  return (
    <section id="home" className=" pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
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
          {"Building"}<br/>
            <TypeAnimation
              sequence={["Scalable", 1000 ,"Modern" ,1000]}
              speed={30}
              repeat={Infinity}
              className="text-sky-300 "
            />
            <br/>
            
             {"Websites"}
          </h1>
          <div className="flex items-center gap-3">
            <ButtonPrimary label={"Download CV"} icon="download" href={CV} />
            <div className="hidden md:block">
  <ButtonOutLine
    href={"#about"}
    label={"Scroll down"}
    icon="arrow_downward"
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
          <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] mt-10 overflow-hidden">
            <img
              src="/hero.png"
              width={320}
              className="drop-shadow-[0_-1px_2px_#36befa] mx-auto"
              alt="Ahmed Mustafa"
            />
          </figure>
        </div>
        {/*end image  */}
      </div>
    </section>
  );
};

export default Hero;
