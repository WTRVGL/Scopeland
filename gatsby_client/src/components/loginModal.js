import React, { useState, useEffect } from "react";
import { Modal, Box, ClickAwayListener } from "@mui/material";
import { LoginModalState } from "../context/loginModalContext";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useAuth } from "../context/authContext";

const LoginModal = () => {
  const { setLoginModalVisibility } = LoginModalState();
  const { login, createUser, succesfulStatus, setSuccesfulStatus, user } =
    useAuth();
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modalPage, setModalPage] = useState(1);
  const [isWindow, setIsWindow] = useState(false);

  const renderPage = React.useCallback(() => {
    switch (modalPage) {
      case 1:
        return (
          <Box sx={style}>
            {isWindow && <p>Sorry, Backend niet beschikbaar online!</p>}
            <Form>
              <LoginTitle>
                <h1>Log in</h1>
                <h4 onClick={handleClose}>x</h4>
              </LoginTitle>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Typ email in"
                  value={userFormData.username}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      username: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={userFormData.password}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      password: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Button
                variant={succesfulStatus ? "primary" : "danger"}
                onClick={submitLogin}
                disabled={isLoading}
              >
                login
              </Button>
              <Button
                onClick={() => setModalPage(2)}
                style={{ marginLeft: "60px" }}
              >
                Registreer
              </Button>
              {!succesfulStatus && <p>login mislukt</p>}
            </Form>
          </Box>
        );

      case 2:
        return (
          <Box sx={style}>
            {isWindow && <p>Sorry, Backend niet beschikbaar online!</p>}
            <Form>
              <LoginTitle>
                <h1>Registreer</h1>
                <h4 onClick={handleClose}>x</h4>
              </LoginTitle>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Typ email in"
                  value={userFormData.username}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      username: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={userFormData.password}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      password: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>Voornaam</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Voornaam"
                  value={userFormData.firstName}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      firstName: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Achternaam</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Achternaam"
                  value={userFormData.lastName}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      lastName: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Button
                variant={succesfulStatus ? "primary" : "danger"}
                onClick={submitRegistration}
                disabled={isLoading}
              >
                registreer
              </Button>
              {!succesfulStatus && <p>login mislukt</p>}
            </Form>
          </Box>
        );

      default:
        return null;
    }
  }, [modalPage, userFormData]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "5px",
  };

  useEffect(() => {
    setSuccesfulStatus(true);
    if (typeof window === "undefined") {
      setIsWindow(false);
    }
  }, []);

  function handleClose() {
    setLoginModalVisibility(false);
  }

  function submitLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    login(userFormData.username, userFormData.password).then((data) => {
      console.log(data);
      user ? setLoginModalVisibility(false) : setLoginModalVisibility(true);
    });
    setIsLoading(false);
  }

  async function submitRegistration(e) {
    e.preventDefault();
    setIsLoading(true);
    createUser(
      userFormData.username,
      userFormData.password,
      userFormData.firstName,
      userFormData.lastName
    ).then((data) => {
      user ? setLoginModalVisibility(false) : setLoginModalVisibility(true);
    });
    setIsLoading(false);
  }

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ClickAwayListener onClickAway={handleClose}>
        {renderPage()}
      </ClickAwayListener>
    </Modal>
  );
};

export default LoginModal;

const LoginTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
