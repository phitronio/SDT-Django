import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([
    "product 1",
    "product 2",
    "product 3",
    "product 4",
  ]);

  const handleProductRemove = (item) => {
    setCartItems(cartItems.filter((product) => product != item));
  };

  return (
    <div className="m-5">
      <Navbar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => setCartItems([])}
        onRemove={handleProductRemove}
      />
    </div>
  );
}

export default App;
