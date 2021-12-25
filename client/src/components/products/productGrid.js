import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const ProductGrid = ({ products }) => {
  return (
    <Grid>
      {products.map(
        ({
          node: {
            slug,
            id,
            frontmatter: { featuredImage, productName, price },
          },
        }) => {
          console.log(featuredImage.childrenImageSharp[0].gatsbyImageData);
          return (
            <Card key={id}>
              <GatsbyImage
                image={featuredImage.childrenImageSharp[0].gatsbyImageData}
              />
              {productName}
            </Card>
          );
        }
      )}
    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  display: grid;
  column-gap: 15px;
  row-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.div`
  background-color: yellow;
  width: 430px;
  height: 370px;
`;
