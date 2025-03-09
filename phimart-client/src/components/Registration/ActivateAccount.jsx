import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ErroAlert from "../ErroAlert";
import apiClient from "../../services/api-client";

const ActivateAccount = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { uid, token } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    apiClient
      .post("/auth/users/activation/", { uid, token })
      .then((res) => {
        setMessage("Account activate successfully");
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((error) => {
        setError("Something Went Wrong. Please check your activation link");
        console.log(error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold">Account Activation</h2>
        {message && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{message}</span>
          </div>
        )}
        {error && <ErroAlert error={error} />}
      </div>
    </div>
  );
};

/* 

http://localhost:5174/activate/OQ/cmewh1-009c16c67f002127368d56c1b99a831b

*/
export default ActivateAccount;
