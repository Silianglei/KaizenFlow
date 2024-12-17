import React from 'react';
import { useAppState } from './hooks/useAppState';
import { useVoiceflowChat } from './hooks/useVoiceflowChat';
import { useScreenSize } from './hooks/useScreenSize';
import { AppLayout } from './components/layout/AppLayout';

function App() {
  const { mounted, navVisible, contentVisible } = useAppState();
  const { isMobile } = useScreenSize();
  
  // Initialize Voiceflow chat with welcome messages
  useVoiceflowChat();

  return (
    <AppLayout 
      mounted={mounted}
      navVisible={navVisible}
      contentVisible={contentVisible}
      isMobile={isMobile}
    />
  );
}

export default App;