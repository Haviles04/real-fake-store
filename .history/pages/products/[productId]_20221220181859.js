import Meta from "../../components/Meta";

export default function Products({ product }) {
  console.log(product);


  return (
    <div>
      <Meta title={product.name} descript={product.description} />
      <h1>{product.name}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await fetch(
    "https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/allproducts"
  ).then((r) => r.json());
  return {
    paths: products.map((item) => {
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
  const allproducts = await fetch(
    "https://63a22dfbba35b96522f1af07.mockapi.io/api/v1/allproducts"
  ).then((r) => r.json());

  const product = allproducts.filter(item => item.id === parseInt(params.productId));

  return {
    props: {
      product,
    },
  };
}
