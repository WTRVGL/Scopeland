import React from "react";
import RootLayout from "./src/components/rootLayout";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
