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
          <Price>€{price}</Price>
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
  flex: 1;
  margin: 10px;
  height: 50vh;

  @media screen and (max-width: 768px) {
    margin-bottom: 2em;
  }
`;

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  z-index: 1;

  &:hover {
    border: 1px solid black;
    transition: 0.3s ease-in-out;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  z-index: 50;
`;

const Title = styled.h1`
  font-weight: normal;
  font-size: 1.5em;
  z-index: 10;
`;

const Price = styled.h2`
  font-weight: normal;
  font-size: 1.5em;
  z-index: 10;
`;
