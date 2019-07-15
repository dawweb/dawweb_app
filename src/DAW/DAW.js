import React from 'react'
import TransportProvider from './context/TransportContext';
import Transport from './components/Transport/Transport';

const DAW = () => {
  return (
    <div className="DAW">
      <TransportProvider>
        <Transport />
      </TransportProvider>
    </div>
  )
}

export default DAW
