import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Shop = () => {
  return (
    <Layout>
      <ShopContainer>
        <h1>shop</h1>
      </ShopContainer>
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
