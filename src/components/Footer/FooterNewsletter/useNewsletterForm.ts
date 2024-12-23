import { useState } from 'react';
import { sendWebhook, WEBHOOKS } from '../../../utils/webhooks';
import { validateEmail } from '../../../utils/validation';

export function useNewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      await sendWebhook(WEBHOOKS.NEWSLETTER, {
        type: 'newsletter_signup',
        timestamp: new Date().toISOString(),
        data: { email }
      });
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return {
    email,
    setEmail,
    status,
    handleSubmit
  };
}