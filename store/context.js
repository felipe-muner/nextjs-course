import { useReducer, useContext, createContext } from "react";

const CounterStateContext = createContext();
const CounterDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "INCREASE_BY":
      return state + action.payload;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 50);
  return (
    <CounterDispatchContext.Provider value={dispatch}>
      <CounterStateContext.Provider value={state}>
        {children}
      </CounterStateContext.Provider>
    </CounterDispatchContext.Provider>
  );
};

export const useCount = () => useContext(CounterStateContext);
export const useDispatchCount = () => useContext(CounterDispatchContext);
