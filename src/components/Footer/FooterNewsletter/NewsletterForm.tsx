import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { SubscriptionStatus } from './types';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubscriptionStatus>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
  };

  return (
    <div>
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
      
      {status === 'success' && (
        <p className="mt-2 text-brand-primary text-sm">
          Thanks for subscribing!
        </p>
      )}
    </div>
  );
}