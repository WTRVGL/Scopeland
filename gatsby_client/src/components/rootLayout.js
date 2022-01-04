import React from "react";
import { ThemeProvider } from "styled-components";
import CartContext from "../context/cartContext";
import CartModalContext from "../context/cartModalContext";
import { ProvideAuth } from "../lib/auth";

const lightTheme = {
  colors: {
    backgroundColor: "#f5f3eb",
    secondaryBackgroundColor: "#943434",
    primaryColor: "#0b4d3c",
  },
};

const RootLayout = ({ children }) => {
  return (
    <ProvideAuth>
    <CartModalContext>
      <CartContext>
        <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
      </CartContext>
    </CartModalContext>
    </ProvideAuth>
  );
};

export default RootLayout;
