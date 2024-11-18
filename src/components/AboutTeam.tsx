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
            Hey! I'm Brandon, the founder of KaizenFlow. I graduated from MIT (ranked as the #1 technology school by US News & World Report).
            I worked at an AI startup that has reached $4 billion in valuation as well as other big tech companies like Google and DoorDash. 
          </p>
          <p className="text-xl text-brand-light leading-relaxed">
            With a deep understanding of both real estate and technology, I know exactly what it takes 
            to generate consistent leads and nurture client relationships through automation, allowing 
            you to focus on what you do best—closing deals.
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