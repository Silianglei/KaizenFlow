import { MessageSquare, Phone, Wrench, Home } from 'lucide-react';
import { Feature } from './types';

export const features: Feature[] = [
  {
    Icon: MessageSquare,
    title: "AI Chat Support",
    description: "Smart chatbots handle rent inquiries, maintenance requests, and general questions, providing instant text-based assistance to your tenants 24/7."
  },
  {
    Icon: Phone,
    title: "Voice Assistant",
    description: "AI-powered voice agents handle phone calls for maintenance requests, rent payments, and leasing inquiries, providing natural conversations any time."
  },
  {
    Icon: Wrench,
    title: "Maintenance Automation",
    description: "Streamline maintenance workflows through both voice and chat channels, with automated request logging and status updates."
  },
  {
    Icon: Home,
    title: "Smart Leasing",
    description: "Help prospective tenants via chat or voice calls to explore units, schedule viewings, and get instant property information."
  }
];