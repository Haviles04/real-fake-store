import Link from "next/link";
import Image from "next/image";

function CarouselCards({item}) {
    const [hoverPic, setHoverPic] = useState(item.images[0]);

    const handleMouseOver = () => {
      item.images[1] ? setHoverPic(item.images[1]) : null;
    };
  
    const handleMouseOut = () => {
      item.images[0] ? setHoverPic(item.images[0]) : null;
    };
    return (
      <div className={styles.productCard} key={item.id}>
        <Link href={`/products/${item.id}`}>
          <Image
            className={styles.productImage}
            onMouseOver={() => {
              handleMouseOver();
            }}
            onMouseOut={() => {
              handleMouseOut();
            }}
            src={`${hoverPic}`}
            width={200}
            height={200}
            alt={item.title}
          ></Image>
          <h4 className={styles.productTitle}>{item.title}</h4>
          </Link>
          <p className={styles.text}>${item.price}</p>
        <button>
          <GrCart /> Add to cart
        </button>
      </div>
    );
}

export default CarouselCards