import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-brand-gray/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-brand-gray/10 hover:bg-brand-gray/20 transition-colors"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="h-5 w-5 text-brand-primary" />
          ) : (
            <Plus className="h-5 w-5 text-brand-primary" />
          )}
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6 bg-brand-gray/5 text-brand-light">
          {answer}
        </div>
      </div>
    </div>
  );
}