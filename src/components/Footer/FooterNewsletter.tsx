import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <div className="max-w-md">
      <h3 className="text-2xl font-bold text-white mb-4">
        Stay Updated with KaizenFlow
      </h3>
      <p className="text-brand-light mb-6">
        Get the latest updates on AI technology and business automation. 
        No spam, just valuable insights delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-brand-gray/10 border border-brand-gray/20 rounded-lg text-white placeholder:text-brand-light focus:outline-none focus:border-brand-primary/50"
          required
        />
        <button 
          type="submit"
          className="px-6 py-3 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-brand-primary hover:bg-brand-primary/20 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}