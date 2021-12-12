import React from "react";
import RootLayout from "./src/components/rootLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./src/global.css";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
