import React, { createContext, useReducer } from 'react';
import initialTransportState from './initialTransportState';
import transportDispatcher from './transportDispatcher';
import { assignDispatcher, reducer } from '../../../utilities';

assignDispatcher(reducer, transportDispatcher);

export const TransportStateContext = createContext();
export const TransportDispatchContext = createContext();

const TransportProvider = ({ children }) => {
  const [transportState, transportDispatch] = useReducer(
    reducer,
    initialTransportState
  );
  return (
    <TransportStateContext.Provider value={transportState}>
      <TransportDispatchContext.Provider value={transportDispatch}>
        {children}
      </TransportDispatchContext.Provider>
    </TransportStateContext.Provider>
  );
};

export default TransportProvider;
