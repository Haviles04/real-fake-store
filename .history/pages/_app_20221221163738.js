import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps, cats}) {
  return(
    <Layout cats={cats} >
       <Component {...pageProps} />
     </Layout>
     )
}

App.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/category').then(r=>r.json());
  return {
    cats: res,
  }
}

