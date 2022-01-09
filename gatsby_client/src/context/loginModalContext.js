import React, { useContext, createContext, useState } from "react";

const LoginModalContext = createContext();

const LoginModalProvider = ({ children }) => {
  const [loginModalVisibility, setLoginModalVisibility] = useState(false);

  return (
    <LoginModalContext.Provider
      value={{ loginModalVisibility, setLoginModalVisibility }}
    >
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalProvider;

export const LoginModalState = () => {
  return useContext(LoginModalContext);
};

export const useLoginModalContext = () => {
  useContext(LoginModalContext);
};
