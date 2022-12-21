import Meta from "../../components/Meta";

export default function Product({ product }) {

const pageTitle = product.name;

  return (
    <div className={styles.main}>
    <Meta title={pageTitle} descript={pageTitle} />
    
      <h1>{pageTitle}</h1>
     
      
    </div>
    
  );
}

export async function getStaticPaths() {
  const allproducts = await fetch("https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/allproducts").then(
    (r) => r.json()
  );
  return {
    paths: allproducts.map((item) => {
      const productId = item.id.toString();
      return {
        params: {
          productId,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  
  const allproducts = await fetch("https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/allproducts").then(r=> r.json());

  const product = await allproducts.then(allproducts.filter(item => item.id === parseInt(params.productId)));

  return {
    props: {
      product,
    },
  };
}

