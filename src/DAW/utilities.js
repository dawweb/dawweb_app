import { useContext } from 'react';

/* Generalized reducer function */
export const reducer = (state, action) => {
  if (action.type in reducer.dispatcher) {
    return reducer.dispatcher[action.type](state, action);
  } else {
    console.error(`Unhandled action type: ${action.type}`);
  }

  return state;
};

export const assignReducerDispatcher = (reducer, dispatcher) => {
  reducer.dispatcher = dispatcher;
  return reducer;
};

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
