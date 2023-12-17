"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProducts {
  id: number | null;
  name: string | null;
  image: string | null;
}

interface IState {
  cart: IProducts[];
}

const initialState: IProducts[] = [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProducts>) => {
      const productToAdd = action.payload;

      const isProductInCart = state.some(
        (product) => product.id === productToAdd.id
      );

      if (!isProductInCart) {
        state.push(productToAdd);
      }
    },

    removeProductFromCart: (state) => {
      console.log(state);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
