import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import FilterByCategory from "./filter-categories/filterByCategory";
import Layout from "./layout";

const CategoryTemplate = ({data: {allMdx: {edges}}}) => {
  console.log(edges);
  return (
    <Layout>
      <CategoryPageWrapper>
        <FilterByCategory />
      </CategoryPageWrapper>
    </Layout>
  );
};

export default CategoryTemplate;

const CategoryPageWrapper = styled.section`
  margin: 15px 0px;
  padding: 0px 50px;
`;

export const query = graphql`
query productsByCategory($category: String) {
  allMdx(filter: {frontmatter: {productCategory: {eq: $category}}}) {
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




`