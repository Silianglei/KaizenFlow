import React from 'react';

interface FooterProps {
  onScrollTo: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  return (
    <footer className="bg-gradient-to-b from-brand-dark to-brand-gray/20 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Section - Navigation */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24 mb-8 md:mb-0">
            {/* General Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">General</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onScrollTo('solutions')}
                    className="text-brand-light hover:text-brand-primary transition-colors"
                  >
                    Solutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollTo('how-it-works')}
                    className="text-brand-light hover:text-brand-primary transition-colors"
                  >
                    How it Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollTo('about')}
                    className="text-brand-light hover:text-brand-primary transition-colors"
                  >
                    About the Team
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://app.termly.io/policy-viewer/policy.html?policyUUID=afce853e-ac5b-4e1c-b0a6-bbe64a80d334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-light hover:text-brand-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Section - Copyright */}
          <div className="text-right flex-1">
            <p className="text-brand-light">© {new Date().getFullYear()} Kaizen Flow. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 