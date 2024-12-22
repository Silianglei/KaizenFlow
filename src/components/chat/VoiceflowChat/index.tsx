import React, { useEffect } from 'react';
import { VOICEFLOW_CONFIG } from './config';

export default function VoiceflowChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.onload = () => {
      window.voiceflow.chat.load(VOICEFLOW_CONFIG);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}