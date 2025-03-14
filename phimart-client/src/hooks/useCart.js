import { useState } from "react";
import apiClient from "../services/api-client";

const useCart = () => {
  const [authToken, setAuthToken] = useState(
    () => JSON.parse(localStorage.getItem("authTokens")).access
  );
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));

  // Crate a new cart
  const createOrGetCart = async () => {
    try {
      console.log(authToken);
      const response = await apiClient.post(
        "/carts/",
        {},
        {
          headers: { Authorization: `JWT ${authToken}` },
        }
      );
      if (!cartId) {
        localStorage.setItem("cartId", response.data.id);
        setCartId(response.data.id);
      }
      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add items to the cart
  const AddCartItems = async (product_id, quantity) => {
    if (!cartId) await createOrGetCart();
    try {
      const response = await apiClient.post(
        `/carts/${cartId}/items/`,
        { product_id, quantity },
        {
          headers: { Authorization: `JWT ${authToken}` },
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error adding Items", error);
    }
  };

  return { cart, createOrGetCart, AddCartItems };
};

export default useCart;
