import React from 'react';

export default function CurlyArrow() {
  return (
    <div className="absolute -top-24 -left-48 pointer-events-none hidden lg:block">
      <div className="relative">
        {/* Arrow Label */}
        <div className="absolute -top-8 left-0">
          <p className="text-brand-primary font-medium text-lg whitespace-nowrap">
            Book a free call here
          </p>
        </div>
        
        {/* Curly Arrow SVG */}
        <svg 
          width="120" 
          height="80" 
          viewBox="0 0 120 80" 
          fill="none"
          className="transform rotate-[135deg]"
        >
          <path
            d="M10,40 Q40,10 60,40 T110,40"
            stroke="#86C232"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
          />
          {/* Arrow Head */}
          <path
            d="M110,40 L100,35 M110,40 L100,45"
            stroke="#86C232"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}