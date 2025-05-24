import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

// A simpler approach using CSS animations for floating icons
const FloatingIcons3D = ({ icons, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing icons
    containerRef.current.innerHTML = '';
    
    // Create and append each icon
    icons.forEach((iconPath) => {
      // Create random positions and animation properties
      const x = Math.random() * 100; // % position in container
      const y = Math.random() * 100; // % position in container
      const scale = 0.5 + Math.random() * 1.0; // Random size between 0.5 and 1.5
      const duration = 15 + Math.random() * 30; // Animation duration between 15-45s
      const delay = Math.random() * -30; // Random start time
      
      // Create icon element
      const icon = document.createElement('img');
      icon.src = iconPath;
      icon.alt = 'Tech icon';
      icon.className = 'absolute floating-icon';
      icon.style.cssText = `
        left: ${x}%;
        top: ${y}%;
        transform: scale(${scale});
        opacity: 0.2;
        animation: float ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
      `;
      
      // Append to container
      containerRef.current.appendChild(icon);
    });
    
    // Add floating animation style if not already present
    if (!document.getElementById('floating-icons-style')) {
      const style = document.createElement('style');
      style.id = 'floating-icons-style';
      style.textContent = `
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-20px) rotate(5deg) scale(1.05);
          }
          50% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          75% {
            transform: translateY(20px) rotate(-5deg) scale(0.95);
          }
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
        }
        .floating-icon {
          pointer-events: none;
          width: 64px;
          height: 64px;
          filter: blur(1px);
          transition: all 0.3s ease;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Store a reference to the current container for cleanup
    const currentContainer = containerRef.current;
    
    // Cleanup function
    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, [icons]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};

FloatingIcons3D.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string
};

FloatingIcons3D.defaultProps = {
  className: ''
};

export default FloatingIcons3D;
