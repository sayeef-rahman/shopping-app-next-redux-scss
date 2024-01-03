import { addProductToCart } from "@/redux/slices/cartSlice";
import { ProductType } from "@/utils/dataTypes";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";

type ProductPropsType = {
  product: ProductType;
};
const ProductCard = ({ product }: ProductPropsType) => {
  const dispatch = useDispatch<Dispatch<UnknownAction>>();
  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };
  return (
    <div className="card">
      <div className="wrapper">
        <div className="colorProd"></div>
        <div
          className="imgProd"
          style={{
            backgroundImage: `url(${product.thumbnail})`,
          }}
        ></div>
        <div className="infoProd">
          <p className="nombreProd">{product.title}</p>
          {/* <p className="extraInfo">Fecha de salida: 31/03/2021</p> */}
          <div className="actions">
            <div className="preciosGrupo">
              <p className="precio precioProd">{product.price}</p>
            </div>
            <div
              className="icono action alCarrito"
              onClick={() => {
                handleAddToCart();
              }}
            >
              <svg
                className="outCart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <title>Add to Cart</title>
                <path d="M2 6h10l10 40h32l8-24H16"></path>
                <circle cx="23" cy="54" r="4"></circle>
                <circle cx="49" cy="54" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
