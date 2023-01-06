/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/favorites.module.css";
import { GrCart } from "react-icons/gr";
import { useCart } from "../../customCartHook/CartContextProvider";
import { useFavorites } from "../../customFavoritesHook/FavoritesContextProvider";
import Link from "next/link";
const FavoriteItem = ({ item }) => {
  const { dispatch } = useCart();
  const { dispatchFavorites } = useFavorites();

  const handleAddToCartClick = () => {
    dispatch({
      type: "addToCart",
      payload: item
    });
    dispatchFavorites({ type: "removeFromFavorites", payload: item });
  };

  const handleRemoveFromFavoritesClick = () => {
    dispatchFavorites({ type: "removeFromFavorites", payload: item });
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemInfo}>
        <Link
          href={`/${item.category.toLowerCase()}/product/${item.id}=${item.title
            .toLowerCase()
            .replace(/\s/g, "")}`}
        >
          <h3>{item.title}</h3>
          <img
            className={styles.itemImg}
            src={item.images[1]}
            alt={item.title}
          />
        </Link>
        <h4>${item.price}</h4>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={() => handleAddToCartClick()}>
          <GrCart /> Add to Cart!
        </button>
        <button onClick={() => handleRemoveFromFavoritesClick()}>
          Remove From Favorites
        </button>
      </div>
    </div>
  );
};

export default FavoriteItem;
