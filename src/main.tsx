import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Create root only if it doesn't exist
let root;
if (rootElement._reactRootContainer) {
  root = rootElement._reactRootContainer;
} else {
  root = createRoot(rootElement);
}

// Render the app
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);