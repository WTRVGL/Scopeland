import React, { useEffect } from "react";
import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

const Cart = ({ children }) => {
  const isBrowser = typeof window !== "undefined";
  const [state, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    () => {
      if (isBrowser) {
        const storageItems = JSON.parse(localStorage.getItem("cart"));
        if (!storageItems) {
          return { cart: [] };
        }
        return { cart: storageItems };
      }
      return { cart: [] };
    }
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cart;

export const CartState = () => {
  return useContext(CartContext);
};
