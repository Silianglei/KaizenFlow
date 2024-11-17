import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="feature-card h-full">
      <div className="bg-brand-gray/50 backdrop-blur-sm border border-brand-primary/20 rounded-xl p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:border-brand-primary/40 hover:shadow-glow">
        <div className="feature-icon-circle mb-6">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;