import React from 'react';
import { PrivacySection as PrivacySectionType } from './types';

export default function PrivacySection({ id, title, content, subsections }: PrivacySectionType) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="text-brand-light mb-6 whitespace-pre-wrap">
        {content}
      </div>
      
      {subsections?.map((subsection, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            {subsection.title}
          </h3>
          <div className="text-brand-light whitespace-pre-wrap">
            {subsection.content}
          </div>
        </div>
      ))}
    </section>
  );
}