import React, { useEffect, useState } from 'react';
import { CircuitBoard } from 'lucide-react';
import { TIMING, EASING } from '../../utils/animationUtils';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onComplete();
    }, TIMING.LOGO_SPIN);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-brand-dark
        ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transition: `opacity ${TIMING.LOGO_FADE}ms ${EASING.SMOOTH_OUT}`
      }}
    >
      <div className="flex items-center gap-4">
        <CircuitBoard 
          className={`h-12 w-12 text-brand-primary ${isAnimating ? 'animate-[spin_0.3s_ease-out_1]' : ''}`}
          style={{ animationDuration: `${TIMING.LOGO_SPIN}ms` }}
        />
        <div className="text-4xl font-bold text-white">
          Kaizen Flow
        </div>
      </div>
    </div>
  );
}