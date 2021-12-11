import React from "react";
import RootLayout from "./src/components/rootLayout";
import "./src/global.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
