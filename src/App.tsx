import React from 'react';
import { useAppState } from './hooks/useAppState';
import { useVoiceflowChat } from './hooks/useVoiceflowChat';
import { AppLayout } from './components/layout/AppLayout';

function App() {
  const { mounted, navVisible, contentVisible } = useAppState();
  
  // Initialize Voiceflow chat with welcome messages
  useVoiceflowChat();

  return (
    <AppLayout 
      mounted={mounted}
      navVisible={navVisible}
      contentVisible={contentVisible}
    />
  );
}

export default App;