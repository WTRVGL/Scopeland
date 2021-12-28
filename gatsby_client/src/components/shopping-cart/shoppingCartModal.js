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
  } = CartState();

  return (
    <ModalContainer initial={{ x: 150 }} animate={{ x: 0 }}>
      <Cover
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ type: "tween", duration: 0.4 }}
      ></Cover>
      <CartInfo>
        <Title>
          Winkelmand
          <CancelButton onClick={closeModal}>x</CancelButton>
        </Title>
        {cart.length === 0 ? (
          <EmptyProductContainer>Winkelkar leeg!</EmptyProductContainer>
        ) : (
          <ProductContainer>
            {cart.map((product) => {
              return <CartProduct product={product} key={product.id} />;
            })}
          </ProductContainer>
        )}

        {cart.length > 0 && (
          <SubTitle animate={{ opacity: 1 }}>
            Subtotaal: €
            {cart
              .map((item) => {
                return item.quantity * item.frontmatter.price;
              })
              .reduce((prev, curr) => prev + curr, 0)}
          </SubTitle>
        )}
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
  height: 100vh;

  @media screen and (max-width: 768px) {
  }
`;

const Cover = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: #943434;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  font-size: 10ch;
  font-family: "Aeonik Light";
  margin-bottom: 15px;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    font-size: 13vw;
  }
`;

const CartInfo = styled.div`
  background: white;
  padding: 0px 50px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  width: 100vw;

  @media screen and (max-width: 768px) {
    padding: 0px 15px;
  }
`;

const CancelButton = styled.h5`
  font-size: 0.4em;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const SubTitle = styled(motion.h4)`
  margin-bottom: auto;
  margin-top: 50px;
  padding-bottom: 15px;
  font-size: 2em;
  opacity: 0;
`;

const EmptyProductContainer = styled.div`
  font-size: 2em;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ProductContainer = styled.div`
  overflow-y: auto;
  padding: 5px;
`;
