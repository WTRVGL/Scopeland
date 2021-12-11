import React from "react";
import { ThemeProvider } from "styled-components";
import CartContext from "../context/cartContext";

const lightTheme = {
  colors: {
    backgroundColor: "#f5f3eb",
    secondaryBackgroundColor: "#943434",
    primaryColor: "#0b4d3c",
  },
};

const RootLayout = ({ children }) => {
  return (
    <CartContext>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </CartContext>
  );
};

export default RootLayout;
