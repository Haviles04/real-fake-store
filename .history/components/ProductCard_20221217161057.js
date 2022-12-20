import Image from 'next/image';

function ProductCard({item}) {
    const imgSrc = item.images[0];
  
    return (
    <div key={item.id}>
        <p>{item.title}</p>
        <Image src={`${imgSrc}`} width={200} height={200} alt={item.title}  ></Image>
        <p>{item.price}</p>
    </div>
  )
}

export default ProductCard