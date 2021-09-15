import Router from "next/router";
import NProgress from "nprogress";
import { ErrorProvider } from "../context/error";
import "../styles/globals.css";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ErrorProvider>
      <Component {...pageProps} />
    </ErrorProvider>
  );
}

export default MyApp;
