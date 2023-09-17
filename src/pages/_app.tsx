import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./../../redux/app/store";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={true} />
    </Provider>
  );
}
