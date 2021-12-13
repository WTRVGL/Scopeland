import React from "react";
import styled from "styled-components";
import PageContainer from "./pageContainer";
import { FaSpaceShuttle } from "react-icons/fa";
import { IoIosPlanet } from "react-icons/io";
import { GiExplodingPlanet, GiSpaceShuttle } from "react-icons/gi";

const AboutSection = ({ title }) => {
  return (
    <PageContainer>
      <AboutContainer>
        <Title>{title}</Title>
        <IconSection>
          <IconContainer>
            <FaSpaceShuttle size={100} />
            <IconTitle>Gratis verzending</IconTitle>
            <IconDescription>
              Elke toekomstige astronoom geniet van gratis verzending binnen de
              EU vanaf €50
            </IconDescription>
          </IconContainer>
          <IconContainer>
            <IoIosPlanet size={100} />
            <IconTitle>Pret gegarandeerd</IconTitle>
            <IconDescription>
              Altijd fun. Tenzij het regent natuurlijk.
            </IconDescription>
          </IconContainer>
          <IconContainer>
            <GiExplodingPlanet size={100} />
            <IconTitle>90 dagen retour</IconTitle>
            <IconDescription>
              Garantie om elk product 90 dagen lang uit te testen.
            </IconDescription>
          </IconContainer>
          <IconContainer>
            <GiSpaceShuttle size={100} />
            <IconTitle>Kwaliteit boven alles</IconTitle>
            <IconDescription>
              Wij selecteren enkel de beste exemplaren met de hand en bezorgen
              bij elke telescoop een sterrenrapport
            </IconDescription>
          </IconContainer>
        </IconSection>
      </AboutContainer>
    </PageContainer>
  );
};

export default AboutSection;

const AboutContainer = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Title = styled.h1`
  font-family: "Aeonik Light";
  font-size: calc(1em + 3.5vw);
  margin-bottom: 2em;
`;

const IconSection = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 25px;
  list-style: none;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
  }
`;

const IconContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const IconTitle = styled.h2`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  font-family: "Aeonik Regular";
`;

const IconDescription = styled.h5`
  text-align: center;
  font-family: "Aeonik Light";
`;
