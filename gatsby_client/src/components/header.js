import React, { useState } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import styled from "styled-components";
import { navigate } from "@reach/router";
import { GoTelescope } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { CartState } from "../context/cartContext";
import { CartModalState } from "../context/cartModalContext";
import { Col, Container, Row } from "react-bootstrap";
import { LoginModalState } from "../context/loginModalContext";
import { isAuthenticated } from "../lib/checkCookie";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { logout } = useAuth();

  const {
    state: { cart },
  } = CartState();

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const { setModalVisibility } = CartModalState();
  const { setLoginModalVisibility } = LoginModalState();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 250 },
  };

  function openCartModal() {
    setModalVisibility(true);
  }

  function openLoginModal() {
    if (!isAuthenticated()) {
      setLoginModalVisibility(true);
      return;
    }
    navigate("/account/");
  }

  function handleLogout() {
    logout();
    setShowUserDropdown(false);
    navigate("/");
  }

  function handleDropdownModal() {
    if (!isAuthenticated()) {
      openLoginModal();
      return;
    }
    setShowUserDropdown((showUserDropdown) => !showUserDropdown);
  }

  return (
    <HeaderContainer>
      <Row style={{ justifyContent: "space-between" }}>
        <NavItem>
          <LinkItem to="/shop">Shop</LinkItem>
        </NavItem>
        <NavItem>
          <Logo to="/">Scopeland</Logo>
        </NavItem>
        <NavItem>
          <GoTelescope size={25} onClick={openCartModal} />
          {cart.length}
          <DropdownUser
            size={25}
            style={{ marginLeft: "20px" }}
            onClick={handleDropdownModal}
          ></DropdownUser>
        </NavItem>
      </Row>
      <DropdownList
        animate={showUserDropdown ? "open" : "closed"}
        variants={variants}
      >
        <DropdownItem onClick={openLoginModal}>Mijn account</DropdownItem>
        <DropdownItem onClick={handleLogout}>Log uit</DropdownItem>
      </DropdownList>
    </HeaderContainer>
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
`;

const HeaderContainer = styled(Container)`
  position: sticky;
  top: 0;
  z-index: 50;
  position: sticky;
  background-color: #f5f3eb;
`;

const LinkItem = styled(Link)`
  font-family: Aeonik Bold;
`;

const Logo = styled(Link)`
  font-family: Aeonik Bold;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DropdownUser = styled(AiOutlineUser)``;

const DropdownList = styled(motion.div)`
  position: absolute;
  right: 0;
  background: #f5f3eb;
  border: 1px solid black;
  border-radius: 5px;
  width: 150px;
  padding: 15px;
  opacity: 0;
`;

const DropdownItem = styled.div``;
