import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-dark-green/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Phone className="h-8 w-8 text-accent-green" />
            </div>
            <div className="ml-2 text-xl font-bold text-white">VoiceAI Pro</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#solutions" className="text-gray-300 hover:text-white px-3 py-2">Solutions</a>
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2">Pricing</a>
              <button className="bg-accent-green text-dark-green px-4 py-2 rounded-lg font-medium hover:bg-light-green transition-colors">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );