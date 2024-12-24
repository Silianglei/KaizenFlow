import React from 'react';
import DashboardSidebar from './DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-brand-dark">
      <nav className="fixed top-0 left-0 right-0 h-24 bg-brand-dark/30 backdrop-blur-sm border-b border-brand-gray/10 z-40">
        <div className="h-full px-4 flex items-center">
          <a href="/" className="block">
            <img 
              src="/logo.svg" 
              alt="Kaizen Flow" 
              className="h-24 w-24"
            />
          </a>
        </div>
      </nav>
      
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 min-h-screen pt-24 pl-64">
          <div className="max-w-7xl mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}