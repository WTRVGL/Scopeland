import { graphql } from "gatsby";
import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import FilterByCategory from "../components/filter-categories/filterByCategory";
import Layout from "../components/layout";

const Shop = ({data: {allMdx: {edges}}}) => {
  console.log(edges);
  return (
    <Layout>
      <Container style={{padding: "0px 100px"}}>
        <Row>
          <FilterByCategory />
        </Row>
      </Container>
    </Layout>
  );
};

export default Shop;

const ShopContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - 80px);
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
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}

`