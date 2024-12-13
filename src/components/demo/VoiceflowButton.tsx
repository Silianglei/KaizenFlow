import React from 'react';
import { MessageSquare } from 'lucide-react';
import { DemoButton } from './DemoButton';
import { useVoiceflowWidget } from '../../hooks/useVoiceflowWidget';

export function VoiceflowButton() {
  const { openChat } = useVoiceflowWidget();
  
  return (
    <DemoButton
      icon={MessageSquare}
      label="Try Chat!"
      onClick={openChat}
    />
  );
}