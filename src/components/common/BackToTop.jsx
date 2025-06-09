import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-white hover:bg-gray-100 text-green-600 p-3 rounded-full shadow-xl border-2 border-green-600 transition-all duration-300 z-40" aria-label="Back to top">
          <FaArrowUp className="text-md" /> 
        </button>
      )}
    </>
  );
};

export default BackToTop; 