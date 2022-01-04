import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

//Provider voor layout te wrappen
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

//Hook voor toegang te krijgen tot auth object
export const useAuth = () => {
  return useContext(authContext);
};


//Hook voor auth object te verkrijgen
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
      console.log("login")
  };
  const register = (email, password) => {
    console.log("register")
  };

  const logout = () => {
    console.log("logout")
  };

  useEffect(() => {
    console.log(`huidige gebruiker: ${user}`)
    setUser({yo: "xd"});
    console.log(user)
  } ,[])

  return {
    user,
    login,
    register,
    logout
  };
}