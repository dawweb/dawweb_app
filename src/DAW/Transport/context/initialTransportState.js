/* Tone.Transport.defaults with 'playbackState', 'position', 'loop', and 'metronome' added */
const initialTransportState = {
  playbackState: 'stopped',
  position: '0:0:0',
  loop: false,
  metronome: false,
  bpm: 120,
  swing: 0,
  swingSubdivision: '8n',
  timeSignature: 4,
  loopStart: 0,
  loopEnd: '4m',
  PPQ: 192,
};

export default initialTransportState;
