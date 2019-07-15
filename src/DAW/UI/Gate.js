import React, { useState } from 'react';

const Gate = ({ callback, className, innerText, interval, timeout }) => {
  const [activeState, setActiveState] = useState('');

  let gateInterval, gateTimeout;
  const handleMouseDown = e => {
    e.preventDefault();
    setActiveState('active');
    if (timeout) {
      clearTimeout(gateTimeout);
      gateTimeout = setTimeout(() => {
        if (interval) {
          gateInterval = setInterval(() => {
            callback();
          }, interval);
        }
        callback();
      }, timeout);
    }
    callback();
  };

  const handleMouseUp = () => {
    setActiveState('');
    clearTimeout(gateTimeout);
    clearInterval(gateInterval);
  };

  const handleMouseLeave = () => {
    setActiveState('');
    clearTimeout(gateTimeout);
    clearInterval(gateInterval);
  };

  return (
    <button
      type="button"
      className={`${className} ${activeState}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {innerText}
    </button>
  );
};

export default Gate;
