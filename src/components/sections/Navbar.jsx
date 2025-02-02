/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { NAV_ITEMS } from '@constants/data';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activBox = useRef();

  const initActiveBox = () => {
    activBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    activBox.current.style.top = event.target.offsetTop + "px";
    activBox.current.style.left = event.target.offsetLeft + "px";
    activBox.current.style.width = event.target.offsetWidth + "px";
    activBox.current.style.height = event.target.offsetHeight + "px";
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const updateActiveSection = () => {
    const sections = ["home", "about", "skills", "work"];
    const navLinks = document.querySelectorAll(".nav-link");

    sections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          lastActiveLink.current?.classList.remove("active");
          navLinks[index].classList.add("active");
          lastActiveLink.current = navLinks[index];
          
          activBox.current.style.top = navLinks[index].offsetTop + "px";
          activBox.current.style.left = navLinks[index].offsetLeft + "px";
          activBox.current.style.width = navLinks[index].offsetWidth + "px";
          activBox.current.style.height = navLinks[index].offsetHeight + "px";
        }
      }
    });
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", initActiveBox);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  return (
    <nav className={"navbar" + (navOpen ? " active" : " ")}>
      {NAV_ITEMS.map(({ label, href }, index) => (
        <a
          key={index}
          href={href}
          ref={index === 0 ? lastActiveLink : null}
          className={`nav-link${index === 0 ? ' active' : ''}`}
          onClick={(e) => {
            activeCurrentLink(e);
            handleClick(e, href);
          }}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;