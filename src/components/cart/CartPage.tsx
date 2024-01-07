import React, { useMemo } from "react";
import CartPorductCard from "./CartPorductCard";
import { ProductType } from "@/utils/dataTypes";
import type { RootState } from "../../src/pages/_app";
import { useSelector } from "react-redux";

const CartPage = () => {
  const state = useSelector((state: RootState) => state);
  // cached total amount
  const cachedAmount = useMemo(() => {
    let totalPrice: number = 0;
    if (state.cart.length) {
      state.cart.forEach((item) => {
        if (item.cartCount) {
          totalPrice += item.price * item.cartCount;
        } else {
          totalPrice += item.price * 1;
        }
      });
    }
    return totalPrice;
  }, [state.cart]);
  return (
    <div className="cart-list">
      <h2 className="cart-title">Cart List</h2>
      {cachedAmount > 0 && (
        <p className="cart-cart-amount">Total Cart Amount: ${cachedAmount}</p>
      )}
      <hr />
      {state?.cart?.length > 0 ? (
        <>
          {state?.cart.map((product, index: number) => {
            return <CartPorductCard key={index} product={product} />;
          })}
        </>
      ) : (
        <p className="cart-note">
          Cart is empty! Please add your favourite products.
        </p>
      )}
    </div>
  );
};

export default CartPage;
