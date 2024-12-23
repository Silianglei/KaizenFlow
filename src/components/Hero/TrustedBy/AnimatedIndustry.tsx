import React, { useState, useEffect } from 'react';
import { industries } from './industries';

export default function AnimatedIndustry() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingSpeed = 35; // Increased from 25ms to 35ms
  const pauseDuration = 1000; // Increased from 800ms to 1000ms

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentIndustry = industries[currentIndex];
    
    if (displayText.length < currentIndustry.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentIndustry.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((current) => (current + 1) % industries.length);
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex]);

  return (
    <span className="text-brand-primary inline-block min-w-[140px] sm:min-w-[180px] ml-2 text-left">
      {displayText}
    </span>
  );
}