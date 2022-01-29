import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [succesfulStatus, setSuccesfulStatus] = useState(true);

  function getUser() {
    axios
      .get("http://wouter.land:5000/api/auth", { withCredentials: true })
      .then((response) => {
        const user = response.data;
        if (!user) {
          setUser(null);
        } else setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function login(username, password) {
    axios
      .post(
        "http://wouter.land:5000/api/login",
        { username, password },
        { withCredentials: true }
      )
      .then((response) => {
        setUser(response.data);
        setSuccesfulStatus(true);
      })
      .catch((error) => {
        setUser(null);
        setSuccesfulStatus(false);
      });
  }

  async function createUser(username, password, firstName, lastName) {
    axios
      .post(
        "http://wouter.land:5000/api/user",
        { username, password, firstName, lastName },
        { withCredentials: true }
      )
      .then((response) => {
        setUser(response.data);
        setSuccesfulStatus(true);
      })
      .catch((error) => {
        setUser(null);
        setSuccesfulStatus(false);
      })
      .then(() => {
        login(username, password)
      });
  }

  async function logout() {
    axios
      .get("http://wouter.land:5000/api/logout", { withCredentials: true })
      .then((response) => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        getUser,
        createUser,
        setSuccesfulStatus,
        succesfulStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
