import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/productCard.module.css";
import { GrCart } from "react-icons/gr";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { useCart } from "@/hooks/cartHook/CartContextProvider";
import { useFavorites } from "@/hooks/favoritesHook/FavoritesContextProvider";
import { useNotification } from "@/hooks/notificationsHook/NotificationContextProvider";

function ProductCard({ item }) {
  const [hoverPic, setHoverPic] = useState(item.images[0]);
  const { favorites, dispatchFavorites } = useFavorites();
  const { setShowNotification, setNotificationItem } = useNotification();
  const [isFavorited, setIsFavorited] = useState(false);
  const { dispatch } = useCart();
  const productLink = `/${item.category.name.toLowerCase()}/${
    item.id
  }=${item.title.toLowerCase().replace(/\s/g, "")}`;

  useEffect(() => {
    favorites.items.find((favItem) => item.id === favItem.id)
      ? setIsFavorited(true)
      : setIsFavorited(false);
  }, [favorites.items, item.id]);

  const handleMouseOver = () => {
    item.images[1] ? setHoverPic(item.images[1]) : null;
  };

  const handleMouseOut = () => {
    item.images[0] ? setHoverPic(item.images[0]) : null;
  };

  const handleHeartCLick = (e) => {
    e.preventDefault();
    const alreadyFavorite = favorites.items.find(
      (favItem) => item.id === favItem.id
    );
    if (alreadyFavorite) {
      dispatchFavorites({
        type: "removeFromFavorites",
        payload: { ...item, qty: 1 },
      });
      return;
    }
    dispatchFavorites({
      type: "addToFavorites",
      payload: { ...item, qty: 1 },
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setNotificationItem(item);
    dispatch({
      type: "addToCart",
      payload: { ...item, qty: 1 },
    });
  };

  return (
    <div className={styles.productCard} key={item.id}>
      <Link href={productLink} passHref>
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
      <div className={styles.cartAndHeart}>
        <button onClick={(e) => handleClick(e)}>
          <GrCart /> Add to cart
        </button>
        <button
          className={styles.heartBtn}
          onClick={(e) => handleHeartCLick(e)}
        >
          {isFavorited ? (
            <BsHeartFill color={"red"} size={18} />
          ) : (
            <BsHeart color={"red"} size={18} />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
