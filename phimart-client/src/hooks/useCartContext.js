import { useContext } from "react";
import CartContext from "../context/CartContext";

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
