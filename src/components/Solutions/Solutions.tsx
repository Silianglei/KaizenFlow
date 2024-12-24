import React from 'react';
import SolutionsHeader from './SolutionsHeader';
import SolutionsGrid from './SolutionsGrid';
import SectionBackground from '../common/SectionBackground';

export default function Solutions() {
  return (
    <SectionBackground>
      <section id="ai-powered-phone-support" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SolutionsHeader />
          <SolutionsGrid />
        </div>
      </section>
    </SectionBackground>
  );
}