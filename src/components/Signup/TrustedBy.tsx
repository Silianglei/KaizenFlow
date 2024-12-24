import React from 'react';
import { Rocket } from 'lucide-react';

export default function TrustedBy() {
  return (
    <div className="mt-12 pt-12 border-t border-brand-gray/20">
      <div className="flex items-center gap-3 mb-6">
        <Rocket className="h-6 w-6 text-brand-primary" />
        <span className="text-xl font-semibold text-white">
          Early AI Adoption = <span className="text-brand-primary">Competitive Edge</span>
        </span>
      </div>

      <p className="text-brand-light">
        Voice AI is transforming industries like Healthcare, Real Estate, Legal Services, 
        and Property Management. Be among the first in your industry to leverage this technology.
      </p>
    </div>
  );
}