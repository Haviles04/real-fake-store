import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps, categories }) {
  return(
    <Layout categories={categories} >
       <Component {...pageProps} />
     </Layout>
     )
}

export async function getStaticProps() {
  const categories = await fetch(
    `https://api.escuelajs.co/api/v1/categories`
  ).then((r) => r.json());

  return {
    props: {
      categories,
    },
  };
}
