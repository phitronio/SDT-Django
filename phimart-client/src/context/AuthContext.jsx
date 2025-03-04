import { createContext, useState } from "react";
import apiClient from "../services/api-client";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());

  // Login User
  const loginUser = async (email, password) => {
    const response = await apiClient.post("/auth/jwt/create/", {
      email,
      password,
    });
    console.log(response.data);
  };

  return (
    <AuthContext.Provider value={{ loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
