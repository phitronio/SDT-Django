import OrderCard from "../components/Orders/OrderCard";

const Orders = () => {
  const orders = [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      user: 1,
      status: "Not Paid",
      total_price: 0,
      created_at: "2025-03-17T12:36:15.898Z",
      items: [
        {
          id: 1,
          product: {
            id: 1,
            name: "string",
            price: 23.43,
          },
          price: 0,
          quantity: 2,
          total_price: 234,
        },
        {
          id: 2,
          product: {
            id: 2,
            name: "string",
            price: 0,
          },
          price: 34.54,
          quantity: 1,
          total_price: 30,
        },
      ],
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      user: 1,
      status: "Not Paid",
      total_price: 0,
      created_at: "2025-03-17T12:36:15.898Z",
      items: [
        {
          id: 1,
          product: {
            id: 1,
            name: "string",
            price: 23.43,
          },
          price: 0,
          quantity: 2,
          total_price: 234,
        },
        {
          id: 2,
          product: {
            id: 2,
            name: "string",
            price: 0,
          },
          price: 34.54,
          quantity: 1,
          total_price: 30,
        },
      ],
    },
  ];
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
