import * as React from "react";
import NavBar from "../src/components/navbar/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
};

export default Layout;
