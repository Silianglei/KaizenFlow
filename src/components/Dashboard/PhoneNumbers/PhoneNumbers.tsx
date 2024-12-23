import React from 'react';
import { Phone, Plus } from 'lucide-react';

const phoneNumbers = [
  {
    number: '(555) 123-4567',
    label: 'Main Line',
    status: 'active'
  },
  {
    number: '(555) 987-6543',
    label: 'Support',
    status: 'active'
  }
];

export default function PhoneNumbers() {
  return (
    <div className="bg-brand-gray/5 border border-brand-gray/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Phone Numbers</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-brand-primary hover:bg-brand-primary/20 transition-colors">
          <Plus className="h-4 w-4" />
          Add Number
        </button>
      </div>
      
      <div className="space-y-4">
        {phoneNumbers.map((phone, index) => (
          <div key={index} className="flex items-center gap-4 p-4 bg-brand-gray/10 rounded-lg">
            <div className="p-2 bg-brand-primary/10 rounded-lg">
              <Phone className="h-5 w-5 text-brand-primary" />
            </div>
            <div>
              <div className="text-white font-medium">{phone.number}</div>
              <div className="text-sm text-brand-light">{phone.label}</div>
            </div>
            <div className="ml-auto">
              <span className="px-2 py-1 bg-green-400/10 rounded-full text-xs font-medium text-green-400">
                {phone.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}