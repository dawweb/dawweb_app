import { Transport } from 'tone';

/* Handle Transport actions here */
const transportDispatcher = {
  togglePlaybackState: transportState => {
    Transport.state === 'started' ? Transport.pause() : Transport.start();
    console.log('Transport.state:', Transport.state);
    return { ...transportState, playbackState: Transport.state };
  },
  stopPlayback: transportState => {
    Transport.stop();
    console.log('Transport.state:', Transport.state);
    return { ...transportState, playbackState: Transport.state };
  },
  setBpm: (transportState, newBpm) => {
    if (isNaN(newBpm)) {
      newBpm = transportState.bpm;
    } else if (newBpm < 30) {
      Transport.bpm.value = 30;
    } else if (newBpm > 300) {
      Transport.bpm.value = 300;
    } else {
      Transport.bpm.value = newBpm;
    }
    console.log('Transport.bpm.value:', Transport.bpm.value);
    return { ...transportState, bpm: Transport.bpm.value };
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
};

export default transportDispatcher;
