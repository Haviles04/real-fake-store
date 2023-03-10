import React from "react";
import Link from "next/link";
import { useFavorites } from '@/hooks/favoritesHook/FavoritesContextProvider'
import FavoriteItem from '@/components/favorites/FavoriteItem'
import styles from '@/styles/favorites.module.css'

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className={styles.container}>
        {favorites.items.length ? (
          <>
            <h1>Favorites ({favorites.items.length})</h1>
              {favorites.items.map((item) => (
                <FavoriteItem key={item.id} item={item} />
              ))}
          </>
        ) : (
          <>
            <h1>Your have {favorites.items.length} favorites!</h1>
            <Link href={"/products"} >
              <button>Click here to shop!</button>
            </Link>
          </>
        )}
      </div>
  );
}
