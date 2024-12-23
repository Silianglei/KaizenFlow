import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function SocialSignIn() {
  return (
    <div className="mt-8 flex justify-end">
      <a 
        href="mailto:brandon@gokaizenflow.com"
        className="inline-flex items-center gap-2 text-sm text-brand-light/40 hover:text-brand-light/70 transition-colors"
      >
        <HelpCircle className="w-4 h-4" />
        Contact support
      </a>
    </div>
  );
}