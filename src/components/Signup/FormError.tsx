import React from 'react';

interface FormErrorProps {
  message: string;
}

export default function FormError({ message }: FormErrorProps) {
  return (
    <p className="mt-1 text-sm text-red-400">
      {message}
    </p>
  );
}