import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const PageContainer = ({ children, fullPage, backgroundColor }) => {
  return (
    <StyledContainer fullPage={fullPage} backgroundColor={backgroundColor}>
      {children}
    </StyledContainer>
  );
};

export default PageContainer;

const StyledContainer = styled(Container)`
  /* padding: 0px 100px; */
  height: ${({ fullPage }) => fullPage && "100vh"};

  @media screen and (max-width: 992px) {
    padding: 0px 25px;
  }
`;
