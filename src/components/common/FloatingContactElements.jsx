import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

// A component for floating elements in the Contact section
const FloatingContactElements = ({ className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing elements
    containerRef.current.innerHTML = '';
    
    // Contact section relevant elements
    const elements = [
      // Contact methods
      { type: 'contact', content: 'Email', color: '#61dafb' },
      { type: 'contact', content: 'WhatsApp', color: '#f9c74f' },
      { type: 'contact', content: 'LinkedIn', color: '#90be6d' },
      { type: 'contact', content: 'GitHub', color: '#f94144' },
      
      // Form elements
      { type: 'form', content: 'Name', color: '#277da1' },
      { type: 'form', content: 'Email', color: '#f3722c' },
      { type: 'form', content: 'Message', color: '#43aa8b' },
      { type: 'form', content: 'Submit', color: '#f8961e' },
      
      // Communication icons
      { type: 'icon', content: '✉️', color: '#f9844a' },
      { type: 'icon', content: '📱', color: '#90be6d' },
      { type: 'icon', content: '💬', color: '#4d908e' },
      { type: 'icon', content: '🔗', color: '#277da1' },
      { type: 'icon', content: '📨', color: '#f3722c' },
      { type: 'icon', content: '📝', color: '#43aa8b' }
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
      
      if (element.type === 'icon') {
        el.textContent = element.content;
        el.style.fontSize = `${Math.max(20, 28 * scale)}px`;
      } else {
        el.textContent = element.content;
        el.style.color = element.color;
        
        // Style based on element type
        if (element.type === 'contact') {
          el.style.fontFamily = 'sans-serif';
          el.style.fontSize = `${Math.max(16, 22 * scale)}px`;
          el.style.fontWeight = '600';
        } else if (element.type === 'form') {
          el.style.fontFamily = 'monospace';
          el.style.fontSize = `${Math.max(14, 20 * scale)}px`;
          el.style.fontWeight = '500';
          el.style.padding = '2px 6px';
          el.style.borderRadius = '4px';
          el.style.border = `1px solid ${element.color}`;
        }
      }
      
      // Common styles
      el.className = 'absolute floating-contact-element';
      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
      el.style.transform = `rotate(${rotate}deg) scale(${scale})`;
      el.style.opacity = '0.15';
      el.style.animation = `float-contact ${duration}s ease-in-out infinite`;
      el.style.animationDelay = `${delay}s`;
      el.style.zIndex = '-1';
      
      // Append to container
      containerRef.current.appendChild(el);
    });
    
    // Add floating animation style if not already present
    if (!document.getElementById('floating-contact-elements-style')) {
      const style = document.createElement('style');
      style.id = 'floating-contact-elements-style';
      style.textContent = `
        @keyframes float-contact {
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
        .floating-contact-element {
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

FloatingContactElements.propTypes = {
  className: PropTypes.string
};

FloatingContactElements.defaultProps = {
  className: ''
};

export default FloatingContactElements;
