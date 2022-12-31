import Layout from "../components/Layout";
import { server } from "../config";
import "../styles/globals.css";
import { CartContextProvider } from "../customCartHook/CartContextProvider";
import SearchContextProvider from "../customSearchHook/SearchContextProvider";

export default function App({ Component, pageProps, cats }) {
  return (
    <CartContextProvider>
      <SearchContextProvider>
        <Layout cats={cats}>
          <Component {...pageProps} />
        </Layout>
      </SearchContextProvider>
    </CartContextProvider>
  );
}

App.getInitialProps = async () => {
  const res = await fetch(`${server}/api/category`).then((r) => r.json());
  return {
    cats: res,
  };
};
