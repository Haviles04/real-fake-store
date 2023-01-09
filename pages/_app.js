import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { CartContextProvider } from "@/hooks/cartHook/CartContextProvider";
import SearchContextProvider from "@/hooks/searchHook/SearchContextProvider";
import FavoritesContextProvider from "@/hooks/favoritesHook/FavoritesContextProvider";


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
  const {cats} = await import(`../data/data.json`)
  return {
    cats,
  };
};
