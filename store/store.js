import { useReducer, useContext, createContext } from "react";

const initialState = {
  products: [{ nome: "luiza" }],
};

const ProductsStateContext = createContext();
const ProductsDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      const newState = { products: [...state.products, { nome: "felipe" }] };
      console.log(newState.products.length);
      return newState;
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

export const productsStore = () => useContext(ProductsStateContext);
export const productsDispatch = () => useContext(ProductsDispatchContext);
