import React, { useContext, createContext, useState } from "react";

const CartModalContext = createContext();

const CartModal = ({ children }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <CartModalContext.Provider value={{ modalVisibility, setModalVisibility }}>
      {children}
    </CartModalContext.Provider>
  );
};

export default CartModal;

export const CartModalState = () => {
  return useContext(CartModalContext);
};
