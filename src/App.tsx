import React from 'react';
import { useAppState } from './hooks/useAppState';
import { useProactiveChat } from './hooks/useProactiveChat';
import { AppLayout } from './components/layout/AppLayout';

export default function App() {
  const { mounted, navVisible, contentVisible } = useAppState();
  
  // Initialize proactive chat
  useProactiveChat();

  return (
    <AppLayout 
      mounted={mounted}
      navVisible={navVisible}
      contentVisible={contentVisible}
    />
  );
}