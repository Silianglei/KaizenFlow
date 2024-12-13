import React from 'react';
import { ChatMessage as ChatMessageType } from '../../types/chat';
import { TextMessage } from './messages/TextMessage';
import { ButtonMessage } from './messages/ButtonMessage';
import { CardMessage } from './messages/CardMessage';
import { debugLog } from '../../utils/voiceflow/debug';

interface ChatMessageProps {
  message: ChatMessageType;
  onButtonClick?: (request: string) => void;
}

export default function ChatMessage({ message, onButtonClick }: ChatMessageProps) {
  debugLog('Rendering chat message:', message);

  const renderContent = () => {
    try {
      switch (message.type) {
        case 'buttons':
          debugLog('Rendering button message');
          if (typeof message.content === 'object' && 'buttons' in message.content) {
            return (
              <ButtonMessage 
                content={message.content} 
                onButtonClick={onButtonClick} 
              />
            );
          }
          break;

        case 'card':
          debugLog('Rendering card message');
          if (typeof message.content === 'object' && 'title' in message.content) {
            return (
              <CardMessage 
                content={message.content} 
                onButtonClick={onButtonClick} 
              />
            );
          }
          break;

        case 'text':
        default:
          debugLog('Rendering text message');
          return <TextMessage content={typeof message.content === 'string' ? message.content : 'Invalid message format'} />;
      }
    } catch (error) {
      console.error('Error rendering message:', error);
      debugLog('Render error:', error);
      return <TextMessage content="Error displaying message" />;
    }
  };

  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-xl px-4 py-2 ${
          message.isBot
            ? 'bg-brand-gray/50 text-white'
            : 'bg-brand-primary text-brand-dark'
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
}