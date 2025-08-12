import React from 'react';
import ReactDOM from 'react-dom/client';
import BarberShopBookingPWA from './BarberShopBookingPWA';
import './index.css'; // Optional - create if you need styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BarberShopBookingPWA />
  </React.StrictMode>
);

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
