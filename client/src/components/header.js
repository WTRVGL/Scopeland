import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GrCart } from "react-icons/gr";
import { CartState } from "../context/cartContext";

const Header = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <HeaderContainer>
      <LinkNav>
        <LinkItem to="/shop">Shop</LinkItem>
        <LinkItem to="/login">Account</LinkItem>
      </LinkNav>
      <Logo to="/">Scopeland</Logo>
      <NavIcons>
        <GrCart />
        {cart.length}
      </NavIcons>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 80px;
  //position: sticky;
  top: 0;
  z-index: 100;
  padding-left: 50px;
  padding-right: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const LinkNav = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LinkItem = styled(Link)`
  margin-right: 10px;
`;

const Logo = styled(Link)`
  font-family: Aeonik Bold;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    grid-column: 2;
  }
`;

const NavIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
