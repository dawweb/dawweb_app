import {
  TransportStateContext,
  TransportDispatchContext,
} from './context/TransportContext';
import { useContextValidation } from '../../utilities';

/* State Hooks */
export const usePlaybackState = () =>
  useContextValidation(TransportStateContext, 'playbackState');

export const useBpm = () => useContextValidation(TransportStateContext, 'bpm');

/* Dispatch Hook */
const useTransportDispatch = () =>
  useContextValidation(TransportDispatchContext);

export default useTransportDispatch;
