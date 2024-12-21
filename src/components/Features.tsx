import React from 'react';
import { Clock, Shield, Workflow, Phone, Globe, Lock, Settings, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-accent-green" />,
      title: "24/7 Availability",
      description: "Our AI never sleeps, ensuring your business is always available to handle customer calls."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent-green" />,
      title: "99% Success Rate",
      description: "Guaranteed call resolution success rate or get your money back."
    },
    {
      icon: <Workflow className="h-8 w-8 text-accent-green" />,
      title: "CRM Integration",
      description: "Seamlessly connects with your existing CRM and workflow systems."
    },
    {
      icon: <Settings className="h-8 w-8 text-accent-green" />,
      title: "Unlimited Customization",
      description: "Fully customizable phone system tailored to your business needs."
    },
    {
      icon: <Globe className="h-8 w-8 text-accent-green" />,
      title: "Multilingual Support",
      description: "AI-powered communication in multiple languages to serve diverse customers."
    },
    {
      icon: <Phone className="h-8 w-8 text-accent-green" />,
      title: "Free Phone Number",
      description: "Get a custom area code phone number at no additional cost."
    },
    {
      icon: <Lock className="h-8 w-8 text-accent-green" />,
      title: "HIPAA Compliant",
      description: "Fully compliant with healthcare privacy regulations and security standards."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent-green" />,
      title: "Quick Setup",
      description: "Complete system setup and deployment within one week."
    }
  ];

  return (
    <section id="features" className="bg-dark-green py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything you need to scale your customer support
          </h2>
          <p className="text-xl text-gray-300">
            Powerful features that transform how you handle customer calls
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/20 p-8 rounded-xl hover:bg-black/30 transition-colors backdrop-blur-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );