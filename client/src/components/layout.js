import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import ShoppingCartModal from "./shoppingCartModal";
import { CartModalState } from "../context/cartModalContext";
import styled from "styled-components";
import { motion } from "framer-motion";

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
