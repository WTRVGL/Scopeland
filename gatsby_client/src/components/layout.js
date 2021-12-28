import React from "react";
import Footer from "./footer";
import Header from "./header";
import ShoppingCartModal from "./shopping-cart/shoppingCartModal";
import { CartModalState } from "../context/cartModalContext";

const Layout = ({ children }) => {
  const { modalVisibility, setmodalVisibility } = CartModalState();
  return (
    <>
      {modalVisibility && <ShoppingCartModal />}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
