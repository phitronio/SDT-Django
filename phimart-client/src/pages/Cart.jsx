import { Suspense, useEffect } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";

const Cart = () => {
  const { cart, loading, createOrGetCart, updateCartItemQuantity } =
    useCartContext();

  useEffect(() => {
    if (!cart && !loading) createOrGetCart();
  }, [createOrGetCart, cart, loading]);

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!cart) return <p>No Cart Found</p>;
  return (
    <div className="flex justify-between">
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <CartItemList
            items={cart.items}
            handleUpdateQuantity={handleUpdateQuantity}
          />
        </Suspense>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
