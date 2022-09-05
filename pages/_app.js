import Layout from "../components/layout/Layout";
import { FavoritesContextProvider } from "../store/favorites-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <FavoritesContextProvider>
        <Component {...pageProps} />
      </FavoritesContextProvider>
    </Layout>
  );
}

export default MyApp;
