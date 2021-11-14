import * as React from "react";
import styled from "styled-components";

export default function Layout({ children }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

const LayoutContainer = styled.main``;
