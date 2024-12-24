import React from 'react';
import FAQHeader from './FAQHeader';
import FAQGrid from './FAQGrid';
import SectionBackground from '../common/SectionBackground';

export default function FAQ() {
  return (
    <SectionBackground>
      <section id="faq" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQHeader />
          <FAQGrid />
        </div>
      </section>
    </SectionBackground>
  );
}