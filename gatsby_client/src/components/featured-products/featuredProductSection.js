import React from "react";
import styled from "styled-components";
import { FeaturedProduct } from "../featured-products/featuredProduct";
import PageContainer from "../pageContainer";

export const FeaturedProductSection = ({ products, title }) => {
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

const FeaturedContainer = styled(PageContainer)`
  margin-bottom: 25px;
`;

const FeaturedTitle = styled.h1`
  text-align: left;
  margin-bottom: 0.5em;
  font-family: "Aeonik";
  font-size: calc(1em + 3.5vw);
`;

const FeaturedProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  column-gap: 25px;
  margin-bottom: 7.5em;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
  }
`;
