import React from 'react'
import { TransportProvider } from './context/TransportContext';
import Transport from './components/Transport';

export default function DAW() {
  return (
    <div className="DAW">
      <TransportProvider>
        <Transport />
      </TransportProvider>
    </div>
  )
}
