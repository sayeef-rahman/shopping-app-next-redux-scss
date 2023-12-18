import React from "react";

const CartPorductCard = () => {
  return (
    <div className="cart-product-container">
      <div>
        <img
          className="cart-product-image"
          src="https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/batman.png?alt=media&token=bcce964a-7224-4e47-b619-265e93b5311e"
          alt="cart-product-image"
        />
      </div>
      <div className="cart-product-details">
        <p className="cart-product-name">Product Name</p>
        <p className="cart-product-price">$10</p>
        <div className="cart-product-buttons">
          <button
            className="cart-product-button"
            style={{ paddingRight: "10px" }}
          >
            +
          </button>
          {/* <input type="number" value={1} disabled /> */}
          <div className="cart-product-quantity">02</div>
          <button className="cart-product-button">-</button>
          {/* <button className="tiny button">.tiny.button</button> */}
        </div>
      </div>
      <div className="cart-product-delete-button">X</div>
    </div>
  );
};

export default CartPorductCard;
