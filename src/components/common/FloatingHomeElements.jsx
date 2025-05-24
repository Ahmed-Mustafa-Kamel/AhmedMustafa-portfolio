import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

// A component for floating design elements in the home section
const FloatingHomeElements = ({ className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing elements
    containerRef.current.innerHTML = '';
    
    // Design elements relevant to web development/UI design
    const elements = [
      // Code elements
      { type: 'code', content: '<div>', color: '#61dafb' },
      { type: 'code', content: 'function()', color: '#f9c74f' },
      { type: 'code', content: '{...}', color: '#90be6d' },
      { type: 'code', content: '=> {}', color: '#f94144' },
      { type: 'code', content: '</>',  color: '#277da1' },
      
      // UI elements
      { type: 'shape', shape: 'square', color: '#f3722c' },
      { type: 'shape', shape: 'circle', color: '#43aa8b' },
      { type: 'shape', shape: 'triangle', color: '#577590' },
      
      // Design elements
      { type: 'design', content: '#', color: '#f8961e' },
      { type: 'design', content: '@', color: '#f9844a' },
      { type: 'design', content: '{ }', color: '#90be6d' },
      { type: 'design', content: '( )', color: '#4d908e' }
    ];
    
    // Create and append each element
    elements.forEach((element) => {
      // Create random positions and animation properties
      const x = Math.random() * 100; // % position in container
      const y = Math.random() * 100; // % position in container
      const scale = 0.7 + Math.random() * 0.8; // Random size between 0.7 and 1.5
      const duration = 20 + Math.random() * 40; // Animation duration between 20-60s
      const delay = Math.random() * -30; // Random start time
      const rotate = Math.random() * 360; // Random rotation
      
      // Create element
      let el;
      
      if (element.type === 'code' || element.type === 'design') {
        // Text-based elements
        el = document.createElement('div');
        el.textContent = element.content;
        el.style.color = element.color;
        el.style.fontFamily = element.type === 'code' ? 'monospace' : 'sans-serif';
        el.style.fontSize = `${Math.max(16, 24 * scale)}px`;
        el.style.fontWeight = 'bold';
      } else if (element.type === 'shape') {
        // Shape elements
        el = document.createElement('div');
        
        if (element.shape === 'square') {
          el.style.width = `${30 * scale}px`;
          el.style.height = `${30 * scale}px`;
          el.style.backgroundColor = element.color;
        } else if (element.shape === 'circle') {
          el.style.width = `${30 * scale}px`;
          el.style.height = `${30 * scale}px`;
          el.style.backgroundColor = element.color;
          el.style.borderRadius = '50%';
        } else if (element.shape === 'triangle') {
          el.style.width = '0';
          el.style.height = '0';
          el.style.borderLeft = `${15 * scale}px solid transparent`;
          el.style.borderRight = `${15 * scale}px solid transparent`;
          el.style.borderBottom = `${30 * scale}px solid ${element.color}`;
        }
      }
      
      // Common styles
      el.className = 'absolute floating-home-element';
      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
      el.style.transform = `rotate(${rotate}deg) scale(${scale})`;
      el.style.opacity = '0.15';
      el.style.animation = `float-home ${duration}s ease-in-out infinite`;
      el.style.animationDelay = `${delay}s`;
      el.style.zIndex = '-1';
      
      // Append to container
      containerRef.current.appendChild(el);
    });
    
    // Add floating animation style if not already present
    if (!document.getElementById('floating-home-elements-style')) {
      const style = document.createElement('style');
      style.id = 'floating-home-elements-style';
      style.textContent = `
        @keyframes float-home {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(-15px, -15px) rotate(5deg) scale(1.05);
          }
          50% {
            transform: translate(0, -25px) rotate(0deg) scale(1);
          }
          75% {
            transform: translate(15px, -15px) rotate(-5deg) scale(0.95);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }
        .floating-home-element {
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

FloatingHomeElements.propTypes = {
  className: PropTypes.string
};

FloatingHomeElements.defaultProps = {
  className: ''
};

export default FloatingHomeElements;
