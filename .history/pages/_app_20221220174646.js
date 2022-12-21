import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps, cats}) {
  return(
    <Layout cats={cats} >
       <Component {...pageProps} />
     </Layout>
     )
}

export const getStaticProps = async () => {
  const res = await fetch('https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/categories').then(r=>r.json());
  return {
    cats: res,
  }
}

