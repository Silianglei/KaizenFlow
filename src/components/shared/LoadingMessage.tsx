import React from 'react';

interface LoadingMessageProps {
  message: string;
}

export function LoadingMessage({ message }: LoadingMessageProps) {
  return (
    <p className="text-brand-light text-center">
      {message}
    </p>
  );
}