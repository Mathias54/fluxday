import React, {createContext, useContext, useReducer} from "react";
import Reducer from '../Reducer/Reducer';

export const StateContext = createContext({});

const initialState = {users: []};

export const Provider = ({ children }) => {
  const [ state, dispatch ] = useReducer(Reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

export function useSelector(selector) {
  const [state] = useStateValue();
  if (!state) throw new Error('State is Undefined');
  return selector(state);
}

export function useDispatch() {
  const [state, dispatch] = useStateValue();

  function autoReDispatch(action){
    if (!dispatch) throw new Error('dispatch is Undefined');
    typeof action === 'function'
      ? action(dispatch, state)
      : dispatch(action);
  }

  return autoReDispatch;
}
