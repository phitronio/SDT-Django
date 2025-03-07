import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const allContext = useAuth();

  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

/* 
{a: 10, b: 20}
a, b
{a, b}
*/
