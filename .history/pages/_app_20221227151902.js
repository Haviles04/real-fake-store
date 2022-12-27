import Layout from "../components/Layout";
import { server } from "../config";
import "../styles/globals.css";
import { CartContextProvider } from "../customCartHook/CartContextProvider";

export default function App({ Component, pageProps, cats }) {
  return (
    <CartContextProvider>
      <Layout cats={cats}>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}

App.getInitialProps = async () => {
  const res = await fetch(`${server}/api/category`).then((r) => r.json());
  return {
    cats: res,
  };
};
