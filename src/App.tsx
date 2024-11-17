import React, { useState, useEffect } from 'react';
import { Target, Workflow, Rocket, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import IntroAnimation from './components/IntroAnimation';
import FeatureCard from './components/FeatureCard';
import Timeline from './components/Timeline';
import AboutTeam from './components/AboutTeam';

function App() {
  const [mounted, setMounted] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setNavVisible(true);
      setTimeout(() => {
        setContentVisible(true);
      }, 100);
    }, 800);
  }, []);

  const features = [
    {
      Icon: Target,
      title: "AI-Powered Lead Generation",
      description: "Smart AI algorithms to identify and engage high-value prospects."
    },
    {
      Icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline your business processes with intelligent solutions."
    },
    {
      Icon: Rocket,
      title: "Client Management Systems",
      description: "Build lasting relationships with automated engagement."
    }
  ];

  return (
    <>
      {mounted && <IntroAnimation />}
      <div className="min-h-screen bg-brand-dark">
        <div className={`${navVisible ? '' : 'nav-hidden'}`}>
          <Navbar />
        </div>
        <main className={`main-content pt-32 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <section className="hero-section pb-20 px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-brand-gray/30 rounded-full mb-6">
                <span className="text-brand-primary font-semibold">AUTOMATE YOUR BUSINESS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
                We build <span className="gradient-text">hands-off growth</span> systems for ambitious businesses
              </h1>
              <p className="text-xl md:text-2xl text-brand-light max-w-3xl mx-auto mb-12">
                Transform your business operations with AI-powered automation. Scale your lead acquisition, 
                streamline customer management, and optimize marketing workflows—all while focusing on what truly matters.
              </p>
              <a href="https://form.typeform.com/to/xxxxx" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn-primary inline-flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          <section id="solutions" className="solutions-section scroll-mt-16 py-24 bg-solutions-pattern">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white glow-text">Our Solutions</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </section>

          <section id="how-it-works" className="how-it-works-section scroll-mt-16 py-24 bg-timeline-pattern">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white glow-text">How It Works</h2>
              <Timeline />
            </div>
          </section>

          <section id="about" className="about-section scroll-mt-16 py-24 bg-about-pattern">
            <div className="max-w-5xl mx-auto px-4">
              <AboutTeam />
            </div>
          </section>

          <section className="cta-section py-20 px-4 bg-gradient-to-b from-brand-dark to-brand-gray/20">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Get started today with a<br className="hidden sm:block" />
                30min intro call
              </h2>
              <p className="text-lg md:text-xl text-brand-light mb-10 max-w-2xl mx-auto">
                A no-strings-attached meet and greet + consultation with our team 👋<br className="hidden sm:block" />
                Book your call now.
              </p>
              <a
                href="https://form.typeform.com/to/xxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center justify-center space-x-3 text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-glow-xl hover:shadow-glow-xl-hover w-full sm:w-auto"
              >
                <span>Book intro call</span>
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="mt-4 text-brand-light text-base">No credit card required.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;