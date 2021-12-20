import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const FilterByCategory = () => {
  const [showCategoryList, setShowCategoryList] = useState(false);

  return (
    <Container>
      <Row style={{ alignItems: "center" }}>
        <Col>
          <Filter>Sorteer</Filter>
        </Col>
        <Col>
          <CategoryTitle onClick={() => setShowCategoryList(true)}>
            Categorie
          </CategoryTitle>
        </Col>
      </Row>
      {showCategoryList && (
        <Row style={{ backgroundColor: "green", height: "150px" }}></Row>
      )}
    </Container>
  );
};

export default FilterByCategory;

const FilterContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Filter = styled.h1`
  font-size: 5em;
  font-family: "Aeonik Regular";
`;

const CategoryTitle = styled.h4``;
