import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import FilterByCategory from "../components/filter-categories/filterByCategory";
import Layout from "../components/layout";

const Shop = () => {
  return (
    <Layout>
      <Container>
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
