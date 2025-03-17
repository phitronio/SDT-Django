import OrderItems from "./OrderItems";

const OrderTable = ({ items }) => {
  return (
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
          {items.map((item) => (
            // Order Items
            <OrderItems key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
