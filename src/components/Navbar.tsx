import React from 'react';
import { ArrowRight, CircuitBoard, Menu } from 'lucide-react';

interface NavbarProps {
  visible: boolean;
  isMobile: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ visible, isMobile }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="floating-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="relative flex items-center space-x-2 group cursor-pointer" 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <CircuitBoard className="logo-icon group-hover:rotate-180" />
            <span className="logo-text">KaizenFlow</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('solutions')} className="nav-link">Solutions</button>
            <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How It Works</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About the Team</button>
          </div>

          {!isMobile && (
            <a 
              href="https://fg8dqkk77s6.typeform.com/kaizenflow"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex btn-primary items-center space-x-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          )}

          <button className="lg:hidden text-brand-light hover:text-brand-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};