import { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCard";
import authApiClient from "../services/auth-api-client";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    authApiClient.get("/orders/").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
