import React from 'react';
import TempoController from './TempoController';
import PlaybackController from './PlaybackController';
import '../../styles/transportStyles.css';

const Transport = () => {
  return (
    <div className="Transport">
      <TempoController />
      <PlaybackController />
    </div>
  );
};

export default Transport;
