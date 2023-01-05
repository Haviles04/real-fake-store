import Layout from "../components/Layout";
import "../styles/globals.css";
import { CartContextProvider } from "../customCartHook/CartContextProvider";
import SearchContextProvider from "../customSearchHook/SearchContextProvider";
import FavoritesContextProvider from "../customFavoritesHook/FavoritesContextProvider";


export default function App({ Component, pageProps, cats, products, suggested }) {
  return (
    <FavoritesContextProvider>
      <CartContextProvider>
        <SearchContextProvider>
          <Layout cats={cats}>
            <Component {...pageProps} cats={cats} products={products} suggested={suggested} />
          </Layout>
        </SearchContextProvider>
      </CartContextProvider>
    </FavoritesContextProvider>
  );
}

App.getInitialProps = async () => {
  const {cats} = await import(`../data/category/category.json`)
  const {products}= await import('../data/products/all.json')
  const {suggested} = await import ('../data/products/suggested.json')
  return {
    cats,
    products,
    suggested
  };
};
