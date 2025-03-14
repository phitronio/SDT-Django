import { useEffect } from "react";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
  const { createCart } = useCartContext();

  useEffect(() => {
    createCart();
  }, []);
  return <div>This is cart Page</div>;
};

export default Cart;
