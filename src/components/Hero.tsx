import React from 'react';
import { PhoneCall, Clock, Shield, Workflow } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-dark-green">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-dark-green via-dark-green to-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/20 mb-8">
            <span className="text-accent-green font-medium">AI-POWERED CALL CENTER SOLUTIONS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Transform your business with AI-powered voice support
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-12">
            Scale your inbound calls with intelligent AI that understands, responds, and resolves customer inquiries 24/7. Zero upfront costs, guaranteed 99% success rate.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-accent-green text-dark-green px-8 py-4 rounded-lg font-medium text-lg hover:bg-light-green transition-colors">
              Book Free Consultation
            </button>
            <button className="border border-accent-green text-accent-green px-8 py-4 rounded-lg font-medium text-lg hover:bg-black/20 transition-colors">
              View Demo
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Clock className="h-6 w-6 text-accent-green" />,
              title: '24/7 Availability',
              description: 'Never miss a call with round-the-clock AI support'
            },
            {
              icon: <Shield className="h-6 w-6 text-accent-green" />,
              title: '99% Success Rate',
              description: 'Guaranteed call resolution or your money back'
            },
            {
              icon: <Workflow className="h-6 w-6 text-accent-green" />,
              title: 'CRM Integration',
              description: 'Seamless connection with your existing systems'
            },
            {
              icon: <PhoneCall className="h-6 w-6 text-accent-green" />,
              title: 'Free Phone Number',
              description: 'Custom area code included at no extra cost'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-black/20 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-white font-medium">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );