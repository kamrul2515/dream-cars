'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // স্ক্রোল পজিশন ট্র্যাক করার জন্য এফেক্ট
  useEffect(() => {
    const toggleVisibility = () => {
      // ইউজার ৩০০ পিক্সেলের বেশি নিচে স্ক্রোল করলে বাটনটি দেখাবে
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // একদম উপরে স্ক্রোল করার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:right-12 bg-[#FF2832] hover:bg-[#d61f28] text-white p-3.5 rounded-md transition-all duration-300 shadow-2xl border border-transparent hover:border-white/20 active:scale-95 group z-50 animate-fade-in"
          aria-label="Scroll back to the top area"
        >
          <FaChevronUp className="text-[14px] transform group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;