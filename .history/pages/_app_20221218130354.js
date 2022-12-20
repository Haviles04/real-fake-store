import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps, categories }) {
  return(
    <Layout >
       <Component {...pageProps} />
     </Layout>
     )
}

