import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ChatMessage } from '../types/chat';
import { generateSessionId, startVoiceflowInteraction, sendMessageToVoiceflow } from '../utils/voiceflow';
import { transformVoiceflowResponse } from '../utils/voiceflow/transformers';
import { debugLog } from '../utils/voiceflow/debug';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionId] = useState(() => generateSessionId());

  const processVoiceflowResponse = (response: any[]): ChatMessage[] => {
    debugLog('Processing Voiceflow response array:', response);
    
    return response
      .filter(res => {
        const isValid = res.payload && (
          res.type === 'text' || 
          res.type === 'choice' || 
          res.type === 'buttons' || 
          res.type === 'card'
        );
        debugLog(`Filtering response of type ${res.type}:`, isValid);
        return isValid;
      })
      .map(res => {
        debugLog('Transforming response:', res);
        return transformVoiceflowResponse(res);
      });
  };

  const initializeChat = async () => {
    try {
      debugLog('Initializing chat');
      const response = await startVoiceflowInteraction(sessionId);
      if (Array.isArray(response)) {
        const botMessages = processVoiceflowResponse(response);
        debugLog('Initial bot messages:', botMessages);
        setMessages(botMessages);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to start chat:', error);
      debugLog('Chat initialization error:', error);
      setMessages([{
        id: nanoid(),
        type: 'text',
        content: 'Sorry, I\'m having trouble connecting. Please try again later.',
        isBot: true,
        timestamp: Date.now(),
      }]);
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    debugLog('Resetting chat');
    setMessages([]);
    setIsLoading(true);
  };

  const sendMessage = async (text: string) => {
    debugLog('Sending message:', text);
    const userMessage: ChatMessage = {
      id: nanoid(),
      type: 'text',
      content: text,
      isBot: false,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, userMessage]);
    
    try {
      const response = await sendMessageToVoiceflow(sessionId, text);
      if (Array.isArray(response)) {
        const botMessages = processVoiceflowResponse(response);
        debugLog('Bot response messages:', botMessages);
        setMessages(prev => [...prev, ...botMessages]);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      debugLog('Message send error:', error);
      setMessages(prev => [...prev, {
        id: nanoid(),
        type: 'text',
        content: 'Sorry, I couldn\'t process your message. Please try again.',
        isBot: true,
        timestamp: Date.now(),
      }]);
    }
  };

  const handleButtonClick = async (request: string) => {
    debugLog('Handling button click:', request);
    try {
      const response = await sendMessageToVoiceflow(sessionId, request, true);
      
      if (Array.isArray(response)) {
        const botMessages = processVoiceflowResponse(response);
        debugLog('Button click response messages:', botMessages);
        setMessages(prev => [...prev, ...botMessages]);
      }
    } catch (error) {
      console.error('Failed to handle button click:', error);
      debugLog('Button click error:', error);
      setMessages(prev => [...prev, {
        id: nanoid(),
        type: 'text',
        content: 'Sorry, I couldn\'t process your selection. Please try again.',
        isBot: true,
        timestamp: Date.now(),
      }]);
    }
  };

  return {
    messages,
    isLoading,
    sendMessage,
    handleButtonClick,
    initializeChat,
    resetChat
  };
}