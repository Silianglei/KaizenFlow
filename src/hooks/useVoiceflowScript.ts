import { useState, useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
        }) => void;
      };
    };
  }
}

export function useVoiceflowScript() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '675b4b3edb9909bd11db5779' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
      setIsLoading(false);
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      // Remove Voiceflow iframe if it exists
      const vfChat = document.querySelector('iframe[title="Voiceflow Chat Widget"]');
      if (vfChat?.parentElement) {
        vfChat.parentElement.remove();
      }
      setIsLoading(true);
    };
  }, []);

  return { isLoading };
}