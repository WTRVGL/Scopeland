import { motion } from "framer-motion";
import { graphql, Link, StaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const FilterByCategory = () => {
  const [showCategoryList, setShowCategoryList] = useState(false);

  const toggleCategoryList = () => {
    showCategoryList ? setShowCategoryList(false) : setShowCategoryList(true);
  };

  return (
    <StaticQuery
      query={query}
      render={({ allCatJson: { edges } }) => (
        <>
          <Container>
            <Row style={{ alignItems: "center", justifyContent: "center" }}>
              <Col lg={6}>
                <Filter>Sorteer</Filter>
              </Col>
              <Col>
                <Title onClick={toggleCategoryList}>Categorie</Title>
              </Col>
              <Col>
                <Title>Astronomie</Title>
              </Col>
              <Col>
                <Title>Astrofotografie</Title>
              </Col>
            </Row>
          </Container>
          {showCategoryList && (
            <FilterContainer>
              {edges.map(({ node: { category, image } }) => {
                const img = getImage(image);
                return (
                  <Link to={`/shop/${category.toLowerCase()}`}>
                    <ProductContainer>
                      <GatsbyImage image={img} />
                      {category}
                    </ProductContainer>
                  </Link>
                );
              })}
            </FilterContainer>
          )}
        </>
      )}
    />
  );
};

export default FilterByCategory;

const query = graphql`
  query MyQuery {
    allCatJson {
      edges {
        node {
          category
          image {
            childImageSharp {
              gatsbyImageData(height: 175, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  height: auto;
  margin-bottom: 25px;
`;

const Filter = styled.h1`
  font-size: 5em;
  font-family: "Aeonik Regular";
`;

const Title = styled.h4``;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
`;
