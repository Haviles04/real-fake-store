import Image from 'next/image';

function ProductCard({item}) {
    const imgSrc = item.images[0];
  
    return (
    <div key={item.id}>
        <p>{item.title}</p>
        <Image src={`${imgSrc}`} width={100} height={100} alt={item.title}  ></Image>
        <p>{item.price}</p>
    </div>
  )
}

export default ProductCard