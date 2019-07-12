import React from 'react';
import useTransportDispatch, { usePlayback } from '../context/TransportContext';
import '../../styles/transportStyles.css';

const Transport = (props) => {
  const playbackState = usePlayback()
  const dispatch = useTransportDispatch()
  console.log('playbackState:', playbackState);
  return (
    <>
      <div
        className="increment-tempo"
        onMouseDown={() => {}}
      >
      </div>
      <div
        className="play-pause-button-container"
        onMouseDown={() => dispatch({type: 'togglePlaybackState'})}>
        <p>Play/Pause</p>
      </div>
      <div
        className="stop-button-container"
        onMouseDown={() => dispatch({type: 'stopPlayback'})}>
        <p>Stop</p>
      </div>
    </>
  )
}

export default Transport;
