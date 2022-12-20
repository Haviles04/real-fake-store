import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps, cats, carouselProducts}) {
  return(
    <Layout cats={cats} >
       <Component {...pageProps} carouselProducts={carouselProducts} />
     </Layout>
     )
}

App.getInitialProps = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories').then(r=>r.json());
  const carouselProducts = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=15').then(r=>r.json());
  return {
    cats: res,
    carouselProducts,
  }
}

