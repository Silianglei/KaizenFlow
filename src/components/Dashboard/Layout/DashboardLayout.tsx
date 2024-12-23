import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import { CircuitBoard } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-brand-dark">
      <nav className="fixed top-0 left-0 right-0 h-16 bg-brand-dark/30 backdrop-blur-sm border-b border-brand-gray/10 z-40">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CircuitBoard className="h-8 w-8 text-brand-primary" />
            <span className="text-xl font-bold text-white">Kaizen Flow</span>
          </div>
        </div>
      </nav>
      
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 min-h-screen pt-16 pl-64">
          <div className="max-w-7xl mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}