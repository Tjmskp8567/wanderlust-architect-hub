
import React, { useEffect } from 'react';

// This component adds a style to hide scrollbars while maintaining functionality
const ScrollbarHide: React.FC = () => {
  useEffect(() => {
    // Add a style tag to hide scrollbars but retain functionality
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      
      .scrollbar-hide::-webkit-scrollbar {
        display: none;  /* Chrome, Safari and Opera */
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return null;
};

export default ScrollbarHide;
