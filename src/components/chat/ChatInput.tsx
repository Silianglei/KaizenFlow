import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-brand-gray/50 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
      />
      <button
        type="submit"
        className="bg-brand-primary text-brand-dark p-2 rounded-lg hover:bg-brand-primary/90 transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}

export default ChatInput;