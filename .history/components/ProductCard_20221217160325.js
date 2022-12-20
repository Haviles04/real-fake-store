import Image from 'next/image';

function ProductCard({item}) {
  return (
    <div key={item.id}>
        <p>{item.title}</p>
        <Image alt={item.title} src={item.image} ></Image>
        <p>{item.price}</p>
    </div>
  )
}

export default ProductCard