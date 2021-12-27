import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GoTelescope } from "react-icons/go";
import { CartState } from "../context/cartContext";
import { CartModalState } from "../context/cartModalContext";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

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
    
    <Container>
      <Row style={{justifyContent: "space-between"}}>
        <NavItem>
          <LinkItem to="/shop">Shop</LinkItem>
          <LinkItem to="/login">Account</LinkItem>
        </NavItem>
        <NavItem>
          <Logo to="/">Scopeland</Logo>
        </NavItem>
        <NavItem>
          <GoTelescope size={25} onClick={openModal} />
          {cart.length}
        </NavItem>
     </Row>
    </Container>
  );
};

export default Header;

const NavItem = styled(Col)`
  display: flex;
  align-items: center; 
  
  &:nth-child(2) {
        justify-content: center;
    }

  &:nth-child(3) {
        justify-content: flex-end;
    }
`
// const HeaderContainer = styled.nav`
//   display: grid;
//   color: ${({ theme }) => theme.colors.primaryColor};
//   grid-template-columns: repeat(3, 1fr);
//   height: 80px;
//   position: sticky;
//   top: 0;
//   z-index: 10;
//   padding-left: 50px;
//   padding-right: 50px;
//   background-color: white;

//   @media screen and (max-width: 768px) {
//     padding: 0;
//   }
// `;

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
  margin: 0px 25px;
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
