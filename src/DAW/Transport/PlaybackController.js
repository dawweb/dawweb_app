import React from 'react';
import useTransportDispatch, { usePlaybackState } from './hooks';
import Toggle from '../UI/Toggle';

const PlaybackController = () => {
  const dispatch = useTransportDispatch();
  const playbackState = usePlaybackState();

  /* Action Creators */
  const handleTogglePlaybackState = () => {
    dispatch({ type: 'togglePlaybackState' });
  };

  const handleStopPlayback = () => {
    dispatch({ type: 'stopPlayback' });
  };

  return (
    <div className="controller-playback">
      <Toggle
        callback={handleTogglePlaybackState}
        className={`playback-toggle ${playbackState}`}
        innerText="❙▶"
      />
      <Toggle
        callback={handleStopPlayback}
        className={`playback-stop ${playbackState}`}
        innerText="■"
      />
    </div>
  );
};

export default PlaybackController;
