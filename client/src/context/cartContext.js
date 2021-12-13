import React, { useEffect } from "react";
import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

const Cart = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    () => {
      const storageItems = JSON.parse(localStorage.getItem("cart"));
      if (!storageItems) {
        return { cart: [] };
      }
      return { cart: storageItems };
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
