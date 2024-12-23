import React from 'react';
import { Send } from 'lucide-react';
import { useNewsletterForm } from './useNewsletterForm';

export default function NewsletterForm() {
  const { email, setEmail, status, handleSubmit } = useNewsletterForm();

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
          disabled={status === 'loading'}
        />
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-brand-primary hover:bg-brand-primary/20 transition-colors disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
      
      {status === 'success' && (
        <p className="mt-2 text-brand-primary text-sm">
          Thanks for subscribing!
        </p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-red-400 text-sm">
          Please enter a valid email address
        </p>
      )}
    </div>
  );
}