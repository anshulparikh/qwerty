import React from "react";
import { AppProps } from "next/app";

import "@styles/app.global.scss";
import { useRouter } from "next/router";
import ThemeProvider from "src/context/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  return (
    <ThemeProvider>
      <Component {...pageProps} key={router.asPath} />
    </ThemeProvider>
  );
}

export default MyApp;
