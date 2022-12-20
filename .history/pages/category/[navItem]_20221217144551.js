export default function Category({ categoryItems, params }) {
console.log(categoryItems);

  return <div>

  </div>;
}

export async function getStaticProps({ params }) {
  const id = params.id
  
  const categoryItems = await fetch(
    `https://api.escuelajs.co/api/v1/categories/v${id}/products`
  ).then((r) => r.json());
  
  return {
    props:{ 
      categoryItems, 
    }
  };
}

export async function getStaticPaths() {
  
  const cats = await fetch(
    "https://api.escuelajs.co/api/v1/categories"
  ).then((r) => r.json());

  return {
    paths: cats.map( item => {
      const navItem = item.name.toLowerCase();
      return {
        params: {
          navItem,
          id: item.id,
        },
      };
    }), 
    fallback: false,
  };
}
