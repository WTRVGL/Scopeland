import React from "react";
import styled from "styled-components";
import PageContainer from "./pageContainer";
import { FaSpaceShuttle, GiSpaceShuttle } from "react-icons/fa";
import { IoPlanetSharp } from "react-icons/io";
import { GiExplodingPlanet } from "react-icons/gi";

const AboutSection = ({ title, description }) => {
  return (
    <PageContainer fullPage={true}>
      <AboutContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <IconSection>
          <IconContainer>
            <FaSpaceShuttle />
            <h3>yo</h3>
          </IconContainer>
          <IconContainer>
            <FaSpaceShuttle />
            <h3>yo</h3>
          </IconContainer>
          <IconContainer>
            <FaSpaceShuttle />
            <h3>yo</h3>
          </IconContainer>
          <IconContainer>
            <FaSpaceShuttle />
            <h3>yo</h3>
          </IconContainer>
        </IconSection>
      </AboutContainer>
    </PageContainer>
  );
};

export default AboutSection;

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 4vw;
`;

const Description = styled.h2`
  font-size: 2vw;
  margin-top: 2em;
  font-weight: normal;
`;

const IconSection = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
`;

const IconContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
