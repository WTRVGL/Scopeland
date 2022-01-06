import axios, { Axios } from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [formData, setFormData]= useState({username: "", password: ""}) 

  const {login} = useAuth();

  async function submit(e){
    e.preventDefault();
    login("admin", "admin");
  }

  async function checkAuth(e){
    e.preventDefault()

  }
  return (
    <Layout>
      <LoginContainer>
      <form onSubmit={submit}>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value={formData.username} />
  <label>
    Password:
    <input type="text" name="name" />
  </label>
  <input type="submit" value={formData.password} />
  <button>submit</button>
</form>

      <button onClick={checkAuth}>auth</button>
      </LoginContainer>
    </Layout>
  );
};

export default Login;

const LoginContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - 80px);
`;
