import { useReducer, useContext, createContext } from "react";
import Api from "../constants/api";

const initialState = {
  products: [{ name: "luiza" }, { name: "jose" }, { name: "marly" }],
};

const ProductsStateContext = createContext();
const ProductsDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      const newState = { products: [...state.products, { name: "felipe" }] };
      return newState;
    case "DECREASE":
      const removed = {
        products: [...state.products].filter((el) => el.name !== "felipe"),
      };
      return removed;
    case "GET_ALL":
      // AWAIT ISSUE - I NEED TO SET UP AWAIT HERE BUT I CANNOT SET UP ASYNC TO THIS FUNCTION
      const list = Api.product.getAll();
      console.log(list)
      const res = {
        products: [],
      };
      return res;
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
