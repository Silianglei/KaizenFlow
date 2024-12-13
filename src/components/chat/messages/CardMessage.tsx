import React from 'react';
import { CardContent } from '../../../types/chat';

interface CardMessageProps {
  content: CardContent;
  onButtonClick?: (request: string) => void;
}

export function CardMessage({ content, onButtonClick }: CardMessageProps) {
  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden bg-brand-gray/30 border border-brand-primary/20">
      {content.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={content.imageUrl} 
            alt={content.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white mb-2">{content.title}</h4>
        <p className="text-brand-light text-sm mb-4">{content.description}</p>
        {content.buttons && content.buttons.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {content.buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => onButtonClick?.(button.request)}
                className="px-4 py-2 text-sm bg-brand-primary/20 hover:bg-brand-primary text-brand-primary hover:text-brand-dark rounded-lg transition-all duration-300 hover:scale-105"
              >
                {button.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}