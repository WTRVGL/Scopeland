import React from "react";
import styled from "styled-components";
import { CartModalState } from "../context/cartModalContext";
import { CartState } from "../context/cartContext";

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
    <ModalContainer>
      <Cover onClick={closeModal}></Cover>
      <CartInfo>
        <button onClick={closeModal}>yo</button>
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

const ModalContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
`;

const Cover = styled.div`
  background-color: #943434;
  opacity: 0.8;
`;

const CartInfo = styled.div`
  background: white;
`;
