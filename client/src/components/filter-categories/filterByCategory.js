import { motion } from "framer-motion";
import { graphql, StaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const FilterByCategory = () => {
  const [showCategoryList, setShowCategoryList] = useState(false);

  const toggleCategoryList = () => {
    showCategoryList ? setShowCategoryList(false) : setShowCategoryList(true)
  }

  return (
    <StaticQuery
      query={graphql`
      query MyQuery {
        allCatJson {
          edges {
            node {
              category
              image {
                childImageSharp {
                  gatsbyImageData(width: 250 layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
      
      
      
      

      
      
      `}
      render={({ allCatJson: { edges } }) => (
        <>
        <Container>
      <Row style={{ alignItems: "center", justifyContent: "center" }}>
        <Col>
          <Filter>Sorteer</Filter>
        </Col>
        <Col>
          <CategoryTitle onClick={toggleCategoryList}>
            Categorie
          </CategoryTitle>
        </Col>
      </Row>

        


    </Container>
{ showCategoryList && <FilterContainer>

    {edges.map(({node: {category, image}}) => {
      const img = getImage(image);
      return(
        <ProductContainer>
          <GatsbyImage image={img}/>
          {category}
        </ProductContainer>
        )
      })}
  </FilterContainer>}
      </>
      )}
    />
    
  );
};

export default FilterByCategory;

const FilterContainer = styled(motion.div)`
display: flex;
justify-content: space-between;
height: auto;
`;

const Filter = styled.h1`
  font-size: 5em;
  font-family: "Aeonik Regular";
`;

const CategoryTitle = styled.h4``;

const ProductContainer = styled.div`
display: flex;
flex-direction: column;
`
