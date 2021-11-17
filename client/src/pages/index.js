import * as React from "react";
import styled from "styled-components";
import Layout from "../layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <$IndexPage>yo</$IndexPage>
      <div>yo</div>
    </Layout>
  );
};

export default IndexPage;

const $IndexPage = styled.main`
  height: 85vh;
  width: 100vw;
  max-width: 100%;
  background-color: peachpuff;
`;
