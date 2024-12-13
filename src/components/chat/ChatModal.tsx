import React, { useEffect, useRef } from 'react';
import Modal from '../shared/Modal';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { LoadingMessage } from '../shared/LoadingMessage';
import { useChat } from '../../hooks/useChat';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const { messages, isLoading, sendMessage, handleButtonClick, initializeChat, resetChat } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      initializeChat();
    } else {
      resetChat();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Chat Support">
      <div className="flex flex-col h-[500px]">
        <div className="flex-1 overflow-y-auto p-4">
          {isLoading ? (
            <LoadingMessage message="Initializing chat support..." />
          ) : (
            <>
              {messages.map(message => (
                <ChatMessage 
                  key={message.id} 
                  message={message}
                  onButtonClick={handleButtonClick}
                />
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
        <div className="border-t border-brand-primary/20 p-4">
          <ChatInput onSend={sendMessage} disabled={isLoading} />
        </div>
      </div>
    </Modal>
  );
}