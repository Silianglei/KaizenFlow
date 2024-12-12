import React, { useState } from 'react';
import Modal from '../shared/Modal';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. How can I help you today?",
      isBot: true
    }
  ]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      isBot: false
    };
    setMessages(prev => [...prev, newMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thanks for your message! This is a demo response. In a real implementation, this would be connected to your AI backend.",
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Chat Support">
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <div className="border-t border-brand-primary/20 p-4">
        <ChatInput onSend={handleSendMessage} />
      </div>
    </Modal>
  );
}

export default ChatModal;