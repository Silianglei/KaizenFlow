import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function FormNavigation() {
  return (
    <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-brand-gray/10">
      <div className="w-full flex items-center">
        <a 
          href="/"
          className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </a>
      </div>
      
      <a 
        href="mailto:brandon@gokaizenflow.com"
        className="text-sm text-brand-light/40 hover:text-brand-light/70 transition-colors"
      >
        Contact Support
      </a>
    </div>
  );
}