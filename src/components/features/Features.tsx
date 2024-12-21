import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from './featureData';

export default function Features() {
  return (
    <section id="features" className="bg-dark-green py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything you need to scale your customer support
          </h2>
          <p className="text-xl text-gray-300">
            Powerful features that transform how you handle customer calls
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FeatureCard
                key={index}
                icon={<Icon className="h-8 w-8 text-accent-green" />}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}