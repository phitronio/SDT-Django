import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  return (
    <div>
      <h1>This is login page</h1>
      <button
        className="btn btn-secondary"
        onClick={() => loginUser("admin@admin.com", "Test1234")}
      >
        Click to login
      </button>
    </div>
  );
};

export default Login;
