import React from 'react';

interface IndustryItemProps {
  name: string;
}

export default function IndustryItem({ name }: IndustryItemProps) {
  return (
    <span className="inline-block px-8 py-2 text-lg text-brand-light/70 whitespace-nowrap">
      {name}
    </span>
  );
}