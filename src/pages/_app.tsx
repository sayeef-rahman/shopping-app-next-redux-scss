"use client";
import "@/styles/main.scss";
import "@/styles/globals.scss";
import "@/styles/product-list.scss";
import "@/styles/navbar.scss";
import "@/styles/cart-product.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/redux/slices/cartSlice";
import userSlice from "@/redux/slices/userSlice";
import NavBar from "@/components/NavBar";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
