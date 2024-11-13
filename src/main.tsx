import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MemberstackProvider } from '@memberstack/react';
import App from './App';
import './index.css';

const config = { 
  publicKey: 'pk_23cde470764e72440410',
  appId: 'app_cm0blq3ox00bu0sv8fvk20apa'
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemberstackProvider config={config}>
      <App />
    </MemberstackProvider>
  </StrictMode>
);