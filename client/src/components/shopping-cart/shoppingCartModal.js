import React from "react";
import styled from "styled-components";
import { CartModalState } from "../../context/cartModalContext";
import { CartState } from "../../context/cartContext";
import { motion } from "framer-motion";
import CartProduct from "./cartProduct";

const ShoppingCartModal = () => {
  const { setModalVisibility } = CartModalState();

  const closeModal = () => {
    setModalVisibility(false);
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);
  return (
    <ModalContainer initial={{ x: 100 }} animate={{ x: 0 }}>
      <Cover
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ type: "tween", duration: 0.4 }}
      ></Cover>
      <CartInfo>
        <Title>Winkelmand</Title>
        {cart.map((product) => {
          return <CartProduct product={product} />;
        })}
      </CartInfo>
    </ModalContainer>
  );
};

export default ShoppingCartModal;

const ModalContainer = styled(motion.section)`
  display: flex;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
`;

const Cover = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: #943434;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 5em;
  font-family: "Aeonik Light";
  margin-bottom: 15px;
`;
const CartInfo = styled.div`
  flex: 0 0 600px;
  align-items: stretch;
  background: white;
  padding: 0px 50px;
  padding-top: 25px;

  @media screen and (max-width: 768px) {
    flex: 0 0 calc(100vw);
  }
`;
