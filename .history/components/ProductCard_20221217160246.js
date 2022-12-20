import Image from 'next/image';

function ProductCard({item}) {
  return (
    <div key={item.id}>
        <p>{item.title}</p>
        <Image ></Image>
        <p>{item.price}</p>
    </div>
  )
}

export default ProductCard