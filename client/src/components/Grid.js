import * as React from "react";
import styled from "styled-components";

export default function Grid({ columns, rows, children, style, columnGap }) {
  return (
    <GridContainer
      columns={columns}
      style={style}
      rows={rows}
      columnGap={columnGap}
    >
      {children}
    </GridContainer>
  );
}

const GridContainer = styled.section`
  display: grid;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  grid-column-gap: ${({ columnGap }) => columnGap};
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
`;
