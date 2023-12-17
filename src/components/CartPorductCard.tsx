import React from "react";

const CartPorductCard = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>Product Name</p>
        <p>Unit Price: $10</p>
        <div>
          <button>+</button>
          <input type="number" value={1} disabled />
          <button>-</button>
        </div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default CartPorductCard;
