import * as React from "react";
import styled from "styled-components";
import Grid from "./Grid";

export default function Page({ children, columns, columnGap, rows }) {
  return (
    <PageContainer>
      <Grid rows={rows} columns={columns} columnGap={columnGap}>
        {children}
      </Grid>
    </PageContainer>
  );
}

const PageContainer = styled.section`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
`;
