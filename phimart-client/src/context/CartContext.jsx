import { createContext } from "react";
import useCart from "../hooks/useCart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const allValue = useCart();
  return (
    <CartContext.Provider value={allValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
