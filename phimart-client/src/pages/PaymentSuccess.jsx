import { useEffect } from "react";
import { Link, useNavigate } from "react-router";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If the request is a POST, redirect to the same page with a GET request
    if (
      window.performance.getEntriesByType("navigation")[0]?.type === "reload"
    ) {
      navigate(0); // Reload the page as a GET request
    }
  }, [navigate]);
  return (
    <div>
      Payment success return To <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default PaymentSuccess;
