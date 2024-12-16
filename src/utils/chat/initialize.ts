import { VOICEFLOW_CONFIG } from '../../config/voiceflow';
import { debugLog } from '../voiceflow/debug';

let isInitialized = false;

export function initializeVoiceflowChat() {
  if (isInitialized) return;

  debugLog('Initializing Voiceflow chat');
  const script = document.createElement('script');
  script.type = 'text/javascript';
  
  script.innerHTML = `
    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load(${JSON.stringify(VOICEFLOW_CONFIG)});
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, 'script');
  `;

  document.head.appendChild(script);
  isInitialized = true;
}