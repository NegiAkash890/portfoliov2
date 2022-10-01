import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import NProgress from "nprogress";
import styles from '../styles/nprogress.module.css'

NProgress.configure({
	template: `
    <div class=${styles.progressContainer}>
      <div class=${styles.bar} role="bar">
      </div>
    </div>`,
});


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
