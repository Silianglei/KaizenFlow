import React from 'react';
import { FeatureList } from './features/FeatureList';

export function Features() {
  return (
    <section id="solutions" className="solutions-section scroll-mt-16 py-24 bg-solutions-pattern">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white glow-text">Our Solutions</h2>
          <p className="text-xl text-brand-light">
            Comprehensive AI support through both voice and chat channels, providing seamless assistance for tenants and staff
          </p>
        </div>
        <FeatureList />
      </div>
    </section>
  );
}

export default Features;