import React, { useEffect} from "react";
import { ThemeProvider } from "styled-components";
import CartContext from "../context/cartContext";
import CartModalContext from "../context/cartModalContext";
import AuthProvider from "../context/authContext";

const lightTheme = {
  colors: {
    backgroundColor: "#f5f3eb",
    secondaryBackgroundColor: "#943434",
    primaryColor: "#0b4d3c",
  },
};

const RootLayout = ({ children }) => {
  return (
    <AuthProvider>
        <CartModalContext>
          <CartContext>
            <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
          </CartContext>
        </CartModalContext>
    </AuthProvider>
  );
};

export default RootLayout;
