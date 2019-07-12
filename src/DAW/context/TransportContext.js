import React, { createContext, useContext, useReducer } from 'react';
import { Transport } from 'tone';

/* Tone.Transport.defaults with 'playbackState', 'position', and 'loop' added */
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
  /* Handle Transport actions here */
  transportReducer.dispatcher = {
    togglePlaybackState: () => {
      Transport.state === 'started' ? Transport.pause() : Transport.start()
      console.log('Transport.state:', Transport.state);
      return { ...transportState, playbackState: Transport.state };
    },
    stopPlayback: () => {
      Transport.stop()
      console.log('Transport.state:', Transport.state);
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
      console.log('Transport.bpm.value:', Transport.bpm.value);
      return { ...transportState, bpm: Transport.bpm.value }
    },
    /* 
      setPosition >>> split bars:beats:sixteenths into separate state properties?,
      setSwing >>> value between 0 - 1,
      setSwingSubdivision >>> subdivision must be < '4n',
      setTimeSignature >>> numerator over 4,
      setLoopStart,
      setLoopEnd,
      setPPQ >>> hopefully we get to MIDI implementation ;)
     */
  }

  if (transportAction.type in transportReducer.dispatcher) {
    return transportReducer.dispatcher[transportAction.type](transportState, transportAction);
  } else {
    console.error(`${transportAction.type} not handled in TransportReducer`);
  }
  return transportState;
}

/* Provide Contexts and... */
const TransportStateContext = createContext();
const TransportDispatchContext = createContext()
export const TransportProvider = ({ children }) => {
  const [transportState, transportDispatch] = useReducer(transportReducer, initialTransportState)
  return (
    <TransportStateContext.Provider value={transportState}>
      <TransportDispatchContext.Provider value={transportDispatch}>
        { children }
      </TransportDispatchContext.Provider>
    </TransportStateContext.Provider>
  )
}

/* ...consume them within the appropriate Provider */
const useContextValidation = (contextObj, stateProperty) => {
  const context = useContext(contextObj)
  if (stateProperty) {
    if (context === undefined) {
      console.error(`Use ${stateProperty} hook within the appropriate Provider!`)
    }
    return context[stateProperty]
  }
  if (context === undefined) {
    console.error('Provide context object or use within the appropriate Provider')
  }
  return context
}

export default function useTransportDispatch () { useContextValidation(TransportDispatchContext) }

/* State Hooks */
export const usePlayback = () => useContextValidation(TransportStateContext, 'playbackState')

export const useBpm = () => useContextValidation(TransportStateContext, 'bpm')