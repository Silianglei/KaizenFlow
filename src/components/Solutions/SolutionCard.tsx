import React from 'react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <div className="group bg-brand-gray/10 p-8 rounded-xl backdrop-blur-sm border border-brand-gray/20 hover:border-brand-primary/30 transition-all hover:-translate-y-1">
      <div className="mb-6 p-3 bg-brand-primary/10 rounded-xl w-fit group-hover:bg-brand-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-brand-primary transition-colors">
        {title}
      </h3>
      <p className="text-lg text-brand-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}