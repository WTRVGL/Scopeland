import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

export const Hero = (props) => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroTitle>{props.title}</HeroTitle>
        <HeroSubtitle>{props.subtitle}</HeroSubtitle>
        <StyledButton to="/shop">Shop nu</StyledButton>
      </HeroTextContainer>
      <HeroImageContainer>
        <StaticImage
          src="../images/1.jpg"
          style={{
            gridColumn: "2 / span 5",
            gridRow: "2 / span 6",
            borderRadius: "10px",
            flex: 1,
          }}
          alt=""
          placeholder="blurred"
        />
        <StaticImage
          src="../images/2.jpg"
          style={{
            gridColumn: "8 / span 5",
            gridRow: "5 / span 5",
            borderRadius: "10px",
          }}
          alt=""
          placeholder="blurred"
        />
        <StaticImage
          src="../images/3.jpg"
          style={{
            gridColumn: "3 / span 4",
            gridRow: "9 / span 3",
            borderRadius: "10px",
            flex: 1,
          }}
          alt=""
          placeholder="blurred"
        />
      </HeroImageContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.main`
  display: flex;
  position: relative;
  height: calc(100vh - 80px);
  padding: 0px 200px;
  width: 100vw;
  max-width: 100%;

  @media screen and (max-width: 1200px) {
    padding: 0px 70px;
  }

  @media screen and (max-width: 992px) {
    padding: 0px 50px;
    flex-direction: column;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;

  @media screen and (max-width: 992px) {
    width: 100%;
    height: 50%;
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: calc(1em + 3.5vw);
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.primaryColor};

  @media screen and (max-width: 992px) {
    text-align: center;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: calc(0.5em + 1vw);
  margin-bottom: 25px;

  @media screen and (max-width: 992px) {
    text-align: center;
  }
`;

const HeroImageContainer = styled.div`
  width: 50%;
  max-height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  @media screen and (max-width: 992px) {
    display: flex;
    flex: 1;
    width: 100%;
    height: 50%;
    margin-bottom: 15px;
  }
`;

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #e68845;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: 0;
  font-weight: bolder;
  color: white;
`;
