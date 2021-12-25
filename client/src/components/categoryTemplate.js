import { graphql } from "gatsby";
import React from "react";
import { Container } from "react-bootstrap";
import FilterByCategory from "./filter-categories/filterByCategory";
import ProductGrid from "./products/productGrid";
import Layout from "./layout";

const CategoryTemplate = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <Container>
        <FilterByCategory />
        <ProductGrid products={edges} />
      </Container>
    </Layout>
  );
};

export default CategoryTemplate;

export const query = graphql`
  query productsByCategory($category: String) {
    allMdx(filter: { frontmatter: { productCategory: { eq: $category } } }) {
      edges {
        node {
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
`;
