import React, { useState } from 'react';
import { useInterval } from '../../utilities'

const Gate = ({ callback, className, innerText, interval }) => {
  const [gateOpen, setGateOpen] = useState(false);
  const { startInterval, stopInterval } = useInterval(callback, interval)

  const handleGateOpen = e => {
    e.preventDefault()
    startInterval()
    setGateOpen(true)
  }

  const handleGateClosed = () => {
    stopInterval()
    setGateOpen(false)
  }

  return (
    <button
      type="button"
      className={`${className} ${gateOpen}`}
      onMouseDown={handleGateOpen}
      onMouseUp={handleGateClosed}
      onMouseLeave={handleGateClosed}
    >
      {innerText}
    </button>
  );
};

export default Gate;
