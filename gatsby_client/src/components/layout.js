import React from "react";
import Footer from "./footer";
import Header from "./header";
import ShoppingCartModal from "./shopping-cart/shoppingCartModal";
import { CartModalState } from "../context/cartModalContext";
import LoginModal from "./loginModal";
import { LoginModalState } from "../context/loginModalContext";

const Layout = ({ children }) => {
  const { modalVisibility } = CartModalState();
  const { loginModalVisibility } = LoginModalState();
  return (
    <div style={{ overflowX: "hidden" }}>
      {modalVisibility && <ShoppingCartModal />}
      {loginModalVisibility && <LoginModal />}
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
