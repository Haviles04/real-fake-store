import Image from 'next/image';

function ProductCard({item}) {
  return (
    <div key={item.id}>
        <p>{item.title}</p>
        <Image src={item.images[0]} width={100} height={100} alt={item.title}  ></Image>
        <p>{item.price}</p>
    </div>
  )
}

export default ProductCard