import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  async function getUser() {
    axios
      .get("https://localhost:5001/api/auth", { withCredentials: true })
      .then((response) => {
        const user = response.data;
        if (user.gebruikerID == 0) {
          setUser({});
        } else setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login(username, password) {
    axios
      .post(
        "https://localhost:5001/api/login",
        { username, password },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log("start auth");
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
