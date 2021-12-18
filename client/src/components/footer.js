import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, StaticQuery } from "gatsby";

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query fetchProductType {
          allMdx {
            edges {
              node {
                frontmatter {
                  productType
                }
              }
            }
          }
        }
      `}
      render={({ allMdx: { edges } }) => (
        <FooterContainer>
          {console.log(edges)}
          <Container>
            <Row style={{ minHeight: "250px", paddingTop: "50px" }}>
              <BrandContainer lg={6}>
                <FooterHeader>Scopeland</FooterHeader>
                <FooterDescription>
                  Astronomie binnen handbereik voor iedereen
                </FooterDescription>
              </BrandContainer>
              <NavContainer>
                <NavTitle>Shop all</NavTitle>
                {edges.map(
                  ({
                    node: {
                      frontmatter: { productType },
                    },
                  }) => (
                    <NavItem>{productType}</NavItem>
                  )
                )}
              </NavContainer>
              <NavContainer>
                <NavTitle>Links</NavTitle>
                <NavItem>Account</NavItem>
              </NavContainer>
            </Row>
          </Container>
        </FooterContainer>
      )}
    />
  );
};

export default Footer;

const FooterContainer = styled.section`
  width: 100vw;
  grid-template-rows: repeat(3, 1fr);
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
`;

const BrandContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: left-align;
  margin-bottom: 25px;
`;
const FooterHeader = styled.h1`
  color: white;
  font-family: "Aeonik Bold";
  font-size: 6vw;
`;

const FooterDescription = styled.h5`
  color: white;
  font-family: "Aeonik Light";
`;

const NavContainer = styled(Col)`
  display: flex;
  flex-direction: column;
`;
const NavTitle = styled.h2`
  color: white;
  font-size: 2em;
  font-family: "Aeonik Regular";
`;

const NavItem = styled.h6`
  color: white;
  font-family: "Aeonik Light";
`;
