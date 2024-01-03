import {
  increaseQuantityOfProduct,
  reduceQuantityOfProduct,
  removeProductFromCart,
} from "@/redux/slices/cartSlice";
import { ProductType } from "@/utils/dataTypes";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import noImage from "../../public/noIcon.jpg";
import DeleteIcon from "./DeleteIcon";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";
import { useEffect } from "react";
import { toast } from "react-toastify";

type ProductPropsType = {
  product: ProductType;
};

const CartPorductCard = ({ product }: ProductPropsType) => {
  const router = useRouter();
  const dispatch = useDispatch<Dispatch<UnknownAction>>();

  const handleIncreaseQuntity = () => {
    dispatch(increaseQuantityOfProduct(product));
  };

  const handleReduceQuantity = () => {
    dispatch(reduceQuantityOfProduct(product));
  };

  const handleRemovePorductFromCart = () => {
    dispatch(removeProductFromCart(product));
  };

  const handleBuyNow = () => {
    router.push("/greeting");
    dispatch(removeProductFromCart(product));
  };

  useEffect(() => {
    if (product.cartCount === product.stock) {
      toast.warn("Stock Limit Reached!", {
        autoClose: 3000,
        hideProgressBar: true,
        toastId: "StockLimitReached",
      });
    }
  }, [product.cartCount, product.stock]);

  return (
    <div className="cart-product-container">
      <div>
        <img
          className="cart-product-image"
          src={product.thumbnail ?? noImage}
          alt="cart-product-image"
        />
      </div>
      <div className="cart-product-details">
        <p className="cart-product-name">{product.title}</p>
        <p className="cart-product-price">${product.price}</p>
        <div className="cart-product-buttons">
          <button
            onClick={() => handleReduceQuantity()}
            disabled={product.cartCount === 1}
          >
            <MinusIcon />
          </button>
          <div className="cart-product-quantity">{product.cartCount}</div>
          <button
            onClick={() => handleIncreaseQuntity()}
            disabled={product.cartCount === product.stock}
          >
            <PlusIcon />
          </button>
        </div>
        <button
          className="cart-product-buy-now-button"
          onClick={() => handleBuyNow()}
        >
          Buy Now
        </button>
      </div>
      <button
        className="cart-delete-icon"
        onClick={() => handleRemovePorductFromCart()}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default CartPorductCard;
