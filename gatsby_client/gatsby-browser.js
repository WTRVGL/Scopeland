import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./src/global.css";
import RootLayout from "./src/components/rootLayout";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
