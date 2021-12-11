import React from "react";
import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

const Cart = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

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
