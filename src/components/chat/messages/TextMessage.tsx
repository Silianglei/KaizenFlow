import React from 'react';

interface TextMessageProps {
  content: string;
}

export function TextMessage({ content }: TextMessageProps) {
  return (
    <p className="text-sm whitespace-pre-wrap">{content}</p>
  );
}