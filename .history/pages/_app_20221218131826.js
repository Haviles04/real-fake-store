import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps,cats}) {
  return(
    <Layout cats={cats} >
       <Component {...pageProps} />
     </Layout>
     )
}

app.getInitialProps = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories').then(r=>r.json());
  return {
    cats: res,
  }
}

