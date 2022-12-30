import { useReducer, createContext, useContext } from "react";
const CartContext = createContext();
export function useCart() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }) {
  const updateTotalItems = (state) => {
    let total = 0;
    [...state.items].forEach((item) => {
      total += parseInt(item.qty);
    });
    return total;
  };

  const [cart, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "addToCart":
          const existingItem = state.items.find(
            (cartItem) => cartItem.id === action.payload.id
          );
          if (existingItem) {
            existingItem.qty++;
            return {
              items: [...state.items],
              totalItems: updateTotalItems(state),
            };
          }
          return {
            items: [...state.items, action.payload],
            totalItems: (state.totalItems += 1),
          };
        case "updateQty":
          const currentItem = state.items.find(
            (cartItem) => cartItem.id === action.payload.id
          );
          if (currentItem) {
            currentItem.qty = action.payload.qty;
          }
          return {
            items: [...state.items],
            totalItems: updateTotalItems(state),
          };
        case "removeFromCart":
          return {
            items: [...state.items].filter(
              (item) => item.id !== action.payload.id
            ),
            totalItems: (state.totalItems -= action.payload.qty),
          };

        default:
          return state;
      }
    },
    { items: [], totalItems: 0 }
  );

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
