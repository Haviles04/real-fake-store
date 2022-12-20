export default function Category({ categoryItems }) {
 

  const test = async () => {
    const cats = await fetch(
      "https://api.escuelajs.co/api/v1/categories"
    ).then((r) => r.json());
    console.log(cats);
  
  }

test();


  return <div>

  </div>;
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id)
  
  const categoryItems = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  ).then((r) => r.json());
  
  return {
    props:{ categoryItems }
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
