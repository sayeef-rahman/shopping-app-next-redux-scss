"use client";
import "@/styles/main.css";
import "@/styles/globals.scss";
import "@/styles/product-list.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/redux/slices/cartSlice";
import userSlice from "@/redux/slices/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
