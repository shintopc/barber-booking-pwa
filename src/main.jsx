import React from 'react'
import ReactDOM from 'react-dom/client'
import BarberShopBookingPWA from './BarberShopBookingPWA'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BarberShopBookingPWA />
  </React.StrictMode>
)

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}
