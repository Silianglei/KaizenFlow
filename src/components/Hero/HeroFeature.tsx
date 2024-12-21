import React from 'react';

interface HeroFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function HeroFeature({ icon, title, description }: HeroFeatureProps) {
  return (
    <div className="bg-brand-gray/20 p-6 rounded-xl backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <p className="text-brand-light">{description}</p>
    </div>
  );
}