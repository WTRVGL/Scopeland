import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Login = () => {
  return (
    <Layout>
      <LoginContainer>
        <h1>login</h1>
      </LoginContainer>
    </Layout>
  );
};

export default Login;

const LoginContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - 80px);
`;
