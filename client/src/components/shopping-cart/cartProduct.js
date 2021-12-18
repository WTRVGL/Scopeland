import React from "react";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { CartState } from "../../context/cartContext";

const CartProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const {
    frontmatter: {
      featuredImage,
      price,
      productName,
      secondaryProduct,
      productType,
    },
    id,
  } = product;

  return (
    <ProductContainer whileHover={{ outline: "1px solid black" }}>
      <GatsbyImage image={getImage(featuredImage)} />
      <DescriptionContainer>
        <Title>{productName}</Title>
        <Title>{productType}</Title>
      </DescriptionContainer>
      <PriceContainer>
        <Title>€{price}</Title>
        <DeleteTitle
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: { product: product },
            });
          }}
        >
          x Verwijder
        </DeleteTitle>
      </PriceContainer>
    </ProductContainer>
  );
};

export default CartProduct;

const ProductContainer = styled(motion.div)`
  background-color: #f5f3eb;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr;
  grid-auto-columns: auto;
  max-width: 100%;
  margin-bottom: 25px;
  outline: 0px solid black;

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px 0px;
`;

const Title = styled.h6`
  font-size: 1.5em;

  @media screen and (max-width: 768px) {
    font-size: 2.3vw;
  }
`;

const DeleteTitle = styled(motion.h6)`
  font-size: 1.5em;

  @media screen and (max-width: 768px) {
    font-size: 2.3vw;
  }
`;
