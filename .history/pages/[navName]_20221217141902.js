export default function navName({category}) {
  console.log(category);
    return (
    <div>
        
    </div>
);
}

export async function getStaticProps({ params }) {
  const category = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${params.navId}/products`
  ).then((r) => r.json());
  return {
    props: category,
  };
}

export async function getStaticPaths() {
  const navItems = await fetch(
    "https://api.escuelajs.co/api/v1/categories"
  ).then((r) => r.json());
    

  return {
    paths: navItems.map((item) => {
      return {
        params: {
          navName: item.name.toLowerCase(),
          navId: item.id,
        },
      };
    }),
    fallback: false,
  };
}
