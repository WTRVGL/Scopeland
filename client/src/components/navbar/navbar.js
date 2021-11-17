import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavBar = ({ children }) => {
  return (
    <$NavBar>
      <$Logo>SCOPELAND</$Logo>
      <$Links>
        <$NavLink>Refractor</$NavLink>
        <$NavLink>Mount</$NavLink>
        <$NavLink>Camera's</$NavLink>
        <$NavLink>Blog</$NavLink>
      </$Links>
    </$NavBar>
  );
};

export default NavBar;

const $NavBar = styled.nav`
  width: 100%;
  height: 15vh;
  background-color: coral;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-column: 1 / span 10;
`;

const $Logo = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2em;
`;

const $Links = styled.ul`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

const $NavLink = styled(Link)`
  list-style-type: none;
  margin: 0px 17px 0px 17px;
`;
