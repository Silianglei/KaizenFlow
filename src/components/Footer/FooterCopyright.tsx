import React from 'react';
import { CircuitBoard } from 'lucide-react';

export default function FooterCopyright() {
  return (
    <div className="flex items-center gap-3">
      <CircuitBoard className="h-8 w-8 text-brand-primary" />
      <div>
        <div className="text-white font-bold">Kaizen Flow</div>
        <div className="text-sm text-brand-light">
          © {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </div>
  );
}