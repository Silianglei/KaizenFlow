import React from 'react';
import { PhoneCall, PhoneIncoming, Clock } from 'lucide-react';

const metrics = [
  {
    icon: PhoneCall,
    label: 'Total Calls',
    value: '1,234',
    change: '+12%',
    isPositive: true
  },
  {
    icon: PhoneIncoming,
    label: 'Resolution Rate',
    value: '98.5%',
    change: '+2.1%',
    isPositive: true
  },
  {
    icon: Clock,
    label: 'Avg. Call Time',
    value: '2m 34s',
    change: '-15s',
    isPositive: true
  }
];

export default function CallMetrics() {
  return (
    <div className="bg-brand-gray/5 border border-brand-gray/10 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Call Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-brand-gray/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-primary/10 rounded-lg">
                  <Icon className="h-5 w-5 text-brand-primary" />
                </div>
                <span className="text-brand-light">{metric.label}</span>
              </div>
              
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-semibold text-white">
                  {metric.value}
                </span>
                <span className={`text-sm ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}