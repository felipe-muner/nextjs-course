import { ContextProvider } from "../store/context";
import { ProductProvider } from "../store/store";

//IMPORT ALL CONTEXT HERE TO MAKE IT AVAILABLE ALL OVER THE APP

export const RootProvider = ({ children }) => {
  return (
    <ProductProvider>
      <ContextProvider>{children}</ContextProvider>
    </ProductProvider>
  );
};
