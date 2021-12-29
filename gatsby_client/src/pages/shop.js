import { graphql } from "gatsby";
import React from "react";
import { Container } from "react-bootstrap";
import FilterByCategory from "../components/filter-categories/filterByCategory";
import Layout from "../components/layout";
import ProductGrid from "../components/products/productGrid";

const Shop = ({
  data: {
    allMdx: { edges },
  },
}) => {
  console.log(edges);
  return (
    <Layout>
      <Container>
        <FilterByCategory />
        <ProductGrid products={edges} />
      </Container>
    </Layout>
  );
};

export default Shop;

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
            secondaryProductType
            price
            featuredProduct
            featuredImage {
              childrenImageSharp {
                gatsbyImageData(
                  width: 1000
                  height: 800
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
        }
      }
    }
  }
`;
