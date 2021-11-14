import * as React from "react";
import styled from "styled-components";

export default function GridColumn({
  children,
  column,
  columnSpan,
  row,
  rowSpan,
}) {
  return (
    <ColumnContainer
      column={column}
      columnSpan={columnSpan}
      row={row}
      rowSpan={rowSpan}
    >
      {children}
    </ColumnContainer>
  );
}

const ColumnContainer = styled.div`
  grid-column: ${({ column, columnSpan }) => `${column} / span  ${columnSpan}`};
  grid-row: ${({ row, rowSpan }) => `${row} / span  ${rowSpan}`};
`;
