import React from 'react';
import { ClipboardCheck, Settings, Zap } from 'lucide-react';
import Timeline from './Timeline';

const steps = [
  {
    Icon: ClipboardCheck,
    title: "Assessment",
    description: "We analyze your property management needs and design a custom automation solution"
  },
  {
    Icon: Settings,
    title: "Implementation",
    description: "We build your AI assistant with property-specific knowledge and integrate with your systems"
  },
  {
    Icon: Zap,
    title: "Activation",
    description: "Your AI assistant goes live, providing immediate support to tenants and staff"
  }
];

export function Process() {
  return (
    <section id="how-it-works" className="how-it-works-section scroll-mt-16 py-24 bg-timeline-pattern">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white glow-text">How It Works</h2>
        <Timeline steps={steps} />
      </div>
    </section>
  );
}

export default Process;