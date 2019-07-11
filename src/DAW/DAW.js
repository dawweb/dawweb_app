import React from 'react'
import Transport from './components/Transport';
import TransportProvider from './context/TransportContext';

export default function DAW() {
  return (
    <div className="DAW">
      <TransportProvider>
        <Transport />
      </TransportProvider>
    </div>
  )
}
