import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DemoButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export function DemoButton({ icon: Icon, label, onClick }: DemoButtonProps) {
  return (
    <div className="demo-button-container">
      <button 
        className="demo-button hover:bg-brand-primary group"
        onClick={onClick}
      >
        <Icon className="w-10 h-10 text-brand-primary group-hover:text-brand-dark transition-colors duration-300" />
      </button>
      <div className="demo-label-container">
        <svg className="w-20 h-12 text-brand-primary" viewBox="0 0 100 50">
          <path
            d="M0,25 Q20,25 30,10 T60,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M50,5 L60,10 L50,15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <span className="demo-label">{label}</span>
      </div>
    </div>
  );
}