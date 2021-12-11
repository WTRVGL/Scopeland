import React from "react";
import styled from "styled-components";

const PageContainer = ({ children, fullPage, backgroundColor }) => {
  return (
    <Container fullPage={fullPage} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

export default PageContainer;

const Container = styled.section`
  padding: 0px 100px;
  height: ${({ fullPage }) => fullPage && "100vh"};

  @media screen and (max-width: 992px) {
    padding: 0px 25px;
  }
`;
