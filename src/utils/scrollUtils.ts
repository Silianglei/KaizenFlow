const sectionMap: Record<string, string> = {
  'Solutions': 'ai-powered-phone-support',
  'How It Works': 'simple-onboarding-process',
  'Team': 'meet-our-team'
};

export const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const handleNavClick = (label: string) => {
  const sectionId = sectionMap[label];
  if (sectionId) {
    scrollToSection(sectionId);
  }
};