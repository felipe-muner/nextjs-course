import { ContextProvider } from "../store/context";
import { ProductProvider } from "../store/store";

export const RootProvider = ({ children }) => {
  console.log(21321312);
  return (
    <ProductProvider>
      <ContextProvider>{children}</ContextProvider>
    </ProductProvider>
  );
};
