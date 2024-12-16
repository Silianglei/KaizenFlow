import React from 'react';
import { Feature } from './types';

function FeatureCard({ Icon, title, description }: Feature) {
  return (
    <div className="feature-card group">
      <div className="bg-brand-gray/50 backdrop-blur-sm border border-brand-primary/20 rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:border-brand-primary/40 hover:shadow-glow">
        <div className="flex items-start space-x-6">
          <div className="icon-container-sm flex-shrink-0">
            <Icon className="w-8 h-8 text-brand-primary transform transition-all duration-300 group-hover:scale-110" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;