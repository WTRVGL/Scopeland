import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GoTelescope } from "react-icons/go";
import { CartState } from "../context/cartContext";
import { CartModalState } from "../context/cartModalContext";
import { motion } from "framer-motion";

const Header = () => {
  const {
    state: { cart },
  } = CartState();

  const { modalVisibility, setModalVisibility } = CartModalState();

  console.log(modalVisibility);
  const openModal = () => {
    setModalVisibility(true);
  };
  return (
    <HeaderContainer>
      <LinkNav>
        <LinkItem to="/shop">Shop</LinkItem>
        <LinkItem to="/login">Account</LinkItem>
      </LinkNav>
      <Logo to="/">Scopeland</Logo>
      <NavIcons>
        <GoTelescope size={25} onClick={openModal} />
        {cart.length}
      </NavIcons>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.nav`
  display: grid;
  color: ${({ theme }) => theme.colors.primaryColor};
  grid-template-columns: repeat(3, 1fr);
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 10;
  padding-left: 50px;
  padding-right: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  @media screen and (max-width: 768px) {
    padding: 0;
  }
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

const NavIcons = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
