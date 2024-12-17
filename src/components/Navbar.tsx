import React, { useState } from 'react';
import { ArrowRight, CircuitBoard, Menu, X } from 'lucide-react';

interface NavbarProps {
  visible: boolean;
  isMobile: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ visible, isMobile }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`floating-navbar ${visible ? '' : 'nav-hidden'}`}>
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

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-brand-light hover:text-brand-primary"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-container lg:hidden bg-brand-dark border-t border-brand-gray/10 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('solutions')} 
              className="w-full text-left py-3 text-brand-light hover:text-brand-primary transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="w-full text-left py-3 text-brand-light hover:text-brand-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="w-full text-left py-3 text-brand-light hover:text-brand-primary transition-colors"
            >
              About the Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
};