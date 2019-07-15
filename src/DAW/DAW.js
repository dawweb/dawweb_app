import React from 'react';
import TransportProvider from './Transport/context/TransportContext';
import Transport from './Transport/Transport';

const DAW = () => {
  return (
    <div className="DAW">
      <TransportProvider>
        <Transport />
      </TransportProvider>
    </div>
  );
};

export default DAW;
