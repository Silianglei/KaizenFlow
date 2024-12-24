import React from 'react';
import FAQItem from './FAQItem';
import { faqItems } from './faqData';

export default function FAQGrid() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-4">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}