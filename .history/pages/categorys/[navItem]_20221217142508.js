export default function Category({ category }) {
  console.log(category);
  return <div></div>;
}

export async function getStaticProps({ params }) {
  const categoryItems = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${params.navId}/products`
  ).then((r) => r.json());
  return {
    props: categoryItems,
  };
}

export async function getStaticPaths() {
  const navItems = await fetch(
    "https://api.escuelajs.co/api/v1/categories"
  ).then((r) => r.json());
  return {
    paths: navItems.map( item => {
      return {
        params: {
          navItem: item.name,
          navId: item.id,
        },
      };
    }), 
    fallback: false,
  };
}
