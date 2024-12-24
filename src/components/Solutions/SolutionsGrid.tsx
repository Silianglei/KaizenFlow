import React from 'react';
import SolutionCard from './SolutionCard';
import { solutions } from './solutionsData';

export default function SolutionsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        return (
          <SolutionCard
            key={index}
            icon={<Icon className="h-12 w-12 text-brand-primary" />}
            title={solution.title}
            description={solution.description}
          />
        );
      })}
    </div>
  );
}