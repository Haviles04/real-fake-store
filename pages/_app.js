import Layout from "../components/Layout";
import "../styles/globals.css";
import { CartContextProvider } from "../customCartHook/CartContextProvider";
import SearchContextProvider from "../customSearchHook/SearchContextProvider";
import FavoritesContextProvider from "../customFavoritesHook/FavoritesContextProvider";


export default function App({ Component, pageProps, cats}) {
  return (
    <FavoritesContextProvider>
      <CartContextProvider>
        <SearchContextProvider>
          <Layout cats={cats}>
            <Component {...pageProps} cats={cats} />
          </Layout>
        </SearchContextProvider>
      </CartContextProvider>
    </FavoritesContextProvider>
  );
}

App.getInitialProps = async () => {
  const {cats} = await import(`../data/category/categoryData.json`)
  return {
    cats,
  };
};
