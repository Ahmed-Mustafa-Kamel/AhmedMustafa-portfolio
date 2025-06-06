/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

import Navbar from "./Navbar";
import { useState } from "react";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className=" max-w-screen-2xl w-full mx-auto px-6 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* logo */}
        <h1 className="flex justify-end">
          <a href="" className="logo ">
            <img
              src="/AMlogo2.png"
              width={80}
              height={80}
              alt="Ahmed Mustafa"
            />
          </a>
        </h1>
        {/*  */}
        <div className="relative md:justify-center">
          {/* menu button */}
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          {/*  */}
          <Navbar navOpen={navOpen} />
        </div>
        {/* nav links */}
        <a href="#contact" className="btn btn-secondary max-md:hidden">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
