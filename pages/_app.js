import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { CartContextProvider } from "@/hooks/cartHook/CartContextProvider";
import SearchContextProvider from "@/hooks/searchHook/SearchContextProvider";
import FavoritesContextProvider from "@/hooks/favoritesHook/FavoritesContextProvider";
import NotificationContextProvider from "@/hooks/notificationsHook/NotificationContextProvider";
import Notification from "@/components/Notification/Notification";

export default function App({ Component, pageProps, cats }) {
  return (
    <NotificationContextProvider>
      <FavoritesContextProvider>
        <CartContextProvider>
          <SearchContextProvider>
            <Layout cats={cats}>
              <Component {...pageProps} cats={cats} />
              <Notification />
            </Layout>
          </SearchContextProvider>
        </CartContextProvider>
      </FavoritesContextProvider>
    </NotificationContextProvider>
  );
}

App.getInitialProps = async () => {
  const { cats } = await import(`../data/data.json`);
  return {
    cats,
  };
};
