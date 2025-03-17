const OrderCard = (order) => {
  return (
    <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
      <div className="bg-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold">Order #{order.id}</h2>
          <p className="text-gray-600 text-sm">Placed on {order.created_at}</p>
        </div>
        <div className="flex gap-2">
          <span
            className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
              order.status === "Not Paid" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {order.status}
          </span>
          {order.status !== "Deliverd" && (
            <span className="text-blue-700 hover:underline">Cancel</span>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-medium text-lg mb-4">Order Items</h3>
        {/* Order Items Table  */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-right">Price</th>
                <th className="px-4 py-3 text-right">Quantity</th>
                <th className="px-4 py-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                // Order Items
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{item.product.name}</td>
                  <td className="px-4 py-3 text-right">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-right">{item.quantity}</td>
                  <td className="px-4 py-3 text-right">
                    ${item.total_price.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="border-t p-6 flex flex-col items-end">
        <div className="space-y-2 w-full max-w-[200px]">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${order.total_price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total:</span>
            <span>${order.total_price.toFixed(2)}</span>
          </div>
        </div>
        {order.status === "Not Paid" && (
          <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
