import React from 'react';
import { useAppState } from './hooks/useAppState';
import { AppLayout } from './components/layout/AppLayout';

function App() {
  const { mounted, navVisible, contentVisible } = useAppState();
  
  return (
    <AppLayout 
      mounted={mounted}
      navVisible={navVisible}
      contentVisible={contentVisible}
    />
  );
}

export default App;