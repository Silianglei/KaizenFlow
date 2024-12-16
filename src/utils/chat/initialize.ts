import { VOICEFLOW_CONFIG } from '../../config/voiceflow';

let isInitialized = false;

export async function initializeVoiceflowChat(): Promise<void> {
  if (isInitialized) return;

  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      
      script.innerHTML = `
        (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            window.voiceflow.chat.load(${JSON.stringify(VOICEFLOW_CONFIG)});
            resolve();
          }
          v.onerror = function(error) {
            reject(error);
          }
          v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
          v.type = "text/javascript";
          s.parentNode.insertBefore(v, s);
        })(document, 'script');
      `;

      document.head.appendChild(script);
      isInitialized = true;
    } catch (error) {
      reject(error);
    }
  });
}