import React from 'react';
import { Youtube, Twitter, Linkedin } from 'lucide-react';
import aboutMePic from './aboutme_pic.jpg';

interface SocialLink {
  Icon: typeof Youtube | typeof Twitter | typeof Linkedin;
  href: string;
  label: string;
}

function AboutTeam() {
  const socialLinks: SocialLink[] = [
    { Icon: Youtube, href: "#youtube", label: "YouTube" },
    { Icon: Twitter, href: "#twitter", label: "Twitter" },
    { Icon: Linkedin, href: "#linkedin", label: "LinkedIn" }
  ];

  return (
    <div className="about-team-container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="about-content">
          <h2 className="text-4xl font-bold mb-8 text-white">Meet the Team</h2>
          <p className="text-xl text-brand-light leading-relaxed mb-8">
            As the founder of KaizenFlow, I bring over a decade of experience in business automation 
            and AI integration. My mission is to help businesses achieve sustainable growth through 
            intelligent automation solutions that actually work.
          </p>
          <p className="text-xl text-brand-light leading-relaxed">
            With a background in both technology and business strategy, I understand the unique 
            challenges that growing businesses face and how to overcome them through smart automation.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="about-image mb-6">
            <img 
              src={aboutMePic}
              alt="Team Leader" 
              className="rounded-2xl shadow-2xl w-full h-[350px] object-cover transform hover:scale-105 transition-transform duration-500"
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
  );
}

export default AboutTeam;