import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

// A component for floating elements in the About section
const FloatingAboutElements = ({ className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing elements
    containerRef.current.innerHTML = "";

    // About section relevant elements
    const elements = [
      // Personal info elements
      { type: "info", content: "Profile", color: "#61dafb" },
      { type: "info", content: "Bio", color: "#f9c74f" },
      { type: "info", content: "Skills", color: "#90be6d" },
      { type: "info", content: "Experience", color: "#f94144" },

      // Stat elements
      { type: "stat", content: "15+", color: "#277da1" },
      { type: "stat", content: "2+", color: "#f3722c" },
      { type: "stat", content: "100%", color: "#43aa8b" },

      // Personal traits
      { type: "trait", content: "Creative", color: "#f8961e" },
      { type: "trait", content: "Reliable", color: "#f9844a" },
      { type: "trait", content: "Dedicated", color: "#90be6d" },
      { type: "trait", content: "Innovative", color: "#4d908e" },
    ];

    // Create and append each element
    elements.forEach((element) => {
      // Create random positions and animation properties
      const x = Math.random() * 100; // % position in container
      const y = Math.random() * 100; // % position in container
      const scale = 0.7 + Math.random() * 0.8; // Random size between 0.7 and 1.5
      const duration = 20 + Math.random() * 40; // Animation duration between 20-60s
      const delay = Math.random() * -30; // Random start time
      const rotate = Math.random() * 20 - 10; // Random slight rotation

      // Create element
      const el = document.createElement("div");
      el.textContent = element.content;
      el.style.color = element.color;

      // Style based on element type
      if (element.type === "info") {
        el.style.fontFamily = "sans-serif";
        el.style.fontSize = `${Math.max(14, 20 * scale)}px`;
        el.style.fontWeight = "600";
      } else if (element.type === "stat") {
        el.style.fontFamily = "monospace";
        el.style.fontSize = `${Math.max(18, 24 * scale)}px`;
        el.style.fontWeight = "bold";
      } else if (element.type === "trait") {
        el.style.fontFamily = "serif";
        el.style.fontSize = `${Math.max(16, 22 * scale)}px`;
        el.style.fontStyle = "italic";
      }

      // Common styles
      el.className = "absolute floating-about-element";
      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
      el.style.transform = `rotate(${rotate}deg) scale(${scale})`;
      el.style.opacity = "0.15";
      el.style.animation = `float-about ${duration}s ease-in-out infinite`;
      el.style.animationDelay = `${delay}s`;
      el.style.zIndex = "-1";

      // Append to container
      containerRef.current.appendChild(el);
    });

    // Add floating animation style if not already present
    if (!document.getElementById("floating-about-elements-style")) {
      const style = document.createElement("style");
      style.id = "floating-about-elements-style";
      style.textContent = `
        @keyframes float-about {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(-20px, -10px) rotate(3deg) scale(1.05);
          }
          50% {
            transform: translate(0, -20px) rotate(0deg) scale(1);
          }
          75% {
            transform: translate(20px, -10px) rotate(-3deg) scale(0.95);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }
        .floating-about-element {
          pointer-events: none;
          transition: all 0.3s ease;
          filter: blur(0.5px);
        }
      `;
      document.head.appendChild(style);
    }

    // Store a reference to the current container for cleanup
    const currentContainer = containerRef.current;

    // Cleanup function
    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};

FloatingAboutElements.propTypes = {
  className: PropTypes.string,
};

FloatingAboutElements.defaultProps = {
  className: "",
};

export default FloatingAboutElements;
