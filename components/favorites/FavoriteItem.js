/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/favorites.module.css";
import { GrCart } from "react-icons/gr";
import { useCart } from "../../customCartHook/CartContextProvider";
import { useFavorites } from "../../customFavoritesHook/FavoritesContextProvider";

const FavoriteItem = ({ item }) => {
  const { dispatch } = useCart();
  const { dispatchFavorites } = useFavorites();

  const handleAddToCartClick = () => {
    dispatch({type: 'addToCart', payload: {
        name: item.title,
        id: item.id,
        image: item.images[0],
        price: item.price,
        qty: 1,
      }})
    dispatchFavorites({type: 'removeFromFavorites', payload: item})
  }

  const handleRemoveFromFavoritesClick = () => {
    dispatchFavorites({type:'removeFromFavorites', payload: item})
  }

  return (
    <div className={styles.itemContainer}>
        <div className={styles.itemInfo}>
      <h3>{item.title}</h3>
      <img className={styles.itemImg} src={item.images[1]} alt={item.title} />
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
