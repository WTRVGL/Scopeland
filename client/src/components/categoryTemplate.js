import React from "react";
import styled from "styled-components";
import FilterByCategory from "./filter-categories/filterByCategory";
import Layout from "./layout";

const CategoryTemplate = () => {
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
