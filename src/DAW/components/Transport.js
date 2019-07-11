import React from 'react';
import { usePlayback } from '../context/TransportContext';

const Transport = (props) => {
  const context = usePlayback()
  console.log(context);
  return (
    <div>
      <p>Hello from Transport!</p>
    </div>
  )
}

export default Transport;
