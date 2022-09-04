import "../styles/globals.css";
import '../styles/nprogress.css'
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
