import React from 'react';
import DashboardLayout from './Layout/DashboardLayout';
import DashboardHeader from './Header/DashboardHeader';
import CallMetrics from './Metrics/CallMetrics';
import PhoneNumbers from './PhoneNumbers/PhoneNumbers';
import Proposals from './Proposals/Proposals';
import Billing from './Billing/Billing';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <CallMetrics />
        <PhoneNumbers />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Proposals />
        <Billing />
      </div>
    </DashboardLayout>
  );
}