import React from 'react';
import { sections } from './termsData';

export default function TableOfContents() {
  return (
    <div className="bg-brand-gray/10 p-6 rounded-xl border border-brand-gray/20 mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">TABLE OF CONTENTS</h2>
      <ul className="space-y-2 text-brand-light">
        {sections.map((section, index) => (
          <li key={index}>
            <a 
              href={`#${section.id}`}
              className="hover:text-brand-primary transition-colors"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}