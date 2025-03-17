const OrderItems = ({ item }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3 font-medium">{item.product.name}</td>
      <td className="px-4 py-3 text-right">${item.price.toFixed(2)}</td>
      <td className="px-4 py-3 text-right">{item.quantity}</td>
      <td className="px-4 py-3 text-right">${item.total_price.toFixed(2)}</td>
    </tr>
  );
};

export default OrderItems;
