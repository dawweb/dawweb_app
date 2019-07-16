import { useContext, useEffect, useRef, useState } from 'react';

/* Custom Utility Hooks */


/* Ensure context is being consumed within correct Provider */
export const useContextValidation = (contextObj, stateProperty) => {
  const context = useContext(contextObj);
  /* State Hooks for specific pieces of state */
  if (stateProperty) {
    if (context === undefined) {
      console.error(
        `${stateProperty} cannot be consumed outside of its Provider`
      );
    }
    return context[stateProperty];
  }
  /* Dispatch Hook / Utility Context Validator */
  if (context === undefined) {
    console.error(`Dispatch cannot be used outside of its Provider`);
  }
  return context;
};

/* Timers */
export const useInterval = (callback, delay) => {
  const [activeInterval, setActiveInterval] = useState(false)
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (activeInterval) {
      const tick = () => {
        callbackRef.current();
      };
      if (delay !== null) {
        let interval = setInterval(tick, delay);
        return () => clearInterval(interval);
      }
    }
  }, [activeInterval, delay]);

  return {
    startInterval: () => setActiveInterval(true),
    stopInterval: () => setActiveInterval(false)
  }
};


/* General Utility Functions */


/* Generalized reducer function, must assign dispatcher! */
export const reducer = (state, action) => {
  if (action.type in reducer.dispatcher) {
    return reducer.dispatcher[action.type](state, action.payload);
  } else {
    console.error(`Unhandled action type: ${action.type}`);
  }

  return state;
};

/* Tell the reducer which dictionary of actions to refer to */
export const assignDispatcher = (reducer, dispatcher) => {
  reducer.dispatcher = dispatcher;
  return reducer;
};
