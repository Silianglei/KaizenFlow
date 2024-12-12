import React from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[80%] rounded-xl px-4 py-2 ${
          message.isBot
            ? 'bg-brand-gray/50 text-white'
            : 'bg-brand-primary text-brand-dark'
        }`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;