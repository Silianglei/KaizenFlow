import React from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

export default function Billing() {
  return (
    <div className="bg-brand-gray/5 border border-brand-gray/10 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Billing Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-brand-gray/10 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-brand-primary/10 rounded-lg">
              <DollarSign className="h-5 w-5 text-brand-primary" />
            </div>
            <span className="text-brand-light">Current Plan</span>
          </div>
          <div className="text-2xl font-semibold text-white">$499/mo</div>
          <div className="text-sm text-brand-light">Professional Plan</div>
        </div>
        
        <div className="bg-brand-gray/10 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-brand-primary/10 rounded-lg">
              <CreditCard className="h-5 w-5 text-brand-primary" />
            </div>
            <span className="text-brand-light">Next Payment</span>
          </div>
          <div className="text-2xl font-semibold text-white">Apr 15, 2024</div>
          <div className="text-sm text-brand-light">Auto-renewal</div>
        </div>
      </div>
      
      <button className="w-full py-3 px-4 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-brand-primary hover:bg-brand-primary/20 transition-colors">
        Manage Billing
      </button>
    </div>
  );
}