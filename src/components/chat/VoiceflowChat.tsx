import React from 'react';
import { useVoiceflowChat } from '../../hooks/useVoiceflowChat';
import { LoadingMessage } from '../shared/LoadingMessage';

function VoiceflowChat() {
  const { isLoading } = useVoiceflowChat();
  return isLoading ? <LoadingMessage message="Initializing chat support..." /> : null;
}

export default VoiceflowChat;