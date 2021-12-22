import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

export const FeaturedProduct = ({ product }) => {
  const { frontmatter } = product.node;
  const featuredImage = getImage(frontmatter.featuredImage);
  const price = frontmatter.price;
  const name = frontmatter.productName;

  return (
    <>
      <ProductContainer to={`/products/${product.node.slug}`}>
        <Image image={featuredImage} alt="" />
        <DescriptionContainer>
          <Title>{name}</Title>
          <Title>€{price}</Title>
        </DescriptionContainer>
      </ProductContainer>
    </>
  );
};

const ProductContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 2em;
  }
`;

const Image = styled(GatsbyImage)`

  z-index: 1;

  &:hover {
    outline: 1px solid black;
    transition: 0.3s ease-in-out;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
`;

const Title = styled.h1`
  font-family: "Aeonik Regular";
  font-size: 1.2vw;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Price = styled.h2`
  font-weight: normal;
  font-size: 1.5em;
`;
