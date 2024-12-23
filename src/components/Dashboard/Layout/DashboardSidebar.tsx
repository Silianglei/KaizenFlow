import React from 'react';
import { LayoutDashboard, PhoneCall, FileText, CreditCard, Settings, LogOut } from 'lucide-react';
import { signOut } from '../../../lib/auth';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: PhoneCall, label: 'Phone System', href: '/dashboard/phone' },
  { icon: FileText, label: 'Proposals', href: '/dashboard/proposals' },
  { icon: CreditCard, label: 'Billing', href: '/dashboard/billing' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' }
];

export default function DashboardSidebar() {
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-brand-dark/30 backdrop-blur-sm border-r border-brand-gray/10">
      <nav className="h-full flex flex-col">
        <div className="flex-1 py-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-6 py-3 text-brand-light hover:text-white hover:bg-brand-gray/10 transition-colors"
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </a>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-brand-gray/10">
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-6 py-3 text-brand-light hover:text-white hover:bg-brand-gray/10 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </nav>
    </aside>
  );
}