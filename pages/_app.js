import Layout from "../components/Layout";
import { server } from "../config";
import "../styles/globals.css";
import { CartContextProvider } from "../customCartHook/CartContextProvider";
import SearchContextProvider from "../customSearchHook/SearchContextProvider";
import FavoritesContextProvider from "../customFavoritesHook/FavoritesContextProvider";


export default function App({ Component, pageProps, cats, products }) {
  return (
    <FavoritesContextProvider>
      <CartContextProvider>
        <SearchContextProvider>
          <Layout cats={cats}>
            <Component {...pageProps} cats={cats} products={products} />
          </Layout>
        </SearchContextProvider>
      </CartContextProvider>
    </FavoritesContextProvider>
  );
}

App.getInitialProps = async () => {
  const res = await fetch(`https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/categories`).then((r) => r.json());
  const productsRes= await fetch(`https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/allproducts`).then((r) => r.json());
  return {
    cats: res,
    products: productsRes
  };
};
