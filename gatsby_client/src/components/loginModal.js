import React, { useState, useEffect } from "react";
import { Modal, Typography, Box, ClickAwayListener } from "@mui/material";
import { LoginModalState } from "../context/loginModalContext";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useAuth } from "../context/authContext";

const LoginModal = () => {
  const { setLoginModalVisibility } = LoginModalState();
  const { login, succesfulStatus, setSuccesfulStatus, user } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
  }, []);

  function handleClose() {
    setLoginModalVisibility(false);
  }

  function submitLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    login(username, password).then((data) => {
      console.log(data);
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
        <Box sx={style}>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant={succesfulStatus ? "primary" : "danger"}
              onClick={submitLogin}
              disabled={isLoading}
            >
              login
            </Button>
            {!succesfulStatus && <p>login mislukt</p>}
          </Form>
        </Box>
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
