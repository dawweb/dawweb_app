import React, { createContext, useContext, useReducer } from 'react';
import { Transport } from 'tone';

const initialTransportState = {
    playbackState: 'stopped',
    position: '0:0:0',
    loop: false,
    bpm: 120,
    swing: 0,
    swingSubdivision: '8n',
    timeSignature: 4,
    loopStart: 0,
    loopEnd: '4m',
    PPQ: 192
  };

const transportReducer = (transportState, transportAction) => {
  transportReducer.actions = {
    togglePlaybackState: () => {
      Transport.state === 'started' ? Transport.pause() : Transport.start()
      console.log('Transport state', Transport.state);
      return { ...transportState, playbackState: Transport.state };
    },
    stopPlayback: () => {
      Transport.stop()
      console.log('Transport state', Transport.state);
      return { ...transportState, playbackState: Transport.state };
    },
    setBpm: (newBpm) => {
      if (isNaN(newBpm)) {
        newBpm = transportState.bpm
      } else if (newBpm < 30) {
        Transport.bpm.value = 30
      } else if (newBpm > 300) {
        Transport.bpm.value = 300
      } else {
        Transport.bpm.value = newBpm;
      }
      console.log('Transport BPM', Transport.bpm.value);
      return { ...transportState, bpm: Transport.bpm.value }
    }
  }

  if (transportAction.type in transportReducer.actions) {
    return transportReducer.actions[transportAction.type](transportState, transportAction);
  } else {
    console.error(`${transportAction.type} not handled in TransportReducer`);
  }
  return transportState;
}

const TransportContext = createContext();
const TransportProvider = ({ children }) => {
  return (
    <TransportContext.Provider value={useReducer(transportReducer, initialTransportState)}>
      { children }
    </TransportContext.Provider>
  )
}

const useAssignContext = (stateProperty) => {
  const context = useContext(TransportContext)
  if (context === undefined) {
    console.error('useBpm within TransportProvider')
  }
  const [state, dispatch] = context
  return [state[stateProperty], dispatch]
}

export const usePlayback = () => {
  return useAssignContext('playbackState')
}

export const useBpm = () => {
  return useAssignContext('bpm')
}


export default TransportProvider;
