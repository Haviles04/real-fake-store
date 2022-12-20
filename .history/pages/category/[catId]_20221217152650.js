export default function Category({ categoryItems }) {


  return (<div>
    {categoryItems.map(item => {
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    })}
  </div>);
}


export async function getStaticPaths() {
  const cats = await fetch("https://api.escuelajs.co/api/v1/categories").then(
    (r) => r.json()
  );
  return {
    paths: cats.map((item) => {
      const catId = item.id.toString();
      return {
        params: {
          catId
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  const categoryItems = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${params.catId}/products`
  ).then((r) => r.json());

  return {
    props: {
      categoryItems,
    },
  };
}
