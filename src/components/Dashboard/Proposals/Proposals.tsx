import React from 'react';
import { FileText } from 'lucide-react';

const proposals = [
  {
    title: 'Custom AI Phone System',
    status: 'pending',
    date: 'Mar 15, 2024',
    amount: '$499/mo'
  }
];

export default function Proposals() {
  return (
    <div className="bg-brand-gray/5 border border-brand-gray/10 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Recent Proposals</h2>
      
      <div className="space-y-4">
        {proposals.map((proposal, index) => (
          <div key={index} className="flex items-center gap-4 p-4 bg-brand-gray/10 rounded-lg">
            <div className="p-2 bg-brand-primary/10 rounded-lg">
              <FileText className="h-5 w-5 text-brand-primary" />
            </div>
            <div>
              <div className="text-white font-medium">{proposal.title}</div>
              <div className="text-sm text-brand-light">{proposal.date}</div>
            </div>
            <div className="ml-auto text-right">
              <div className="text-white font-medium">{proposal.amount}</div>
              <span className="px-2 py-1 bg-yellow-400/10 rounded-full text-xs font-medium text-yellow-400">
                {proposal.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}