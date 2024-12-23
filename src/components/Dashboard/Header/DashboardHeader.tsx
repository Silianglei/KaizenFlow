import React from 'react';

export default function DashboardHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">
        Welcome back, <span className="text-brand-primary">Brandon</span>
      </h1>
      <p className="text-brand-light">
        Here's an overview of your AI phone system performance
      </p>
    </div>
  );
}