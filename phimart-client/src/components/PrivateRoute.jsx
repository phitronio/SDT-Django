import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  console.log(user);
  return user ? children : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
