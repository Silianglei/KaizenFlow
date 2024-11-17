import React, { useEffect, useState } from 'react';
import { CircuitBoard } from 'lucide-react';

function IntroAnimation() {
  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    // Start logo rotation
    setTimeout(() => {
      setAnimationState('rotate');
    }, 100);

    // Remove animation
    setTimeout(() => {
      setAnimationState('complete');
    }, 800);
  }, []);

  return (
    <div className={`intro-animation ${animationState}`}>
      <div className="intro-content">
        <div className="flex items-center space-x-4">
          <div className="logo-rotate">
            <CircuitBoard className="w-16 h-16 text-brand-primary" />
          </div>
          <span className="text-2xl font-bold text-white">KaizenFlow</span>
        </div>
      </div>
    </div>
  );
}

export default IntroAnimation;