export default function navName() {
 
 
 
 
    return <div>[navName]</div>;
}

export async function getStaticProps( {params} ) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${params.navId}`).then(r=>r.json());
    return {
        props: 
        res
    }

}


export async function getStaticPaths() {
  const navItems = await fetch(
    "https://api.escuelajs.co/api/v1/categories"
  ).then((r) => r.json());
  return {
    paths: navItems.map((item) => {
      return {
        params: {
          navName: item.name,
          navId : item.id
        },
      };
    }),
    fallback: false
  };
}
