import React from 'react';
import { Linkedin } from 'lucide-react';
import aboutme_pic from '../assets/aboutme_pic.jpg';
interface SocialLink {
  Icon: typeof Linkedin;
  href: string;
  label: string;
}

function AboutTeam() {
  const socialLinks: SocialLink[] = [
    { 
      Icon: Linkedin, 
      href: "https://www.linkedin.com/in/brandonlei/", 
      label: "LinkedIn" 
    }
  ];

  return (
    <section id="about" className="about-section scroll-mt-16 py-24 bg-about-pattern">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white glow-text">Meet the Team</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="about-content">
            <p className="text-xl text-brand-light leading-relaxed mb-8">
              Hey! I'm Brandon, the founder of KaizenFlow. I graduated from MIT, ranked as the #1 technology 
              school by US News & World Report. My journey in tech has been focused on pushing the boundaries 
              of what's possible with AI.
            </p>
            <p className="text-xl text-brand-light leading-relaxed">
              With experience at an AI startup that reached $4 billion in valuation, plus roles at industry 
              leaders like Google and DoorDash, I bring deep expertise in building AI solutions that deliver 
              real business value. Now, I'm passionate about transforming property management through 
              intelligent automation.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="about-image mb-6 w-full max-w-md">
              <img 
                src={aboutme_pic}
                alt="Brandon - Founder of KaizenFlow" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex space-x-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-light hover:text-brand-primary transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;