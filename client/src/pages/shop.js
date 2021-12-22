import { graphql } from "gatsby";
import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import FilterByCategory from "../components/filter-categories/filterByCategory";
import Layout from "../components/layout";
import ProductGrid from "../components/products/productGrid";

const Shop = ({data: {allMdx: {edges}}}) => {
  const products = edges
  return (
    <Layout>
      <ShopContainer style={{}}>
        <Row>
          <FilterByCategory />        
        </Row>
          <ProductGrid products={products}/>
      </ShopContainer>
    </Layout>
  );
};

export default Shop;

const ShopContainer = styled.main`
  padding: 0px 125px;
  align-items: center;
  justify-content: center;
`;


export const query = graphql`
query allProducts {
  allMdx {
    edges {
      node {
        id
        slug
        frontmatter {
          productName
          productType
          productCategory
          price
          featuredProduct
          featuredImage {
            childrenImageSharp {
              gatsbyImageData(height: 500)
            }
          }
        }
      }
    }
  }
}

`