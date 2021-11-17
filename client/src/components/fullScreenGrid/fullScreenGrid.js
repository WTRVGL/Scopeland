import * as React from "react";
import styled from "styled-components";
import Grid from "../grid/grid";

const FullScreenGrid = ({ children, columns, columnGap, rows }) => {
  return (
    <$GridPage>
      <Grid rows={rows} columns={columns} columnGap={columnGap}>
        {children}
      </Grid>
    </$GridPage>
  );
};

export default FullScreenGrid;

const $GridPage = styled.section`
  height: 85vh;
  width: 100vw;
  max-width: 100%;
`;
