import React from "react";
import styled from "styled-components";
import { CartModalState } from "../context/cartModalContext";
import { CartState } from "../context/cartContext";
import { motion } from "framer-motion";

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
        <button onClick={closeModal}>x</button>
        {cart.map((product) => {
          const {
            id,
            frontmatter: { productName },
          } = product;
          return <h1>{productName}</h1>;
        })}
      </CartInfo>
    </ModalContainer>
  );
};

export default ShoppingCartModal;

const ModalContainer = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
`;

const Cover = styled(motion.div)`
  background-color: #943434;
`;

const CartInfo = styled.div`
  background: white;
`;
