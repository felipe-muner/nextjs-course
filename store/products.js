import { useReducer, useContext, createContext } from "react";

const initialState = {
  products: [{ name: "luiza" }, { name: "jose" }, { name: "marly" }],
};

const ProductsStateContext = createContext();
const ProductsDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      const newState = { products: [...state.products, { name: "felipe" }] };
      console.log('newstateincrease')
      console.log(newState);
      console.log('newstateincrease')
      return newState;
    case "DECREASE":
      const removed = {
        products: [...state.products].filter((el) => el.name !== "felipe"),
      };
      return removed;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductsDispatchContext.Provider value={dispatch}>
      <ProductsStateContext.Provider value={state}>
        {children}
      </ProductsStateContext.Provider>
    </ProductsDispatchContext.Provider>
  );
};

export const ctxProducts = () => useContext(ProductsStateContext);
export const dispatchProducts = () => useContext(ProductsDispatchContext);
