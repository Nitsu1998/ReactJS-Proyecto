import { useState } from "react";

export default function ItemCount({ initial, stock, onAdd }) {
  
  const [amount, setAmount] = useState(initial);

  const decrease = () => {
    if (amount > initial) {
      setAmount(amount - 1);
    }
  };

  const increase = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };

  const addCart = () => {
    onAdd(amount);
  };

  return (
    <>
      <div id="productCounter">
        <div id="counter">
          <button onClick={decrease}>-</button>
          <p id="amount">{amount}</p>
          <button onClick={increase}>+</button>
        </div>
        <p id="stockAvailable">Available: {stock}</p>
        <div id="addCart">
            <button onClick={addCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
