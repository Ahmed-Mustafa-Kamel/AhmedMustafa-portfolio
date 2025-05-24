import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

// A component for floating elements in the Work section
const FloatingWorkElements = ({ className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing elements
    containerRef.current.innerHTML = '';
    
    // Work section relevant elements
    const elements = [
      // Project types
      { type: 'project', content: 'Website', color: '#61dafb' },
      { type: 'project', content: 'Portfolio', color: '#f9c74f' },
      { type: 'project', content: 'E-commerce', color: '#90be6d' },
      { type: 'project', content: 'App', color: '#f94144' },
      
      // Tech tags from projects
      { type: 'tag', content: 'React.js', color: '#277da1' },
      { type: 'tag', content: 'Tailwind', color: '#f3722c' },
      { type: 'tag', content: 'FrontEnd', color: '#43aa8b' },
      { type: 'tag', content: 'BackEnd', color: '#f8961e' },
      { type: 'tag', content: 'Express.js', color: '#f9844a' },
      { type: 'tag', content: 'API', color: '#90be6d' },
      { type: 'tag', content: 'Framer Motion', color: '#4d908e' },
      
      // UI elements
      { type: 'ui', content: '[]', color: '#277da1' },
      { type: 'ui', content: '{}', color: '#f3722c' },
      { type: 'ui', content: '<>', color: '#43aa8b' },
      { type: 'ui', content: '()', color: '#f8961e' }
    ];
    
    // Create and append each element
    elements.forEach((element) => {
      // Create random positions and animation properties
      const x = Math.random() * 100; // % position in container
      const y = Math.random() * 100; // % position in container
      const scale = 0.7 + Math.random() * 0.8; // Random size between 0.7 and 1.5
      const duration = 25 + Math.random() * 35; // Animation duration between 25-60s
      const delay = Math.random() * -30; // Random start time
      const rotate = Math.random() * 20 - 10; // Random slight rotation
      
      // Create element
      const el = document.createElement('div');
      el.textContent = element.content;
      el.style.color = element.color;
      
      // Style based on element type
      if (element.type === 'project') {
        el.style.fontFamily = 'sans-serif';
        el.style.fontSize = `${Math.max(16, 22 * scale)}px`;
        el.style.fontWeight = '600';
      } else if (element.type === 'tag') {
        el.style.fontFamily = 'monospace';
        el.style.fontSize = `${Math.max(14, 18 * scale)}px`;
        el.style.fontWeight = '500';
        el.style.padding = '2px 6px';
        el.style.borderRadius = '4px';
        el.style.border = `1px solid ${element.color}`;
      } else if (element.type === 'ui') {
        el.style.fontFamily = 'monospace';
        el.style.fontSize = `${Math.max(18, 24 * scale)}px`;
        el.style.fontWeight = 'bold';
      }
      
      // Common styles
      el.className = 'absolute floating-work-element';
      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
      el.style.transform = `rotate(${rotate}deg) scale(${scale})`;
      el.style.opacity = '0.15';
      el.style.animation = `float-work ${duration}s ease-in-out infinite`;
      el.style.animationDelay = `${delay}s`;
      el.style.zIndex = '-1';
      
      // Append to container
      containerRef.current.appendChild(el);
    });
    
    // Add floating animation style if not already present
    if (!document.getElementById('floating-work-elements-style')) {
      const style = document.createElement('style');
      style.id = 'floating-work-elements-style';
      style.textContent = `
        @keyframes float-work {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(-15px, -15px) rotate(3deg) scale(1.05);
          }
          66% {
            transform: translate(15px, -15px) rotate(-3deg) scale(0.95);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }
        .floating-work-element {
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
        currentContainer.innerHTML = '';
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

FloatingWorkElements.propTypes = {
  className: PropTypes.string
};

FloatingWorkElements.defaultProps = {
  className: ''
};

export default FloatingWorkElements;
