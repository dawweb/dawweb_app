import React from 'react'
import { useTransportDispatch, usePlaybackState } from '../../context/TransportContext'
import Toggle from '../../UI/Toggle'

const PlaybackController = () => {
  const playbackState = usePlaybackState()
  const dispatch = useTransportDispatch()
  return (
    <div className="controller-playback">
      <Toggle
        className={`togglePlayback ${playbackState}`}
        callback={() => dispatch({ type: 'togglePlaybackState' })}
        innerText="❙▶"
      />
      <Toggle
        className={`stopPlayback ${playbackState}`}
        callback={() => dispatch({ type: 'stopPlayback' })}
        innerText="■"
      />
    </div>
  )
}

export default PlaybackController
