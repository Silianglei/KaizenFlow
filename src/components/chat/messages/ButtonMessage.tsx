import React from 'react';
import { ButtonContent } from '../../../types/chat';

interface ButtonMessageProps {
  content: ButtonContent;
  onButtonClick?: (request: string) => void;
}

export function ButtonMessage({ content, onButtonClick }: ButtonMessageProps) {
  const handleClick = (request: string) => {
    if (onButtonClick) {
      console.log('Button clicked with request:', request);
      onButtonClick(request);
    }
  };

  return (
    <div>
      {content.text && <p className="text-sm mb-2">{content.text}</p>}
      <div className="flex flex-wrap gap-2">
        {content.buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleClick(button.request)}
            className="px-4 py-2 bg-brand-primary/20 hover:bg-brand-primary text-brand-primary hover:text-brand-dark rounded-lg transition-colors"
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}