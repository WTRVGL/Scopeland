import React, { useState } from "react";
import { Modal, Typography, Box, ClickAwayListener } from "@mui/material";
import { LoginModalState } from "../context/loginModalContext";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useAuth } from "../context/authContext";

const LoginModal = () => {
  const { loginModalVisibility, setLoginModalVisibility } = LoginModalState();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  function handleClose() {
    setLoginModalVisibility(false);
  }

  function submitLogin(e) {
    e.preventDefault();
    login("admin", "admin");
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
                value={formData.email}
                onChange={() => setFormData({email: formData.email})}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData()}
              />
            </Form.Group>
            <Button variant="primary" onClick={submitLogin}>
              Submit
            </Button>
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
