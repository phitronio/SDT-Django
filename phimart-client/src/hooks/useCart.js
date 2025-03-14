import { useState } from "react";
import apiClient from "../services/api-client";

const useCart = () => {
  const [authToken, setAuthToken] = useState(
    () => JSON.parse(localStorage.getItem("authTokens")).access
  );
  // Crate a new cart
  const createCart = async () => {
    try {
      console.log(authToken);
      const response = await apiClient.post(
        "/carts/",
        {},
        {
          headers: { Authorization: `JWT ${authToken}` },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { createCart };
};

export default useCart;
