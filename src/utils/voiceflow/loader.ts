import { VOICEFLOW_CONFIG } from './config';
import { debugLog } from './debug';

let isInitialized = false;
let initPromise: Promise<void> | null = null;

export function loadVoiceflowScript(): Promise<void> {
  if (initPromise) return initPromise;
  if (isInitialized) return Promise.resolve();

  initPromise = new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      
      // Create a unique handler name
      const handlerName = `_vf_init_${Date.now()}`;
      
      // Define the handler globally
      (window as any)[handlerName] = () => {
        if (window.voiceflow?.chat?.load) {
          window.voiceflow.chat.load(VOICEFLOW_CONFIG);
          isInitialized = true;
          debugLog('Voiceflow loaded successfully');
          resolve();
          // Cleanup
          delete (window as any)[handlerName];
        } else {
          reject(new Error('Voiceflow chat not available'));
        }
      };

      script.innerHTML = `
        (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = window.${handlerName};
          v.onerror = function(error) { 
            console.error('Failed to load Voiceflow:', error);
          };
          v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
          v.type = "text/javascript";
          s.parentNode.insertBefore(v, s);
        })(document, 'script');
      `;

      document.head.appendChild(script);
    } catch (error) {
      debugLog('Error loading Voiceflow:', error);
      reject(error);
    }
  }).finally(() => {
    initPromise = null;
  });

  return initPromise;
}