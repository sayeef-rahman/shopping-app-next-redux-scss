"use client";
import NavBar from "@/components/NavBar";
import cartSlice from "@/redux/slices/cartSlice";
import userSlice from "@/redux/slices/userSlice";
import "@/styles/globals.scss";
import { configureStore } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isNavbar, setIsNavbar] = useState<boolean>(true);
  useEffect(() => {
    if (router.pathname === "/" || router.pathname === "/greeting") {
      setIsNavbar(false);
    } else {
      setIsNavbar(true);
    }
  }, [router.pathname]);

  return (
    <Provider store={store}>
      {isNavbar && <NavBar />}
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
