import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>SCOPELAND</FooterHeader>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.section`
  width: 100vw;
  grid-template-rows: repeat(3, 1fr);
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
`;

const FooterHeader = styled.h1`
  color: white;
  font-size: 10vw;
`;
