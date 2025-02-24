const Cart = ({ cartItems, onClear, onRemove }) => {
  return (
    <div>
      <ul className="m-5 list-disc">
        {cartItems.map((item) => (
          <li onClick={() => onRemove(item)} key={item}>
            {item}
          </li>
        ))}
      </ul>
      <button onClick={onClear} className="px-3 py-2 bg-blue-500 text-white">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
