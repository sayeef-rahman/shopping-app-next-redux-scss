"use client";
import { ProductType } from "@/utils/dataTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { json } from "stream/consumers";

interface IProducts extends ProductType {}

// interface IState {
//   cart: IProducts[] | [] | null;
// }

let initialState: IProducts[] | [] = [];

// if (typeof window !== "undefined") {
//   const localData = localStorage.getItem("cart");
//   const localCartData = localData ? JSON.parse(localData) : [];
//   console.log("localCartData", localCartData);
//   if (localCartData) {
//     initialState = localCartData;
//   }
// }

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProducts>) => {
      const productToAdd = action.payload;

      const isProductInCart = state.length
        ? state?.some((product) => product.id === productToAdd.id)
        : false;

      if (!isProductInCart) {
        const oldProducts: IProducts[] | [] = state.length
          ? state?.filter((product) => product.id !== productToAdd.id)
          : [];
        // localStorage.setItem(
        //   "cart",
        //   JSON.stringify([...oldProducts, { ...productToAdd, cartCount: 1 }])
        // );
        return [...oldProducts, { ...productToAdd, cartCount: 1 }];
      } else {
        let updatedCart: IProducts[] = [];
        state?.forEach((item) => {
          if (item.id === productToAdd.id) {
            let newCartCount = item.cartCount ?? 0;
            if (newCartCount !== item.stock) {
              newCartCount++;
            }
            updatedCart.push({ ...item, cartCount: newCartCount });
          } else {
            updatedCart.push(item);
          }
        });
        // localStorage.setItem("cart", JSON.stringify([...updatedCart]));
        return [...updatedCart];
      }
    },

    reduceQuantityOfProduct: (state, action: PayloadAction<IProducts>) => {
      const productPayload = action.payload;

      if (productPayload.cartCount === 1) {
        const newProducts: IProducts[] | undefined = state?.filter(
          (product) => product.id !== productPayload.id
        );
        return newProducts ? [...newProducts] : [];
      } else {
        if (state) {
          const updatedProductList = state.map((item) =>
            item.id === productPayload.id
              ? {
                  ...item,
                  cartCount: item.cartCount ? item.cartCount - 1 : 1,
                }
              : item
          );
          // localStorage.setItem("cart", JSON.stringify(updatedProductList));
          return updatedProductList;
        } else {
          return [];
        }
      }
    },
    increaseQuantityOfProduct: (state, action: PayloadAction<IProducts>) => {
      const productPayload = action.payload;

      let updatedCart: IProducts[] = [];
      state?.forEach((item) => {
        if (item.id === productPayload.id) {
          let newCartCount = item.cartCount ?? 0;
          if (newCartCount !== item.stock) {
            newCartCount++;
          }
          updatedCart.push({ ...item, cartCount: newCartCount });
        } else {
          updatedCart.push(item);
        }
      });
      // localStorage.setItem("cart", JSON.stringify([...updatedCart]));
      return [...updatedCart];
    },

    removeProductFromCart: (state, action: PayloadAction<IProducts>) => {
      const productToRemove = action.payload;
      const newProducts: IProducts[] | undefined = state?.filter(
        (product) => product.id !== productToRemove.id
      );

      if (newProducts) {
        return [...newProducts];
      } else {
        return [];
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  reduceQuantityOfProduct,
  increaseQuantityOfProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
