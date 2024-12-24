import React from 'react';
import Logo from '../common/Logo/Logo';

export default function FooterCopyright() {
  return (
    <div className="flex flex-col items-start">
      <Logo className="scale-90 origin-left" />
      <div className="text-sm text-brand-light/70 mt-3">
        © {new Date().getFullYear()} Kaizen Flow. All rights reserved.
      </div>
    </div>
  );
}