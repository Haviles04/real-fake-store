import { createContext, useContext, useReducer } from "react";

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

export default function FavoritesContextProvider({ children }) {
  const [favorites, dispatchFavorites] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "addToFavorites":
          return {
            items: [...state.items, action.payload],
          };
        case "removeFromFavorites": {
          return {
            items: [...state.items].filter(
              (item) => item.id !== action.payload.id
            ),
          };
        }
      }
    },
    { items: [] }
  );

  return (
    <FavoritesContext.Provider value={{ favorites, dispatchFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
