import React from 'react';

const stats = [
  { value: '95%', label: 'Call Resolution Rate' },
  { value: '24/7', label: 'Availability' },
  { value: '60%', label: 'Cost Reduction' },
];

export default function SolutionsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center p-6 bg-brand-gray/10 rounded-xl border border-brand-gray/20 hover:border-brand-primary/30 transition-all"
        >
          <div className="text-4xl font-bold text-brand-primary mb-2">{stat.value}</div>
          <div className="text-brand-light">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}