import React from "react";
import styled from "styled-components";
import { FeaturedProduct } from "./featuredProduct";
import PageContainer from "./pageContainer";

export const FeaturedProductSection = ({ products, title }) => {
  console.log(products);
  return (
    <FeaturedContainer>
      <FeaturedTitle>{title}</FeaturedTitle>
      <FeaturedProductList>
        {products.map(
          (product) =>
            product.node.frontmatter.featuredProduct && (
              <FeaturedProduct product={product} key={product.node.id} />
            )
        )}
      </FeaturedProductList>
    </FeaturedContainer>
  );
};

const FeaturedContainer = styled(PageContainer)``;

const FeaturedTitle = styled.h1`
  text-align: left;
  margin-bottom: 0.5em;
  font-family: "Aeonik Light";
  font-size: calc(1em + 3.5vw);
`;

const FeaturedProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  width: 100vw;
  max-width: 100%;
  margin-bottom: 10em;
  z-index: 5;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
  }
`;
